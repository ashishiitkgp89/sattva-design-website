import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: { absolute: 'Educational Institutions Design in Daltonganj (Medininagar) | Sattva Design' },
  description: 'Expert educational institution design services in Daltonganj (Medininagar). Create inspiring learning environments that foster academic excellence.',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/educational-institutions-daltonganj-medininagar' },
  openGraph: {
    title: 'Educational Institutions Design in Daltonganj (Medininagar) | Sattva Design',
    description: 'Expert educational institution design services in Daltonganj (Medininagar). Create inspiring learning environments that foster academic excellence.',
    url: 'https://sattvadesignconsultancy.com/services/educational-institutions-daltonganj-medininagar',
  },
};

const EducationalInstitutionsDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Educational Institutions Design in Daltonganj (Medininagar)",
    "provider": {
      "@type": "ArchitecturalFirm",
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
    "description": "Specialized educational institution design services in Daltonganj (Medininagar), creating inspiring learning environments that foster academic excellence and student development."
  };

  const features = [
    "Modern Classroom Design",
    "Science & Computer Labs",
    "Library & Learning Centers",
    "Sports & Recreation Facilities",
    "Administrative Areas",
    "Auditorium & Assembly Halls",
    "Sustainable Infrastructure",
    "Safety & Security Integration"
  ];

  const process = [
    {
      title: "Requirements Analysis",
      description: "Understanding educational needs, curriculum requirements, and capacity planning"
    },
    {
      title: "Site Planning",
      description: "Optimizing campus layout and space utilization for various activities"
    },
    {
      title: "Design Development",
      description: "Creating detailed architectural plans for academic and support facilities"
    },
    {
      title: "Learning Spaces",
      description: "Designing flexible and technology-enabled learning environments"
    },
    {
      title: "Infrastructure Planning",
      description: "Integrating modern educational facilities and support systems"
    },
    {
      title: "Implementation",
      description: "Coordinating construction and ensuring quality standards"
    }
  ];

  const faqs = [
    {
      q: "What types of educational facilities do you design in Daltonganj (Medininagar)?",
      a: "We design schools, colleges, and training institutes, including classrooms, science and computer labs, libraries, sports facilities, administrative areas, and auditoriums, all planned around your curriculum and capacity needs.",
    },
    {
      q: "How much does it cost to design an educational institution?",
      a: "Costs depend on the campus size, number of facilities, and infrastructure requirements. We assess your project and provide a detailed fee structure before beginning the design work.",
    },
    {
      q: "Do you plan for future growth and safety standards?",
      a: "Yes. Our designs consider future expansion, flexible learning spaces, and full integration of safety, security, and accessibility standards so the campus remains functional as the institution grows.",
    },
    {
      q: "Why choose Sattva Design for educational institution design in Medininagar?",
      a: "We are a local firm in Medininagar experienced in creating inspiring, sustainable learning environments. We balance modern educational needs, safety, and budget to support student development across the Daltonganj region.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3"
            alt="Educational Institution Design"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                Educational Institutions Design in Daltonganj (Medininagar)
              </h1>
              <p className="text-xl">Daltonganj (Medininagar)</p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/service-areas/daltonganj-medininagar" className="hover:text-gray-900">
                Daltonganj (Medininagar)
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900">Educational Institutions Design</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Creating Inspiring Learning Environments</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we understand that educational institutions are more than just
                buildings – they are spaces where future generations are shaped. Our designs create
                environments that inspire learning, foster creativity, and support the holistic
                development of students.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Approach</h3>
              <p className="text-gray-600 mb-8">
                We take a comprehensive approach to educational institution design, considering both
                current needs and future growth. Our designs incorporate modern educational
                technologies, sustainable practices, and flexible spaces that can adapt to evolving
                teaching methodologies while ensuring safety and accessibility for all users.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-serif mb-4">Service Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Our Process</h2>
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

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 p-8 rounded-lg text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Ready to Build Your Educational Institution?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your educational institution project in Daltonganj (Medininagar).
            </p>
            <Link
              href="/contact"
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

export default EducationalInstitutionsDaltonganjMedininagar;
