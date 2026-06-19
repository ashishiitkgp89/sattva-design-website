import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Architecture & Interior Design Services in Chainpur | Sattva Design',
  },
  description:
    'Expert architectural and interior design services in Chainpur. Combining traditional aesthetics with modern design solutions for residential and commercial projects.',
  keywords:
    'architecture, interior design, Chainpur, residential design, commercial design, sustainable architecture, Jharkhand architecture',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas/chainpur' },
  openGraph: {
    title: 'Architecture & Interior Design Services in Chainpur | Sattva Design',
    description:
      'Expert architectural and interior design services in Chainpur. Combining traditional aesthetics with modern design solutions for residential and commercial projects.',
    url: 'https://sattvadesignconsultancy.com/service-areas/chainpur',
  },
};

export default function Chainpur() {
  // Schema markup for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Sattva Design - Chainpur",
    "image": "https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png",
    "description": "Architectural and interior design firm serving Chainpur in Palamu, Jharkhand, from our head office in Medininagar.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd",
      "addressLocality": "Medininagar",
      "addressRegion": "Jharkhand",
      "postalCode": "822101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.0410025",
      "longitude": "84.0672999"
    },
    "url": "https://sattvadesignconsultancy.com/service-areas/chainpur",
    "email": "sattvadesignconsultancy@gmail.com",
    "telephone": "+917209567678",
    "areaServed": { "@type": "Place", "name": "Chainpur" }
  };

  const faqs = [
    {
      q: 'Does Sattva Design take on projects in Chainpur?',
      a: 'Yes. Chainpur is part of the Palamu district we serve from our head office in Medininagar. We handle homes, commercial spaces and interiors here, with site visits arranged from the Medininagar studio.',
    },
    {
      q: 'What design and architecture services are available for Chainpur?',
      a: 'We offer custom home and villa design, commercial and retail layouts, interior design, Vastu-compliant planning, renovation and remodelling, 3D visualisation and construction management.',
    },
    {
      q: 'Can you handle drawings and building approvals for Chainpur?',
      a: 'Yes. We prepare designed blueprints and estimates and assist with the naksha and building approval process needed before construction starts in Chainpur.',
    },
    {
      q: 'How do I start a project in Chainpur?',
      a: 'Contact our Medininagar office with your plot details and requirements. We discuss the brief, study the site, then move through design, approvals, estimation and construction with you.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architecture & Interior Design in Chainpur
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Houses, commercial buildings and interiors for Chainpur, served from our Medininagar head office
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
              <h2 className="text-3xl font-serif mb-6">Architecture & Design Services in Chainpur</h2>
              <p className="text-gray-600 text-lg">
                Chainpur is a block in the Palamu district, and we serve it from Sattva Design's head office in
                Medininagar. The projects we are usually asked for here are family homes on residential plots, shop
                and commercial fronts, and interior work for houses being rebuilt or extended. Because Medininagar is
                close by, our team can travel to Chainpur for measurements, marking and supervision during
                construction. We take a project from the first plot study and layout through the working drawings,
                building approvals and estimate, and stay involved while it is built so the result matches the
                approved design.
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

        {/* How We Work Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">How We Work on Chainpur Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">1. Consultation & Site Study</h3>
                <p className="text-gray-600">
                  We begin by understanding your plot, budget and how you plan to use the space, then visit the site
                  to check dimensions, orientation and access before any drawing starts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">2. Design, Drawings & Approvals</h3>
                <p className="text-gray-600">
                  We prepare the layout, elevations and working drawings, share 3D views, and put together the
                  blueprints and estimate required for building approval.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">3. Construction Support</h3>
                <p className="text-gray-600">
                  Through construction we coordinate from our Medininagar office with periodic site visits so the
                  work stays true to the approved design up to handover.
                </p>
              </div>
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

        {/* FAQs */}
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

        {/* Contact Form Section */}
        <ContactSection isFullPage={false} />
      </div>
    </>
  );
}
