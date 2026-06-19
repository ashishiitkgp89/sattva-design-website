import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const GTM_ID = 'GTM-NC39PRKV';
const SITE_URL = 'https://sattvadesignconsultancy.com';
const OG_IMAGE =
  'https://res.cloudinary.com/dhakknfrx/image/upload/v1739525293/image_he11ay.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sattva Design | Architecture & Interior Design in Jharkhand',
    template: '%s | Sattva Design',
  },
  description:
    'Sattva Design - Creating timeless architectural designs that inspire and endure',
  keywords: [
    'architecture',
    'interior design',
    'residential design',
    'commercial design',
    'sustainable architecture',
  ],
  authors: [{ name: 'Sattva Design' }],
  alternates: { canonical: '/' },
  icons: {
    icon: 'https://res.cloudinary.com/dhakknfrx/image/upload/v1740713460/Sattva_Logo_zzviza.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Sattva Design',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Sattva Design | Architecture & Interior Design in Jharkhand',
    description:
      'Sattva Design - Creating timeless architectural designs that inspire and endure',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Sattva Design' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sattva Design | Architecture & Interior Design in Jharkhand',
    description:
      'Sattva Design - Creating timeless architectural designs that inspire and endure',
    images: [OG_IMAGE],
  },
};

// Sitewide brand entity + search action.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Sattva Design Consultancy',
  url: SITE_URL,
  logo: 'https://res.cloudinary.com/dhakknfrx/image/upload/v1740713460/Sattva_Logo_zzviza.png',
  image: OG_IMAGE,
  email: 'sattvadesignconsultancy@gmail.com',
  sameAs: ['https://www.instagram.com/sattva_design_/'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress:
        'Shop no-14, 1st Floor Zila Parishad Market Kutchery, Railway crossing Road, Jail Hata Rd',
      addressLocality: 'Medininagar',
      addressRegion: 'Jharkhand',
      postalCode: '822101',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress:
        '3rd Floor, Sunita Complex, Shivdayal Nagar, Argora, Bypass Rd, opposite V Mart, Harmu Housing Colony, Harmu',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      postalCode: '834002',
      addressCountry: 'IN',
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Sattva Design',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <AppRouterCacheProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
