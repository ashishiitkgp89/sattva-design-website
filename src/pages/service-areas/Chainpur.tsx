import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactSection from '../../components/ContactSection';
import { Link } from 'react-router-dom';

export default function Chainpur() {
  return (
    <>
      <Helmet>
        <title>Architecture & Interior Design Services in Chainpur | Sattva Design</title>
        <meta 
          name="description" 
          content="Expert architectural and interior design services in Chainpur. Combining traditional aesthetics with modern design solutions for residential and commercial projects."
        />
        <meta 
          name="keywords" 
          content="architecture, interior design, Chainpur, residential design, commercial design, sustainable architecture, Jharkhand architecture"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattvadesign.in/service-areas/chainpur" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Design Excellence in Chainpur
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Creating timeless spaces that honor Chainpur's heritage
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

        {/* About Chainpur Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">About Chainpur</h2>
              <p className="text-gray-600 text-lg">
                Chainpur, a historic town in Jharkhand's Palamu district, is known for its rich cultural heritage 
                and architectural diversity. As the town continues to develop, Sattva Design plays a crucial role 
                in shaping its architectural landscape. Our designs in Chainpur reflect a deep understanding of 
                the region's traditional architecture while incorporating modern sustainable practices. The town's 
                unique topography and climate influence our approach to creating spaces that are both environmentally 
                responsive and culturally relevant. We focus on preserving the town's architectural character while 
                introducing contemporary elements that enhance functionality and comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Services in Chainpur</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Traditional Home Design</li>
                  <li>• Modern Residences</li>
                  <li>• Villa Projects</li>
                  <li>• Home Renovations</li>
                  <li>• Space Planning</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Projects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retail Spaces</li>
                  <li>• Office Buildings</li>
                  <li>• Hospitality Projects</li>
                  <li>• Educational Spaces</li>
                  <li>• Mixed-Use Developments</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Heritage Projects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Restoration Work</li>
                  <li>• Heritage Conservation</li>
                  <li>• Adaptive Reuse</li>
                  <li>• Cultural Integration</li>
                  <li>• Traditional Elements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">Areas We Serve in Chainpur</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Central Chainpur</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Main Market Area</li>
                  <li>• Heritage Zone</li>
                  <li>• Town Center</li>
                  <li>• Commercial District</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Surrounding Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Residential Colonies</li>
                  <li>• New Development Areas</li>
                  <li>• Educational Hub</li>
                  <li>• Industrial Zone</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Emerging Localities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Township Projects</li>
                  <li>• Suburban Areas</li>
                  <li>• Growth Corridors</li>
                  <li>• Special Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Featured Projects in Chainpur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link 
                to="/projects/modern-residence-chainpur"
                className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    alt="Modern Residence in Chainpur"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2 group-hover:text-gray-600 transition-colors">
                    Modern Residence
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Contemporary home design featuring sustainable architecture and modern amenities
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-black font-medium group-hover:text-gray-600 transition-colors">
                      View Project
                    </span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif mb-8">Contact Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">Main Office</h3>
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