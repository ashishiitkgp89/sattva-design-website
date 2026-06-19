import { ServiceEntry } from '../services.types';

export const commercialInteriorDesign: ServiceEntry = {
  slug: 'commercial-interior-design',
  name: 'Commercial Interior Design',
  category: 'Interior Design',
  tagline: 'Interiors that work as hard as your business does',
  overview:
    'Our commercial interior design service shapes the inside of offices, retail spaces, showrooms, clinics, restaurants and hospitality venues so they perform commercially and feel right to the people who use them. We plan layouts for productivity and footfall, design lighting and branding that reinforce your identity, and specify finishes that stand up to heavy daily use. The aim is an interior that supports your operations, impresses your customers and is practical to maintain.',
  whatIncluded: [
    'Space planning for workflow, footfall and seating',
    'Branding integration into the interior environment',
    'Lighting design for productivity and ambience',
    'Durable, commercial-grade material and finish selection',
    'Custom furniture, counters and joinery detailing',
    '3D views of the space before execution',
  ],
  process: [
    { step: 'Consultation', description: 'We learn how your business operates, your brand and how customers move through the space.' },
    { step: 'Concept & Layout', description: 'We prepare space plans and a design direction with mood boards and 3D views.' },
    { step: 'Detailing & Selection', description: 'We finalise commercial-grade materials, lighting, branding and furniture with costing.' },
    { step: 'Execution & Handover', description: 'We coordinate vendors and site work to deliver a finished, operational space.' },
  ],
  benefits: [
    'Layouts that improve staff productivity or sales',
    'Interiors that reinforce your brand at every touchpoint',
    'Hard-wearing finishes chosen for commercial traffic',
    'Minimal disruption with a planned execution schedule',
  ],
  approach:
    'Commercial interiors take far more wear than homes, so we specify finishes and furniture rated for heavy, continuous use and plan layouts that keep staff efficient and customers comfortable. Lighting, acoustics and branding are designed together so the space feels coherent and on-brand, and we plan execution around your operating hours where possible to limit downtime. Every choice balances first impression with long-term durability and maintenance.',
  generalFaqs: [
    {
      q: 'How is commercial interior design different from residential?',
      a: 'Commercial interiors must handle heavy daily traffic, support business operations and reflect your brand, so we prioritise durable materials, efficient layouts and compliance alongside aesthetics — not just personal taste.',
    },
    {
      q: 'Can you work without shutting down my business?',
      a: 'Often yes. Where a full closure is not practical, we plan the work in phases or outside operating hours to keep disruption to a minimum, though this depends on the scope and the space.',
    },
    {
      q: 'Do you handle branding and signage inside the space?',
      a: 'We integrate your branding into the interior — colours, graphics, feature walls and signage — so the environment reinforces your identity consistently. We can work alongside your existing brand guidelines.',
    },
  ],
  related: ['interior-design', 'commercial-architecture', 'retail-showroom-remodeling'],
  locations: {
    ranchi: {
      intro:
        'Looking for commercial interior design in Ranchi? From our head office in Harmu, we design interiors for offices, showrooms, retail outlets, clinics and restaurants across the city. We understand the expectations of customers in Ranchi and design spaces that stand out on competitive commercial streets, and being based locally means in-person consultations and regular site supervision throughout execution.',
      localFaqs: [
        {
          q: 'Do you design office and retail interiors across Ranchi?',
          a: 'Yes. From our Harmu head office we design and execute commercial interiors for offices, showrooms, retail and hospitality spaces throughout Ranchi.',
        },
        {
          q: 'Can you help my Ranchi store stand out from competitors nearby?',
          a: 'We design layouts, lighting and branded interiors that draw customers in and differentiate your space from neighbouring shops on busy commercial roads.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For commercial interior design in Daltonganj (Medininagar), our local office helps shop owners, professionals and businesses across Palamu create interiors that attract customers and work well day to day. We focus on practical, cost-aware designs using durable finishes — interiors that look professional, are easy to maintain and make a strong impression within a sensible budget.',
      localFaqs: [
        {
          q: 'Do you design shop and clinic interiors in Medininagar?',
          a: 'Yes. Our Medininagar office designs and executes commercial interiors for shops, showrooms, clinics and offices across Daltonganj and the wider Palamu region.',
        },
        {
          q: 'Can you deliver a professional interior on a modest budget in Palamu?',
          a: 'We prioritise the elements that matter most for customer impression and durability, and choose finishes that balance cost with longevity, so the result looks professional without overspending.',
        },
      ],
    },
  },
};
