import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: { absolute: 'Office & Commercial Renovation in Daltonganj (Medininagar) | Sattva Design' },
  description:
    'Professional office and commercial renovation services in Daltonganj (Medininagar). Transform your workspace with our expert renovation solutions.',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/office-commercial-renovation-daltonganj-medininagar' },
  openGraph: {
    title: 'Office & Commercial Renovation in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Professional office and commercial renovation services in Daltonganj (Medininagar). Transform your workspace with our expert renovation solutions.',
    url: 'https://sattvadesignconsultancy.com/services/office-commercial-renovation-daltonganj-medininagar',
  },
};

const faqs = [
  {
    q: "Can you renovate our office without shutting down operations?",
    a: "Yes. We plan renovations in phases and schedule disruptive work around your working hours wherever possible, so your team can keep functioning while the space is being upgraded.",
  },
  {
    q: "Do you handle both small offices and large commercial spaces in Daltonganj (Medininagar)?",
    a: "Yes. We renovate compact offices, clinics and shops as well as larger commercial floors and showrooms, adapting the scope to the size and use of your space.",
  },
  {
    q: "How long does an office renovation take?",
    a: "It depends on the size of the space and the extent of the changes. A cosmetic refresh is quick, while a full layout overhaul takes longer. We share a clear timeline after assessing the existing space.",
  },
  {
    q: "Will the renovation comply with local building codes?",
    a: "Yes. We design and execute renovations with applicable building codes and safety regulations in mind, and coordinate the necessary approvals so your workspace stays compliant.",
  },
];

const OfficeCommercialRenovationDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Office & Commercial Renovation in Daltonganj (Medininagar)",
    "provider": {
      "@type": "Organization",
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
    "description": "Professional office and commercial renovation services transforming workspaces for enhanced functionality and aesthetics."
  };

  const features = [
    {
      title: "Space Planning",
      description: "Optimized layout design for maximum efficiency"
    },
    {
      title: "Modern Upgrades",
      description: "Integration of contemporary design elements and technology"
    },
    {
      title: "Minimal Disruption",
      description: "Efficient renovation process with minimal business interruption"
    },
    {
      title: "Sustainable Solutions",
      description: "Eco-friendly materials and energy-efficient improvements"
    },
    {
      title: "Code Compliance",
      description: "Adherence to local building codes and regulations"
    },
    {
      title: "Quality Finishes",
      description: "Premium materials and expert craftsmanship"
    }
  ];

  const process = [
    {
      title: "Initial Assessment",
      description: "Evaluating current space and understanding renovation goals"
    },
    {
      title: "Design Development",
      description: "Creating detailed renovation plans and specifications"
    },
    {
      title: "Budget Planning",
      description: "Developing cost estimates and timeline"
    },
    {
      title: "Project Scheduling",
      description: "Coordinating renovation phases to minimize disruption"
    },
    {
      title: "Implementation",
      description: "Executing renovation work with skilled professionals"
    },
    {
      title: "Final Inspection",
      description: "Quality assurance and project completion verification"
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
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
            alt="Office & Commercial Renovation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Office & Commercial Renovation in Daltonganj (Medininagar)
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
              <span className="text-gray-900">Office & Commercial Renovation</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Transform Your Workspace</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we specialize in transforming commercial spaces
                through expert renovation services. Our team combines functionality
                with modern design to create workspaces that inspire productivity
                and reflect your brand identity.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-8">
                We understand that renovating a commercial space requires careful
                planning and execution. Our approach focuses on minimizing business
                disruption while delivering high-quality results that meet your
                timeline and budget requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-serif mb-4">Service Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-serif mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8 text-center">Our Renovation Process</h2>
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
            <h2 className="text-3xl font-serif mb-4">Ready to Transform Your Space?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your office or commercial renovation project in Daltonganj (Medininagar).
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

export default OfficeCommercialRenovationDaltonganjMedininagar;
