import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: { absolute: '3D Visualization & Rendering in Daltonganj (Medininagar) | Sattva Design' },
  description: 'Professional 3D visualization and rendering services in Daltonganj (Medininagar). Transform your architectural designs into photorealistic visualizations.',
  alternates: { canonical: 'https://sattvadesignconsultancy.com/services/3d-visualization-rendering-daltonganj-medininagar' },
  openGraph: {
    title: '3D Visualization & Rendering in Daltonganj (Medininagar) | Sattva Design',
    description: 'Professional 3D visualization and rendering services in Daltonganj (Medininagar). Transform your architectural designs into photorealistic visualizations.',
    url: 'https://sattvadesignconsultancy.com/services/3d-visualization-rendering-daltonganj-medininagar',
  },
};

const ThreeDVisualizationRenderingDaltonganjMedininagar: React.FC = () => {
  // Schema markup for the service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "3D Visualization & Rendering in Daltonganj (Medininagar)",
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
    "description": "Professional 3D visualization and rendering services bringing architectural designs to life with photorealistic quality and immersive experiences."
  };

  const features = [
    {
      title: "Photorealistic Rendering",
      description: "High-quality, lifelike visualizations of architectural designs"
    },
    {
      title: "Interior Visualization",
      description: "Detailed 3D representations of interior spaces"
    },
    {
      title: "Exterior Visualization",
      description: "Comprehensive exterior views and landscaping details"
    },
    {
      title: "Virtual Tours",
      description: "Interactive 360-degree walkthroughs of spaces"
    },
    {
      title: "Material Visualization",
      description: "Accurate representation of textures and finishes"
    },
    {
      title: "Lighting Simulation",
      description: "Natural and artificial lighting effects visualization"
    }
  ];

  const process = [
    {
      title: "Project Brief",
      description: "Understanding design requirements and objectives"
    },
    {
      title: "3D Modeling",
      description: "Creating detailed 3D models of the space"
    },
    {
      title: "Material & Texture",
      description: "Applying realistic materials and textures"
    },
    {
      title: "Lighting Setup",
      description: "Setting up natural and artificial lighting"
    },
    {
      title: "Rendering",
      description: "Generating high-quality photorealistic images"
    },
    {
      title: "Post-Production",
      description: "Final touches and enhancements for perfect presentation"
    }
  ];

  const faqs = [
    {
      q: "How much does 3D architectural rendering cost in Daltonganj (Medininagar)?",
      a: "The cost depends on the complexity of the project, the number of views, and the level of detail required. A single exterior still render is priced differently from a full interior walkthrough or a 360-degree virtual tour. Share your drawings and we will provide a clear, itemised quote before any work begins.",
    },
    {
      q: "How long does it take to complete a 3D rendering project?",
      a: "Turnaround depends on the scope. A single photorealistic still can often be ready within a few days, while detailed interior sets or animated walkthroughs take longer. We agree on a timeline upfront and keep you updated at each draft stage.",
    },
    {
      q: "Can you create renders from my existing 2D plans or sketches?",
      a: "Yes. We regularly build 3D models from CAD drawings, hand sketches, or simple floor plans. If you only have rough ideas, our team can also help develop the concept before modelling and rendering it.",
    },
    {
      q: "Why choose Sattva Design for 3D visualization in Medininagar?",
      a: "We are a local architecture and design firm based in Medininagar, so we understand regional building styles and client expectations. We combine photorealistic quality with revisions at each stage, ensuring the final visuals match your vision before construction starts.",
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
            src="https://images.unsplash.com/photo-1545465270-b28c72f99276"
            alt="3D Visualization & Rendering"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">
                3D Visualization & Rendering in Daltonganj (Medininagar)
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
              <span className="text-gray-900">3D Visualization & Rendering</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6">Bring Your Designs to Life</h2>
              <p className="text-gray-600 mb-8">
                At Sattva Design, we transform architectural concepts into stunning
                visual experiences through state-of-the-art 3D visualization and
                rendering services. Our photorealistic renderings help clients
                visualize their projects before construction begins.
              </p>

              <h3 className="text-2xl font-serif mb-4">Our Expertise</h3>
              <p className="text-gray-600 mb-8">
                We specialize in creating immersive and detailed 3D visualizations
                that capture every aspect of your design. From material textures to
                lighting effects, we ensure every detail is perfectly represented.
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
            <h2 className="text-3xl font-serif mb-8 text-center">Our Visualization Process</h2>
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
            <h2 className="text-3xl font-serif mb-4">Ready to Visualize Your Project?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to discuss your 3D visualization needs in Daltonganj (Medininagar).
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

export default ThreeDVisualizationRenderingDaltonganjMedininagar;
