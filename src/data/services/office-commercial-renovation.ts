import { ServiceEntry } from '../services.types';

export const officeCommercialRenovation: ServiceEntry = {
  slug: "office-commercial-renovation",
  heroImage: "https://images.pexels.com/photos/7028110/pexels-photo-7028110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Office & Commercial Renovation",
  category: "Civil Engineering & Construction",
  tagline: "Upgrade your workplace with minimal downtime and maximum impact",
  overview:
    "Our office and commercial renovation service helps businesses transform tired, inefficient or outdated premises into spaces that work harder for the people who use them. We handle everything from re-planning floor layouts and upgrading services to refreshing finishes, lighting and facades — all while keeping disruption to your operations as low as possible. Whether you are reconfiguring for a growing team, refreshing a customer-facing space or bringing an older building up to current standards, we plan the work in stages so your business can keep running.",
  whatIncluded: [
    "Site survey and condition assessment of the existing structure",
    "Space re-planning and workflow optimisation",
    "Electrical, HVAC and plumbing upgrades",
    "Flooring, ceiling, partition and finish replacement",
    "Phased execution scheduled around your working hours",
    "Compliance checks for fire safety and building norms",
  ],
  process: [
    { step: "Assessment", description: "We survey the existing premises, understand your operational needs and identify what to retain, upgrade or replace." },
    { step: "Design & Phasing", description: "We prepare revised layouts and finishes, then plan the work in phases to limit downtime." },
    { step: "Execution", description: "We carry out demolition, services and finishing work with regular site supervision and quality checks." },
    { step: "Handover", description: "We test all systems, complete snagging and hand back a clean, ready-to-use space." },
  ],
  benefits: [
    "Work phased to keep your business running",
    "Improved layout efficiency and staff comfort",
    "Updated services that cut running and maintenance costs",
    "A refreshed image for clients and customers",
  ],
  approach:
    "Renovation of an occupied commercial space is as much about planning as it is about construction. We sequence demolition, services and finishing so that noisy or dusty work happens out of business hours where possible, and we protect parts of the premises that stay in use. Materials are chosen for durability and easy maintenance under commercial wear, and every change is checked against fire-safety and building norms before handover.",
  generalFaqs: [
    {
      q: "Can renovation be done without shutting the business down?",
      a: "In most cases, yes. We plan the work in phases and schedule disruptive tasks around your working hours or over weekends, so you can keep operating while the renovation progresses section by section.",
    },
    {
      q: "How long does a commercial renovation take?",
      a: "It depends on the size of the premises and the scope of work — a simple finish refresh is far quicker than a full re-planning with services upgrades. We give a realistic, stage-wise schedule after the site assessment.",
    },
    {
      q: "How is the cost of a renovation worked out?",
      a: "Cost depends on the area, the condition of the existing structure, and how much you are changing — layout, services and finish levels all affect it. We provide an itemised estimate after surveying the site rather than a flat rate.",
    },
  ],
  related: ["renovation", "commercial-interior-design", "retail-showroom-remodeling"],
  locations: {
    ranchi: {
      intro:
        "Planning an office or commercial renovation in Ranchi? Our head-office team works with companies, clinics and retail businesses across the city — from offices in Lalpur, Argora and the Main Road commercial belt to premises near Harmu — to modernise spaces with as little disruption as possible. Being based in Ranchi means we can survey your premises quickly and supervise the work closely from start to finish.",
      localFaqs: [
        {
          q: "Do you handle commercial renovations across Ranchi's busy commercial areas?",
          a: "Yes. We regularly renovate offices and shops in high-footfall areas of Ranchi and plan logistics — material delivery, debris removal and phasing — around the constraints of these locations.",
        },
        {
          q: "Can you visit my Ranchi office to assess the work needed?",
          a: "Our head office is in Harmu, Ranchi, so we offer on-site assessments and frequent supervision visits for commercial renovation projects across the city.",
        },
      ],
    },
    "daltonganj-medininagar": {
      intro:
        "For office and commercial renovation in Daltonganj (Medininagar), our local team helps businesses across Palamu upgrade their premises in a practical, cost-aware way. From shops and offices on the main commercial stretches of Medininagar to clinics and small enterprises in the surrounding area, we re-plan and refresh spaces to make them more efficient and presentable without overspending.",
      localFaqs: [
        {
          q: "Do you take commercial renovation projects in Daltonganj (Medininagar)?",
          a: "Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, with on-site assessments and supervision for office and commercial renovation work.",
        },
        {
          q: "Can you source renovation materials locally around Medininagar?",
          a: "We work with trusted local suppliers around Medininagar wherever possible to keep costs and lead times reasonable, while making sure the materials suit commercial use.",
        },
      ],
    },
  },
};
