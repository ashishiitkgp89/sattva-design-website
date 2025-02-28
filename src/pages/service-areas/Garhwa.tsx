import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';
import { Link } from 'react-router-dom';

export default function Garhwa() {
  return (
    <>
      <Helmet>
        <title>Sattva Design - Premier Architecture & Interior Design in Garhwa</title>
        <meta 
          name="description" 
          content="Transform your space with Sattva Design's expert architectural and interior design services in Garhwa. Specializing in sustainable, modern design solutions. Contact us for a consultation."
        />
        <meta 
          name="keywords" 
          content="architecture firm Garhwa, interior design Garhwa, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattvadesign.in/service-areas/garhwa" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architectural Innovation in Garhwa
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Transforming spaces with sustainable design solutions
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

        {/* About Garhwa Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">About Garhwa</h2>
              <p className="text-gray-600 text-lg">
                Garhwa, a historically significant town in Jharkhand, stands as a testament to 
                the region's rich cultural heritage and emerging urban landscape. As one of the 
                important districts in the state, Garhwa is witnessing a transformation in its 
                architectural identity. At Sattva Design, we recognize the unique challenges and 
                opportunities this presents. Our approach combines respect for local traditions 
                with innovative design solutions, creating spaces that serve the community's 
                evolving needs. From residential projects that reflect the warmth of Garhwa's 
                community to commercial spaces that drive economic growth, we're dedicated to 
                shaping a sustainable and aesthetically pleasing urban environment.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Transforming Garhwa's Architectural Landscape</h2>
              <p className="text-gray-600 text-lg">
                Garhwa, a vibrant city in Jharkhand, is experiencing rapid growth and development. At Sattva Design, 
                we understand the unique architectural needs of this evolving urban landscape. Our designs seamlessly 
                blend traditional elements with modern aesthetics, creating spaces that respect local culture while 
                embracing contemporary functionality. We specialize in both residential and commercial projects, 
                bringing innovative design solutions that enhance the city's architectural character while meeting 
                the specific requirements of our clients in Garhwa.
              </p>
            </div>

            {/* Key Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Architecture</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Custom Home Design</li>
                  <li>• Villa & Bungalow Projects</li>
                  <li>• Apartment Interiors</li>
                  <li>• Space Planning</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Office Spaces</li>
                  <li>• Retail Design</li>
                  <li>• Restaurant & Hospitality</li>
                  <li>• Corporate Interiors</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Specialized Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Sustainable Design</li>
                  <li>• Heritage Restoration</li>
                  <li>• Landscape Design</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">Areas We Serve in Garhwa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Central Garhwa</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Main Market Area</li>
                  <li>• City Center</li>
                  <li>• Old Town</li>
                  <li>• Civil Lines</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Surrounding Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• New Development Zone</li>
                  <li>• Commercial District</li>
                  <li>• Residential Sectors</li>
                  <li>• Industrial Area</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Emerging Localities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Extension Areas</li>
                  <li>• New Townships</li>
                  <li>• Growth Corridor</li>
                  <li>• Upcoming Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
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