import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';
import { Link } from 'react-router-dom';

export default function Latehar() {
  return (
    <>
      <Helmet>
        <title>Sattva Design - Premier Architecture & Interior Design in Latehar</title>
        <meta 
          name="description" 
          content="Experience exceptional architectural and interior design services in Latehar with Sattva Design. We specialize in creating sustainable, culturally-rooted spaces that reflect the region's unique character."
        />
        <meta 
          name="keywords" 
          content="architecture firm Latehar, interior design Latehar, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sattvadesign.in/service-areas/latehar" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architectural Excellence in Latehar
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Creating sustainable spaces that honor heritage and embrace progress
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

        {/* About Latehar Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">About Latehar</h2>
              <p className="text-gray-600 text-lg">
                Latehar, a district headquarters in Jharkhand, represents a unique blend 
                of natural beauty and urban development. Known for its rich mineral 
                resources and scenic landscapes, the city is experiencing significant 
                growth while maintaining its connection to nature. At Sattva Design, we 
                understand this special character and create architectural solutions that 
                complement the natural environment. Our designs incorporate sustainable 
                practices and local materials, ensuring that new developments enhance 
                rather than compete with the surrounding beauty. We specialize in 
                creating spaces that serve the community's evolving needs while 
                preserving Latehar's unique environmental and cultural heritage.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Designing Latehar's Future</h2>
              <p className="text-gray-600 text-lg">
                Latehar, known for its rich natural resources and cultural heritage, is experiencing 
                significant growth and development. At Sattva Design, we're proud to be part of this 
                transformation, bringing innovative architectural solutions that respect the region's 
                unique identity. Our designs seamlessly integrate modern functionality with local 
                architectural traditions, creating spaces that are both contemporary and culturally 
                resonant. We specialize in sustainable architecture that considers Latehar's climate 
                and environmental conditions, ensuring our projects contribute positively to the 
                region's development while preserving its natural beauty.
              </p>
            </div>

            {/* Key Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Modern Home Design</li>
                  <li>• Traditional House Planning</li>
                  <li>• Villa Architecture</li>
                  <li>• Interior Customization</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Projects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retail Spaces</li>
                  <li>• Office Buildings</li>
                  <li>• Educational Institutions</li>
                  <li>• Healthcare Facilities</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Sustainable Solutions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Green Building Design</li>
                  <li>• Energy Efficiency</li>
                  <li>• Natural Ventilation</li>
                  <li>• Eco-friendly Materials</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">Areas We Serve in Latehar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Central Latehar</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Main Market Area</li>
                  <li>• City Center</li>
                  <li>• Administrative Zone</li>
                  <li>• Educational Hub</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Surrounding Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Industrial Area</li>
                  <li>• Residential Colonies</li>
                  <li>• Township Projects</li>
                  <li>• Suburban Districts</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Development Zones</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• New Growth Areas</li>
                  <li>• Smart City Projects</li>
                  <li>• Commercial Corridors</li>
                  <li>• Green Zones</li>
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
                <h2 className="text-3xl font-serif mb-8">Contact Us</h2>
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