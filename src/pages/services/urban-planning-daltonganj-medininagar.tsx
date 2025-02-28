import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactSection from '../../components/ContactSection';
import { ChevronRight } from 'react-feather';

const UrbanPlanningDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Urban Planning in Daltonganj (Medininagar)",
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
    "description": "Comprehensive urban planning services in Daltonganj (Medininagar). We create sustainable, livable, and well-organized urban spaces that enhance community life.",
    "serviceType": "Urban Planning"
  };

  const features = [
    "Master planning and zoning",
    "Sustainable urban development",
    "Public space design",
    "Transportation planning",
    "Environmental integration",
    "Community engagement"
  ];

  const process = [
    {
      step: 1,
      title: "Site Analysis",
      description: "Comprehensive assessment of urban context and requirements."
    },
    {
      step: 2,
      title: "Community Consultation",
      description: "Engaging with stakeholders and gathering input."
    },
    {
      step: 3,
      title: "Development Strategy",
      description: "Creating sustainable urban development plans."
    },
    {
      step: 4,
      title: "Infrastructure Planning",
      description: "Designing integrated urban infrastructure systems."
    },
    {
      step: 5,
      title: "Implementation Framework",
      description: "Establishing guidelines and phasing strategies."
    },
    {
      step: 6,
      title: "Monitoring & Review",
      description: "Ensuring successful implementation and adaptation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Urban Planning in Daltonganj (Medininagar) | Sattva Design</title>
        <meta name="description" content="Expert urban planning services in Daltonganj (Medininagar). Creating sustainable and livable urban spaces for thriving communities." />
        <meta name="keywords" content="urban planning, city development, master planning, sustainable development, Daltonganj, Medininagar, Sattva Design" />
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
                Urban Planning
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Sustainable urban development in Daltonganj (Medininagar)
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
            <span className="text-gray-900">Urban Planning</span>
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
                      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
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
        <div className="bg-purple-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Shape the Future of Your City</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss your urban development project.
              </p>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
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

export default UrbanPlanningDaltonganjMedininagar; 