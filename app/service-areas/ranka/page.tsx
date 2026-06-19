import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Sattva Design - Premier Architecture & Interior Design in Ranka',
  },
  description:
    "Transform your space with Sattva Design's expert architectural and interior design services in Ranka. Specializing in sustainable, modern design solutions. Contact us for a consultation.",
  keywords:
    'architecture firm Ranka, interior design Ranka, sustainable architecture, modern home design, commercial architecture, Jharkhand architects, luxury interior design, green building',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas/ranka' },
  openGraph: {
    title: 'Architecture & Interior Design in Ranka | Sattva Design',
    description:
      "Architecture, interior design and building-approval services for Ranka, Garhwa district, delivered from Sattva Design's Medininagar office. Custom homes, commercial spaces and naksha pass support.",
    url: 'https://sattvadesignconsultancy.com/service-areas/ranka',
  },
};

export default function Ranka() {
  // Schema markup for the firm serving Ranka
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Sattva Design - Ranka",
    "image": "https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png",
    "description": "Architecture and interior design firm serving Ranka in Garhwa district, working from Sattva Design's Medininagar office.",
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
    "url": "https://sattvadesignconsultancy.com/service-areas/ranka",
    "telephone": "+917209567678",
    "email": "sattvadesignconsultancy@gmail.com",
    "areaServed": {
      "@type": "Place",
      "name": "Ranka"
    }
  };

  const faqs = [
    {
      q: "Can Sattva Design take on a project in Ranka from the Medininagar office?",
      a: "Yes. Ranka is a block town in Garhwa district within our regular working area, and we serve it from our Medininagar office. We plan site visits ahead of time so a single trip covers measurements, the brief and a look at the plot before we begin drawing.",
    },
    {
      q: "What kinds of buildings do you design in Ranka?",
      a: "Mostly individual family homes and small shops or commercial buildings, plus interior work for completed structures. Designs are worked out around the plot size, road access and budget rather than a fixed template.",
    },
    {
      q: "Do you help get building plans approved in Ranka?",
      a: "Yes. We prepare measured drawings and sanction-ready blueprints and help with the documentation needed for building approval, so you have an approvable plan before construction starts.",
    },
    {
      q: "How do I begin a project in Ranka?",
      a: "Share your plot details and a rough idea of what you want to build by phone or email. We talk through the brief and budget, arrange a site visit, then move into concept design, working drawings and approvals.",
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
                  Architecture & Interior Design in Ranka
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  House plans, interiors and building approvals for Ranka in Garhwa district, served from our Medininagar office
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

        {/* About Ranka Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Designing and building in Ranka</h2>
              <p className="text-gray-600 text-lg">
                Ranka is a block town in Garhwa district, and the work we are asked to do here is mostly
                practical and home-focused: a house on a family plot, a shop along the road, or interiors
                for a building that is already up. We serve Ranka from our Medininagar office and plan
                our visits so that one trip covers measuring the plot, understanding access and levels, and
                talking through the brief and budget before any drawing begins.
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
                Once we understand the plot and the brief, the project moves through clear stages: concept
                layouts and 3D views to settle the arrangement, then detailed working drawings, then
                sanction-ready blueprints for building approval. For Ranka clients we keep this coordinated
                from the studio and stay in touch with the contractor through construction, so what is agreed
                on paper is what gets built. The result is a plan that is approvable, buildable and matched to
                the budget.
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
            <h2 className="text-3xl font-serif mb-8">What we design in Ranka</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Homes</h3>
                <p className="text-gray-600">
                  Plans, elevations and interiors for individual houses, worked out around the plot size,
                  road access and the family's budget.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Shops and small commercial</h3>
                <p className="text-gray-600">
                  Roadside shops and small commercial buildings planned for practical, everyday use in a
                  block town.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Drawings and approvals</h3>
                <p className="text-gray-600">
                  Measured drawings, 3D views and sanction-ready blueprints for building approval, with
                  support through documentation and construction.
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
