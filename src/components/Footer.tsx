import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const serviceAreas = [
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
    { name: 'Nagar Utari', slug: 'nagar-utari' }
  ];

  return (
    <footer className="border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
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

          {/* Service Areas - Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(0, 5).map((area) => (
                <li key={area.slug}>
                  <Link 
                    to={`/service-areas/${area.slug}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">&nbsp;</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(5, 10).map((area) => (
                <li key={area.slug}>
                  <Link 
                    to={`/service-areas/${area.slug}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas - Column 3 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">&nbsp;</h3>
            <ul className="space-y-2">
              {serviceAreas.slice(10).map((area) => (
                <li key={area.slug}>
                  <Link 
                    to={`/service-areas/${area.slug}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          © 2024 Sattva Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 