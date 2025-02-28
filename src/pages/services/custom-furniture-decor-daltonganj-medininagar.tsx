import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

const CustomFurnitureDecorDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Furniture & Décor in Daltonganj (Medininagar)",
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
    "description": "Bespoke furniture design and custom décor solutions creating unique and personalized spaces."
  };

  const features = [
    {
      title: "Custom Design",
      description: "Unique furniture pieces tailored to your specific needs"
    },
    {
      title: "Material Selection",
      description: "High-quality materials chosen for durability and aesthetics"
    },
    {
      title: "Space Optimization",
      description: "Furniture designed to maximize available space"
    },
    {
      title: "Style Integration",
      description: "Designs that complement existing décor and architecture"
    },
    {
      title: "Craftsmanship",
      description: "Expert craftsmanship ensuring quality and longevity"
    },
    {
      title: "Sustainable Options",
      description: "Eco-friendly materials and production methods"
    }
  ];

  const process = [
    {
      title: "Design Consultation",
      description: "Understanding your style preferences and requirements"
    },
    {
      title: "Concept Development",
      description: "Creating initial furniture and décor designs"
    },
    {
      title: "Material Selection",
      description: "Choosing appropriate materials and finishes"
    },
    {
      title: "Detailed Design",
      description: "Developing technical specifications and drawings"
    },
    {
      title: "Production",
      description: "Crafting furniture pieces with attention to detail"
    },
    {
      title: "Installation",
      description: "Professional installation and styling"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Furniture & Décor in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Professional custom furniture and décor services in Daltonganj (Medininagar). Creating unique, personalized pieces for your space."
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126"
            alt="Custom Furniture & Décor"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Custom Furniture & Décor
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
              <span className="text-gray-900">Custom Furniture & Décor</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Bespoke Furniture Solutions</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we create custom furniture and décor pieces that 
                perfectly match your style and space requirements. Our bespoke solutions 
                combine functionality with aesthetic appeal, ensuring each piece is 
                uniquely yours.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We specialize in designing and crafting furniture that reflects your 
                personal style while maximizing space utility. From concept to creation, 
                we ensure every detail meets our high standards of quality and design.
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
            <h2 className="text-3xl font-serif mb-4">Ready to Create Your Custom Piece?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your custom furniture and décor needs in Daltonganj (Medininagar).
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

export default CustomFurnitureDecorDaltonganjMedininagar; 