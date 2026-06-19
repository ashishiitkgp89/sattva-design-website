import { ServiceEntry } from '../services.types';

export const educationalInstitutions: ServiceEntry = {
  slug: 'educational-institutions',
  name: 'Educational Institutions',
  category: 'Industrial & Institutional',
  tagline: 'Safe, functional campuses designed for learning, movement and growth',
  overview:
    'Schools, colleges and coaching campuses have demands very different from homes or offices — large daily footfall, strict safety norms, varied activity spaces and a need to grow over time. Our educational institutions service designs campuses and buildings that handle all of this: classrooms with the right light and acoustics, circulation that moves crowds safely, and layouts that support teaching, sport, dining and administration together. We plan from the campus level down to the classroom, balancing regulatory compliance, safety and budget with spaces that genuinely support learning. The aim is a building that is easy to run day to day, comfortable for students and staff, and designed with room to expand as the institution grows.',
  whatIncluded: [
    'Campus master planning and phasing',
    'Classroom, lab and library layout design',
    'Circulation, safety and evacuation planning',
    'Assembly, sports and common-area design',
    'Daylight, ventilation and acoustic planning',
    'Drawings for approvals and construction',
  ],
  process: [
    { step: 'Needs & Site Study', description: 'We assess student numbers, activities, the site and future growth plans.' },
    { step: 'Master Plan', description: 'We organise blocks, circulation and open spaces into a phased campus plan.' },
    { step: 'Building Design', description: 'We design classrooms, labs and shared spaces for light, safety and comfort.' },
    { step: 'Drawings & Support', description: 'We deliver approval and construction drawings and support the build.' },
  ],
  benefits: [
    'Layouts that move large numbers of students safely',
    'Classrooms with good daylight, air and acoustics',
    'Phasing that lets the campus grow without disruption',
    'Compliance with safety and accessibility norms',
  ],
  approach:
    'Safety and durability lead every decision — clear evacuation routes, robust materials that survive heavy daily use, and finishes that are easy to maintain on an institutional budget. We design for natural daylight and ventilation to keep running costs and energy use down, and plan circulation and shared facilities so a growing campus stays easy to navigate and manage.',
  generalFaqs: [
    {
      q: 'Can you design a campus to be built in phases?',
      a: 'Yes. We master-plan the whole campus first, then design it so blocks can be built in phases as funding and enrolment allow, without each phase disrupting the parts already in use.',
    },
    {
      q: 'Do you handle safety and accessibility compliance?',
      a: 'Yes. Educational buildings carry specific safety, fire and accessibility requirements, and we design to meet the applicable norms and prepare drawings accordingly.',
    },
    {
      q: 'How are fees worked out for an institutional project?',
      a: 'Fees depend on the built-up area, number of blocks and scope of services. We assess your specific project and provide a clear fee proposal rather than a fixed rate.',
    },
  ],
  related: ['commercial-architecture', 'industrial-architecture', 'landscape-architecture'],
  locations: {
    ranchi: {
      intro:
        'For educational institution design in Ranchi, our head-office team works with schools, colleges and coaching centres planning new campuses or expansions across the city and its growing education corridors. Being based in Ranchi means we can study the site, understand local approval requirements and coordinate closely with trustees and management through design and construction.',
      localFaqs: [
        {
          q: 'Do you design schools and colleges in Ranchi?',
          a: 'Yes. From our Harmu head office we design new schools, colleges and coaching campuses, as well as expansions to existing institutions across Ranchi.',
        },
        {
          q: 'Can you plan a phased campus expansion in Ranchi?',
          a: 'Yes. For existing Ranchi institutions we plan expansions in phases so new blocks can be added with minimal disruption to ongoing classes.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'In Daltonganj (Medininagar), our local studio helps schools and colleges across Palamu build campuses suited to the region — practical, durable and designed to grow with rising enrolment. With a team based locally, institutions can plan and build without relying on architects travelling in from larger cities, and we design with local climate, materials and budgets in mind.',
      localFaqs: [
        {
          q: 'Do you design educational campuses in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office designs schools, colleges and training campuses across Daltonganj and the wider Palamu region.',
        },
        {
          q: 'Can you work to the budgets common for institutions in Palamu?',
          a: 'Yes. We design with realistic regional budgets in mind, choosing durable, low-maintenance materials and practical layouts that keep both construction and running costs sensible.',
        },
      ],
    },
  },
};
