import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'react-feather';

export const metadata: Metadata = {
  title: { absolute: 'Building Approvals in Daltonganj (Medininagar) | Sattva Design' },
  description: 'Expert building approval services in Daltonganj (Medininagar). Ensuring smooth regulatory compliance for your construction projects.',
  keywords: 'building approvals, construction permits, regulatory compliance, NOC, Daltonganj, Medininagar, Sattva Design',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/building-approvals-daltonganj-medininagar' },
  openGraph: {
    title: 'Building Approvals in Daltonganj (Medininagar) | Sattva Design',
    description: 'Expert building approval services in Daltonganj (Medininagar). Ensuring smooth regulatory compliance for your construction projects.',
    url: 'https://sattvadesignconsultancy.com/services/building-approvals-daltonganj-medininagar',
  },
};

const BuildingApprovalsDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Building Approvals in Daltonganj (Medininagar)",
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
    "description": "Professional building approval services in Daltonganj (Medininagar). We handle all aspects of building permits and regulatory compliance for your construction projects.",
    "serviceType": "Building Approvals"
  };

  const features = [
    "Building permit applications",
    "Regulatory compliance checks",
    "Documentation preparation",
    "Authority liaison services",
    "NOC procurement assistance",
    "Compliance monitoring"
  ];

  const process = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "Reviewing project requirements and regulations."
    },
    {
      step: 2,
      title: "Documentation",
      description: "Preparing necessary drawings and paperwork."
    },
    {
      step: 3,
      title: "Compliance Check",
      description: "Ensuring adherence to building codes and regulations."
    },
    {
      step: 4,
      title: "Application Filing",
      description: "Submitting applications to relevant authorities."
    },
    {
      step: 5,
      title: "Follow-up",
      description: "Tracking application progress and addressing queries."
    },
    {
      step: 6,
      title: "Approval Securing",
      description: "Obtaining final approvals and certificates."
    }
  ];

  const faqs = [
    {
      q: "What documents are needed for building approval in Daltonganj (Medininagar)?",
      a: "Typically you will need proof of land ownership, the approved site plan, architectural drawings, structural details, and identity documents. Exact requirements vary by plot location and project type, so we review your case first and prepare a complete checklist for you.",
    },
    {
      q: "How long does the building approval process take?",
      a: "Timelines depend on the authority workload, the completeness of your documents, and the scale of the project. Smaller residential approvals are generally faster than large commercial ones. We handle the follow-ups to avoid unnecessary delays.",
    },
    {
      q: "Do you help obtain NOCs and liaise with local authorities?",
      a: "Yes. We prepare and submit applications, procure the required NOCs, and act as your liaison with the relevant departments, tracking progress and responding to any queries until approval is secured.",
    },
    {
      q: "Why choose Sattva Design for building approvals in Medininagar?",
      a: "Being based in Medininagar, we are familiar with local building codes and the approval workflow across the Daltonganj region. We manage the paperwork end to end so you can focus on your project while staying fully compliant.",
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
                Building Approvals in Daltonganj (Medininagar)
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Streamlined approval process in Daltonganj (Medininagar)
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
            <span className="text-gray-900">Building Approvals</span>
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
                      <svg className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
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
        <div className="bg-teal-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Get Your Project Approved</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to streamline your building approval process.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
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

export default BuildingApprovalsDaltonganjMedininagar;
