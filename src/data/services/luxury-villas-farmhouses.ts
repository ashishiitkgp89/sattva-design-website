import { ServiceEntry } from '../services.types';

export const luxuryVillasFarmhouses: ServiceEntry = {
  slug: 'luxury-villas-farmhouses',
  heroImage: "https://images.pexels.com/photos/37692742/pexels-photo-37692742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: 'Luxury Villas & Farmhouses',
  category: 'Residential Architecture',
  tagline: 'Bespoke villas and farmhouses designed for comfort, privacy and a sense of escape',
  overview:
    'We design luxury villas and farmhouses as private retreats — homes where architecture, interiors and the surrounding land work as one. These projects are about generous, well-proportioned spaces, a strong connection to the outdoors, privacy, and the kind of detailing and material quality that defines a premium home. Every design is shaped around the owners, the site and the way they want to live, whether that is entertaining, relaxing or simply getting away from the city.',
  whatIncluded: [
    'Bespoke architectural design tailored to the site',
    'Indoor-outdoor planning with courtyards, decks and views',
    'Premium material and finish palettes',
    'Pool, landscape and outdoor-living integration',
    'Coordinated interior design and custom joinery',
    '3D visualisation so you can experience the home in advance',
  ],
  process: [
    { step: 'Consultation', description: 'We understand your lifestyle, the site, your taste, timeline and budget in depth.' },
    { step: 'Concept Design', description: 'We develop the architectural concept and key spaces with mood boards and 3D views.' },
    { step: 'Detailing & Selection', description: 'We finalise materials, finishes, landscape and interiors with detailed costing.' },
    { step: 'Execution & Handover', description: 'We coordinate contractors and specialists through construction to a finished home.' },
  ],
  benefits: [
    'A one-off home designed entirely around you',
    'Strong connection between indoor and outdoor living',
    'Premium materials chosen to age well',
    'A single team coordinating architecture, interiors and landscape',
  ],
  approach:
    'Luxury is in the detail and the longevity, so we select premium materials for how they weather and age, not just their first impression, and we resolve junctions, light and proportion carefully because that is what separates a fine home from an ordinary one. We design the site, building and landscape together — framing views, managing privacy and orientation, and blending indoor and outdoor living — so the finished home feels effortless and genuinely tailored to its owners.',
  generalFaqs: [
    {
      q: 'Do you design the interiors and landscape as well as the architecture?',
      a: 'Yes. We see a villa or farmhouse as one project, coordinating architecture, interiors, custom joinery and landscape together so the spaces, materials and outdoor areas flow as a single, considered whole.',
    },
    {
      q: 'Can you design for a sloping or unusual plot?',
      a: 'We enjoy these sites. Slopes, irregular boundaries and existing trees often lead to the most interesting designs — we work with the contours and features to frame views, manage privacy and create distinctive split levels and outdoor spaces.',
    },
    {
      q: 'How much does a luxury villa or farmhouse cost?',
      a: 'It depends greatly on size, site conditions, the level of finish and features like pools and extensive landscaping — bespoke homes span a wide range. We prepare a detailed estimate once the brief and design direction are agreed rather than quoting a flat figure.',
    },
  ],
  related: ['custom-home-design', 'interior-design', 'landscape-architecture'],
  locations: {
    ranchi: {
      intro:
        'Planning a luxury villa or farmhouse in or around Ranchi? Our head-office team works with families building premium homes across the city and its quieter outskirts — from independent villas in established neighbourhoods to weekend farmhouses on the green edges of Ranchi. Being based in Harmu means hands-on involvement through design, material selection and construction.',
      localFaqs: [
        {
          q: 'Do you design luxury villas and farmhouses in Ranchi?',
          a: 'Yes. Our head office is in Harmu, Ranchi, and we design bespoke villas and farmhouses in the city and on its outskirts, with in-person consultations and close site involvement.',
        },
        {
          q: 'Can you design a weekend farmhouse on the outskirts of Ranchi?',
          a: 'We can. We design farmhouses on the greener fringes around Ranchi as private retreats, planning the home, landscape and outdoor living around the plot and its views.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For luxury villas and farmhouses around Daltonganj (Medininagar), our local studio helps families across Palamu build premium homes and country retreats on larger plots typical of the region. With more open land available, we plan generous, private homes that connect closely with their gardens and surroundings and are designed for the local climate.',
      localFaqs: [
        {
          q: 'Do you design luxury homes and farmhouses in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, designing bespoke villas and farmhouses with in-person consultations and regular site visits.',
        },
        {
          q: 'Can you make the most of a large plot around Medininagar?',
          a: 'We can. Larger plots common around Palamu allow generous, low-rise homes with courtyards, gardens and outdoor living, and we plan privacy, orientation and landscape to suit the local climate.',
        },
      ],
    },
  },
};
