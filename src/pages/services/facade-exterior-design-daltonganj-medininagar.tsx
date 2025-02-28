import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

const FacadeExteriorDesignDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade & Exterior Design in Daltonganj (Medininagar)",
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
    "description": "Expert facade and exterior design services creating stunning architectural statements that combine aesthetics with functionality."
  };

  const features = [
    {
      title: "Architectural Innovation",
      description: "Creative design solutions for unique building exteriors"
    },
    {
      title: "Material Selection",
      description: "Expert guidance on sustainable and aesthetic materials"
    },
    {
      title: "Climate Adaptation",
      description: "Designs optimized for local weather conditions"
    },
    {
      title: "Energy Efficiency",
      description: "Integration of energy-saving features in facade design"
    },
    {
      title: "Lighting Design",
      description: "Strategic exterior lighting for enhanced aesthetics"
    },
    {
      title: "Structural Integration",
      description: "Seamless blend of design with structural requirements"
    }
  ];

  const process = [
    {
      title: "Site Analysis",
      description: "Evaluating location and environmental factors"
    },
    {
      title: "Concept Development",
      description: "Creating innovative facade design concepts"
    },
    {
      title: "Material Selection",
      description: "Choosing appropriate materials and finishes"
    },
    {
      title: "Technical Design",
      description: "Detailed technical drawings and specifications"
    },
    {
      title: "3D Visualization",
      description: "Photorealistic renderings of the facade design"
    },
    {
      title: "Implementation",
      description: "Coordinating with contractors for precise execution"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Facade & Exterior Design in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Professional facade and exterior design services in Daltonganj (Medininagar). Create stunning architectural statements with our expert design solutions."
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
            alt="Facade & Exterior Design"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Facade & Exterior Design
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
              <span className="text-gray-900">Facade & Exterior Design</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Create Lasting Impressions</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we specialize in creating stunning facade and 
                exterior designs that make a bold architectural statement. Our 
                designs combine aesthetic excellence with practical functionality, 
                ensuring your building stands out while performing efficiently.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-8">
                We take a comprehensive approach to facade design, considering 
                factors like climate, energy efficiency, and maintenance requirements. 
                Our solutions are tailored to create harmonious exteriors that 
                enhance the overall architectural value of your property.
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
            <h2 className="text-3xl font-serif mb-4">Ready to Transform Your Building's Exterior?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your facade and exterior design project in Daltonganj (Medininagar).
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

export default FacadeExteriorDesignDaltonganjMedininagar; 