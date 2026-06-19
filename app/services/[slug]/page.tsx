import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ChevronRight } from 'lucide-react';
import ContactSection from '@/components/ContactSection';
import { getAllServiceSlugs, getServicePage, getService } from '@/data/services';
import { SERVICE_HERO_IMAGE, OFFICE_SCHEMA } from '@/data/services.types';

const SITE = 'https://sattvadesignconsultancy.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getServicePage(params.slug);
  if (!page) return { title: 'Service Not Found' };
  const { service, location } = page;
  const title = `${service.name} in ${location.city} | Sattva Design`;
  const description = `${service.name} services in ${location.city}, ${location.region} by Sattva Design. ${service.tagline}.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${SITE}/services/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE}/services/${params.slug}`,
      images: [{ url: service.heroImage || SERVICE_HERO_IMAGE }],
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const page = getServicePage(params.slug);
  if (!page) notFound();

  const { service, location, content } = page;
  const office = OFFICE_SCHEMA[location.office];
  const hero = service.heroImage || SERVICE_HERO_IMAGE;
  const fullTitle = `${service.name} in ${location.city}`;
  const allFaqs = [...content.localFaqs, ...service.generalFaqs];

  // Related services link to the same location variant.
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: fullTitle,
    serviceType: service.name,
    description: `${service.name} services in ${location.city}, ${location.region}. ${service.tagline}.`,
    areaServed: { '@type': 'City', name: location.city },
    provider: { '@id': `${SITE}/#organization` },
    url: `${SITE}/services/${params.slug}`,
    image: hero,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: office.addressRegion,
      postalCode: office.postalCode,
      addressCountry: 'IN',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
      { '@type': 'ListItem', position: 3, name: fullTitle, item: `${SITE}/services/${params.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="pt-20">
        {/* Hero */}
        <div className="relative h-[60vh] bg-gray-100">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${hero}')` }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-4xl md:text-6xl font-serif mb-6">{fullTitle}</h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto">{service.tagline}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gray-900">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{fullTitle}</span>
          </nav>

          {/* Intro + overview */}
          <div className="prose max-w-none mb-12">
            <p className="text-xl text-gray-600">{content.intro}</p>
            <p className="text-gray-600 mt-4">{service.overview}</p>
          </div>

          {/* What's included */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.whatIncluded.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif mb-8">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((p, i) => (
                <div key={p.step}>
                  <div className="text-3xl font-serif text-gray-300 mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-medium mb-2">{p.step}</h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits + approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-serif mb-8">Why Choose Sattva Design</h2>
              <ul className="space-y-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-8">Our Approach</h2>
              <p className="text-gray-600">{service.approach}</p>
            </div>
          </div>

          {/* FAQs */}
          {allFaqs.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {allFaqs.map((faq) => (
                  <div key={faq.q} className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related services */}
          {related.length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-serif mb-8">Related Services in {location.city}</h2>
              <div className="flex flex-wrap gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}-${location.key}`}
                    className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {r.name}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif mb-4">Start Your {service.name} Project</h2>
              <p className="text-gray-600">
                Tell us about your space in {location.city} and we&apos;ll get back to you with next steps.
              </p>
            </div>
            <ContactSection isFullPage={false} />
          </div>
        </div>
      </div>
    </>
  );
}
