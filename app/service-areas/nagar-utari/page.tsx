import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Architecture & Interior Design in Nagar Utari | Sattva Design',
  },
  description:
    'Architecture and interior design services in Nagar Utari, Garhwa district. Sattva Design plans and builds homes, shops and commercial spaces, served from our Medininagar office.',
  keywords:
    'architect in Nagar Utari, interior design Nagar Utari, house design Nagar Utari, naksha pass Garhwa, architecture firm Garhwa, Sattva Design',
  alternates: {
    canonical: 'https://sattvadesignconsultancy.com/service-areas/nagar-utari',
  },
  openGraph: {
    title: 'Architecture & Interior Design in Nagar Utari | Sattva Design',
    description:
      'Architecture and interior design services in Nagar Utari, Garhwa district. Sattva Design plans and builds homes, shops and commercial spaces, served from our Medininagar office.',
    url: 'https://sattvadesignconsultancy.com/service-areas/nagar-utari',
  },
};

export default function NagarUtari() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ArchitecturalFirm',
    name: 'Sattva Design - Nagar Utari',
    description:
      "Architecture and interior design services in Nagar Utari, Garhwa district, served from Sattva Design's office in Medininagar (Daltonganj).",
    image:
      'https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd',
      addressLocality: 'Medininagar',
      addressRegion: 'Jharkhand',
      postalCode: '822101',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.0410025',
      longitude: '84.0672999',
    },
    telephone: '+917209567678',
    email: 'sattvadesignconsultancy@gmail.com',
    url: 'https://sattvadesignconsultancy.com/service-areas/nagar-utari',
    areaServed: { '@type': 'Place', name: 'Nagar Utari' },
  };

  const faqs = [
    {
      q: 'Do you take on projects in Nagar Utari?',
      a: 'Yes. We serve Nagar Utari from our office in Medininagar (Daltonganj), travelling out for site visits and supervision.',
    },
    {
      q: 'What kinds of buildings do you design in Nagar Utari?',
      a: 'Mainly individual houses, shop-cum-residence buildings and small commercial units, plus interiors and renovations.',
    },
    {
      q: 'Can you handle the building plan and approval for a plot in Nagar Utari?',
      a: 'Yes. We prepare floor plans, elevations and structural drawings and help get them ready for local approval.',
    },
    {
      q: 'How do I begin a project in Nagar Utari?',
      a: 'Contact us with your plot details and requirements and we will arrange a consultation and a site visit.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-100">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">
                  Architecture & Interior Design in Nagar Utari
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Homes, shops and commercial buildings for Nagar Utari, designed from our Medininagar office.
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

        {/* About Nagar Utari Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Architecture &amp; design for Nagar Utari</h2>
              <p className="text-gray-600 text-lg">
                Nagar Utari, in the Garhwa district of Jharkhand, is a town best known locally for
                the Banshidhar temple and as a centre for the surrounding area. Sattva Design serves
                Nagar Utari from our office in Medininagar (Daltonganj). We help families and
                businesses here plan and build, from individual homes and shop-cum-residence
                buildings to small commercial spaces, handling design, structural drawings,
                approvals and interiors from the first sketch through to the finished building.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">How Sattva Design works in Nagar Utari</h2>
              <p className="text-gray-600 text-lg">
                A Nagar Utari project starts with your plot, your budget and how you want to use the
                space. From our Medininagar office we prepare floor plans, elevations and 3D
                visualisations, get the drawings ready for approval, and stay involved through the
                structure and finishing stages. We design for the plot size, local climate and
                practical day-to-day use, using durable, low-maintenance materials that hold up well
                over time.
              </p>
            </div>

            {/* Key Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Architecture</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Modern Home Design</li>
                  <li>• Villa Projects</li>
                  <li>• Housing Developments</li>
                  <li>• Custom Residences</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Design</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retail Spaces</li>
                  <li>• Office Buildings</li>
                  <li>• Community Centers</li>
                  <li>• Mixed-Use Projects</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Specialized Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Sustainable Design</li>
                  <li>• Urban Planning</li>
                  <li>• Interior Solutions</li>
                  <li>• Landscape Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">Working with Sattva Design in Nagar Utari</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Design &amp; Planning</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Floor plans tailored to your plot</li>
                  <li>• Elevations and 3D views</li>
                  <li>• Vastu-aware layouts</li>
                  <li>• Drawings ready for approval</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Build &amp; Supervise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Structural drawings</li>
                  <li>• Material and costing guidance</li>
                  <li>• Construction supervision</li>
                  <li>• Quality checks on site</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-4">Interiors &amp; Finishing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Interior design</li>
                  <li>• Custom furniture and joinery</li>
                  <li>• Renovation and remodelling</li>
                  <li>• Handover-ready finishing</li>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }}
      />
    </>
  );
}
