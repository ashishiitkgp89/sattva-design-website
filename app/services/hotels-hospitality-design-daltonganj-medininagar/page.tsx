import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: { absolute: 'Hotels & Hospitality Design in Daltonganj (Medininagar) | Sattva Design' },
  description:
    'Expert hotel and hospitality design services in Daltonganj (Medininagar). Create exceptional guest experiences through innovative architectural solutions.',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/hotels-hospitality-design-daltonganj-medininagar' },
  openGraph: {
    title: 'Hotels & Hospitality Design in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Expert hotel and hospitality design services in Daltonganj (Medininagar). Create exceptional guest experiences through innovative architectural solutions.',
    url: 'https://sattvadesignconsultancy.com/services/hotels-hospitality-design-daltonganj-medininagar',
  },
};

const faqs = [
  {
    q: "Do you design boutique hotels as well as larger resorts in Daltonganj (Medininagar)?",
    a: "Yes. We work on a range of hospitality projects, from compact boutique hotels and guest houses to full-service hotels and resorts, shaping each design around your brand and target guests.",
  },
  {
    q: "Can you handle both the architecture and the interiors of a hotel?",
    a: "Yes. We provide an integrated service covering the building, guest rooms, lobby, dining and amenity areas, so the architecture and interiors work together as one cohesive guest experience.",
  },
  {
    q: "How do you balance guest comfort with smooth hotel operations?",
    a: "We plan the guest journey and the back-of-house service flow side by side, separating guest and staff circulation, positioning service areas efficiently and designing rooms for comfort while keeping operations practical.",
  },
  {
    q: "What does hotel and hospitality design cost in Daltonganj (Medininagar)?",
    a: "It depends on the number of keys, the standard of finishes and the amenities you want. We prepare a tailored estimate after discussing your concept and scope during the initial consultation.",
  },
];

const HotelsHospitalityDesignDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotels & Hospitality Design in Daltonganj (Medininagar)",
    "provider": {
      "@type": "ArchitecturalFirm",
      "name": "Sattva Design",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd",
        "addressLocality": "Medininagar",
        "addressRegion": "Jharkhand",
        "postalCode": "822101",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Daltonganj (Medininagar)",
    "description": "Comprehensive hotel and hospitality design services in Daltonganj (Medininagar), creating memorable guest experiences through innovative architecture and interior solutions."
  };

  const features = [
    "Guest Room Design & Layout",
    "Lobby & Reception Areas",
    "Restaurant & Dining Spaces",
    "Conference & Event Facilities",
    "Recreational Amenities",
    "Spa & Wellness Centers",
    "Outdoor Spaces & Landscaping",
    "Service Areas Optimization"
  ];

  const process = [
    {
      title: "Concept Development",
      description: "Creating a unique hospitality concept aligned with your brand and target market"
    },
    {
      title: "Space Programming",
      description: "Optimizing space allocation for various hotel functions and amenities"
    },
    {
      title: "Design Planning",
      description: "Developing detailed architectural and interior design schemes"
    },
    {
      title: "Guest Experience",
      description: "Focusing on circulation, comfort, and memorable touchpoints"
    },
    {
      title: "Technical Integration",
      description: "Incorporating modern hospitality systems and technologies"
    },
    {
      title: "Project Execution",
      description: "Managing construction and implementation of design elements"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3"
            alt="Hotel Design"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Hotels & Hospitality Design in Daltonganj (Medininagar)
              </h1>
              <p className="text-xl">Daltonganj (Medininagar)</p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/service-areas/daltonganj-medininagar" className="hover:text-gray-900">
                Daltonganj (Medininagar)
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Hotels & Hospitality Design</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Creating Exceptional Hospitality Spaces</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we understand that successful hospitality design goes beyond
                aesthetics. Our comprehensive approach combines beautiful architecture with
                functional efficiency to create spaces that delight guests while optimizing
                operational flow for staff.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We specialize in creating hospitality environments that leave lasting impressions.
                From boutique hotels to full-service resorts, our designs focus on maximizing guest
                comfort while ensuring operational excellence. We consider every aspect of the guest
                journey to create spaces that are both welcoming and efficient.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-serif mb-4">Service Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-2xl font-serif text-gray-400 mb-2">{index + 1}</div>
                  <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

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

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-lg text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Ready to Create Your Hospitality Project?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your hotel or hospitality project in Daltonganj (Medininagar).
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Contact Section */}
          <ContactSection isFullPage={false} />
        </div>
      </div>
    </>
  );
};

export default HotelsHospitalityDesignDaltonganjMedininagar;
