import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Project Estimation in Daltonganj (Medininagar) | Sattva Design',
  },
  description:
    'Professional project estimation services in Daltonganj (Medininagar). Accurate cost analysis and budgeting for construction projects.',
  alternates: {
    canonical: 'https://sattvadesignconsultancy.com/services/project-estimation-daltonganj-medininagar',
  },
  openGraph: {
    title: 'Project Estimation in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Professional project estimation services in Daltonganj (Medininagar). Accurate cost analysis and budgeting for construction projects.',
    url: 'https://sattvadesignconsultancy.com/services/project-estimation-daltonganj-medininagar',
  },
};

const ProjectEstimationDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Project Estimation in Daltonganj (Medininagar)",
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
    "description": "Comprehensive project estimation services providing accurate cost analysis and budgeting for construction and architectural projects."
  };

  const features = [
    {
      title: "Detailed Cost Analysis",
      description: "Comprehensive breakdown of all project costs and expenses"
    },
    {
      title: "Material Quantity Estimation",
      description: "Precise calculation of required construction materials"
    },
    {
      title: "Labor Cost Assessment",
      description: "Accurate estimation of workforce requirements and costs"
    },
    {
      title: "Timeline Planning",
      description: "Detailed project scheduling and duration estimates"
    },
    {
      title: "Risk Assessment",
      description: "Identification and evaluation of potential cost risks"
    },
    {
      title: "Budget Optimization",
      description: "Strategies for cost-effective project execution"
    }
  ];

  const process = [
    {
      title: "Project Analysis",
      description: "Reviewing project scope and requirements"
    },
    {
      title: "Data Collection",
      description: "Gathering current market rates and cost factors"
    },
    {
      title: "Quantity Takeoff",
      description: "Calculating material and labor quantities"
    },
    {
      title: "Cost Calculation",
      description: "Determining detailed project costs"
    },
    {
      title: "Budget Development",
      description: "Creating comprehensive project budget"
    },
    {
      title: "Documentation",
      description: "Preparing detailed estimation reports"
    }
  ];

  const faqs = [
    {
      q: "How accurate are your project estimates for construction in Daltonganj (Medininagar)?",
      a: "We base our estimates on current local material rates, prevailing labour costs in the Daltonganj and Medininagar area, and detailed quantity takeoffs, so our figures closely reflect what you can expect to spend on your actual project."
    },
    {
      q: "Do you provide cost estimates before the design is finalised?",
      a: "Yes. We can prepare preliminary budget estimates early in the planning stage to help you assess feasibility, and then refine them into detailed estimates as the design and specifications are confirmed."
    },
    {
      q: "What information do you need to prepare a project estimate?",
      a: "Sharing your plot details, intended scope, drawings or sketches if available, and your quality expectations helps us. If you do not have drawings yet, we can still provide a rough estimate based on built-up area and your requirements."
    },
    {
      q: "Can your estimates help me control costs during construction?",
      a: "Yes. Our detailed cost breakdown and budget optimisation suggestions give you a clear benchmark, making it easier to track spending, compare contractor quotes, and avoid unexpected overruns through the project."
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
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            alt="Project Estimation"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Project Estimation in Daltonganj (Medininagar)
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
              <span className="text-gray-900">Project Estimation</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Accurate Project Cost Estimation</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we provide comprehensive project estimation services
                that help you plan and budget your construction projects effectively.
                Our detailed analysis ensures accurate cost predictions and helps you
                make informed decisions throughout your project.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We combine industry knowledge with advanced estimation techniques to
                provide accurate cost projections. Our estimates consider all aspects
                of construction, from materials and labor to timeline and potential
                risks, ensuring comprehensive project planning.
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
            <h2 className="text-3xl font-serif mb-8 text-center">Our Estimation Process</h2>
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
            <h2 className="text-3xl font-serif mb-4">Ready to Plan Your Project?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to get accurate cost estimates for your construction project in Daltonganj (Medininagar).
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

export default ProjectEstimationDaltonganjMedininagar;
