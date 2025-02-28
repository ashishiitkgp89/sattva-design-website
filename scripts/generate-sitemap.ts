import fs from 'fs';
import path from 'path';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import * as t from '@babel/types';

const DOMAIN = 'https://sattvadesignconsultancy.com';

interface SitemapURL {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
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
          routes.push(pathProp.value.value);
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
    return { changefreq: 'monthly', priority: 0.7 };
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
    // Read App.tsx
    const appTsxPath = path.resolve(__dirname, '../src/App.tsx');
    const appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');

    // Parse the file
    const ast = parse(appTsxContent, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });

    // Extract routes
    const routes = extractRoutesFromAST(ast);

    // Generate sitemap URLs
    const sitemapUrls: SitemapURL[] = routes.map((route) => {
      const { changefreq, priority } = getRouteConfig(route);
      return {
        loc: `${DOMAIN}${route}`,
        changefreq,
        priority,
      };
    });

    // Generate XML
    const xml = generateSitemapXML(sitemapUrls);

    // Write sitemap.xml
    const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);

    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap(); 