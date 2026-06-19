import { ServiceEntry } from '../services.types';

export const interiorDesign: ServiceEntry = {
  slug: 'interior-design',
  heroImage: "https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: 'Interior Design',
  category: 'Interior Design',
  tagline: 'Functional, beautiful interiors designed around how you live and work',
  overview:
    'Our interior design service turns bare or dated spaces into interiors that are comfortable, practical and a genuine reflection of the people who use them. We work across residential homes, apartments and commercial spaces — planning layouts, light, storage, materials and finishes as one coherent scheme rather than a set of disconnected decisions. The result is a space that works hard day to day and still feels considered and calm.',
  whatIncluded: [
    'Space planning and furniture layouts',
    'Lighting design — natural and artificial',
    'Material, finish and colour palettes',
    'Custom furniture and joinery detailing',
    'False ceiling, flooring and wall treatments',
    '3D views so you can see the space before work begins',
  ],
  process: [
    { step: 'Consultation', description: 'We discuss how you use the space, your taste, timeline and budget.' },
    { step: 'Concept & Layout', description: 'We prepare space plans and a design direction with mood boards and 3D views.' },
    { step: 'Detailing & Selection', description: 'We finalise materials, finishes, lighting and custom furniture with costing.' },
    { step: 'Execution & Handover', description: 'We coordinate vendors and site work through to a finished, styled space.' },
  ],
  benefits: [
    'Layouts that maximise every square foot',
    'A single, coherent material and lighting scheme',
    'Storage and function planned in from the start',
    'Transparent costing with no surprise extras',
  ],
  approach:
    'We design for the long term — durable materials suited to the local climate, lighting that flatters and performs, and finishes chosen for how they age, not just how they look on day one. Every scheme balances aesthetics with maintenance, budget and the way the space will actually be lived in.',
  generalFaqs: [
    {
      q: 'Do you handle both design and execution?',
      a: 'Yes. We can stop at a detailed design and drawings, or take the project all the way through execution by coordinating carpenters, electricians and other vendors and supervising the site to completion.',
    },
    {
      q: 'Can you work with my existing furniture and budget?',
      a: 'Absolutely. We plan around pieces you want to keep and build the scheme to a budget agreed up front, prioritising the changes that make the biggest difference.',
    },
    {
      q: 'Will I see the design before work starts?',
      a: 'Yes — we provide layouts and 3D visualisations so you can see and adjust the space before any execution begins.',
    },
  ],
  related: ['custom-furniture-decor', 'commercial-interior-design', 'custom-home-design'],
  locations: {
    ranchi: {
      intro:
        'Looking for an interior designer in Ranchi? Our head-office team works with homeowners and businesses across Ranchi — from apartments in Harmu, Argora and Lalpur to showrooms and offices along the city\'s commercial roads — to plan interiors that suit both the space and the way the city lives. Being based in Ranchi means in-person consultations and regular site visits throughout your project.',
      localFaqs: [
        {
          q: 'Do you offer interior design consultations in Ranchi?',
          a: 'Yes. Our head office is in Harmu, Ranchi, so we offer face-to-face consultations and frequent site visits for interior projects across the city.',
        },
        {
          q: 'Do you design both homes and commercial interiors in Ranchi?',
          a: 'We do both — residential interiors for houses and apartments, and commercial interiors for offices, retail and hospitality spaces across Ranchi.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For interior design in Daltonganj (Medininagar), our local studio helps families and businesses across Palamu create interiors that are practical, well-lit and built to last. From homes in and around Medininagar to shops and offices on the main commercial stretches, we plan layouts, storage and finishes that make everyday spaces work better.',
      localFaqs: [
        {
          q: 'Do you take interior projects in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, with site visits and in-person consultations for interior projects.',
        },
        {
          q: 'Can you source materials locally in Medininagar?',
          a: 'We work with trusted local vendors around Medininagar wherever possible, balancing quality, cost and availability for your project.',
        },
      ],
    },
  },
};
