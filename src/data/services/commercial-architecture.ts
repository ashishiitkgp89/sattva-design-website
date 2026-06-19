import { ServiceEntry } from '../services.types';

export const commercialArchitecture: ServiceEntry = {
  slug: 'commercial-architecture',
  heroImage: "https://images.pexels.com/photos/934350/pexels-photo-934350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: 'Commercial Architecture',
  category: 'Commercial Architecture',
  tagline: 'Buildings that work commercially — for customers, staff and your bottom line',
  overview:
    'Our commercial architecture service designs buildings that have to earn their keep — offices, retail, showrooms, mixed-use and hospitality spaces where layout, footfall, branding and operating cost all matter. We balance the experience of customers and staff with the realities of construction budgets, regulations and long-term running costs, so the finished building is not just striking but genuinely efficient to operate.',
  whatIncluded: [
    'Site analysis and feasibility assessment',
    'Concept design and space programming',
    'Facade and frontage design for visibility and branding',
    'Functional layouts for circulation, footfall and operations',
    'Coordination of structural, electrical and plumbing services',
    'Construction-ready drawings and documentation',
  ],
  process: [
    { step: 'Discovery', description: 'We understand your business model, customers, brand and operational needs.' },
    { step: 'Concept & Feasibility', description: 'We test layouts and massing against the site, budget and regulations.' },
    { step: 'Detailed Design', description: 'We develop the building, facade and services into a coordinated design.' },
    { step: 'Documentation & Support', description: 'We produce construction drawings and support the team through to completion.' },
  ],
  benefits: [
    'Layouts that maximise usable, revenue-generating space',
    'Frontage and facade that strengthen your brand',
    'Lower long-term running and maintenance costs',
    'A building designed around how your business operates',
  ],
  approach:
    'We design commercial buildings around the way a business actually runs — customer flow, staff efficiency, servicing and future flexibility — rather than form alone. Materials and systems are chosen for durability and low maintenance because commercial spaces take heavy daily use, and we factor in energy efficiency and natural light early to keep operating costs down. Every scheme is checked against applicable regulations and built around a realistic budget.',
  generalFaqs: [
    {
      q: 'Do you design for a specific type of commercial building?',
      a: 'We work across offices, retail, showrooms, mixed-use and hospitality projects. The core principles — efficient layouts, strong frontage and low running costs — apply across types, and we tailor the design to your specific use and customers.',
    },
    {
      q: 'Can you work within a fixed commercial budget?',
      a: 'Yes. We design to an agreed budget and advise where to invest for impact — frontage, customer areas — versus where to economise, so the building delivers value without overspending.',
    },
    {
      q: 'Do you handle approvals and construction too?',
      a: 'We can prepare submission-ready drawings and coordinate with approval authorities, and we can support or manage construction depending on the scope you need.',
    },
  ],
  related: ['commercial-interior-design', 'facade-exterior-design', 'retail-stores-showrooms'],
  locations: {
    ranchi: {
      intro:
        'Planning a commercial building in Ranchi? From our head office in Harmu, we design offices, showrooms, retail and mixed-use buildings for businesses across the city. We understand how visibility on Ranchi\'s busy commercial roads, parking and customer access affect a building\'s success, and being based here means we can visit your site, study the surroundings and meet you in person throughout the project.',
      localFaqs: [
        {
          q: 'Do you design commercial buildings for high-traffic areas in Ranchi?',
          a: 'Yes. We design frontages and layouts that make the most of visibility and footfall on Ranchi\'s commercial roads, while keeping access and parking practical.',
        },
        {
          q: 'Can you assess a commercial plot before I buy it in Ranchi?',
          a: 'We offer feasibility assessments so you understand what a plot can support — coverage, layout and frontage potential — before you commit.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For commercial architecture in Daltonganj (Medininagar), our local office helps business owners across Palamu plan shops, offices and mixed-use buildings that work for the local market. We focus on practical, cost-aware designs suited to the scale of commerce in the region — buildings that attract customers, are affordable to run and leave room to grow as your business does.',
      localFaqs: [
        {
          q: 'Do you design commercial buildings suited to the local market in Palamu?',
          a: 'Yes. We design to the scale and budget that makes sense for businesses in Daltonganj and the wider Palamu region, prioritising practicality and running cost.',
        },
        {
          q: 'Can a building be designed to expand later as my business grows?',
          a: 'We can plan for phased growth — designing the structure and layout so additional floors or areas can be added later without major rework.',
        },
      ],
    },
  },
};
