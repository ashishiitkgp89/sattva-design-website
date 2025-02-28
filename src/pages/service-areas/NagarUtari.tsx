import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';
import { Link } from 'react-router-dom';

export default function NagarUtari() {
  return (
    <>
      <Helmet>
        <title>Sattva Design - Premier Architecture & Interior Design in Nagar Utari</title>
        <meta 
          name="description" 
          content="Experience exceptional architectural and interior design services in Nagar Utari with Sattva Design. We create sustainable, culturally-inspired spaces that enhance the local landscape."
        />
        <meta 
          name="keywords" 
          content="architecture firm Nagar Utari, interior design Nagar Utari, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattvadesign.in/service-areas/nagar-utari" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architectural Vision in Nagar Utari
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Transforming spaces with innovative and sustainable design solutions
                </p>
                <a 
                  href="#contact"
                  className="inline-block bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Nagar Utari Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">About Nagar Utari</h2>
              <p className="text-gray-600 text-lg">
                Nagar Utari, an emerging town in Jharkhand's Garhwa district, represents 
                the perfect synthesis of traditional values and modern aspirations. As the 
                region undergoes significant development, it maintains its rich cultural 
                heritage while embracing contemporary progress. At Sattva Design, we 
                understand this unique transition and create architectural solutions that 
                bridge both worlds. Our designs incorporate sustainable practices and 
                local materials, ensuring that new developments enhance the town's 
                character while meeting modern needs. We are dedicated to creating spaces 
                that not only serve the community but also contribute to Nagar Utari's 
                vision of sustainable urban development.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Transforming Nagar Utari's Landscape</h2>
              <p className="text-gray-600 text-lg">
                Nagar Utari, a region known for its natural beauty and emerging development, 
                presents unique opportunities for architectural innovation. At Sattva Design, 
                we're dedicated to creating spaces that harmonize with the local environment 
                while meeting modern needs. Our designs incorporate sustainable practices and 
                local architectural elements, ensuring each project contributes positively to 
                the community's growth. Whether it's residential developments that provide 
                comfortable living spaces or commercial projects that boost local economy, 
                we're committed to enhancing Nagar Utari's built environment with thoughtful, 
                sustainable design solutions.
              </p>
            </div>

            {/* Key Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Architecture</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Modern Home Design</li>
                  <li>• Villa Projects</li>
                  <li>• Housing Developments</li>
                  <li>• Custom Residences</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retail Spaces</li>
                  <li>• Office Buildings</li>
                  <li>• Community Centers</li>
                  <li>• Mixed-Use Projects</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Specialized Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Sustainable Design</li>
                  <li>• Urban Planning</li>
                  <li>• Interior Solutions</li>
                  <li>• Landscape Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">Areas We Serve in Nagar Utari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Central Nagar Utari</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Main Market Area</li>
                  <li>• Town Center</li>
                  <li>• Commercial District</li>
                  <li>• Administrative Zone</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Surrounding Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Residential Sectors</li>
                  <li>• Educational Hub</li>
                  <li>• Green Zones</li>
                  <li>• Development Areas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Growth Corridors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• New Townships</li>
                  <li>• Industrial Belt</li>
                  <li>• Future Projects</li>
                  <li>• Expansion Zones</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Main Office Address</h3>
                      <p className="text-gray-600">
                        Shop no-14, 1st Floor Zila Parishad Market Kutchery,<br />
                        Railway crossing Road, Jail Hata Rd,<br />
                        Medininagar, Jharkhand 822101
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+917209567678" className="hover:text-gray-900 transition-colors">
                          +91 7209567678
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
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
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Working Hours</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
                        <li><strong>Saturday:</strong> 9:00 AM - 4:00 PM</li>
                        <li><strong>Sunday:</strong> Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="aspect-w-16 aspect-h-9 mb-8">
                  <iframe
                    title="Sattva Design Office Location"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7673460244392!2d84.06729989999999!3d24.0410025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c777187960e53%3A0x97413753729d2041!2sSattva%20Design%20Consultancy!5e0!3m2!1sen!2sin!4v1709052136037!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection isFullPage={false} />
      </div>
    </>
  );
} 