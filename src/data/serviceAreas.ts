import { ServiceAreaEntry } from './serviceArea.types';
import { ranchiHarmu } from './areas/ranchi-harmu';
import { ranchiA } from './areas/ranchi-a';
import { ranchiB } from './areas/ranchi-b';
import { citiesA } from './areas/cities-a';
import { citiesB } from './areas/cities-b';

// Single source of truth for the data-driven service-area pages.
// Add a place by adding an entry to one of the group files under ./areas.
export const newServiceAreas: ServiceAreaEntry[] = [
  ...ranchiHarmu,
  ...ranchiA,
  ...ranchiB,
  ...citiesA,
  ...citiesB,
];

export const ranchiLocalities = newServiceAreas.filter((a) => a.type === 'locality');
export const otherCities = newServiceAreas.filter((a) => a.type === 'city');

// The 16 hand-built Palamu-region pages (their own static folders under
// app/service-areas/<slug>/). Listed here so the index page and footer share one source.
export const palamuAreas: { name: string; slug: string }[] = [
  { name: 'Daltonganj (Medininagar)', slug: 'daltonganj-medininagar' },
  { name: 'Lesliganj', slug: 'lesliganj' },
  { name: 'Chainpur', slug: 'chainpur' },
  { name: 'Nawa Bazar', slug: 'nawa-bazar' },
  { name: 'Chhatarpur', slug: 'chhatarpur' },
  { name: 'Hariharganj', slug: 'hariharganj' },
  { name: 'Satbarwa', slug: 'satbarwa' },
  { name: 'Garhwa', slug: 'garhwa' },
  { name: 'Ranka', slug: 'ranka' },
  { name: 'Bhawnathpur', slug: 'bhawnathpur' },
  { name: 'Latehar', slug: 'latehar' },
  { name: 'Balumath', slug: 'balumath' },
  { name: 'Herhanj', slug: 'herhanj' },
  { name: 'Hussainabad (Japla)', slug: 'hussainabad-japla' },
  { name: 'Haidernagar', slug: 'haidernagar' },
  { name: 'Nagar Utari', slug: 'nagar-utari' },
];

export function getServiceArea(slug: string): ServiceAreaEntry | undefined {
  return newServiceAreas.find((a) => a.slug === slug);
}
