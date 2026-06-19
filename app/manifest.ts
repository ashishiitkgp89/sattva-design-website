import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sattva Design Consultancy',
    short_name: 'Sattva Design',
    description:
      'Architecture and interior design across Jharkhand — studios in Ranchi and Medininagar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'https://res.cloudinary.com/dhakknfrx/image/upload/v1740713460/Sattva_Logo_zzviza.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
