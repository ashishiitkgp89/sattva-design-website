import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'react-feather';

export const metadata: Metadata = {
  title: {
    absolute: 'Sustainable & Green Architecture in Daltonganj (Medininagar) | Sattva Design',
  },
  description:
    'Leading sustainable architecture services in Daltonganj (Medininagar). Creating eco-friendly buildings that harmonize with nature while meeting modern living standards.',
  keywords:
    'sustainable architecture, green building, eco-friendly design, environmental architecture, Daltonganj, Medininagar, Sattva Design',
  alternates: {
    canonical: 'https://sattvadesignconsultancy.com/services/sustainable-green-architecture-daltonganj-medininagar',
  },
  openGraph: {
    title: 'Sustainable & Green Architecture in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Leading sustainable architecture services in Daltonganj (Medininagar). Creating eco-friendly buildings that harmonize with nature while meeting modern living standards.',
    url: 'https://sattvadesignconsultancy.com/services/sustainable-green-architecture-daltonganj-medininagar',
  },
};

const SustainableGreenArchitectureDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sustainable & Green Architecture in Daltonganj (Medininagar)",
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
    "description": "Eco-friendly architectural solutions in Daltonganj (Medininagar). We design sustainable buildings that minimize environmental impact while maximizing comfort and efficiency.",
    "serviceType": "Residential Architecture"
  };

  const features = [
    "Energy-efficient design principles",
    "Sustainable material selection",
    "Natural lighting optimization",
    "Water conservation systems",
    "Waste reduction strategies",
    "Renewable energy integration"
  ];

  const process = [
    {
      step: 1,
      title: "Environmental Assessment",
      description: "Analyzing site conditions and environmental factors."
    },
    {
      step: 2,
      title: "Sustainable Planning",
      description: "Developing eco-friendly design strategies."
    },
    {
      step: 3,
      title: "Green Material Selection",
      description: "Choosing sustainable and locally sourced materials."
    },
    {
      step: 4,
      title: "Energy Modeling",
      description: "Optimizing energy efficiency through advanced modeling."
    },
    {
      step: 5,
      title: "Implementation",
      description: "Executing the design with sustainable practices."
    },
    {
      step: 6,
      title: "Performance Monitoring",
      description: "Ensuring long-term sustainability goals are met."
    }
  ];

  const faqs = [
    {
      q: "How does green architecture suit the climate of Daltonganj (Medininagar)?",
      a: "We design for the local hot summers and monsoon conditions by prioritising natural ventilation, shading, and daylighting, which keeps interiors comfortable while reducing reliance on mechanical cooling."
    },
    {
      q: "Does a sustainable building cost more to construct?",
      a: "A green design may involve thoughtful upfront choices, but measures such as energy efficiency, natural lighting, and water conservation lower running costs over time, so the building is often more economical across its lifespan."
    },
    {
      q: "Can you use locally sourced materials for my project?",
      a: "Yes. We favour sustainable and locally sourced materials where suitable, which reduces transport impact, supports the regional supply chain, and often improves durability in local conditions."
    },
    {
      q: "Can you integrate solar or other renewable energy systems?",
      a: "Yes. We can plan for renewable energy integration such as rooftop solar from the design stage, positioning and orienting the building so these systems work efficiently once installed."
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
                Sustainable & Green Architecture in Daltonganj (Medininagar)
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Eco-friendly design solutions in Daltonganj (Medininagar)
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
            <span className="text-gray-900">Sustainable & Green Architecture</span>
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

        {/* CTA Section */}
        <div className="bg-green-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Go Green?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss your sustainable building project.
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

export default SustainableGreenArchitectureDaltonganjMedininagar;
