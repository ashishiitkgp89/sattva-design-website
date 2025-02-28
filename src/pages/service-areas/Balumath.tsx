import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';
import { Link } from 'react-router-dom';

export default function Balumath() {
  return (
    <>
      <Helmet>
        <title>Sattva Design - Premier Architecture & Interior Design in Balumath</title>
        <meta 
          name="description" 
          content="Transform your space with Sattva Design's expert architectural and interior design services in Balumath. We blend modern design principles with local aesthetics to create unique spaces."
        />
        <meta 
          name="keywords" 
          content="architecture firm Balumath, interior design Balumath, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattvadesign.in/service-areas/balumath" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Design Excellence in Balumath
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Creating timeless spaces that honor Balumath's heritage
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

        {/* About Balumath Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">About Balumath</h2>
              <p className="text-gray-600 text-lg">
                Balumath, a vibrant town in Latehar district of Jharkhand, represents a unique 
                confluence of traditional values and modern development aspirations. As a key 
                urban center in the region, Balumath is experiencing significant growth in both 
                residential and commercial sectors. At Sattva Design, we understand the town's 
                distinctive character and its evolving architectural needs. Our designs 
                thoughtfully blend local cultural elements with contemporary sustainable practices, 
                creating spaces that resonate with both tradition and progress. We're committed 
                to contributing to Balumath's urban development while preserving its rich 
                cultural heritage and natural surroundings.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Creating Lasting Impressions in Balumath</h2>
              <p className="text-gray-600 text-lg">
                Balumath, with its dynamic blend of industrial heritage and residential charm, presents 
                unique opportunities for architectural innovation. At Sattva Design, we understand the 
                distinct character of this region and its evolving needs. Our architectural solutions 
                are tailored to enhance the local landscape while meeting modern lifestyle demands. 
                We take pride in creating designs that not only serve functional purposes but also 
                contribute to the community's visual and cultural fabric. Our approach combines 
                sustainable practices with aesthetic excellence, ensuring each project we undertake 
                in Balumath stands as a testament to quality and innovation.
              </p>
            </div>

            {/* Key Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Solutions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Contemporary Homes</li>
                  <li>• Apartment Design</li>
                  <li>• Villa Projects</li>
                  <li>• Home Renovations</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Industrial Architecture</li>
                  <li>• Office Complexes</li>
                  <li>• Retail Spaces</li>
                  <li>• Mixed-Use Development</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Special Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Urban Planning</li>
                  <li>• Sustainable Design</li>
                  <li>• Interior Solutions</li>
                  <li>• Project Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">Areas We Serve in Balumath</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Central Balumath</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Main Market Area</li>
                  <li>• Commercial Hub</li>
                  <li>• Town Center</li>
                  <li>• Civic Zone</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Industrial Belt</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Manufacturing Zone</li>
                  <li>• Business District</li>
                  <li>• Warehouse Area</li>
                  <li>• Industrial Park</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Residential Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• New Townships</li>
                  <li>• Housing Colonies</li>
                  <li>• Suburban Areas</li>
                  <li>• Upcoming Projects</li>
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