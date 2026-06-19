import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Sattva Design. Visit our offices in Medininagar and Ranchi, Jharkhand, or send us a message about your architecture and interior design project.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Sattva Design',
    description:
      'Visit our offices in Medininagar and Ranchi, Jharkhand, or send us a message about your project.',
    url: '/contact',
  },
};

export default function Contact() {
  return <ContactSection isFullPage={true} />;
}
