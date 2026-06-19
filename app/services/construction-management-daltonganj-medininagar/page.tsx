import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'react-feather';

export const metadata: Metadata = {
  title: { absolute: 'Construction Management in Daltonganj (Medininagar) | Sattva Design' },
  description: 'Expert construction management services in Daltonganj (Medininagar). Ensuring efficient project execution and quality construction delivery.',
  keywords: 'construction management, project management, site supervision, quality control, Daltonganj, Medininagar, Sattva Design',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/construction-management-daltonganj-medininagar' },
  openGraph: {
    title: 'Construction Management in Daltonganj (Medininagar) | Sattva Design',
    description: 'Expert construction management services in Daltonganj (Medininagar). Ensuring efficient project execution and quality construction delivery.',
    url: 'https://sattvadesignconsultancy.com/services/construction-management-daltonganj-medininagar',
  },
};

const ConstructionManagementDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Construction Management in Daltonganj (Medininagar)",
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
    "description": "Professional construction management services in Daltonganj (Medininagar). We ensure efficient project execution, quality control, and timely completion of construction projects.",
    "serviceType": "Construction Management"
  };

  const features = [
    "Project planning and scheduling",
    "Cost estimation and control",
    "Quality assurance management",
    "Site supervision and coordination",
    "Resource optimization",
    "Safety compliance monitoring"
  ];

  const process = [
    {
      step: 1,
      title: "Project Planning",
      description: "Developing comprehensive construction strategies and timelines."
    },
    {
      step: 2,
      title: "Resource Allocation",
      description: "Organizing manpower, materials, and equipment."
    },
    {
      step: 3,
      title: "Construction Oversight",
      description: "Supervising and coordinating construction activities."
    },
    {
      step: 4,
      title: "Quality Control",
      description: "Implementing quality checks and standards compliance."
    },
    {
      step: 5,
      title: "Progress Monitoring",
      description: "Tracking project milestones and addressing challenges."
    },
    {
      step: 6,
      title: "Project Completion",
      description: "Ensuring successful handover and documentation."
    }
  ];

  const faqs = [
    {
      q: "What does a construction management service include?",
      a: "Our service covers project planning and scheduling, cost estimation and control, resource allocation, site supervision, quality assurance, and safety compliance, right through to handover and documentation.",
    },
    {
      q: "How much does construction management cost in Daltonganj (Medininagar)?",
      a: "Construction management fees usually depend on the project value, duration, and complexity. We discuss your project scope first and agree on a clear fee arrangement before work begins.",
    },
    {
      q: "How do you control quality and keep the project on schedule?",
      a: "We implement regular quality checks against agreed standards, monitor milestones, and coordinate manpower and materials. Any issues are flagged early so the project stays on time and within budget.",
    },
    {
      q: "Why choose Sattva Design for construction management in Medininagar?",
      a: "Our local presence in Medininagar lets us coordinate suppliers, labour, and authorities efficiently across the Daltonganj area. We focus on transparent communication and reliable delivery throughout the build.",
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
                Construction Management in Daltonganj (Medininagar)
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Professional project execution in Daltonganj (Medininagar)
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
            <span className="text-gray-900">Construction Management</span>
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
                      <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="h-8 w-8 rounded-full bg-yellow-500 flex items-center justify-center">
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
        <div className="bg-yellow-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Build with Confidence</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss your construction project.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700"
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

export default ConstructionManagementDaltonganjMedininagar;
