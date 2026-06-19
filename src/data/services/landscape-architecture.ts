import { ServiceEntry } from '../services.types';

export const landscapeArchitecture: ServiceEntry = {
  slug: 'landscape-architecture',
  heroImage: "https://images.pexels.com/photos/29821815/pexels-photo-29821815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: 'Landscape Architecture',
  category: 'Urban & Landscape Planning',
  tagline: 'Gardens, courtyards and outdoor spaces designed to be lived in and easy to maintain',
  overview:
    'We design outdoor spaces — private gardens, courtyards, terraces, campus grounds and public landscapes — so they are as considered as the buildings they surround. Our work brings together planting, paving, water, lighting and level changes into spaces that feel inviting, work in every season and are realistic to maintain. Whether it is a quiet home garden or the grounds of a larger development, we plan the outdoors as usable, living space rather than leftover area.',
  whatIncluded: [
    'Site analysis, levels and drainage planning',
    'Planting schemes suited to the local climate',
    'Hardscape — paving, paths, walls and seating',
    'Outdoor lighting and water-feature design',
    'Irrigation and rainwater management',
    'Planting and maintenance guidance for the long term',
  ],
  process: [
    { step: 'Site Study', description: 'We assess the site, sunlight, soil, levels and drainage along with how you want to use the space.' },
    { step: 'Concept Design', description: 'We prepare a layout and planting concept with mood boards and views of the proposed landscape.' },
    { step: 'Detailing & Selection', description: 'We finalise plants, paving, lighting and irrigation with costing and seasonal performance in mind.' },
    { step: 'Execution & Care', description: 'We coordinate landscapers and site work and provide a plan for ongoing maintenance.' },
  ],
  benefits: [
    'Outdoor spaces that are genuinely used year round',
    'Planting chosen to thrive in the local climate',
    'Proper drainage that protects the site and structures',
    'Realistic maintenance so the landscape stays good over time',
  ],
  approach:
    'A landscape only succeeds if it survives, so we choose plants suited to the local soil, heat and monsoon rather than species that look good only on paper, and we group them by water and light needs to keep upkeep sensible. We plan levels, drainage and rainwater management carefully to protect both the garden and nearby buildings, and we use durable hardscape materials and well-placed lighting so the space works comfortably from early morning into the evening.',
  generalFaqs: [
    {
      q: 'Do you design both private gardens and larger landscapes?',
      a: 'Yes. We work on everything from home gardens, courtyards and terraces to the grounds of larger residential, commercial and institutional developments, scaling the approach to the site.',
    },
    {
      q: 'Will the planting be easy to maintain?',
      a: 'We design with maintenance in mind — choosing climate-suited plants, grouping them by water needs and planning irrigation so the landscape stays healthy without constant intensive care, and we hand over guidance on looking after it.',
    },
    {
      q: 'How much does a landscape project cost?',
      a: 'It depends on the area, the amount of hardscape, planting density and features like water or lighting — a simple planted garden and a fully built terrace landscape differ a lot. We prepare a detailed estimate once the design and scope are agreed.',
    },
  ],
  related: ['urban-planning', 'sustainable-green-architecture', 'public-spaces-infrastructure'],
  locations: {
    ranchi: {
      intro:
        'Looking to design a garden, terrace or landscape in Ranchi? Our head-office team works with homeowners, builders and institutions across the city — from private gardens in Harmu and Ashok Nagar to courtyards and campus grounds — to create outdoor spaces that suit Ranchi\'s climate and are realistic to maintain. Being based in Harmu means we can study sites in person and follow the planting through.',
      localFaqs: [
        {
          q: 'Do you design gardens and landscapes in Ranchi?',
          a: 'Yes. Our head office is in Harmu, Ranchi, and we design private gardens, terraces, courtyards and larger landscapes across the city, with site visits and in-person consultations.',
        },
        {
          q: 'Which plants do you use for Ranchi\'s climate?',
          a: 'We choose species suited to Ranchi\'s relatively pleasant climate and monsoon, favouring hardy, locally adaptable planting, and we finalise the palette after studying the specific site\'s sunlight and soil.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For landscape design in Daltonganj (Medininagar), our local studio helps families, businesses and institutions across Palamu create gardens and outdoor spaces that hold up to the region\'s warmer, drier conditions. We lean towards hardy, water-wise planting and good shade and drainage so outdoor areas stay comfortable and easy to look after through the year.',
      localFaqs: [
        {
          q: 'Do you take landscape projects in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, designing gardens, courtyards and larger landscapes with in-person site visits and consultations.',
        },
        {
          q: 'How do you handle the warmer, drier climate around Medininagar?',
          a: 'We favour drought-tolerant, hardy planting, plan for shade and use efficient irrigation and rainwater management so landscapes around Palamu stay healthy without heavy water use.',
        },
      ],
    },
  },
};
