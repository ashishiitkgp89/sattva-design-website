import { ServiceEntry } from '../services.types';

export const designedBlueprints: ServiceEntry = {
  slug: 'designed-blueprints',
  name: 'Designed Blueprints',
  category: 'Naksha Pass & Approvals',
  tagline: 'Accurate, sanction-ready building drawings prepared to local norms',
  overview:
    'A blueprint is the document that turns an idea into a buildable, approvable project — and small errors in it cause big delays at the sanction stage. Our designed blueprints service prepares clear, accurate building drawings (naksha) that meet local building byelaws and the format authorities expect, so your plan moves through approval and on to construction without avoidable hold-ups. We cover the full drawing set you need — site and floor plans, elevations, sections and the structural and service layouts that contractors build from. Whether you are submitting for a new sanction, a revision or a regularisation, the drawings are detailed, dimensioned and prepared to comply with setbacks, coverage, height and other local norms.',
  whatIncluded: [
    'Site plan with setbacks and coverage compliance',
    'Dimensioned floor plans for every level',
    'Elevations and sections for the full building',
    'Structural layout drawings for construction',
    'Area statements and byelaw compliance checks',
    'Drawing set formatted for authority submission',
  ],
  process: [
    { step: 'Requirement & Norms Check', description: 'We confirm your plot details, plan and the applicable local byelaws and limits.' },
    { step: 'Drafting', description: 'We prepare the plans, elevations, sections and structural layouts to scale.' },
    { step: 'Compliance Review', description: 'We check setbacks, coverage, height and area against local norms before finalising.' },
    { step: 'Finalisation', description: 'We deliver the complete, dimensioned drawing set ready for submission and build.' },
  ],
  benefits: [
    'Drawings that comply with local byelaws from the start',
    'Fewer objections and revisions at the sanction stage',
    'A clear, dimensioned set contractors can build from',
    'Coordinated architectural and structural information',
  ],
  approach:
    'We treat byelaw compliance as part of design, not an afterthought — checking setbacks, ground coverage, FAR and height limits as the drawings develop so the submitted plan stands up to scrutiny. Every sheet is dimensioned, scaled and labelled consistently, and we keep the architectural and structural information coordinated so what is approved is the same as what gets built.',
  generalFaqs: [
    {
      q: 'What drawings are included in a blueprint set?',
      a: 'A typical set includes the site plan, floor plans for each level, elevations, sections and structural layouts, plus area statements. The exact sheets depend on your project and what the local authority requires for submission.',
    },
    {
      q: 'How much do designed blueprints cost?',
      a: 'Fees depend on the building size, number of floors and the level of detail required. We quote based on your specific project rather than a fixed rate, and confirm the scope before we begin.',
    },
    {
      q: 'Can you revise existing drawings instead of starting over?',
      a: 'Often, yes. If you have existing or older drawings, we can review them, correct compliance issues and update them to a sanction-ready standard rather than redrawing from scratch where that is practical.',
    },
  ],
  related: ['building-approvals', 'custom-home-design', 'project-estimation'],
  locations: {
    ranchi: {
      intro:
        'Need building blueprints (naksha) in Ranchi? Our head-office team prepares sanction-ready drawings for plots across the city, drafted to the byelaws and submission format applicable in Ranchi. Working locally means we understand the norms that commonly cause objections here and can coordinate quickly with you and the approving authority.',
      localFaqs: [
        {
          q: 'Do your blueprints follow Ranchi building byelaws?',
          a: 'Yes. We draft to the setback, coverage and height norms applicable to your plot in Ranchi so the set is prepared for smooth submission and sanction.',
        },
        {
          q: 'Can you prepare drawings for both homes and commercial buildings in Ranchi?',
          a: 'Yes. From our Harmu head office we prepare blueprint sets for residential, commercial and mixed-use buildings across Ranchi.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For building blueprints in Daltonganj (Medininagar), our local studio prepares accurate, compliant drawing sets for plots across Palamu, drafted to the norms used by the local authority. Being based in the area means owners can sort out their naksha and submission drawings without depending on draughtsmen from another city.',
      localFaqs: [
        {
          q: 'Do you prepare naksha drawings in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office prepares dimensioned, byelaw-compliant blueprint sets for plots across Daltonganj and the Palamu region.',
        },
        {
          q: 'Will the drawings suit the local approval format in Medininagar?',
          a: 'Yes. We format and detail the drawings to match what the approving authority in the Medininagar area expects for submission.',
        },
      ],
    },
  },
};
