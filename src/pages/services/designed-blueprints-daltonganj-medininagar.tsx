import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

const DesignedBlueprintsDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Designed Blueprints in Daltonganj (Medininagar)",
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
    "description": "Professional blueprint design services providing detailed architectural drawings and construction documentation for all types of building projects."
  };

  const features = [
    {
      title: "Detailed Construction Drawings",
      description: "Comprehensive plans with precise measurements and specifications"
    },
    {
      title: "3D Visualization",
      description: "Advanced 3D modeling to visualize the final design"
    },
    {
      title: "Technical Specifications",
      description: "Detailed material and construction specifications"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring adherence to local building codes and regulations"
    },
    {
      title: "Digital Documentation",
      description: "Modern CAD technology for accurate and efficient documentation"
    },
    {
      title: "Revision Management",
      description: "Systematic tracking and implementation of design changes"
    }
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "Understanding project requirements and objectives"
    },
    {
      title: "Concept Development",
      description: "Creating preliminary designs and layouts"
    },
    {
      title: "Technical Drawing",
      description: "Developing detailed construction drawings"
    },
    {
      title: "Specification Writing",
      description: "Documenting material and construction specifications"
    },
    {
      title: "Review & Refinement",
      description: "Quality checking and incorporating feedback"
    },
    {
      title: "Final Documentation",
      description: "Preparing complete blueprint package for construction"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Designed Blueprints in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Professional blueprint design services in Daltonganj (Medininagar). Detailed architectural drawings and construction documentation for your building projects."
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c"
            alt="Blueprint Design"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Designed Blueprints
              </h1>
              <p className="text-xl">Daltonganj (Medininagar)</p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Link to="/" className="hover:text-gray-900">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link to="/service-areas/daltonganj-medininagar" className="hover:text-gray-900">
                Daltonganj (Medininagar)
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Designed Blueprints</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Professional Blueprint Design Services</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we provide comprehensive blueprint design services that 
                translate architectural visions into detailed construction documents. Our 
                team combines technical expertise with modern technology to create precise, 
                compliant, and construction-ready blueprints.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We specialize in creating detailed construction drawings that meet both 
                regulatory requirements and construction needs. Our blueprints provide 
                clear guidance for contractors while ensuring your design vision is 
                accurately represented.
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
            <h2 className="text-3xl font-serif mb-8 text-center">Our Design Process</h2>
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
            <h2 className="text-3xl font-serif mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your blueprint requirements in Daltonganj (Medininagar).
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

export default DesignedBlueprintsDaltonganjMedininagar; 