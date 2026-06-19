import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Architecture & Interior Design Services in Lesliganj | Sattva Design',
  },
  description:
    'Professional architectural and interior design services in Lesliganj. Expert residential and commercial design solutions with local expertise and modern aesthetics.',
  keywords:
    'architecture, interior design, Lesliganj, residential design, commercial design, sustainable architecture, Jharkhand architecture, Lesliganj construction',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas/lesliganj' },
  openGraph: {
    title: 'Architecture & Interior Design Services in Lesliganj | Sattva Design',
    description:
      'Professional architectural and interior design services in Lesliganj. Expert residential and commercial design solutions with local expertise and modern aesthetics.',
    url: 'https://sattvadesignconsultancy.com/service-areas/lesliganj',
  },
};

export default function Lesliganj() {
  // Schema markup for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Sattva Design",
    "image": "https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png",
    "description": "Leading architectural and interior design firm serving Lesliganj, specializing in sustainable and modern design solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd",
      "addressLocality": "Medininagar",
      "addressRegion": "Jharkhand",
      "postalCode": "822101",
      "addressCountry": "IN"
    },
    "url": "https://sattvadesignconsultancy.com/service-areas/lesliganj",
    "email": "sattvadesignconsultancy@gmail.com",
    "telephone": "+917209567678",
    "areaServed": { "@type": "Place", "name": "Lesliganj" },
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
      q: 'Does Sattva Design work in Lesliganj?',
      a: 'Yes. Lesliganj is within the Palamu district that we serve from our head office in Medininagar. We take on residential, commercial and interior projects here, with site visits arranged from the Medininagar studio.',
    },
    {
      q: 'What services can I get for a project in Lesliganj?',
      a: 'We handle custom home and villa design, interior planning, Vastu-compliant layouts, renovation, commercial spaces and full construction management, along with the drawings and approvals needed before building starts.',
    },
    {
      q: 'Can you prepare drawings and naksha for building approval in Lesliganj?',
      a: 'Yes. We prepare designed blueprints and project estimates and assist with the building approval and naksha sanction process for plots in and around Lesliganj.',
    },
    {
      q: 'How do I begin a project in Lesliganj with Sattva Design?',
      a: 'Get in touch with our Medininagar office to share your plot details, budget and requirements. We discuss the brief, visit the site, then move through design, approvals, estimation and construction.',
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
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architecture & Interior Design in Lesliganj
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Homes, commercial spaces and interiors for Lesliganj, designed and delivered from our Medininagar office
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

        {/* About Lesliganj Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Architecture & Design Services in Lesliganj</h2>
              <p className="text-gray-600 text-lg">
                Lesliganj is a block town in the Palamu district, and we serve it from Sattva Design's head office in
                nearby Medininagar. Many of the projects we are approached for here are individual houses on family plots,
                shop and commercial fronts along the main road, and interiors for homes that are being extended or rebuilt.
                Working from Medininagar means our team can reach Lesliganj sites easily for measurement, marking and
                construction supervision. We take each project from the first plot study and layout through the working
                drawings, building approvals and estimate, and stay involved while it is built so the finished space matches
                what was drawn.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Services in Lesliganj</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Architecture</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Modern Home Design</li>
                  <li>• Villa & Bungalow Projects</li>
                  <li>• Renovation Services</li>
                  <li>• Interior Planning</li>
                  <li>• Vastu Compliance</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Projects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retail Spaces</li>
                  <li>• Office Buildings</li>
                  <li>• Educational Institutions</li>
                  <li>• Healthcare Facilities</li>
                  <li>• Mixed-Use Developments</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Specialized Solutions</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Sustainable Design</li>
                  <li>• Green Building</li>
                  <li>• Space Optimization</li>
                  <li>• Project Management</li>
                  <li>• Design Consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">How We Work on Lesliganj Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">1. Consultation & Site Study</h3>
                <p className="text-gray-600">
                  We start by understanding your plot, budget and how you want to use the space, then visit the site to
                  check dimensions, orientation and access before any drawing begins.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">2. Design, Drawings & Approvals</h3>
                <p className="text-gray-600">
                  We prepare the layout, elevations and working drawings, share 3D views so you can picture the result,
                  and put together the blueprints and estimate needed for building approval.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">3. Construction Support</h3>
                <p className="text-gray-600">
                  During construction we coordinate from our Medininagar office with periodic site visits so the work on
                  the ground stays true to the approved design through to handover.
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
