import React from 'react';
import { Helmet } from 'react-helmet';
import ContactSection from '../../components/ContactSection';

const HealthcareHospitalsDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare & Hospitals Design in Daltonganj (Medininagar)",
    "provider": {
      "@type": "Organization",
      "name": "Sattva Design",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Medininagar",
        "addressRegion": "Jharkhand",
        "postalCode": "822101",
        "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd"
      }
    },
    "areaServed": "Daltonganj (Medininagar)",
    "description": "Specialized healthcare facility design services focusing on creating efficient, healing environments that prioritize patient care and medical staff functionality.",
    "serviceType": "Healthcare Architecture"
  };

  const features = [
    {
      title: "Patient-Centric Design",
      description: "Creating healing environments that prioritize patient comfort and recovery"
    },
    {
      title: "Medical Planning Expertise",
      description: "Optimizing workflows and space utilization for healthcare delivery"
    },
    {
      title: "Infection Control",
      description: "Implementing design strategies that minimize infection risks"
    },
    {
      title: "Technology Integration",
      description: "Incorporating modern medical equipment and healthcare technology"
    },
    {
      title: "Staff Efficiency",
      description: "Designing spaces that enhance staff productivity and reduce fatigue"
    },
    {
      title: "Regulatory Compliance",
      description: "Ensuring adherence to healthcare facility regulations and standards"
    }
  ];

  const process = [
    {
      title: "Needs Assessment",
      description: "Understanding specific healthcare requirements and objectives"
    },
    {
      title: "Medical Planning",
      description: "Developing efficient layouts for optimal healthcare delivery"
    },
    {
      title: "Design Development",
      description: "Creating detailed designs with focus on functionality and healing environment"
    },
    {
      title: "Equipment Integration",
      description: "Planning for medical equipment and technology infrastructure"
    },
    {
      title: "Compliance Review",
      description: "Ensuring designs meet healthcare regulations and standards"
    },
    {
      title: "Implementation",
      description: "Executing the design with attention to medical specifications"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare & Hospitals Design in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Expert healthcare facility design services in Daltonganj (Medininagar). Creating efficient, healing environments for hospitals and medical centers."
        />
        <meta 
          name="keywords" 
          content="healthcare design, hospital architecture, medical facility planning, Daltonganj, Medininagar, healing environment"
        />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d"
            alt="Healthcare Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl text-white font-serif mb-6">
                Healthcare & Hospitals Design
              </h1>
              <p className="text-xl text-white/90">
                Creating healing environments that enhance patient care and medical efficiency
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Healthcare Design Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif mb-12 text-center">Our Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-serif mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif mb-4">Start Your Healthcare Project</h2>
              <p className="text-gray-600 mb-8">
                Ready to create a state-of-the-art healthcare facility? Contact us to discuss your vision.
              </p>
              <ContactSection isFullPage={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthcareHospitalsDaltonganjMedininagar; 