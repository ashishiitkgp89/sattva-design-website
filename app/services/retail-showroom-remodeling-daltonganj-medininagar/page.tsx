import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Retail & Showroom Remodeling in Daltonganj (Medininagar) | Sattva Design',
  },
  description:
    'Professional retail and showroom remodeling services in Daltonganj (Medininagar). Transform your retail space for enhanced customer experience.',
  alternates: {
    canonical: 'https://sattvadesignconsultancy.com/services/retail-showroom-remodeling-daltonganj-medininagar',
  },
  openGraph: {
    title: 'Retail & Showroom Remodeling in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Professional retail and showroom remodeling services in Daltonganj (Medininagar). Transform your retail space for enhanced customer experience.',
    url: 'https://sattvadesignconsultancy.com/services/retail-showroom-remodeling-daltonganj-medininagar',
  },
};

const RetailShowroomRemodelingDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retail & Showroom Remodeling in Daltonganj (Medininagar)",
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
    "description": "Expert retail and showroom remodeling services creating engaging shopping environments that enhance customer experience and boost sales."
  };

  const features = [
    {
      title: "Visual Merchandising",
      description: "Strategic display design to showcase products effectively"
    },
    {
      title: "Customer Flow",
      description: "Optimized layout for seamless customer navigation"
    },
    {
      title: "Brand Integration",
      description: "Design elements that reflect your brand identity"
    },
    {
      title: "Lighting Design",
      description: "Enhanced product visibility and ambiance creation"
    },
    {
      title: "Storage Solutions",
      description: "Efficient inventory management systems"
    },
    {
      title: "Modern Fixtures",
      description: "Contemporary display units and fixtures"
    }
  ];

  const process = [
    {
      title: "Space Analysis",
      description: "Evaluating current layout and identifying opportunities"
    },
    {
      title: "Design Concept",
      description: "Creating innovative retail design solutions"
    },
    {
      title: "Material Selection",
      description: "Choosing durable and aesthetically pleasing materials"
    },
    {
      title: "Project Planning",
      description: "Detailed timeline and execution strategy"
    },
    {
      title: "Construction",
      description: "Professional remodeling with minimal disruption"
    },
    {
      title: "Final Setup",
      description: "Visual merchandising and store preparation"
    }
  ];

  const faqs = [
    {
      q: "Can you remodel my shop while it stays open in Daltonganj (Medininagar)?",
      a: "In many cases yes. We plan the remodeling in phases and schedule disruptive work for off-peak hours where possible, so your store can keep operating and serving customers during the upgrade."
    },
    {
      q: "How does a remodel help increase sales in my showroom?",
      a: "By improving customer flow, visual merchandising, lighting, and display fixtures, we make products easier to find and more appealing, which encourages browsing and supports better conversion and sales."
    },
    {
      q: "Will the new design reflect my brand identity?",
      a: "Yes. We integrate your brand colours, signage, and overall identity into the layout and fixtures so the remodeled showroom feels consistent with how you want customers to perceive your business."
    },
    {
      q: "Do you provide storage and inventory solutions within the remodel?",
      a: "Yes. We design efficient storage and back-of-house areas alongside the customer-facing space so inventory is well organised without taking away from the selling floor."
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
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Retail & Showroom Remodeling"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Retail & Showroom Remodeling in Daltonganj (Medininagar)
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
              <span className="text-gray-900">Retail & Showroom Remodeling</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Transform Your Retail Space</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we understand that your retail space is more than
                just a store – it's an experience for your customers. Our remodeling
                services focus on creating engaging environments that enhance customer
                interaction and boost sales performance.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We specialize in creating retail environments that combine
                functionality with aesthetic appeal. Our designs focus on
                maximizing space utilization while ensuring your products are
                displayed in the most effective way possible.
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
            <h2 className="text-3xl font-serif mb-8 text-center">Our Remodeling Process</h2>
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
            <h2 className="text-3xl font-serif mb-4">Ready to Enhance Your Retail Space?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your retail or showroom remodeling project in Daltonganj (Medininagar).
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

export default RetailShowroomRemodelingDaltonganjMedininagar;
