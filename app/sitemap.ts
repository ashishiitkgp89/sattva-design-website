import type { MetadataRoute } from 'next';
import { getBlogs, getProjects } from '@/utils/contentful';
import { newServiceAreas } from '@/data/serviceAreas';

const BASE_URL = 'https://sattvadesignconsultancy.com';

const SERVICE_AREA_SLUGS = [
  'daltonganj-medininagar',
  'lesliganj',
  'chainpur',
  'nawa-bazar',
  'chhatarpur',
  'hariharganj',
  'satbarwa',
  'garhwa',
  'ranka',
  'bhawnathpur',
  'latehar',
  'balumath',
  'herhanj',
  'hussainabad-japla',
  'haidernagar',
  'nagar-utari',
];

const SERVICE_SLUGS = [
  'custom-home-design-daltonganj-medininagar',
  'luxury-villas-farmhouses-daltonganj-medininagar',
  'sustainable-green-architecture-daltonganj-medininagar',
  'commercial-architecture-daltonganj-medininagar',
  'industrial-architecture-daltonganj-medininagar',
  'urban-planning-daltonganj-medininagar',
  'interior-design-daltonganj-medininagar',
  'construction-management-daltonganj-medininagar',
  'renovation-daltonganj-medininagar',
  'building-approvals-daltonganj-medininagar',
  'retail-stores-showrooms-daltonganj-medininagar',
  'hotels-hospitality-design-daltonganj-medininagar',
  'educational-institutions-daltonganj-medininagar',
  'healthcare-hospitals-daltonganj-medininagar',
  'landscape-architecture-daltonganj-medininagar',
  'public-spaces-infrastructure-daltonganj-medininagar',
  'designed-blueprints-daltonganj-medininagar',
  'project-estimation-daltonganj-medininagar',
  'commercial-interior-design-daltonganj-medininagar',
  'custom-furniture-decor-daltonganj-medininagar',
  'office-commercial-renovation-daltonganj-medininagar',
  'retail-showroom-remodeling-daltonganj-medininagar',
  '3d-visualization-rendering-daltonganj-medininagar',
  'facade-exterior-design-daltonganj-medininagar',
  'vastu-compliant-architecture-daltonganj-medininagar',
];

// Hand-built static project pages (also covered by dynamic /projects/[slug]).
const STATIC_PROJECT_SLUGS = [
  'modern-residence-chainpur',
  'luxury-residence-chhatarpur',
  'luxury-villa-daltonganj',
  'modern-residence-hariharganj',
];

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/service-areas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const areaPages: MetadataRoute.Sitemap = SERVICE_AREA_SLUGS.map((slug) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectSlugs = new Set<string>(STATIC_PROJECT_SLUGS);
  let blogSlugs: string[] = [];

  try {
    const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);
    projects.forEach((p) => p.slug && projectSlugs.add(p.slug));
    blogSlugs = blogs.map((b) => b.slug).filter(Boolean);
  } catch (err) {
    console.error('sitemap: failed to load Contentful entries', err);
  }

  const projectPages: MetadataRoute.Sitemap = Array.from(projectSlugs).map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // Data-driven Ranchi locality + Jharkhand city pages.
  const newAreaPages: MetadataRoute.Sitemap = newServiceAreas.map((area) => ({
    url: `${BASE_URL}/service-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: area.type === 'locality' ? 0.7 : 0.6,
  }));

  return [
    ...corePages,
    ...areaPages,
    ...servicePages,
    ...projectPages,
    ...blogPages,
    ...newAreaPages,
  ];
}
