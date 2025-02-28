import fs from 'fs';

const urls = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/about', changefreq: 'monthly', priority: 0.8 },
  { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
  { loc: '/projects', changefreq: 'weekly', priority: 0.9 },
  { loc: '/services', changefreq: 'weekly', priority: 0.9 },
  
  // Service Areas
  { loc: '/service-areas/daltonganj-medininagar', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/lesliganj', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/chainpur', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/nawa-bazar', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/chhatarpur', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/hariharganj', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/satbarwa', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/garhwa', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/ranka', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/bhawnathpur', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/latehar', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/balumath', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/herhanj', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/hussainabad-japla', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/haidernagar', changefreq: 'weekly', priority: 0.8 },
  { loc: '/service-areas/nagar-utari', changefreq: 'weekly', priority: 0.8 },

  // Projects
  { loc: '/projects/modern-residence-chainpur', changefreq: 'monthly', priority: 0.7 },
  { loc: '/projects/luxury-residence-chhatarpur', changefreq: 'monthly', priority: 0.7 },
  { loc: '/projects/luxury-villa-daltonganj', changefreq: 'monthly', priority: 0.7 },
  { loc: '/projects/modern-residence-hariharganj', changefreq: 'monthly', priority: 0.7 },

  // Services
  { loc: '/services/custom-home-design-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/luxury-villas-farmhouses-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/sustainable-green-architecture-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/commercial-architecture-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/industrial-architecture-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/urban-planning-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/interior-design-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/construction-management-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/renovation-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/building-approvals-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/retail-stores-showrooms-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/hotels-hospitality-design-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/educational-institutions-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/healthcare-hospitals-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/landscape-architecture-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/public-spaces-infrastructure-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/designed-blueprints-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/project-estimation-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/commercial-interior-design-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/custom-furniture-decor-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/office-commercial-renovation-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/retail-showroom-remodeling-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/3d-visualization-rendering-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/facade-exterior-design-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 },
  { loc: '/services/vastu-compliant-architecture-daltonganj-medininagar', changefreq: 'monthly', priority: 0.7 }
];

const generateSitemap = () => {
  const domain = 'https://sattvadesignconsultancy.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${domain}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to both public and dist directories
  fs.writeFileSync('public/sitemap.xml', sitemap);
  if (fs.existsSync('dist')) {
    fs.writeFileSync('dist/sitemap.xml', sitemap);
  }
};

generateSitemap(); 