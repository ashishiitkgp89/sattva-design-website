import { ServiceEntry } from '../services.types';

export const hotelsHospitalityDesign: ServiceEntry = {
  slug: 'hotels-hospitality-design',
  name: 'Hotels & Hospitality Design',
  category: 'Commercial Architecture',
  tagline: 'Hotels, resorts and restaurants designed to delight guests and run profitably',
  overview:
    'We design hospitality spaces — hotels, resorts, banquet halls, restaurants and cafes — that create a strong first impression and keep guests coming back. Good hospitality design is about more than looks: it balances a memorable guest experience with the back-of-house efficiency, durability and operating costs that decide whether a property actually makes money. We plan the guest journey from arrival to checkout alongside service routes, kitchens and staff areas so both sides work in harmony.',
  whatIncluded: [
    'Guest-journey planning from arrival to room and dining',
    'Lobby, room, restaurant and banquet layouts',
    'Back-of-house, kitchen and service-route planning',
    'Theme, material and lighting concepts that build identity',
    'Acoustic, ventilation and comfort detailing',
    'Signage, façade and landscape coordination',
  ],
  process: [
    { step: 'Brief & Positioning', description: 'We define your target guest, segment and budget to set the design direction.' },
    { step: 'Concept & Experience', description: 'We design the guest journey, theme and spatial layouts with mood boards and 3D views.' },
    { step: 'Detailing & Selection', description: 'We finalise finishes, lighting, FF&E and services with costing and durability in mind.' },
    { step: 'Execution & Handover', description: 'We coordinate contractors and vendors through fit-out to a styled, ready-to-open space.' },
  ],
  benefits: [
    'A distinctive identity that supports your room and cover rates',
    'Efficient back-of-house that lowers running costs',
    'Durable finishes chosen for heavy guest use',
    'Layouts that increase covers, occupancy and revenue per area',
  ],
  approach:
    'Hospitality interiors are used hard and constantly, so we specify finishes, fabrics and furniture that look refined but survive years of guest traffic and easy cleaning. We pay close attention to lighting and acoustics because they shape mood as much as any material, and we plan kitchens, service corridors and storage so staff can work quickly and discreetly. Every decision is weighed against both guest experience and long-term operating cost.',
  generalFaqs: [
    {
      q: 'Do you design both the guest areas and the back-of-house?',
      a: 'Yes. We plan the full property — lobbies, rooms and dining alongside kitchens, service corridors, stores and staff areas — because a smooth guest experience depends on the operational side working just as well.',
    },
    {
      q: 'Can you work to a specific brand or theme?',
      a: 'Absolutely. We can develop an original identity for an independent property or design to the standards and look of a brand or franchise you are operating under.',
    },
    {
      q: 'How much does a hospitality project cost?',
      a: 'It varies widely with the size, star positioning and level of finish — a boutique cafe and a multi-storey hotel sit in very different ranges. We prepare a detailed estimate once the concept and scope are agreed rather than quoting a fixed price up front.',
    },
  ],
  related: ['commercial-architecture', 'interior-design', 'facade-exterior-design'],
  locations: {
    ranchi: {
      intro:
        'Opening a hotel, restaurant or banquet hall in Ranchi? Our head-office team works with hospitality owners across the city — from restaurants and cafes around Lalpur and Main Road to banquet venues and hotels on the arterial routes — to create spaces that stand out in a competitive market and run efficiently. Being based in Harmu lets us stay closely involved through design and fit-out.',
      localFaqs: [
        {
          q: 'Do you design hotels and restaurants in Ranchi?',
          a: 'Yes. Our head office is in Harmu, Ranchi, and we design hotels, restaurants, cafes and banquet halls across the city, with face-to-face consultations and regular site visits.',
        },
        {
          q: 'Can you help an existing Ranchi restaurant refresh its look?',
          a: 'We do. We can redesign and re-fit an existing venue to refresh its identity and improve its layout, often phasing the work to limit downtime for the business.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For hospitality projects in Daltonganj (Medininagar), our local studio helps restaurant, hotel and banquet owners across Palamu create venues that draw a strong local crowd and host events well. We focus on flexible, durable spaces suited to the region — banquet and dining venues that handle weddings and functions, and hotels that serve travellers and visiting families reliably.',
      localFaqs: [
        {
          q: 'Do you take hospitality projects in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, designing hotels, restaurants and banquet venues with in-person consultations and site visits.',
        },
        {
          q: 'Can you design a banquet venue for weddings and functions in Medininagar?',
          a: 'We can. We plan flexible halls with the parking, catering support and circulation that large local functions and weddings around Palamu need.',
        },
      ],
    },
  },
};
