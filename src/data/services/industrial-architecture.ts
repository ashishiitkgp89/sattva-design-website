import { ServiceEntry } from '../services.types';

export const industrialArchitecture: ServiceEntry = {
  slug: 'industrial-architecture',
  heroImage: "https://images.pexels.com/photos/4115457/pexels-photo-4115457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: 'Industrial Architecture',
  category: 'Industrial & Institutional',
  tagline: 'Factories, warehouses and industrial buildings planned for productivity and safety',
  overview:
    'We design industrial buildings — factories, warehouses, workshops and processing units — where the architecture exists to serve the operation inside it. Layout, structural spans, material flow and services all follow the production or storage process, so people, goods and machinery move with as little friction as possible. The result is a functional, safe and durable facility that supports throughput today and can adapt as the business grows.',
  whatIncluded: [
    'Process-driven layout and material-flow planning',
    'Long-span structural and shed design',
    'Loading, storage and circulation planning',
    'Electrical load, ventilation and utility coordination',
    'Fire safety, exits and statutory compliance',
    'Site planning for vehicle access and future expansion',
  ],
  process: [
    { step: 'Process Study', description: 'We map your production or storage flow, machinery and utility needs to set the brief.' },
    { step: 'Layout & Structure', description: 'We plan the building footprint, spans and circulation around that flow.' },
    { step: 'Services & Compliance', description: 'We coordinate power, ventilation and fire safety and prepare drawings for approvals.' },
    { step: 'Construction Support', description: 'We support tendering and supervise construction through to a ready facility.' },
  ],
  benefits: [
    'Layouts that minimise material handling and wasted movement',
    'Clear spans that keep floor space flexible',
    'Services sized correctly for your equipment loads',
    'Room to scale up production without rebuilding',
  ],
  approach:
    'Industrial buildings are about performance and longevity, so we favour robust, low-maintenance structural systems and finishes that handle heavy use, dust, heat or moisture as the process demands. We size electrical, ventilation and drainage capacity to real equipment loads with headroom for growth, and we plan vehicle movement, loading bays and safe pedestrian routes so the site works for both throughput and worker safety.',
  generalFaqs: [
    {
      q: 'Do you design the building around our specific production process?',
      a: 'Yes. We start by understanding your process flow, machinery and utility requirements, then plan the layout, structural spans and services so material and people move efficiently and the building genuinely fits the operation.',
    },
    {
      q: 'Can you plan the facility so we can expand it later?',
      a: 'We design the site and structure with future phases in mind — leaving room for additional bays, utility capacity and access so you can scale up without disrupting the existing operation.',
    },
    {
      q: 'How much does an industrial building cost to design and build?',
      a: 'It depends on the building type, span, height, the loads it must carry and the services involved — a simple storage shed and a process-heavy factory differ greatly. We prepare a detailed estimate once the scope and process requirements are defined.',
    },
  ],
  related: ['healthcare-hospitals', 'building-approvals', 'construction-management'],
  locations: {
    ranchi: {
      intro:
        'Planning a factory, warehouse or workshop in or around Ranchi? Our head-office team works with manufacturers and businesses across the region — including units in and near the industrial areas around the city — to design industrial buildings that are efficient, compliant and built to last. Being based in Harmu means we stay involved through planning, approvals and construction.',
      localFaqs: [
        {
          q: 'Do you design factories and warehouses in Ranchi?',
          a: 'Yes. Our head office is in Harmu, Ranchi, and we design industrial buildings across the region, with in-person coordination and regular site supervision through construction.',
        },
        {
          q: 'Can you help with industrial building approvals in Ranchi?',
          a: 'We prepare the architectural and structural drawings needed for building and statutory approvals and coordinate with the relevant authorities as part of the process.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For industrial projects in Daltonganj (Medininagar), our local studio helps manufacturers, traders and processing businesses across Palamu plan factories, warehouses and workshops suited to the region. We focus on robust, practical buildings with good vehicle access and the utility capacity local operations need, designed to expand as the business grows.',
      localFaqs: [
        {
          q: 'Do you take industrial projects in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, designing factories, warehouses and workshops with in-person consultations and site visits.',
        },
        {
          q: 'Can you plan good vehicle and loading access for a site near Medininagar?',
          a: 'We plan site layout, approach roads, loading bays and circulation so trucks and goods can move safely and efficiently, which is often a key constraint on plots around Palamu.',
        },
      ],
    },
  },
};
