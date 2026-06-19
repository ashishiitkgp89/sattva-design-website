import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'react-feather';

export const metadata: Metadata = {
  title: { absolute: 'Interior Design in Daltonganj (Medininagar) | Sattva Design' },
  description:
    'Expert interior design services in Daltonganj (Medininagar). Creating beautiful and functional spaces that reflect your personal style.',
  keywords:
    'interior design, home interiors, commercial interiors, space planning, Daltonganj, Medininagar, Sattva Design',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/interior-design-daltonganj-medininagar' },
  openGraph: {
    title: 'Interior Design in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Expert interior design services in Daltonganj (Medininagar). Creating beautiful and functional spaces that reflect your personal style.',
    url: 'https://sattvadesignconsultancy.com/services/interior-design-daltonganj-medininagar',
  },
};

const faqs = [
  {
    q: "Do you offer both home and commercial interior design in Daltonganj (Medininagar)?",
    a: "Yes. We design interiors for homes, apartments and rooms as well as offices, shops, showrooms and other commercial spaces across Daltonganj (Medininagar).",
  },
  {
    q: "Can you work within a fixed budget?",
    a: "Yes. We plan the design around the budget you are comfortable with, prioritising the spaces that matter most and suggesting finishes and furniture at different price points so the cost stays in your control.",
  },
  {
    q: "Do you provide custom furniture design?",
    a: "Yes. Where standard pieces do not fit the space or the look you want, we design custom furniture and built-in storage and coordinate with skilled carpenters to get it made.",
  },
  {
    q: "How long does an interior design project take?",
    a: "It depends on the size of the space and the amount of custom work involved. A single room is far quicker than a full home or office. We share a realistic timeline after the first consultation.",
  },
];

const InteriorDesignDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interior Design in Daltonganj (Medininagar)",
    "provider": {
      "@type": "Organization",
      "name": "Sattva Design",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Daltonganj",
        "addressRegion": "Jharkhand",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Daltonganj (Medininagar)",
    "description": "Professional interior design services in Daltonganj (Medininagar). We create beautiful, functional, and personalized interior spaces that reflect your style and enhance your lifestyle.",
    "serviceType": "Interior Design"
  };

  const features = [
    "Residential interior design",
    "Commercial space planning",
    "Custom furniture design",
    "Color and material consultation",
    "Lighting design solutions",
    "Art and decor curation"
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Understanding your style preferences and requirements."
    },
    {
      step: 2,
      title: "Space Planning",
      description: "Optimizing layout and functionality of your space."
    },
    {
      step: 3,
      title: "Design Concept",
      description: "Creating mood boards and design presentations."
    },
    {
      step: 4,
      title: "Material Selection",
      description: "Choosing finishes, fabrics, and furnishings."
    },
    {
      step: 5,
      title: "Implementation",
      description: "Coordinating with vendors and contractors."
    },
    {
      step: 6,
      title: "Styling & Finishing",
      description: "Adding final touches and accessories."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />

      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Interior Design in Daltonganj (Medininagar)
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Beautiful and functional spaces in Daltonganj (Medininagar)
              </p>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/service-areas/daltonganj-medininagar" className="hover:text-gray-900">Daltonganj Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Interior Design</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
              <div className="space-y-8">
                {process.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center">
                          <span className="text-white font-medium">{step.step}</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                        <p className="mt-1 text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
        <div className="bg-pink-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Transform Your Space</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss your interior design project.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default InteriorDesignDaltonganjMedininagar;
