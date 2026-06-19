import { ServiceEntry } from '../services.types';

export const buildingApprovals: ServiceEntry = {
  slug: 'building-approvals',
  name: 'Building Approvals',
  category: 'Naksha Pass & Approvals',
  tagline: 'Get your building plan sanctioned correctly, the first time',
  overview:
    'Our building approvals service handles the paperwork, drawings and authority coordination needed to get your construction legally sanctioned. From preparing compliant building plans to submitting them and following up with the relevant municipal or development authority, we manage the process so you can build with confidence and a clear title to proceed. Getting approvals right protects you from penalties, demolition risk and problems at the time of resale or loan.',
  whatIncluded: [
    'Preparation of sanction-ready building plans',
    'Document checklist and application paperwork',
    'Submission to the relevant authority',
    'Compliance check against local building byelaws',
    'Coordination and follow-up until sanction',
    'Guidance on revisions or objections raised',
  ],
  process: [
    { step: 'Assessment', description: 'We review your plot, documents and intended construction against local rules.' },
    { step: 'Drawing Preparation', description: 'We prepare byelaw-compliant building plans suitable for submission.' },
    { step: 'Submission', description: 'We compile the documents and submit the application to the authority.' },
    { step: 'Follow-up & Sanction', description: 'We track the application, address queries and see it through to approval.' },
  ],
  benefits: [
    'Avoid penalties and demolition risk from unauthorised work',
    'Plans drawn to current local byelaws',
    'Less time spent navigating authority offices yourself',
    'Cleaner title for future loans and resale',
  ],
  approach:
    'We treat approvals as a compliance task first and a paperwork task second — every drawing is checked against current setback, coverage, height and use rules before it is submitted, which reduces objections and rejections. We keep documentation organised and traceable, and we communicate clearly about what each authority requires, so you always know what stage your application is at and what is needed next.',
  generalFaqs: [
    {
      q: 'What documents are needed for building approval?',
      a: 'Typically proof of ownership or title, the plot documents, identity proof and the proposed building plans, though exact requirements vary by authority and project type. We provide a tailored checklist at the start so nothing is missed.',
    },
    {
      q: 'How long does building approval take?',
      a: 'Timelines depend on the authority, the completeness of your documents and whether any objections are raised. We give you a realistic estimate up front and keep following up to avoid unnecessary delays.',
    },
    {
      q: 'What happens if I build without approval?',
      a: 'Unauthorised construction can attract penalties, stop-work notices or even demolition, and it can block home loans and complicate resale. Getting a proper sanction protects your investment.',
    },
  ],
  related: ['designed-blueprints', 'custom-home-design', 'vastu-compliant-architecture'],
  locations: {
    ranchi: {
      intro:
        'Looking for help with building approvals in Ranchi? From our head office in Harmu, we prepare and submit sanction-ready plans for homeowners and businesses building across the city. We are familiar with how local building byelaws apply to residential and commercial plots in Ranchi, and being based here means we can meet you in person, collect documents directly and follow up on your application without you having to make repeated trips.',
      localFaqs: [
        {
          q: 'Do you handle the full approval process for projects in Ranchi?',
          a: 'Yes. From our Harmu office we prepare the plans, compile documents and coordinate the submission and follow-up for building approvals across Ranchi.',
        },
        {
          q: 'Can you prepare plans that meet Ranchi building byelaws?',
          a: 'We prepare plans drawn to the current applicable byelaws for setbacks, coverage and height so your submission has the best chance of a smooth sanction.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For building approvals in Daltonganj (Medininagar), our local office guides families and businesses across Palamu through the sanction process. Many plot owners here are unsure which documents and approvals they need before starting construction, so we begin with a clear assessment and a simple checklist, then prepare compliant plans and handle the submission on your behalf.',
      localFaqs: [
        {
          q: 'I am not sure what approvals my plot in Palamu needs — can you advise?',
          a: 'Yes. We start by reviewing your plot and documents, then tell you exactly which approvals apply and what is required, so you are clear before any construction begins.',
        },
        {
          q: 'Do you serve areas around Medininagar beyond the town itself?',
          a: 'We assist with building approvals for Daltonganj and the wider Palamu region, with in-person document collection and follow-up wherever practical.',
        },
      ],
    },
  },
};
