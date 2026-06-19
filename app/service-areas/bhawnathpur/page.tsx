import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Sattva Design - Premier Architecture & Interior Design in Bhawnathpur',
  },
  description:
    "Transform your space with Sattva Design's expert architectural and interior design services in Bhawnathpur. Specializing in sustainable, modern design solutions. Contact us for a consultation.",
  keywords:
    'architecture firm Bhawnathpur, interior design Bhawnathpur, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas/bhawnathpur' },
  openGraph: {
    title: 'Architecture & Interior Design in Bhawnathpur | Sattva Design',
    description:
      "Architecture, interior design and building-approval services for Bhawnathpur, Garhwa district, delivered from Sattva Design's Medininagar office. Homes, commercial and staff buildings.",
    url: 'https://sattvadesignconsultancy.com/service-areas/bhawnathpur',
  },
};

export default function Bhawnathpur() {
  // Schema markup for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Sattva Design",
    "image": "https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png",
    "description": "Leading architectural and interior design firm serving Bhawnathpur, specializing in sustainable and modern design solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd",
      "addressLocality": "Medininagar",
      "addressRegion": "Jharkhand",
      "postalCode": "822101",
      "addressCountry": "IN"
    },
    "url": "https://sattvadesignconsultancy.com/service-areas/bhawnathpur",
    "telephone": "+917209567678",
    "email": "sattvadesignconsultancy@gmail.com",
    "areaServed": {
      "@type": "Place",
      "name": "Bhawnathpur"
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
      q: "Can Sattva Design handle a building project in Bhawnathpur from Medininagar?",
      a: "Yes. Bhawnathpur lies in Garhwa district, within our regular working area, and we serve it from our Medininagar office. We plan site visits in advance, take measurements on the plot and then do the design and drawing work from our studio.",
    },
    {
      q: "What types of projects do you take on in Bhawnathpur?",
      a: "Mostly individual houses and shops or small commercial buildings, along with interior work for completed structures. Because Bhawnathpur is part of a mining and industrial belt, we also get enquiries for quarters and small staff or office buildings, which we design around the intended use and budget.",
    },
    {
      q: "Do you prepare drawings for building approval in Bhawnathpur?",
      a: "Yes. We prepare measured drawings and sanction-ready blueprints and help you put together the paperwork needed for building approval before construction begins.",
    },
    {
      q: "How do I begin a project in Bhawnathpur?",
      a: "Share your plot details and a rough idea of what you want to build by phone or email. We talk through the brief and budget, arrange a site visit, and then move into concept design, working drawings and approvals.",
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
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architecture & Interior Design in Bhawnathpur
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Homes, commercial buildings and approvals for Bhawnathpur in Garhwa district, handled from our Medininagar office
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
              <h2 className="text-3xl font-serif mb-6">Architecture and design services for Bhawnathpur</h2>
              <p className="text-gray-600 text-lg">
                Bhawnathpur is a town in Garhwa district that sits in a mining and industrial belt, and that
                mix shows up in the work we are asked to do here, from family homes and roadside shops to
                small staff quarters and office buildings. We serve Bhawnathpur from our Medininagar office, visiting the plot to take measurements and understand the site, then preparing the
                layouts, drawings and approvals from our studio and staying involved through construction.
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
            <h2 className="text-3xl font-serif mb-8">What we design in Bhawnathpur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Homes</h3>
                <p className="text-gray-600">
                  Plans and elevations for individual houses, worked out around the plot size, road access
                  and the family's budget, with interiors handled to the same brief.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Commercial and workplace</h3>
                <p className="text-gray-600">
                  Shops, small commercial buildings and staff or office spaces suited to a working,
                  industrial town, planned for practical day-to-day use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Drawings and approvals</h3>
                <p className="text-gray-600">
                  Measured drawings, 3D views and sanction-ready blueprints for building approval, with
                  support through the documentation and construction stages.
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
