import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import {
  palamuAreas,
  ranchiLocalities,
  otherCities,
} from '@/data/serviceAreas';

export const metadata: Metadata = {
  title: 'Service Areas',
  description:
    'Sattva Design offers architecture and interior design services across Jharkhand — the Palamu region, Ranchi and its localities, and major cities including Jamshedpur, Dhanbad, Bokaro and more.',
  keywords:
    'architecture firm Jharkhand, interior design Jharkhand, service areas, Ranchi architect, Palamu architect, Sattva Design',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas' },
};

type Area = { name: string; slug: string };

function AreaSection({ title, areas }: { title: string; areas: Area[] }) {
  if (areas.length === 0) return null;
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-serif mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {areas.map((area) => (
          <Link
            key={area.slug}
            href={`/service-areas/${area.slug}`}
            className="flex items-center gap-2 rounded-lg border border-gray-100 px-4 py-3 text-gray-700 hover:border-gray-300 hover:text-gray-900 transition-colors"
          >
            <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <span className="text-sm">{area.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ServiceAreasIndex() {
  const ranchi = ranchiLocalities.map((a) => ({ name: a.name, slug: a.slug }));
  const cities = otherCities.map((a) => ({ name: a.name, slug: a.slug }));

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-4xl font-serif mb-4">Service Areas</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          Sattva Design provides architecture and interior design services across
          Jharkhand. Explore the areas we serve below — from our studios in Ranchi
          (Harmu) and Medininagar.
        </p>

        <AreaSection title="Ranchi & Localities" areas={ranchi} />
        <AreaSection title="Palamu Region" areas={palamuAreas} />
        <AreaSection title="Other Jharkhand Cities" areas={cities} />
      </div>
    </div>
  );
}
