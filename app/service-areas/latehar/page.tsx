import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Sattva Design - Premier Architecture & Interior Design in Latehar',
  },
  description:
    "Experience exceptional architectural and interior design services in Latehar with Sattva Design. We specialize in creating sustainable, culturally-rooted spaces that reflect the region's unique character.",
  keywords:
    'architecture firm Latehar, interior design Latehar, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas/latehar' },
  openGraph: {
    title: 'Architecture & Interior Design in Latehar | Sattva Design',
    description:
      "Architecture, interior design and building-approval services for Latehar town and district, delivered from Sattva Design's Medininagar head office. Custom homes, commercial spaces and naksha pass support.",
    url: 'https://sattvadesignconsultancy.com/service-areas/latehar',
  },
};

export default function Latehar() {
  // Schema markup for the firm serving Latehar
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Sattva Design - Latehar",
    "image": "https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png",
    "description": "Architecture and interior design firm serving Latehar town and district, working from Sattva Design's Medininagar head office.",
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
    "url": "https://sattvadesignconsultancy.com/service-areas/latehar",
    "telephone": "+917209567678",
    "email": "sattvadesignconsultancy@gmail.com",
    "areaServed": {
      "@type": "Place",
      "name": "Latehar"
    }
  };

  const faqs = [
    {
      q: "Does Sattva Design serve Latehar from the Medininagar office?",
      a: "Yes. Latehar is the headquarters of the neighbouring district, carved out of the Palamu area where our office is based, so it is well within our regular working area. We plan site visits in advance so a single trip covers measurements, the brief and a look at the plot before we start drawing.",
    },
    {
      q: "What kinds of projects do you design in Latehar?",
      a: "As a district town set in a forested, hilly part of Jharkhand, Latehar brings a mix of family homes, shops and small commercial or institutional buildings. We design each one around the specific plot, the terrain and the budget rather than a fixed template.",
    },
    {
      q: "Can you help with building approval and naksha pass in Latehar?",
      a: "Yes. We prepare measured drawings and sanction-ready blueprints and guide you through the documentation needed for building approval, so you have an approvable plan before construction begins.",
    },
    {
      q: "How do we start a project in Latehar?",
      a: "Get in touch by phone or email with your plot details and what you have in mind. We discuss the brief and budget, arrange a site visit, then move through concept design, working drawings and approvals before construction starts.",
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
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architecture & Interior Design in Latehar
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  House plans, commercial buildings, interiors and approvals for Latehar, served from our Medininagar head office
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
              <h2 className="text-3xl font-serif mb-6">Designing and building in Latehar</h2>
              <p className="text-gray-600 text-lg">
                Latehar is the headquarters of Latehar district, a forested, hilly part of Jharkhand that was
                carved out of the Palamu region where our office is based. That setting matters in practice:
                sloping or uneven plots, local stone and timber, and a climate that rewards good orientation,
                ventilation and shade. We serve Latehar from our Medininagar head office, visiting the site to
                read the ground and the access before working up plans that suit the plot rather than fighting it.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">From design to approval to build</h2>
              <p className="text-gray-600 text-lg">
                After the site visit, the project moves through clear stages: concept layouts and 3D views to
                agree the arrangement, then detailed working drawings, then sanction-ready blueprints for
                building approval. For Latehar clients we keep this coordinated from the studio and stay in
                touch with the contractor through construction, paying particular attention to foundations and
                levels where the ground is uneven. The aim throughout is a plan that is approvable, buildable
                and matched to the budget.
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
            <h2 className="text-3xl font-serif mb-8">What we design in Latehar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Homes for varied terrain</h3>
                <p className="text-gray-600">
                  Houses and villas planned for the plot in hand, including sloping or uneven ground, with
                  layouts that make the most of light, air and outlook.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Commercial and institutional</h3>
                <p className="text-gray-600">
                  Shops, offices and small commercial or institutional buildings suited to a district town,
                  planned for practical day-to-day use.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Drawings and approvals</h3>
                <p className="text-gray-600">
                  Measured drawings, 3D visualisation and sanction-ready blueprints for building approval,
                  with support through documentation and construction.
                </p>
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
