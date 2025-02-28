import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Calendar, Ruler, User } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

export default function ModernResidenceChainpur() {
  return (
    <>
      <Helmet>
        <title>Modern Residence in Chainpur | Sattva Design Projects</title>
        <meta 
          name="description" 
          content="Contemporary residential project in Chainpur by Sattva Design, featuring sustainable architecture and modern amenities while respecting local cultural elements."
        />
        <meta 
          name="keywords" 
          content="modern residence, Chainpur, residential architecture, sustainable design, luxury homes, Sattva Design"
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[70vh]">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern Residence in Chainpur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                Modern Residence
              </h1>
              <p className="text-xl text-white/90">Chainpur, Jharkhand</p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
              <p className="text-gray-600 mb-8">
                This contemporary residence in Chainpur represents a harmonious blend of modern architecture 
                and traditional sensibilities. The design emphasizes open spaces, natural light, and 
                sustainable features while maintaining a strong connection to the local context. The 
                project showcases our commitment to creating homes that are both aesthetically striking 
                and functionally superior.
              </p>

              <h3 className="text-2xl font-serif mb-4">Design Approach</h3>
              <p className="text-gray-600 mb-8">
                Our design approach focused on creating a modern living space that respects the 
                environmental and cultural context of Chainpur. The house features large windows for 
                natural light, cross-ventilation for energy efficiency, and locally sourced materials 
                that connect it to its surroundings. The spatial planning incorporates both private 
                and communal areas, creating a perfect balance for modern family living.
              </p>

              <h3 className="text-2xl font-serif mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Open-plan living spaces</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Energy-efficient design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Natural lighting optimization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Sustainable materials</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Smart home integration</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">Landscaped gardens</span>
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
                      <p className="text-gray-900">Chainpur, Jharkhand</p>
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
                      <p className="text-gray-900">3,500 sq ft</p>
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