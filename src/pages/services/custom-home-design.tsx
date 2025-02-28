import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactSection from '../../components/ContactSection';
import { ChevronRight } from 'lucide-react';

export default function CustomHomeDesign() {
  // Schema markup for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Home Design in Daltonganj (Medininagar)",
    "provider": {
      "@type": "ArchitecturalFirm",
      "name": "Sattva Design",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medininagar",
        "addressRegion": "Jharkhand",
        "postalCode": "822101",
        "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Daltonganj (Medininagar)"
    },
    "description": "Professional custom home design services in Daltonganj (Medininagar), offering personalized architectural solutions that blend modern aesthetics with functionality.",
    "serviceType": "Residential Architecture"
  };

  const features = [
    {
      title: "Personalized Design Approach",
      description: "Every design is uniquely crafted to reflect your lifestyle, preferences, and specific requirements."
    },
    {
      title: "3D Visualization",
      description: "Advanced 3D rendering to help you visualize your dream home before construction begins."
    },
    {
      title: "Sustainable Solutions",
      description: "Integration of eco-friendly materials and energy-efficient design principles."
    },
    {
      title: "Complete Documentation",
      description: "Detailed architectural drawings, material specifications, and construction documents."
    },
    {
      title: "Local Compliance",
      description: "Designs that comply with local building codes and regulations in Daltonganj."
    },
    {
      title: "Budget Optimization",
      description: "Cost-effective solutions without compromising on quality and aesthetics."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Understanding your vision, requirements, and budget constraints."
    },
    {
      step: 2,
      title: "Site Analysis",
      description: "Evaluating the plot characteristics and environmental factors."
    },
    {
      step: 3,
      title: "Concept Design",
      description: "Creating preliminary designs and space planning options."
    },
    {
      step: 4,
      title: "Design Development",
      description: "Refining the selected design with detailed specifications."
    },
    {
      step: 5,
      title: "Documentation",
      description: "Preparing construction documents and obtaining necessary approvals."
    },
    {
      step: 6,
      title: "Construction Support",
      description: "Providing guidance and supervision during the construction phase."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Home Design Services in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Expert custom home design services in Daltonganj (Medininagar). Create your dream home with our personalized architectural solutions and modern design approach."
        />
        <meta 
          name="keywords" 
          content="custom home design, residential architecture, house design, Daltonganj, Medininagar, modern homes, luxury homes"
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Custom Home Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Custom Home Design
              </h1>
              <p className="text-xl max-w-2xl mx-auto px-4">
                Creating your dream home in Daltonganj (Medininagar)
              </p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/service-areas/daltonganj-medininagar" className="text-gray-600 hover:text-gray-900">
                Daltonganj (Medininagar)
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900">Custom Home Design</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="prose max-w-none mb-16">
            <h2 className="text-3xl font-serif mb-6">Expert Custom Home Design Services</h2>
            <p className="text-xl text-gray-600">
              At Sattva Design, we specialize in creating bespoke home designs that perfectly 
              blend your vision with our architectural expertise. Our custom home design service 
              in Daltonganj (Medininagar) focuses on delivering unique, functional, and 
              aesthetically pleasing homes that reflect your personality and lifestyle.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Our Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <div key={step.step} className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-serif text-gray-300 mb-4">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif mb-4">Ready to Start Your Dream Home Project?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a consultation and let's bring your vision to life.
              </p>
              <ContactSection isFullPage={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 