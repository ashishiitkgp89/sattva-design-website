import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Sattva Design - Premier Architecture & Interior Design in Satbarwa',
  },
  description:
    "Transform your space with Sattva Design's expert architectural and interior design services in Satbarwa. Specializing in sustainable, modern design solutions. Contact us for a consultation.",
  keywords:
    'architecture firm Satbarwa, interior design Satbarwa, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas/satbarwa' },
  openGraph: {
    title: 'Architecture & Interior Design in Satbarwa | Sattva Design',
    description:
      "Architecture, interior design and building-approval services for Satbarwa, delivered from Sattva Design's Medininagar office. Custom homes, commercial spaces and naksha pass support.",
    url: 'https://sattvadesignconsultancy.com/service-areas/satbarwa',
  },
};

export default function Satbarwa() {
  // Schema markup for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Sattva Design",
    "image": "https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png",
    "description": "Leading architectural and interior design firm serving Satbarwa, specializing in sustainable and modern design solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd",
      "addressLocality": "Medininagar",
      "addressRegion": "Jharkhand",
      "postalCode": "822101",
      "addressCountry": "IN"
    },
    "url": "https://sattvadesignconsultancy.com/service-areas/satbarwa",
    "telephone": "+917209567678",
    "email": "sattvadesignconsultancy@gmail.com",
    "areaServed": {
      "@type": "Place",
      "name": "Satbarwa"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      }
    ]
  };

  const faqs = [
    {
      q: "Does Sattva Design take on projects in Satbarwa even though the office is in Medininagar?",
      a: "Yes. Satbarwa is a short drive from our Medininagar office, so it is one of the easiest Palamu locations for us to service. We schedule site visits, take measurements and meet clients on their plot, then carry out the design and drawing work from our studio.",
    },
    {
      q: "What kinds of buildings do you design in Satbarwa?",
      a: "We work on individual houses, shops and small commercial buildings, and the occasional farmhouse on the more open plots around the block. Each design is worked out around the specific plot size, road access and the family's budget rather than a fixed template.",
    },
    {
      q: "Can you help get building plans approved for a Satbarwa plot?",
      a: "Yes. We prepare the measured drawings and sanction-ready blueprints needed for building approval and guide you through the documentation, so you have a clear, approvable plan before construction starts.",
    },
    {
      q: "How do we start a project in Satbarwa with Sattva Design?",
      a: "Call or email us with your plot details and what you want to build. We discuss the brief and budget, visit the site, then move through concept design, working drawings and approvals before construction begins.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architecture & Interior Design in Satbarwa
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  House plans, interiors and building approvals for Satbarwa, handled from our nearby Medininagar office
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Architecture and design services for Satbarwa</h2>
              <p className="text-gray-600 text-lg">
                Satbarwa sits in Palamu district, close enough to our Medininagar office that we treat
                it almost as a local catchment. Most enquiries here are for individual family homes and small
                roadside commercial buildings, where the design has to make sense for the plot, the budget and
                the way the building will actually be used. We measure the site in person, work up the drawings
                in our studio, and stay involved through approvals and construction.
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

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Why Choose Sattva Design in Satbarwa?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif mb-4">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Satbarwa's climate, culture, and building regulations,
                  ensuring contextually appropriate designs.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif mb-4">Sustainable Approach</h3>
                <p className="text-gray-600">
                  Integration of eco-friendly materials and energy-efficient solutions in every project.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-serif mb-4">End-to-End Service</h3>
                <p className="text-gray-600">
                  Comprehensive project management from concept to completion, ensuring seamless execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">How we work with clients in Satbarwa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">1. Site visit and brief</h3>
                <p className="text-gray-600">
                  Because Satbarwa is close to Medininagar, we can visit your plot quickly, check
                  measurements, levels and road access, and talk through what you want to build and
                  the budget you are working with.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">2. Design and drawings</h3>
                <p className="text-gray-600">
                  Back at the studio we prepare the layout, 3D views and the working drawings, refining
                  the plan with you until the rooms, circulation and elevations suit how your family or
                  business will use the space.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">3. Approvals and construction</h3>
                <p className="text-gray-600">
                  We produce sanction-ready blueprints for building approval and stay involved during
                  construction, coordinating with your contractor so the building goes up the way it was
                  designed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Work in Satbarwa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                  alt="Residential Project in Satbarwa"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-serif mb-2">Modern Residence</h3>
                    <p className="text-sm mb-4">Contemporary residential design in Satbarwa</p>
                    <Link href="/projects/modern-residence-satbarwa" className="text-white underline">
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  "Sattva Design brought our dream home to life with their innovative approach and
                  attention to detail. They truly understand the local context and modern needs."
                </p>
                <footer className="font-medium">
                  — Homeowner, Satbarwa
                </footer>
              </blockquote>
              <blockquote className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  "The team's professionalism and expertise in sustainable design made our commercial
                  project a great success. Highly recommended!"
                </p>
                <footer className="font-medium">
                  — Business Owner, Satbarwa
                </footer>
              </blockquote>
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

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-serif mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }}
        />

        {/* Contact Form Section */}
        <ContactSection isFullPage={false} />
      </div>
    </>
  );
}
