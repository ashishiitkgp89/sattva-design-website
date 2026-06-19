import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Architecture & Interior Design in Herhanj | Sattva Design',
  },
  description:
    'Architecture and interior design services in Herhanj, Latehar district. Sattva Design plans and builds practical, durable homes and commercial spaces, served from our Medininagar head office.',
  keywords:
    'architect in Herhanj, interior design Herhanj, house design Herhanj, naksha pass Herhanj, architecture firm Latehar, Sattva Design',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/service-areas/herhanj' },
  openGraph: {
    title: 'Architecture & Interior Design in Herhanj | Sattva Design',
    description:
      'Architecture and interior design services in Herhanj, Latehar district. Sattva Design plans and builds practical, durable homes and commercial spaces, served from our Medininagar head office.',
    url: 'https://sattvadesignconsultancy.com/service-areas/herhanj',
  },
};

export default function Herhanj() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ArchitecturalFirm',
    name: 'Sattva Design - Herhanj',
    description:
      "Architecture and interior design services in Herhanj, Latehar district, served from Sattva Design's head office in Medininagar (Daltonganj).",
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
    url: 'https://sattvadesignconsultancy.com/service-areas/herhanj',
    areaServed: { '@type': 'Place', name: 'Herhanj' },
  };

  const faqs = [
    {
      q: 'Does Sattva Design serve Herhanj?',
      a: 'Yes. We cover Herhanj from our head office in Medininagar (Daltonganj), travelling out for site visits and construction supervision.',
    },
    {
      q: 'What types of projects do you handle in Herhanj?',
      a: 'Mainly individual homes, home extensions and small commercial or roadside buildings, plus interiors and renovations.',
    },
    {
      q: 'Can you prepare the building plan for a Herhanj plot?',
      a: 'Yes. We prepare floor plans, elevations and structural drawings and help get them ready for local approval.',
    },
    {
      q: 'How do consultations work for Herhanj clients?',
      a: 'Share your plot details and requirements by phone or email and we will arrange a meeting and a visit to the site.',
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
                  Architecture & Interior Design in Herhanj
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  Practical, well-built homes and commercial spaces for Herhanj, designed from our Medininagar head office.
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

        {/* About Herhanj Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Architecture &amp; design for Herhanj</h2>
              <p className="text-gray-600 text-lg">
                Herhanj is a block in the Latehar district of Jharkhand, a largely rural area where
                most building is individual homes on family land along with small roadside
                commercial spaces. Sattva Design serves Herhanj from our head office in Medininagar
                (Daltonganj). We focus on practical, durable designs that suit the plot, the local
                climate and a realistic budget, taking a project from the first sketch through
                structural drawings, approvals and finishing.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-serif mb-6">Designing and building in Herhanj</h2>
              <p className="text-gray-600 text-lg">
                A Herhanj project usually begins with us understanding the plot, the family's needs
                and the budget. From our Medininagar office we prepare floor plans, elevations and
                3D views, get the drawings ready for approval, and coordinate the structure and
                interior work. We pay attention to ventilation, daylight and low-maintenance
                materials so the finished building is comfortable and easy to look after for years
                to come.
              </p>
            </div>

            {/* Key Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Residential Architecture</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Custom Home Design</li>
                  <li>• Rural Housing Solutions</li>
                  <li>• Modern Residences</li>
                  <li>• Home Extensions</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Commercial Projects</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Retail Design</li>
                  <li>• Office Spaces</li>
                  <li>• Community Centers</li>
                  <li>• Agricultural Buildings</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif mb-4">Specialized Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Sustainable Design</li>
                  <li>• Rural Development</li>
                  <li>• Space Planning</li>
                  <li>• Green Building</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif mb-8">Working with Sattva Design in Herhanj</h2>
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
