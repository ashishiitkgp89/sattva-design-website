import { ServiceEntry } from '../services.types';

export const customHomeDesign: ServiceEntry = {
  slug: 'custom-home-design',
  heroImage: "https://images.pexels.com/photos/30580640/pexels-photo-30580640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: 'Custom Home Design',
  category: 'Residential Architecture',
  tagline: 'A home designed around your plot, your family and the way you want to live',
  overview:
    'A custom home should respond to its plot, its climate and the family who will live in it — not to a generic template. Our custom home design service starts from your site and your brief, planning the home from the ground up: orientation for light and ventilation, room relationships that suit your routines, and a structure that is sound, efficient and ready for approvals and construction. We design the complete picture — exterior form, internal layouts, structure and the key interior and material decisions — so the house works as a whole. Whether it is a compact city plot or a larger family home, the goal is a design that feels personal, performs well in the local climate and builds within a realistic budget.',
  whatIncluded: [
    'Site and plot analysis with orientation study',
    'Floor plans tailored to your family and routines',
    'Elevations and 3D views of the exterior',
    'Structural coordination and working drawings',
    'Material, finish and key interior direction',
    'Drawings prepared for approvals and construction',
  ],
  process: [
    { step: 'Brief & Site Study', description: 'We study your plot, requirements, budget and how you want the home to feel.' },
    { step: 'Concept Design', description: 'We develop layout options and exterior concepts with 3D views to agree a direction.' },
    { step: 'Design Development', description: 'We refine plans, elevations, structure and materials into a coordinated design.' },
    { step: 'Drawings & Handover', description: 'We produce working and approval drawings ready for sanction and construction.' },
  ],
  benefits: [
    'A layout shaped around how your family actually lives',
    'Better natural light and ventilation for the climate',
    'Efficient use of every foot of your plot',
    'A buildable design coordinated with structure and budget',
  ],
  approach:
    'We design for the long term and for the local climate — planning shade, cross-ventilation and daylight before adding mechanical comfort, and choosing materials that age well in Jharkhand\'s heat and monsoon. Structure, services and aesthetics are coordinated from the start so the design that excites you on screen is the same one that gets built without costly surprises.',
  generalFaqs: [
    {
      q: 'How much does a custom home design cost?',
      a: 'Design fees usually depend on the size and complexity of the home and the scope you need — concept only, or full drawings through to construction support. We scope the work and quote a clear fee before starting rather than a one-size figure.',
    },
    {
      q: 'Do you provide drawings for municipal approval?',
      a: 'Yes. We prepare the drawings needed for sanction and can coordinate the approval process so your design moves smoothly from paper to permission to construction.',
    },
    {
      q: 'Can you design within a fixed construction budget?',
      a: 'Yes. We design to a target build budget by making material, structure and size decisions with cost in mind, and flagging trade-offs early so the project stays realistic.',
    },
  ],
  related: ['luxury-villas-farmhouses', 'interior-design', 'vastu-compliant-architecture'],
  locations: {
    ranchi: {
      intro:
        'Planning to build a home in Ranchi? Our head-office team designs custom houses for plots across the city — from tighter urban sites in Harmu, Kanke and Argora to larger plots on the outskirts. We design for Ranchi\'s climate and plot regulations, and being local means in-person site visits and easy coordination with builders and the approval process throughout.',
      localFaqs: [
        {
          q: 'Do you design homes for small city plots in Ranchi?',
          a: 'Yes. We are experienced with compact urban plots in Ranchi and focus on smart layouts, light and storage that make the most of limited site area.',
        },
        {
          q: 'Will you visit my plot in Ranchi during design?',
          a: 'Yes. From our Harmu head office we visit your site to study orientation, levels and surroundings, and we return through the project as the design and construction progress.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For custom home design in Daltonganj (Medininagar), our local studio works with families across Palamu who are building on their own land — often larger or independent plots. We design homes suited to the area\'s climate and lifestyle, with practical layouts, durable materials and drawings ready for local approvals, supported by a team that can visit your site without travelling from another city.',
      localFaqs: [
        {
          q: 'Do you design independent houses in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office regularly designs independent and family homes across Daltonganj and Palamu, from compact plots to larger landholdings.',
        },
        {
          q: 'Can you handle the design and local approvals together in Medininagar?',
          a: 'Yes. We prepare construction drawings and the documents needed for sanction in the Medininagar area, and can coordinate the approval steps for you.',
        },
      ],
    },
  },
};
