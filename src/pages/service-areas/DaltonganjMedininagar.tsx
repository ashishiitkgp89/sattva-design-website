import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';
import { Link } from 'react-router-dom';

export default function DaltonganjMedininagar() {
  // Schema markup for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalFirm",
    "name": "Sattva Design - Daltonganj (Medininagar)",
    "image": "https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png",
    "description": "Leading architectural and interior design firm in Daltonganj (Medininagar), offering comprehensive design and construction services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd",
      "addressLocality": "Medininagar",
      "addressRegion": "Jharkhand",
      "postalCode": "822101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.0410025",
      "longitude": "84.0672999"
    },
    "telephone": "+917209567678",
    "email": "sattvadesignconsultancy@gmail.com"
  };

  const services = {
    residential: {
      title: "Residential Architecture",
      items: [
        { 
          name: "Custom Home Design in Daltonganj (Medininagar)", 
          slug: "custom-home-design-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Luxury Villas & Farmhouses in Daltonganj (Medininagar)", 
          slug: "luxury-villas-farmhouses-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Sustainable & Green Architecture in Daltonganj (Medininagar)", 
          slug: "sustainable-green-architecture-daltonganj-medininagar",
          available: true
        }
      ]
    },
    commercial: {
      title: "Commercial Architecture",
      items: [
        { 
          name: "Commercial Architecture in Daltonganj (Medininagar)", 
          slug: "commercial-architecture-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Retail Stores & Showrooms in Daltonganj (Medininagar)", 
          slug: "retail-stores-showrooms-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Hotels & Hospitality Design in Daltonganj (Medininagar)", 
          slug: "hotels-hospitality-design-daltonganj-medininagar",
          available: true
        }
      ]
    },
    industrial: {
      title: "Industrial & Institutional",
      items: [
        { 
          name: "Industrial Architecture in Daltonganj (Medininagar)", 
          slug: "industrial-architecture-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Educational Institutions in Daltonganj (Medininagar)", 
          slug: "educational-institutions-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Healthcare & Hospitals in Daltonganj (Medininagar)", 
          slug: "healthcare-hospitals-daltonganj-medininagar",
          available: true
        }
      ]
    },
    urban: {
      title: "Urban & Landscape Planning",
      items: [
        { 
          name: "Urban Planning in Daltonganj (Medininagar)", 
          slug: "urban-planning-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Landscape Architecture in Daltonganj (Medininagar)", 
          slug: "landscape-architecture-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Public Spaces & Infrastructure in Daltonganj (Medininagar)", 
          slug: "public-spaces-infrastructure-daltonganj-medininagar",
          available: true
        }
      ]
    },
    approvals: {
      title: "Naksha Pass & Approvals",
      items: [
        { 
          name: "Building Approvals in Daltonganj (Medininagar)", 
          slug: "building-approvals-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Designed Blueprints in Daltonganj (Medininagar)", 
          slug: "designed-blueprints-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Project Estimation in Daltonganj (Medininagar)", 
          slug: "project-estimation-daltonganj-medininagar",
          available: true
        }
      ]
    },
    interior: {
      title: "Interior Design Services",
      items: [
        { 
          name: "Interior Design in Daltonganj (Medininagar)", 
          slug: "interior-design-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Commercial Interior Design in Daltonganj (Medininagar)", 
          slug: "commercial-interior-design-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Custom Furniture & Décor in Daltonganj (Medininagar)", 
          slug: "custom-furniture-decor-daltonganj-medininagar",
          available: true
        }
      ]
    },
    construction: {
      title: "Civil Engineering & Construction",
      items: [
        { 
          name: "Construction Management in Daltonganj (Medininagar)", 
          slug: "construction-management-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Structural Engineering in Daltonganj (Medininagar)", 
          slug: "structural-engineering-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Project Management in Daltonganj (Medininagar)", 
          slug: "project-management-daltonganj-medininagar",
          available: true
        }
      ]
    },
    renovation: {
      title: "Renovation & Remodeling",
      items: [
        { 
          name: "Renovation Services in Daltonganj (Medininagar)", 
          slug: "renovation-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Office & Commercial Renovation in Daltonganj (Medininagar)", 
          slug: "office-commercial-renovation-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Retail & Showroom Remodeling in Daltonganj (Medininagar)", 
          slug: "retail-showroom-remodeling-daltonganj-medininagar",
          available: true
        }
      ]
    },
    specialized: {
      title: "Specialized Services",
      items: [
        { 
          name: "3D Visualization & Rendering in Daltonganj (Medininagar)", 
          slug: "3d-visualization-rendering-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Facade & Exterior Design in Daltonganj (Medininagar)", 
          slug: "facade-exterior-design-daltonganj-medininagar",
          available: true
        },
        { 
          name: "Vastu-Compliant Architecture in Daltonganj (Medininagar)", 
          slug: "vastu-compliant-architecture-daltonganj-medininagar",
          available: true
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Architecture & Interior Design Services in Daltonganj (Medininagar) | Sattva Design</title>
        <meta 
          name="description" 
          content="Leading architectural firm in Daltonganj (Medininagar) offering comprehensive design services including residential, commercial, interior design, and construction services."
        />
        <meta 
          name="keywords" 
          content="architecture, interior design, construction, Daltonganj, Medininagar, residential design, commercial design, Sattva Design"
        />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-gray-100">
          <img
            src="https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png"
            alt="Sattva Design Office in Daltonganj"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-serif text-center">
              Architecture & Design Services<br />
              in Daltonganj (Medininagar)
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <div className="prose max-w-none mb-12">
            <p className="text-xl text-gray-600">
              Sattva Design is your premier architectural and interior design firm in Daltonganj (Medininagar), 
              offering comprehensive design and construction services. With our expertise in both traditional and 
              modern architecture, we create spaces that are both functional and aesthetically pleasing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(services).map(([key, category]) => (
              <div key={key} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-serif mb-4">{category.title}</h2>
                <ul className="space-y-2">
                  {category.items.map((service) => (
                    <li key={service.slug}>
                      {service.available ? (
                        <Link
                          to={`/services/${service.slug}`}
                          className="flex items-center justify-between text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <span>{service.name}</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      ) : (
                        <div className="flex items-center justify-between text-gray-400 cursor-not-allowed">
                          <span>{service.name}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Coming Soon</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-serif mb-6">Visit Our Office</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Address</h3>
                    <p className="text-gray-600">
                      Shop no-14, 1st Floor Zila Parishad Market Kutchery,<br />
                      Railway crossing Road, Jail Hata Rd,<br />
                      Medininagar, Jharkhand 822101
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+917209567678" className="hover:text-gray-900 transition-colors">
                        +91 7209567678
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:sattvadesignconsultancy@gmail.com" className="hover:text-gray-900 transition-colors">
                        sattvadesignconsultancy@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7673460244392!2d84.06729989999999!3d24.0410025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c777187960e53%3A0x97413753729d2041!2sSattva%20Design%20Consultancy!5e0!3m2!1sen!2sin!4v1709052136037!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif mb-4">Start Your Project</h2>
              <p className="text-gray-600">
                Ready to begin your architectural journey? Contact us for a consultation.
              </p>
            </div>
            <ContactSection isFullPage={false} />
          </div>
        </div>
      </div>
    </>
  );
} 