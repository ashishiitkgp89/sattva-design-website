import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { services } from '@/data/services';
import { SERVICE_LOCATIONS } from '@/data/services.types';

export const metadata: Metadata = {
  title: 'Architecture & Interior Design Services',
  description:
    'Full-service architecture and interior design by Sattva Design across Jharkhand — custom homes, commercial spaces, interiors, building approvals, renovation and more, from our Ranchi and Medininagar studios.',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services' },
  openGraph: {
    title: 'Architecture & Interior Design Services | Sattva Design',
    description:
      'Custom homes, commercial spaces, interiors, building approvals, renovation and more across Jharkhand.',
    url: 'https://sattvadesignconsultancy.com/services',
  },
};

// Default link target: the head-office (Ranchi) variant of each service.
const PRIMARY_LOCATION = 'ranchi';

export default function ServicesIndex() {
  // Preserve the order in the data array, grouped by category.
  const categories: string[] = [];
  for (const s of services) {
    if (!categories.includes(s.category)) categories.push(s.category);
  }
  const locationNames = SERVICE_LOCATIONS.map((l) => l.city).join(' & ');

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h1 className="text-4xl font-serif mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-12">
          Sattva Design offers end-to-end architecture, interior design and construction
          services across Jharkhand. Every service is available from our {locationNames}{' '}
          studios.
        </p>

        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="text-2xl font-serif mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services
                  .filter((s) => s.category === category)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}-${PRIMARY_LOCATION}`}
                      className="group block rounded-lg border border-gray-100 p-5 hover:border-gray-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                          {s.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {s.tagline}
                      </p>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
