import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { ranchiLocalities, otherCities, palamuAreas } from '../data/serviceAreas';

function AreaList({ areas }: { areas: { name: string; slug: string }[] }) {
  return (
    <ul className="space-y-2">
      {areas.map((area) => (
        <li key={area.slug}>
          <Link
            href={`/service-areas/${area.slug}`}
            className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            {area.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const ranchi = ranchiLocalities.map((a) => ({ name: a.name, slug: a.slug }));
  const cities = otherCities.map((a) => ({ name: a.name, slug: a.slug }));

  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dhakknfrx/image/upload/v1740713460/Sattva_Logo_zzviza.png"
                alt="Sattva Design Logo"
                className="h-8 w-auto"
              />
              <span className="text-lg font-serif">Sattva Design</span>
            </Link>
            <div className="mt-4">
              <a
                href="https://www.instagram.com/sattva_design_/?igsh=MWY0bGRkamxudDUxeg%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Palamu region */}
          <div>
            <Link
              href="/service-areas"
              className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 hover:text-gray-600 transition-colors"
            >
              Palamu Region
            </Link>
            <AreaList areas={palamuAreas} />
          </div>

          {/* Ranchi localities */}
          {ranchi.length > 0 && (
            <div>
              <Link
                href="/service-areas"
                className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 hover:text-gray-600 transition-colors"
              >
                Ranchi
              </Link>
              <AreaList areas={ranchi} />
            </div>
          )}

          {/* Other Jharkhand cities */}
          {cities.length > 0 && (
            <div>
              <Link
                href="/service-areas"
                className="block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 hover:text-gray-600 transition-colors"
              >
                Jharkhand Cities
              </Link>
              <AreaList areas={cities} />
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2024 Sattva Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
