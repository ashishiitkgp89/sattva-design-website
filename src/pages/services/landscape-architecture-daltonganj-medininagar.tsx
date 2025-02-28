import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

const LandscapeArchitectureDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Landscape Architecture in Daltonganj (Medininagar)",
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
    "description": "Professional landscape architecture services in Daltonganj (Medininagar), creating sustainable and beautiful outdoor spaces that harmonize with nature and enhance property value."
  };

  // Features of the service
  const features = [
    {
      title: "Site Analysis & Planning",
      description: "Comprehensive site evaluation and strategic planning for optimal landscape design"
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly landscape solutions that conserve water and promote biodiversity"
    },
    {
      title: "Hardscape Design",
      description: "Creative design of pathways, patios, retaining walls, and other structural elements"
    },
    {
      title: "Plant Selection",
      description: "Expert selection of native and adaptive plants suitable for local climate"
    },
    {
      title: "Water Features",
      description: "Integration of fountains, ponds, and water elements for aesthetic appeal"
    },
    {
      title: "Lighting Design",
      description: "Strategic outdoor lighting plans for safety and ambiance"
    }
  ];

  // Service process steps
  const process = [
    {
      title: "Initial Consultation",
      description: "Understanding your vision, requirements, and site conditions"
    },
    {
      title: "Site Analysis",
      description: "Detailed assessment of terrain, soil, climate, and existing vegetation"
    },
    {
      title: "Concept Development",
      description: "Creating preliminary designs and visualizations"
    },
    {
      title: "Detailed Design",
      description: "Developing comprehensive landscape plans and specifications"
    },
    {
      title: "Plant Selection",
      description: "Choosing appropriate plants and materials"
    },
    {
      title: "Implementation",
      description: "Overseeing landscape installation and construction"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Landscape Architecture Services in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Professional landscape architecture services in Daltonganj (Medininagar). Create beautiful, sustainable outdoor spaces with Sattva Design."
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
              <li className="text-gray-900">Landscape Architecture</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-serif mb-4">
              Landscape Architecture Services in Daltonganj (Medininagar)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Transform your outdoor spaces with our expert landscape architecture services. 
              We create sustainable, beautiful landscapes that enhance both aesthetics and functionality.
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
            <h2 className="text-3xl font-serif mb-4">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your landscape architecture project in Daltonganj (Medininagar).
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

export default LandscapeArchitectureDaltonganjMedininagar; 