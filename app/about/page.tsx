import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { offices } from '@/utils/offices';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Sattva Design's philosophy, process, and commitment to harmonious, sustainable architecture and interior design across Jharkhand.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Sattva Design',
    description:
      "Sattva Design's philosophy, process, and commitment to sustainable architecture and interior design across Jharkhand.",
    url: '/about',
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif mb-12">About Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-serif mb-6">Our Philosophy</h2>
            <p className="text-gray-600 mb-6">
              At Sattva Design, we believe in creating spaces that harmoniously blend functionality, aesthetics, and sustainability.
              Our approach is rooted in the Sanskrit word &quot;Sattva,&quot; which represents purity, harmony, and balance.
            </p>
            <p className="text-gray-600">
              We work closely with our clients to understand their vision and transform it into thoughtfully designed spaces
              that reflect their unique needs while maintaining a deep connection with nature and well-being.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-serif mb-6">Our Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">1. Discovery</h3>
                <p className="text-gray-600">Understanding your vision, requirements, and aspirations for the space.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">2. Concept Development</h3>
                <p className="text-gray-600">Creating initial designs that align with your goals and our sustainable principles.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">3. Detailed Design</h3>
                <p className="text-gray-600">Developing comprehensive plans, material selections, and technical specifications.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">4. Implementation</h3>
                <p className="text-gray-600">Bringing the design to life through careful execution and quality control.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-6">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize eco-friendly materials and energy-efficient solutions in all our projects.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of design trends and technological advancements.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-3">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards of craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-serif mb-6">Visit Us</h2>

          <div className="flex items-start space-x-4 mb-8">
            <Mail className="w-6 h-6 text-gray-400 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:sattvadesignconsultancy@gmail.com" className="hover:text-gray-900 transition-colors">
                  sattvadesignconsultancy@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {offices.map((office) => (
              <div key={office.name} className="space-y-4">
                <h3 className="text-xl font-medium">{office.name}</h3>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    {office.address.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < office.address.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                  <a href={office.phoneHref} className="text-gray-600 hover:text-gray-900 transition-colors">
                    {office.phone}
                  </a>
                </div>
                <a
                  href={office.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-black hover:text-gray-600 transition-colors"
                >
                  Get Directions →
                </a>
                <div className="h-[300px]">
                  <iframe
                    title={`Map of Sattva Design ${office.name} office`}
                    src={office.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
