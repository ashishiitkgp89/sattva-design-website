import { ServiceEntry } from '../services.types';

export const facadeExteriorDesign: ServiceEntry = {
  slug: 'facade-exterior-design',
  heroImage: "https://images.pexels.com/photos/15663487/pexels-photo-15663487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: 'Facade & Exterior Design',
  category: 'Specialized Services',
  tagline: 'A striking, weather-smart exterior that gives your building real presence',
  overview:
    'A building\'s facade is the first thing anyone sees — and it does far more than look good. Our facade and exterior design service shapes the outer face of homes, shops and commercial buildings to create a strong identity while controlling heat, glare, rain and maintenance. We work with form, materials, openings, lighting and detailing to give your building presence that lasts. Whether it is a new building or a refresh of a tired exterior, we balance the visual statement with the practical realities of the local climate — shading, water-shedding details, durable finishes and sensible detailing around windows and parapets. The result is an exterior that stands out for the right reasons and keeps performing year after year.',
  whatIncluded: [
    'Facade concept and exterior elevation design',
    'Material, cladding and colour specification',
    'Window, opening and shading detailing',
    'Facade lighting and highlight planning',
    'Weatherproofing and maintenance detailing',
    '3D views of the proposed exterior',
  ],
  process: [
    { step: 'Study & Brief', description: 'We assess the building, orientation, surroundings and the look you want to achieve.' },
    { step: 'Concept Design', description: 'We develop facade options with materials and 3D views to agree a direction.' },
    { step: 'Detailing', description: 'We detail materials, openings, shading and weatherproofing for execution.' },
    { step: 'Execution Support', description: 'We support the site team to deliver the facade as designed.' },
  ],
  benefits: [
    'A distinctive exterior that strengthens your identity',
    'Shading and detailing that cut heat and glare',
    'Materials chosen to weather the local climate',
    'Lighting that gives the building presence after dark',
  ],
  approach:
    'We design facades for the climate first — orientation-aware shading, projections and openings that manage the Jharkhand sun, and water-shedding details that keep monsoon rain off finishes and out of joints. Materials are chosen for how they weather and how easy they are to clean and maintain, so the exterior still looks sharp years after handover rather than streaked and tired.',
  generalFaqs: [
    {
      q: 'Can you redesign the facade of an existing building?',
      a: 'Yes. We frequently refresh tired or dated exteriors — reworking materials, openings, colour and lighting to modernise the look without rebuilding the structure behind it.',
    },
    {
      q: 'Which facade materials last best in this climate?',
      a: 'It depends on the building and budget, but we favour finishes and cladding that handle strong sun and heavy monsoon rain with minimal maintenance, and we detail joints and edges to shed water and resist staining.',
    },
    {
      q: 'How is facade design priced?',
      a: 'Fees depend on the building size, the complexity of the facade and whether you need design only or design plus execution support. We scope your project and quote accordingly rather than using a fixed rate.',
    },
  ],
  related: ['commercial-architecture', '3d-visualization-rendering', 'sustainable-green-architecture'],
  locations: {
    ranchi: {
      intro:
        'For facade and exterior design in Ranchi, our head-office team designs and refreshes building fronts across the city — from showrooms and offices on busy commercial roads to homes that want a stronger street presence. Being local lets us study how a facade will read against its surroundings and the Ranchi sun, and supervise the finish closely on site.',
      localFaqs: [
        {
          q: 'Do you redesign shop and showroom facades in Ranchi?',
          a: 'Yes. We design and modernise commercial facades for shops, showrooms and offices across Ranchi to give them a clearer, more attractive street identity.',
        },
        {
          q: 'Do you visit the site for facade design in Ranchi?',
          a: 'Yes. From our Harmu head office we visit your building to study its orientation and surroundings, and we supervise execution to make sure the facade is finished as designed.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'In Daltonganj (Medininagar), our local studio designs facades and exteriors for homes, shops and commercial buildings across Palamu that want to stand out on the street while standing up to the climate. With a team based locally, owners can upgrade the face of their building using practical, durable materials and finishes that are realistic to source and maintain in the region.',
      localFaqs: [
        {
          q: 'Can you give my building in Daltonganj (Medininagar) a modern exterior?',
          a: 'Yes. Our Medininagar office redesigns and refreshes facades for homes and commercial buildings across Daltonganj and Palamu using durable, easy-to-maintain materials.',
        },
        {
          q: 'Do you use locally available facade materials in Medininagar?',
          a: 'Where they meet our durability standards, yes. We favour materials and finishes that are practical to source and maintain in the Medininagar area to keep cost and upkeep sensible.',
        },
      ],
    },
  },
};
