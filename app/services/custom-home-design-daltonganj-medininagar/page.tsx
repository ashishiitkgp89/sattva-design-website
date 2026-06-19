import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'react-feather';

export const metadata: Metadata = {
  title: { absolute: 'Custom Home Design in Daltonganj (Medininagar) | Sattva Design' },
  description: 'Transform your dream home into reality with our custom home design services in Daltonganj (Medininagar). Expert architects creating personalized living spaces.',
  keywords: 'custom home design, residential architecture, house design, Daltonganj, Medininagar, Sattva Design',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/custom-home-design-daltonganj-medininagar' },
  openGraph: {
    title: 'Custom Home Design in Daltonganj (Medininagar) | Sattva Design',
    description: 'Transform your dream home into reality with our custom home design services in Daltonganj (Medininagar). Expert architects creating personalized living spaces.',
    url: 'https://sattvadesignconsultancy.com/services/custom-home-design-daltonganj-medininagar',
  },
};

const CustomHomeDesignDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Home Design in Daltonganj (Medininagar)",
    "provider": {
      "@type": "Organization",
      "name": "Sattva Design",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Daltonganj",
        "addressRegion": "Jharkhand",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Daltonganj (Medininagar)",
    "description": "Expert custom home design services in Daltonganj (Medininagar). We create personalized architectural solutions that perfectly match your lifestyle and preferences.",
    "serviceType": "Residential Architecture"
  };

  const features = [
    "Personalized design consultations",
    "3D visualization and walkthroughs",
    "Sustainable design solutions",
    "Local building code compliance",
    "Detailed construction documentation",
    "Cost-effective design strategies"
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your vision, requirements, and budget constraints."
    },
    {
      step: 2,
      title: "Site Analysis",
      description: "Thorough evaluation of your plot and local conditions."
    },
    {
      step: 3,
      title: "Concept Design",
      description: "Development of initial design concepts and space planning."
    },
    {
      step: 4,
      title: "Design Development",
      description: "Refinement of chosen concept with detailed specifications."
    },
    {
      step: 5,
      title: "Documentation",
      description: "Preparation of construction documents and permits."
    },
    {
      step: 6,
      title: "Construction Support",
      description: "Guidance and supervision during the building phase."
    }
  ];

  const faqs = [
    {
      q: "How much does custom home design cost in Daltonganj (Medininagar)?",
      a: "Design fees depend on the size of the home, the level of detail, and the services included, such as 3D walkthroughs or construction documentation. We discuss your budget early and provide a clear fee proposal.",
    },
    {
      q: "How long does it take to design a custom home?",
      a: "The design phase varies with the complexity of the home and the speed of approvals. It typically moves through consultation, concept, design development, and documentation. We share a realistic timeline at the start.",
    },
    {
      q: "Do you help with local building codes and permits?",
      a: "Yes. We ensure your design complies with local building codes and prepare the construction documents and drawings needed for permits, guiding you through the approval requirements.",
    },
    {
      q: "Why choose Sattva Design for custom home design in Medininagar?",
      a: "As local architects in Medininagar, we understand the plots, climate, and lifestyle of the Daltonganj region. We create personalised, practical homes and support you from the first sketch through construction.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Custom Home Design in Daltonganj (Medininagar)
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Creating your dream home in Daltonganj (Medininagar)
              </p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/service-areas/daltonganj-medininagar" className="hover:text-gray-900">Daltonganj Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Custom Home Design</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-8">
                {process.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                          <span className="text-white font-medium">{step.step}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                        <p className="mt-1 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
        <div className="bg-green-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Start Your Dream Home Project?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today for a free consultation and let's bring your vision to life.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default CustomHomeDesignDaltonganjMedininagar;
