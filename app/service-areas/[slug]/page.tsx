import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import { newServiceAreas, getServiceArea } from '@/data/serviceAreas';
import {
  CORE_SERVICE_CATEGORIES,
  OFFICE_SCHEMA,
  ServiceAreaEntry,
} from '@/data/serviceArea.types';

// Only the data-driven slugs are valid here; the 16 hand-built Palamu pages
// live in their own folders and take precedence over this dynamic route.
export const dynamicParams = false;

export function generateStaticParams() {
  return newServiceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = getServiceArea(params.slug);
  if (!area) return { title: 'Area Not Found' };
  return {
    title: { absolute: area.seoTitle },
    description: area.seoDescription,
    keywords: area.keywords,
    alternates: {
      canonical: `https://sattvadesignconsultancy.com/service-areas/${area.slug}`,
    },
    openGraph: {
      title: area.seoTitle,
      description: area.seoDescription,
      url: `https://sattvadesignconsultancy.com/service-areas/${area.slug}`,
    },
  };
}

function buildSchema(area: ServiceAreaEntry) {
  const office = OFFICE_SCHEMA[area.office];
  const areaServed =
    area.type === 'locality' && area.parentCity
      ? `${area.name}, ${area.parentCity}`
      : area.name;

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ArchitecturalFirm',
    name: `Sattva Design - ${areaServed}`,
    image:
      'https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png',
    description: area.seoDescription,
    url: `https://sattvadesignconsultancy.com/service-areas/${area.slug}`,
    telephone: office.telephone,
    email: 'sattvadesignconsultancy@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      postalCode: office.postalCode,
      addressCountry: 'IN',
    },
    ...(office.geo
      ? { geo: { '@type': 'GeoCoordinates', ...office.geo } }
      : {}),
    areaServed: { '@type': 'Place', name: areaServed },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sattvadesignconsultancy.com/' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://sattvadesignconsultancy.com/service-areas' },
      { '@type': 'ListItem', position: 3, name: areaServed, item: `https://sattvadesignconsultancy.com/service-areas/${area.slug}` },
    ],
  };

  return { localBusiness, faqPage, breadcrumb };
}

export default function ServiceAreaPage({
  params,
}: {
  params: { slug: string };
}) {
  const area = getServiceArea(params.slug);
  if (!area) notFound();

  const office = OFFICE_SCHEMA[area.office];
  const { localBusiness, faqPage, breadcrumb } = buildSchema(area);
  const fullName =
    area.type === 'locality' && area.parentCity
      ? `${area.name}, ${area.parentCity}`
      : area.name;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    area.mapQuery
  )}&output=embed`;

  // Nearby areas: other places in the same group (Ranchi localities / Palamu / cities).
  const nearby = newServiceAreas
    .filter(
      (a) =>
        a.slug !== area.slug &&
        a.type === area.type &&
        a.office === area.office
    )
    .slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[40vh] bg-gray-100">
          <Image
            src="https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png"
            alt={`Sattva Design — architecture & interior design in ${fullName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-serif text-center px-4">
              Architecture & Interior Design
              <br />
              in {fullName}
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/service-areas" className="hover:text-gray-900">Service Areas</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{fullName}</span>
          </nav>

          {/* Intro */}
          <div className="prose max-w-none mb-12">
            <p className="text-xl text-gray-600">{area.intro}</p>
            <p className="text-gray-600 mt-4">{area.about}</p>
          </div>

          {/* Services */}
          <h2 className="text-3xl font-serif mb-8">
            Our Services in {area.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {CORE_SERVICE_CATEGORIES.map((category) => (
              <div key={category.title} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-serif mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      {item.slug ? (
                        <Link
                          href={`/services/${item.slug}`}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-gray-600">{item.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact / office */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-serif mb-6">
                {area.office === 'ranchi'
                  ? 'Visit Our Ranchi Studio'
                  : 'Serving You From Our Studios'}
              </h2>
              {area.type === 'city' && (
                <p className="text-gray-600 mb-6">
                  We serve {area.name} from our studios in Ranchi and Medininagar,
                  with site visits and consultations arranged for your project.
                </p>
              )}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Address</h3>
                    <p className="text-gray-600">
                      {office.streetAddress},<br />
                      {office.addressLocality}, {office.addressRegion} {office.postalCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-gray-600">
                      <a
                        href={`tel:${office.telephone}`}
                        className="hover:text-gray-900 transition-colors"
                      >
                        {office.telephone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:sattvadesignconsultancy@gmail.com"
                        className="hover:text-gray-900 transition-colors"
                      >
                        sattvadesignconsultancy@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px]">
              <iframe
                title={`Map — Sattva Design serving ${fullName}`}
                src={mapSrc}
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

          {/* FAQs */}
          {area.faqs.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {area.faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby areas */}
          {nearby.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-8">Nearby Areas We Serve</h2>
              <div className="flex flex-wrap gap-3">
                {nearby.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/service-areas/${a.slug}`}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Contact form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif mb-4">Start Your Project</h2>
              <p className="text-gray-600">
                Ready to begin your architectural journey in {area.name}? Contact us
                for a consultation.
              </p>
            </div>
            <ContactSection isFullPage={false} />
          </div>

          {/* Back link */}
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
