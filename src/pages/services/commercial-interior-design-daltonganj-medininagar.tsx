import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';

const CommercialInteriorDesignDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Interior Design in Daltonganj (Medininagar)",
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
    "description": "Professional commercial interior design services creating functional and aesthetically pleasing spaces for businesses."
  };

  const features = [
    {
      title: "Space Planning",
      description: "Optimal layout design for maximum efficiency and flow"
    },
    {
      title: "Brand Integration",
      description: "Incorporating company branding into design elements"
    },
    {
      title: "Workplace Ergonomics",
      description: "Comfortable and productive work environments"
    },
    {
      title: "Lighting Design",
      description: "Strategic lighting solutions for different work areas"
    },
    {
      title: "Material Selection",
      description: "Durable and aesthetically pleasing material choices"
    },
    {
      title: "Sustainability",
      description: "Eco-friendly design solutions and materials"
    }
  ];

  const process = [
    {
      title: "Requirements Analysis",
      description: "Understanding business needs and objectives"
    },
    {
      title: "Space Assessment",
      description: "Evaluating existing space and potential"
    },
    {
      title: "Concept Development",
      description: "Creating initial design concepts"
    },
    {
      title: "Design Detailing",
      description: "Developing detailed interior specifications"
    },
    {
      title: "Material Selection",
      description: "Choosing appropriate materials and finishes"
    },
    {
      title: "Implementation",
      description: "Coordinating and executing the design plan"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Interior Design in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Professional commercial interior design services in Daltonganj (Medininagar). Creating functional and aesthetically pleasing business spaces."
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c"
            alt="Commercial Interior Design"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Commercial Interior Design
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
              <span className="text-gray-900">Commercial Interior Design</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Transform Your Business Space</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we create commercial interiors that enhance your 
                business environment and reflect your brand identity. Our designs 
                combine functionality with aesthetics to create spaces that inspire 
                productivity and impress clients.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We specialize in designing commercial spaces that work for your business. 
                From office layouts to retail environments, our solutions prioritize 
                efficiency, comfort, and brand representation while maintaining high 
                aesthetic standards.
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
            <h2 className="text-3xl font-serif mb-4">Ready to Transform Your Space?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your commercial interior design project in Daltonganj (Medininagar).
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

export default CommercialInteriorDesignDaltonganjMedininagar; 