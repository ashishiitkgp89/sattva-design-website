import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Calendar, Ruler, User } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

export default function LuxuryVillaDaltonganj() {
  // Schema markup for Project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": "Luxury Villa in Daltonganj",
    "description": "An exclusive luxury villa project in Civil Lines, Daltonganj, featuring contemporary architecture and premium amenities.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "provider": {
      "@type": "Organization",
      "name": "Sattva Design",
      "url": "https://sattvadesign.in"
    },
    "location": {
      "@type": "Place",
      "name": "Civil Lines, Daltonganj, Jharkhand",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Daltonganj",
        "addressRegion": "Jharkhand",
        "addressCountry": "IN"
      }
    },
    "datePublished": "2023",
    "category": "Residential Architecture"
  };

  return (
    <>
      <Helmet>
        <title>Luxury Villa in Daltonganj | Sattva Design Projects</title>
        <meta 
          name="description" 
          content="Explore our luxury villa project in Civil Lines, Daltonganj. A perfect blend of modern architecture, premium amenities, and sustainable design."
        />
        <meta 
          name="keywords" 
          content="luxury villa, Daltonganj, Civil Lines, residential architecture, modern home, sustainable design, Sattva Design"
        />
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[70vh]">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Villa in Daltonganj"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                Luxury Villa
              </h1>
              <p className="text-xl text-white/90">Civil Lines, Daltonganj</p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-8">
                This exclusive luxury villa in Civil Lines, Daltonganj, represents the pinnacle of 
                modern residential architecture. The project seamlessly integrates contemporary design 
                elements with local architectural influences, creating a unique living space that 
                stands as a testament to sophisticated urban living. Every aspect of the villa has 
                been meticulously planned to ensure both luxury and sustainability.
              </p>

              <h3 className="text-2xl font-serif mb-4">Design Approach</h3>
              <p className="text-gray-600 mb-8">
                Our design approach focused on creating a harmonious balance between luxury and 
                functionality. The villa features expansive living spaces with high ceilings and 
                large windows that maximize natural light and ventilation. The use of premium 
                materials and advanced construction techniques ensures durability while maintaining 
                aesthetic excellence. The layout is designed to provide both privacy and seamless 
                flow between indoor and outdoor spaces.
              </p>

              <h3 className="text-2xl font-serif mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Grand entrance foyer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Double-height living room</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Smart home automation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Private garden</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Entertainment lounge</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Sustainable features</span>
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
                      <p className="text-gray-900">Civil Lines, Daltonganj</p>
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
                      <p className="text-gray-900">6,500 sq ft</p>
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
                Interested in creating your own luxury villa? Contact us to discuss your vision.
              </p>
            </div>
            <ContactSection isFullPage={false} />
          </div>
        </div>
      </div>
    </>
  );
} 