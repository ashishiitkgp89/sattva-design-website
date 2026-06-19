import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import { ChevronRight } from 'react-feather';

export const metadata: Metadata = {
  title: { absolute: 'Luxury Villas & Farmhouses in Daltonganj (Medininagar) | Sattva Design' },
  description:
    'Experience luxury living with our exclusive villa and farmhouse design services in Daltonganj (Medininagar). Creating premium residential spaces that reflect elegance and sophistication.',
  keywords:
    'luxury villas, farmhouses, premium homes, residential architecture, Daltonganj, Medininagar, Sattva Design',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/luxury-villas-farmhouses-daltonganj-medininagar' },
  openGraph: {
    title: 'Luxury Villas & Farmhouses in Daltonganj (Medininagar) | Sattva Design',
    description:
      'Experience luxury living with our exclusive villa and farmhouse design services in Daltonganj (Medininagar). Creating premium residential spaces that reflect elegance and sophistication.',
    url: 'https://sattvadesignconsultancy.com/services/luxury-villas-farmhouses-daltonganj-medininagar',
  },
};

const faqs = [
  {
    q: "Do you design both luxury villas and farmhouses in Daltonganj (Medininagar)?",
    a: "Yes. We design premium villas and farmhouses, from contemporary city homes to weekend country retreats, tailoring each to the plot, your lifestyle and the level of luxury you have in mind.",
  },
  {
    q: "Can you integrate smart home technology into the design?",
    a: "Yes. We can plan for smart lighting, climate control, security and automation during the design stage so the wiring and infrastructure are ready, rather than adding it awkwardly later.",
  },
  {
    q: "Do you also handle the landscape and outdoor amenities?",
    a: "Yes. We design the outdoor spaces alongside the home, including gardens, swimming pools, seating areas and other private amenities, so the indoors and outdoors feel like one connected experience.",
  },
  {
    q: "What does a luxury villa or farmhouse design cost in Daltonganj (Medininagar)?",
    a: "The cost depends on the size of the home, the quality of materials and the amenities you want. Premium finishes and bespoke features raise the figure, so we prepare a tailored estimate after discussing your vision.",
  },
];

const LuxuryVillasFarmhousesDaltonganjMedininagar: React.FC = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Villas & Farmhouses in Daltonganj (Medininagar)",
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
    "description": "Premium luxury villa and farmhouse design services in Daltonganj (Medininagar). We create exclusive residential spaces that combine opulence with functionality.",
    "serviceType": "Residential Architecture"
  };

  const features = [
    "Exclusive luxury villa designs",
    "Custom farmhouse planning",
    "High-end material selection",
    "Smart home integration",
    "Landscape and outdoor design",
    "Private amenities planning"
  ];

  const process = [
    {
      step: 1,
      title: "Luxury Consultation",
      description: "Understanding your vision for a premium living space."
    },
    {
      step: 2,
      title: "Site Evaluation",
      description: "Analyzing the location for optimal design integration."
    },
    {
      step: 3,
      title: "Concept Development",
      description: "Creating exclusive design concepts and layouts."
    },
    {
      step: 4,
      title: "Detail Design",
      description: "Developing comprehensive plans with premium specifications."
    },
    {
      step: 5,
      title: "Material Selection",
      description: "Choosing high-end materials and finishes."
    },
    {
      step: 6,
      title: "Project Execution",
      description: "Overseeing construction with attention to luxury details."
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
                Luxury Villas & Farmhouses in Daltonganj (Medininagar)
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Exclusive residential designs in Daltonganj (Medininagar)
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
            <span className="text-gray-900">Luxury Villas & Farmhouses</span>
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
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
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
        <div className="bg-green-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Ready to Create Your Luxury Space?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Contact us today to discuss your vision for a premium residential property.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
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

export default LuxuryVillasFarmhousesDaltonganjMedininagar;
