import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import { createClient } from 'contentful';
import './load-env.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = 'https://sattvadesignconsultancy.com';

// Initialize Contentful client
const contentfulClient = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN || '',
});

interface SitemapURL {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Static routes that might be missed in AST parsing
const additionalStaticRoutes = [
  // Service Areas
  '/service-areas/lesliganj',
  '/service-areas/chainpur',
  '/service-areas/nawa-bazar',
  '/service-areas/chhatarpur',
  '/service-areas/hariharganj',
  '/service-areas/satbarwa',
  '/service-areas/garhwa',
  '/service-areas/ranka',
  '/service-areas/bhawnathpur',
  '/service-areas/latehar',
  '/service-areas/balumath',
  '/service-areas/herhanj',
  '/service-areas/hussainabad-japla',
  '/service-areas/haidernagar',
  '/service-areas/nagar-utari',
  
  // Projects
  '/projects/modern-residence-chainpur',
  '/projects/luxury-residence-chhatarpur',
  '/projects/luxury-villa-daltonganj',
  '/projects/modern-residence-hariharganj',
  
  // Services for Daltonganj
  '/services/custom-home-design-daltonganj-medininagar',
  '/services/luxury-villas-farmhouses-daltonganj-medininagar',
  '/services/sustainable-green-architecture-daltonganj-medininagar',
  '/services/commercial-architecture-daltonganj-medininagar',
  '/services/industrial-architecture-daltonganj-medininagar',
  '/services/urban-planning-daltonganj-medininagar',
  '/services/interior-design-daltonganj-medininagar',
  '/services/construction-management-daltonganj-medininagar',
  '/services/renovation-daltonganj-medininagar',
  '/services/building-approvals-daltonganj-medininagar',
  '/services/retail-stores-showrooms-daltonganj-medininagar',
  '/services/hotels-hospitality-design-daltonganj-medininagar',
  '/services/educational-institutions-daltonganj-medininagar',
  '/services/healthcare-hospitals-daltonganj-medininagar',
  '/services/landscape-architecture-daltonganj-medininagar',
  '/services/public-spaces-infrastructure-daltonganj-medininagar',
  '/services/designed-blueprints-daltonganj-medininagar',
  '/services/project-estimation-daltonganj-medininagar',
  '/services/commercial-interior-design-daltonganj-medininagar',
  '/services/custom-furniture-decor-daltonganj-medininagar',
  '/services/office-commercial-renovation-daltonganj-medininagar',
  '/services/retail-showroom-remodeling-daltonganj-medininagar',
  '/services/3d-visualization-rendering-daltonganj-medininagar',
  '/services/facade-exterior-design-daltonganj-medininagar',
  '/services/vastu-compliant-architecture-daltonganj-medininagar'
];

async function getContentfulEntries() {
  try {
    // Fetch blogs
    const blogs = await contentfulClient.getEntries({
      content_type: 'blogPost',
    });

    // Fetch projects
    const projects = await contentfulClient.getEntries({
      content_type: 'project',
    });

    // Fetch services
    const services = await contentfulClient.getEntries({
      content_type: 'service',
    });

    return {
      blogs: blogs.items.map(item => `/blog/${item.fields.slug}`),
      projects: projects.items.map(item => `/projects/${item.fields.slug}`),
      services: services.items.map(item => `/services/${item.fields.slug}`)
    };
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return { blogs: [], projects: [], services: [] };
  }
}

function extractRoutesFromAST(ast: any): string[] {
  const routes: string[] = [];

  traverse(ast, {
    JSXElement(path) {
      if (
        t.isJSXIdentifier(path.node.openingElement.name) &&
        path.node.openingElement.name.name === 'Route'
      ) {
        const pathProp = path.node.openingElement.attributes.find(
          (attr: any) => {
            if (!t.isJSXAttribute(attr)) return false;
            return t.isJSXIdentifier(attr.name) && attr.name.name === 'path';
          }
        );

        if (pathProp && t.isJSXAttribute(pathProp) && t.isStringLiteral(pathProp.value)) {
          const route = pathProp.value.value;
          if (route !== '*') { // Exclude catch-all routes
            routes.push(route);
          }
        }
      }
    },
  });

  return routes;
}

function getRouteConfig(route: string): { changefreq: SitemapURL['changefreq']; priority: number } {
  // Main pages
  if (route === '/') {
    return { changefreq: 'weekly', priority: 1.0 };
  }
  if (['/services', '/projects'].includes(route)) {
    return { changefreq: 'weekly', priority: 0.9 };
  }
  if (['/about', '/contact', '/blog'].includes(route)) {
    return { changefreq: 'monthly', priority: 0.8 };
  }

  // Service areas
  if (route.startsWith('/service-areas/')) {
    return { changefreq: 'weekly', priority: 0.8 };
  }

  // Service pages
  if (route.startsWith('/services/')) {
    return { changefreq: 'monthly', priority: 0.7 };
  }

  // Project pages
  if (route.startsWith('/projects/')) {
    return { changefreq: 'monthly', priority: 0.7 };
  }

  // Blog posts
  if (route.startsWith('/blog/')) {
    return { changefreq: 'weekly', priority: 0.7 };
  }

  // Default
  return { changefreq: 'monthly', priority: 0.5 };
}

function generateSitemapXML(urls: SitemapURL[]): string {
  const urlElements = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
}

async function generateSitemap() {
  try {
    // Read App.tsx for static routes
    const appTsxPath = resolve(__dirname, '../src/App.tsx');
    const appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

    // Parse the file
    const ast = parse(appTsxContent, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });

    // Extract static routes
    const staticRoutes = [
      ...extractRoutesFromAST(ast),
      ...additionalStaticRoutes
    ];

    // Remove duplicates
    const uniqueStaticRoutes = Array.from(new Set(staticRoutes));

    // Get dynamic routes from Contentful
    const contentfulRoutes = await getContentfulEntries();
    const allRoutes = [
      ...uniqueStaticRoutes,
      ...contentfulRoutes.blogs,
      ...contentfulRoutes.projects,
      ...contentfulRoutes.services
    ];

    // Generate sitemap URLs
    const sitemapUrls: SitemapURL[] = allRoutes.map((route) => {
      const { changefreq, priority } = getRouteConfig(route);
      return {
        loc: `${DOMAIN}${route}`,
        changefreq,
        priority,
      };
    });

    // Sort URLs for consistency
    sitemapUrls.sort((a, b) => a.loc.localeCompare(b.loc));

    // Generate XML
    const xml = generateSitemapXML(sitemapUrls);

    // Write sitemap.xml
    const sitemapPath = resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);

    console.log('Sitemap generated successfully!');
    console.log(`Total URLs in sitemap: ${sitemapUrls.length}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap(); 