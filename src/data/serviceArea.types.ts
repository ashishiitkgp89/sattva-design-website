// Shared types + constants for the data-driven service-area pages
// (Ranchi localities and other Jharkhand cities). The 16 hand-built Palamu
// pages under app/service-areas/<slug>/ are separate and take precedence.

export interface AreaFaq {
  q: string;
  a: string;
}

export interface ServiceAreaEntry {
  /** URL slug, e.g. "harmu-ranchi" or "jamshedpur" */
  slug: string;
  /** Display name, e.g. "Harmu" or "Jamshedpur" */
  name: string;
  type: 'locality' | 'city';
  /** Parent city for localities, e.g. "Ranchi" */
  parentCity?: string;
  region: string; // "Jharkhand"
  /** Which physical office anchors this page for schema + contact */
  office: 'ranchi' | 'medininagar';
  /** Unique opening paragraph (no boilerplate name-swaps). */
  intro: string;
  /** Unique second section paragraph about serving this area. */
  about: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string;
  /** Query used for the keyless Google Maps embed. */
  mapQuery: string;
  /** 3-5 genuinely area-specific FAQs (also emitted as FAQPage JSON-LD). */
  faqs: AreaFaq[];
}

// Structured office data for JSON-LD (kept here so pages can build
// schema.org PostalAddress without reshaping src/utils/offices.ts).
export interface OfficeSchema {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone: string;
  geo?: { latitude: string; longitude: string };
}

export const OFFICE_SCHEMA: Record<'ranchi' | 'medininagar', OfficeSchema> = {
  medininagar: {
    name: 'Sattva Design Consultancy - Medininagar',
    streetAddress:
      'Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd',
    addressLocality: 'Medininagar',
    addressRegion: 'Jharkhand',
    postalCode: '822101',
    telephone: '+917209567678',
    geo: { latitude: '24.0410025', longitude: '84.0672999' },
  },
  ranchi: {
    name: 'Sattva Design Consultancy - Ranchi',
    streetAddress:
      '3rd Floor, Sunita Complex, Shivdayal Nagar, Argora, Bypass Rd, opposite V Mart, Harmu Housing Colony, Harmu',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    postalCode: '834002',
    telephone: '+918147523253',
    geo: { latitude: '23.3569', longitude: '85.2998' },
  },
};

// Service taxonomy shown on every area page. `slug` (when present) links to the
// matching service detail page; items without a dedicated page render as text.
export interface ServiceItem {
  name: string;
  slug?: string;
}

export const CORE_SERVICE_CATEGORIES: { title: string; items: ServiceItem[] }[] = [
  {
    title: 'Residential Architecture',
    items: [
      { name: 'Custom Home Design', slug: 'custom-home-design-daltonganj-medininagar' },
      { name: 'Luxury Villas & Farmhouses', slug: 'luxury-villas-farmhouses-daltonganj-medininagar' },
      { name: 'Sustainable & Green Architecture', slug: 'sustainable-green-architecture-daltonganj-medininagar' },
    ],
  },
  {
    title: 'Commercial Architecture',
    items: [
      { name: 'Commercial Buildings', slug: 'commercial-architecture-daltonganj-medininagar' },
      { name: 'Retail Stores & Showrooms', slug: 'retail-stores-showrooms-daltonganj-medininagar' },
      { name: 'Hotels & Hospitality Design', slug: 'hotels-hospitality-design-daltonganj-medininagar' },
    ],
  },
  {
    title: 'Interior Design',
    items: [
      { name: 'Residential Interiors', slug: 'interior-design-daltonganj-medininagar' },
      { name: 'Commercial Interior Design', slug: 'commercial-interior-design-daltonganj-medininagar' },
      { name: 'Custom Furniture & Décor', slug: 'custom-furniture-decor-daltonganj-medininagar' },
    ],
  },
  {
    title: 'Naksha Pass & Approvals',
    items: [
      { name: 'Building Approvals', slug: 'building-approvals-daltonganj-medininagar' },
      { name: 'Designed Blueprints', slug: 'designed-blueprints-daltonganj-medininagar' },
      { name: 'Project Estimation', slug: 'project-estimation-daltonganj-medininagar' },
    ],
  },
  {
    title: 'Civil Engineering & Construction',
    items: [
      { name: 'Construction Management', slug: 'construction-management-daltonganj-medininagar' },
      { name: 'Renovation & Remodeling', slug: 'renovation-daltonganj-medininagar' },
      { name: 'Office & Commercial Renovation', slug: 'office-commercial-renovation-daltonganj-medininagar' },
    ],
  },
  {
    title: 'Specialized Services',
    items: [
      { name: '3D Visualization & Rendering', slug: '3d-visualization-rendering-daltonganj-medininagar' },
      { name: 'Facade & Exterior Design', slug: 'facade-exterior-design-daltonganj-medininagar' },
      { name: 'Vastu-Compliant Architecture', slug: 'vastu-compliant-architecture-daltonganj-medininagar' },
    ],
  },
];
