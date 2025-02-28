import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactSection from '../../components/ContactSection';
import { ChevronRight } from 'react-feather';

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

  return (
    <>
      <Helmet>
        <title>Custom Home Design in Daltonganj (Medininagar) | Sattva Design</title>
        <meta name="description" content="Transform your dream home into reality with our custom home design services in Daltonganj (Medininagar). Expert architects creating personalized living spaces." />
        <meta name="keywords" content="custom home design, residential architecture, house design, Daltonganj, Medininagar, Sattva Design" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Custom Home Design
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
            <Link to="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/service-areas/daltonganj-medininagar" className="hover:text-gray-900">Daltonganj Services</Link>
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
                  to="/contact"
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