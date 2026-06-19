import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Vastu-Compliant Architecture in Daltonganj (Medininagar) | Sattva Design',
  },
  description:
    'Professional Vastu-compliant architectural services in Daltonganj (Medininagar). Create harmonious spaces that blend traditional wisdom with modern design.',
  alternates: {
    canonical: 'https://sattvadesignconsultancy.com/services/vastu-compliant-architecture-daltonganj-medininagar',
  },
  openGraph: {
    title: 'Vastu-Compliant Architecture in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Professional Vastu-compliant architectural services in Daltonganj (Medininagar). Create harmonious spaces that blend traditional wisdom with modern design.',
    url: 'https://sattvadesignconsultancy.com/services/vastu-compliant-architecture-daltonganj-medininagar',
  },
};

const VastuCompliantArchitectureDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vastu-Compliant Architecture in Daltonganj (Medininagar)",
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
    "description": "Expert Vastu-compliant architectural services combining traditional principles with modern design for harmonious living and working spaces."
  };

  const features = [
    {
      title: "Vastu Consultation",
      description: "Expert guidance on Vastu principles and implementation"
    },
    {
      title: "Site Analysis",
      description: "Comprehensive evaluation of plot orientation and surroundings"
    },
    {
      title: "Space Planning",
      description: "Room layouts aligned with Vastu guidelines"
    },
    {
      title: "Element Integration",
      description: "Proper placement of five elements in design"
    },
    {
      title: "Modern Adaptation",
      description: "Blending Vastu principles with contemporary architecture"
    },
    {
      title: "Energy Flow",
      description: "Optimized design for positive energy circulation"
    }
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "Understanding client requirements and site conditions"
    },
    {
      title: "Vastu Analysis",
      description: "Detailed assessment of Vastu considerations"
    },
    {
      title: "Design Development",
      description: "Creating Vastu-aligned architectural plans"
    },
    {
      title: "Element Integration",
      description: "Incorporating the five elements harmoniously"
    },
    {
      title: "Implementation",
      description: "Ensuring Vastu compliance during construction"
    },
    {
      title: "Final Verification",
      description: "Confirming adherence to Vastu principles"
    }
  ];

  const faqs = [
    {
      q: "Can you design a Vastu-compliant home in Daltonganj (Medininagar) on my existing plot?",
      a: "Yes. We assess your plot's orientation and surroundings in Daltonganj or Medininagar and develop a layout that follows Vastu principles as closely as the site allows, while keeping the home practical and comfortable."
    },
    {
      q: "Do I have to compromise on modern design to follow Vastu?",
      a: "No. Our approach blends Vastu guidelines with contemporary architecture, so you get a home that is modern and aesthetically pleasing while also respecting directional and elemental principles."
    },
    {
      q: "Can you apply Vastu to an existing building without major demolition?",
      a: "Often, yes. We analyse the existing structure and suggest practical adjustments to layout, room use, and openings that improve Vastu alignment with minimal structural changes wherever possible."
    },
    {
      q: "Is Vastu consultation available for commercial spaces too?",
      a: "Yes. We provide Vastu-compliant design for offices, shops, and other commercial spaces, arranging entrances, workstations, and key zones to support a positive and productive environment."
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
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705"
            alt="Vastu-Compliant Architecture"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Vastu-Compliant Architecture in Daltonganj (Medininagar)
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
              <span className="text-gray-900">Vastu-Compliant Architecture</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Harmonious Living Through Vastu</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we specialize in creating spaces that harmoniously
                blend Vastu principles with modern architectural design. Our approach
                ensures that your space not only looks beautiful but also promotes
                positive energy and well-being.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We combine traditional Vastu wisdom with contemporary architectural
                practices to create spaces that are both aesthetically pleasing and
                energetically balanced. Our designs consider the five elements and
                their influence on your living or working environment.
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
            <h2 className="text-3xl font-serif mb-8 text-center">Our Design Process</h2>
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

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-lg text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Ready to Create a Harmonious Space?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your Vastu-compliant architectural project in Daltonganj (Medininagar).
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
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

          {/* Contact Section */}
          <ContactSection isFullPage={false} />
        </div>
      </div>
    </>
  );
};

export default VastuCompliantArchitectureDaltonganjMedininagar;
