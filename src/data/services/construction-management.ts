import { ServiceEntry } from '../services.types';

export const constructionManagement: ServiceEntry = {
  slug: 'construction-management',
  name: 'Construction Management',
  category: 'Civil Engineering & Construction',
  tagline: 'One accountable team managing quality, cost and timeline on site',
  overview:
    'Our construction management service takes responsibility for turning approved designs into a finished building — coordinating contractors, materials, quality and schedule so you do not have to chase every detail yourself. We act as your point of accountability on site, keeping the project on budget, on time and to specification, with regular reporting so you always know where things stand. The result is a smoother build with fewer surprises and a higher standard of finish.',
  whatIncluded: [
    'Project planning and construction scheduling',
    'Contractor and vendor coordination',
    'Material procurement guidance and quality checks',
    'On-site supervision and quality control',
    'Budget tracking and progress reporting',
    'Handover with snagging and final inspection',
  ],
  process: [
    { step: 'Planning', description: 'We build a detailed schedule, budget and procurement plan from the approved design.' },
    { step: 'Mobilisation', description: 'We engage contractors and vendors and set quality and safety standards on site.' },
    { step: 'Execution & Supervision', description: 'We supervise daily work, control quality and track cost and timeline.' },
    { step: 'Handover', description: 'We complete snagging, final checks and hand over the finished building.' },
  ],
  benefits: [
    'A single accountable point for the whole build',
    'Tighter control over cost overruns and delays',
    'Consistent quality through regular site supervision',
    'Clear, regular reporting so you stay informed',
  ],
  approach:
    'We manage construction with a focus on quality control and predictability — checking materials against specification, supervising key stages rather than just the finish, and catching issues before they become expensive. Schedules and budgets are tracked actively, not just set and forgotten, and we keep clear records of progress, payments and decisions. Safety and proper sequencing on site are treated as non-negotiable, because they protect both the build quality and the timeline.',
  generalFaqs: [
    {
      q: 'How is construction management different from hiring a contractor?',
      a: 'A contractor executes the work; construction management oversees the whole project on your behalf — coordinating contractors and vendors, controlling quality, tracking budget and timeline, and giving you a single accountable point of contact.',
    },
    {
      q: 'Can you take over a project that has already started?',
      a: 'Often yes. We assess the current stage, quality and documentation, then put proper planning, supervision and reporting in place. The approach depends on how far along and how well documented the project is.',
    },
    {
      q: 'How do you keep the project on budget?',
      a: 'We plan procurement and schedule carefully, track spending against the budget throughout, and flag variations early so you can make informed decisions before costs run away. Final cost still depends on scope and the choices you make along the way.',
    },
  ],
  related: ['project-estimation', 'custom-home-design', 'renovation'],
  locations: {
    ranchi: {
      intro:
        'Need construction management in Ranchi? From our head office in Harmu, we oversee residential and commercial builds across the city — coordinating contractors, materials and quality so your project stays on track. Being based in Ranchi means frequent site visits, hands-on supervision and a local network of trusted vendors and contractors, which keeps both quality and accountability high throughout the build.',
      localFaqs: [
        {
          q: 'Do you provide regular site supervision for projects in Ranchi?',
          a: 'Yes. With our head office in Harmu, we make frequent site visits across Ranchi to supervise work, check quality and keep the project on schedule.',
        },
        {
          q: 'Do you work with local contractors and suppliers in Ranchi?',
          a: 'We coordinate with a network of trusted contractors and material suppliers in Ranchi, and we can also work with vendors you already have a relationship with.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For construction management in Daltonganj (Medininagar), our local office helps families and businesses across Palamu build with proper oversight and accountability. Managing a build from a distance or while working full time is hard, so we step in as your on-site point of responsibility — coordinating labour and materials, supervising quality and keeping you updated, so the project progresses smoothly even when you cannot be there every day.',
      localFaqs: [
        {
          q: 'I cannot be on site daily in Palamu — can you manage the build for me?',
          a: 'Yes. We act as your on-site point of accountability, supervising work, coordinating contractors and reporting progress regularly, so the build continues properly even when you are not present.',
        },
        {
          q: 'Can you manage construction outside Daltonganj town in the Palamu region?',
          a: 'We take on construction management across Daltonganj and the wider Palamu region; the level of supervision is planned around the site location and project scope.',
        },
      ],
    },
  },
};
