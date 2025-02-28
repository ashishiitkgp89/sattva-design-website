import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

const PublicSpacesInfrastructureDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Public Spaces & Infrastructure Design in Daltonganj (Medininagar)",
    "provider": {
      "@type": "ArchitecturalFirm",
      "name": "Sattva Design",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Daltonganj",
        "addressRegion": "Jharkhand",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Daltonganj (Medininagar)"
    },
    "description": "Expert public spaces and infrastructure design services in Daltonganj (Medininagar), creating functional, sustainable, and engaging community spaces."
  };

  // Features of the service
  const features = [
    {
      title: "Urban Planning",
      description: "Comprehensive planning for public spaces that enhance community life"
    },
    {
      title: "Infrastructure Integration",
      description: "Seamless integration of utilities and infrastructure systems"
    },
    {
      title: "Accessibility Design",
      description: "Creating inclusive spaces that are accessible to all community members"
    },
    {
      title: "Sustainable Solutions",
      description: "Eco-friendly design approaches for long-term sustainability"
    },
    {
      title: "Safety & Security",
      description: "Implementation of design features that enhance public safety"
    },
    {
      title: "Community Engagement",
      description: "Incorporating community feedback and needs into design solutions"
    }
  ];

  // Service process steps
  const process = [
    {
      title: "Community Assessment",
      description: "Understanding community needs and gathering stakeholder input"
    },
    {
      title: "Site Analysis",
      description: "Evaluating existing conditions and infrastructure requirements"
    },
    {
      title: "Concept Development",
      description: "Creating initial design concepts and space planning"
    },
    {
      title: "Infrastructure Planning",
      description: "Detailed planning of utilities and support systems"
    },
    {
      title: "Design Development",
      description: "Finalizing designs with technical specifications"
    },
    {
      title: "Implementation",
      description: "Coordinating construction and installation processes"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Public Spaces & Infrastructure Design in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Expert public spaces and infrastructure design services in Daltonganj (Medininagar). Create functional and engaging community spaces with Sattva Design."
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <li>
                <Link to="/service-areas/daltonganj-medininagar" className="text-gray-500 hover:text-gray-700">
                  Daltonganj (Medininagar)
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <li className="text-gray-900">Public Spaces & Infrastructure</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-serif mb-4">
              Public Spaces & Infrastructure Design in Daltonganj (Medininagar)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Creating vibrant public spaces and robust infrastructure solutions that serve 
              the community's needs while enhancing urban life in Daltonganj (Medininagar).
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Our Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-lg text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Ready to Enhance Your Community?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your public space and infrastructure project in Daltonganj (Medininagar).
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Contact Section */}
          <ContactSection isFullPage={false} />
        </div>
      </div>
    </>
  );
};

export default PublicSpacesInfrastructureDaltonganjMedininagar; 