import { AreaFaq, OFFICE_SCHEMA } from './serviceArea.types';

// Default hero image for service pages (matches the service-area hero style).
export const SERVICE_HERO_IMAGE =
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3';

export interface ProcessStep {
  step: string;
  description: string;
}

// Per-location layer that makes each city variant genuinely unique.
export interface ServiceLocationContent {
  /** Unique, city-specific opening paragraph. */
  intro: string;
  /** 2-3 location-specific FAQs (in addition to the general ones). */
  localFaqs: AreaFaq[];
}

export interface ServiceEntry {
  /** Base service slug, e.g. 'interior-design' (no location suffix). */
  slug: string;
  name: string;
  category: string;
  tagline: string;
  /** Optional hero override; falls back to SERVICE_HERO_IMAGE. */
  heroImage?: string;
  /** 1-2 paragraph general overview of the service. */
  overview: string;
  whatIncluded: string[];
  process: ProcessStep[];
  benefits: string[];
  /** A paragraph on materials / approach / standards. */
  approach: string;
  /** 3-4 general (location-agnostic) FAQs. */
  generalFaqs: AreaFaq[];
  /** Related service slugs for internal linking. */
  related: string[];
  /** Per-location content keyed by location key. */
  locations: Record<string, ServiceLocationContent>;
}

export interface ServiceLocation {
  key: string; // URL suffix, e.g. 'ranchi' or 'daltonganj-medininagar'
  city: string; // display, e.g. 'Ranchi'
  office: 'ranchi' | 'medininagar'; // anchoring office (reuses OFFICE_SCHEMA)
  region: string;
}

// The two locations that get dedicated service pages (our two offices).
export const SERVICE_LOCATIONS: ServiceLocation[] = [
  { key: 'ranchi', city: 'Ranchi', office: 'ranchi', region: 'Jharkhand' },
  {
    key: 'daltonganj-medininagar',
    city: 'Daltonganj (Medininagar)',
    office: 'medininagar',
    region: 'Jharkhand',
  },
];

export function getLocation(key: string): ServiceLocation | undefined {
  return SERVICE_LOCATIONS.find((l) => l.key === key);
}

// Resolve a full page slug like "interior-design-ranchi" into its
// service slug + location key (longest-suffix match wins).
export function splitServiceSlug(
  fullSlug: string
): { serviceSlug: string; locationKey: string } | null {
  // Sort by length desc so 'daltonganj-medininagar' matches before any shorter key.
  const locs = [...SERVICE_LOCATIONS].sort((a, b) => b.key.length - a.key.length);
  for (const loc of locs) {
    const suffix = `-${loc.key}`;
    if (fullSlug.endsWith(suffix)) {
      return {
        serviceSlug: fullSlug.slice(0, -suffix.length),
        locationKey: loc.key,
      };
    }
  }
  return null;
}

export { OFFICE_SCHEMA };
