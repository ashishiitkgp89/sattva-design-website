import type { Metadata } from 'next';
import React from 'react';
import { MapPin, Calendar, Ruler, User } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: { absolute: 'Modern Residence in Hariharganj | Sattva Design Projects' },
  description:
    'Discover our modern residential project in Hariharganj, featuring contemporary design, sustainable architecture, and innovative living spaces.',
  keywords:
    'modern residence, Hariharganj, residential architecture, contemporary home, sustainable design, Sattva Design',
  alternates: { canonical: '/projects/modern-residence-hariharganj' },
};

export default function ModernResidenceHariharganj() {
  // Schema markup for Project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Modern Residence in Hariharganj",
    "description": "Contemporary residential project in Hariharganj featuring modern design elements and sustainable architecture.",
    "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    "provider": {
      "@type": "Organization",
      "name": "Sattva Design",
      "url": "https://sattvadesignconsultancy.com"
    },
    "location": {
      "@type": "Place",
      "name": "Hariharganj, Jharkhand",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hariharganj",
        "addressRegion": "Jharkhand",
        "addressCountry": "IN"
      }
    },
    "datePublished": "2023",
    "category": "Residential Architecture"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
            alt="Modern Residence in Hariharganj"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                Modern Residence
              </h1>
              <p className="text-xl text-white/90">Hariharganj, Jharkhand</p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-8">
                This modern residence in Hariharganj showcases our commitment to creating
                contemporary living spaces that respect local context while embracing modern
                design principles. The project demonstrates how innovative architecture can
                enhance quality of life while maintaining harmony with the surrounding environment.
                Every detail has been carefully considered to create a home that is both
                aesthetically striking and highly functional.
              </p>

              <h3 className="text-2xl font-serif mb-4">Design Approach</h3>
              <p className="text-gray-600 mb-8">
                Our design approach prioritized the creation of open, flowing spaces that
                maximize natural light and ventilation. The residence features a modern
                interpretation of traditional architectural elements, incorporating local
                materials with contemporary construction techniques. Special attention was
                paid to creating seamless transitions between indoor and outdoor spaces,
                enhancing the overall living experience.
              </p>

              <h3 className="text-2xl font-serif mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Open-plan living areas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Energy-efficient design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Courtyard garden</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Smart home features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Sustainable materials</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Natural ventilation</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-900">Hariharganj, Jharkhand</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Year Completed</p>
                      <p className="text-gray-900">2023</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Ruler className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Area</p>
                      <p className="text-gray-900">4,800 sq ft</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="text-gray-900">Private Residence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-serif mb-8">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Living Room"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                alt="Kitchen"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
                alt="Exterior"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4">Start Your Project</h2>
              <p className="text-gray-600">
                Interested in creating your own modern residence? Contact us to discuss your vision.
              </p>
            </div>
            <ContactSection isFullPage={false} />
          </div>
        </div>
      </div>
    </>
  );
}
