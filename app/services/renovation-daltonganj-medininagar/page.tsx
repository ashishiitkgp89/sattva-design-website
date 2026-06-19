import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'react-feather';

export const metadata: Metadata = {
  title: {
    absolute: 'Renovation Services in Daltonganj (Medininagar) | Sattva Design',
  },
  description:
    'Professional renovation services in Daltonganj (Medininagar). Transforming existing spaces into modern, functional environments.',
  keywords:
    'renovation, remodeling, home improvement, space transformation, Daltonganj, Medininagar, Sattva Design',
  alternates: {
    canonical: 'https://sattvadesignconsultancy.com/services/renovation-daltonganj-medininagar',
  },
  openGraph: {
    title: 'Renovation Services in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Professional renovation services in Daltonganj (Medininagar). Transforming existing spaces into modern, functional environments.',
    url: 'https://sattvadesignconsultancy.com/services/renovation-daltonganj-medininagar',
  },
};

const RenovationDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Renovation Services in Daltonganj (Medininagar)",
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
    "description": "Expert renovation services in Daltonganj (Medininagar). We transform existing spaces into modern, functional, and beautiful environments while preserving their character.",
    "serviceType": "Renovation"
  };

  const features = [
    "Complete home renovations",
    "Kitchen and bathroom remodeling",
    "Space optimization solutions",
    "Structural modifications",
    "Modern amenity integration",
    "Heritage preservation"
  ];

  const process = [
    {
      step: 1,
      title: "Assessment",
      description: "Evaluating existing conditions and requirements."
    },
    {
      step: 2,
      title: "Design Planning",
      description: "Creating renovation concepts and solutions."
    },
    {
      step: 3,
      title: "Material Selection",
      description: "Choosing quality materials and finishes."
    },
    {
      step: 4,
      title: "Execution Strategy",
      description: "Planning the renovation workflow and timeline."
    },
    {
      step: 5,
      title: "Implementation",
      description: "Carrying out renovation work with minimal disruption."
    },
    {
      step: 6,
      title: "Final Inspection",
      description: "Ensuring quality and client satisfaction."
    }
  ];

  const faqs = [
    {
      q: "Do you handle both home and commercial renovations in Daltonganj (Medininagar)?",
      a: "Yes. We take on complete home renovations as well as commercial and office space upgrades across Daltonganj and Medininagar, tailoring the work to how you use the space and your budget."
    },
    {
      q: "Can you renovate without completely demolishing the existing structure?",
      a: "Often, yes. We begin with an assessment of the existing conditions and aim to retain sound structural elements, focusing modifications and finishes where they add the most value while preserving the building's character."
    },
    {
      q: "How do you minimise disruption during a renovation?",
      a: "We plan the renovation workflow and timeline in advance, phase the work where possible, and coordinate closely on site so that day-to-day disturbance to you and your neighbours is kept to a minimum."
    },
    {
      q: "Do you help with selecting materials and finishes?",
      a: "Yes. We guide you through material and finish selection, balancing durability, appearance, and cost so the renovated space looks good and holds up well over time."
    }
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
                Renovation Services in Daltonganj (Medininagar)
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Transform your space in Daltonganj (Medininagar)
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
            <span className="text-gray-900">Renovation Services</span>
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
                      <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
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

        {/* CTA Section */}
        <div className="bg-orange-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Transform Your Space?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss your renovation project.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700"
                >
                  Contact Us
                </Link>
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

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default RenovationDaltonganjMedininagar;
