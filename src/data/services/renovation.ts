import { ServiceEntry } from '../services.types';

export const renovation: ServiceEntry = {
  slug: "renovation",
  heroImage: "https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Renovation & Remodeling",
  category: "Civil Engineering & Construction",
  tagline: "Transform your existing home or building into a space that works again",
  overview:
    "Our renovation and remodeling service breathes new life into existing homes and buildings — whether you are modernising a dated house, reconfiguring rooms for a changing family, repairing an ageing structure or extending for more space. We assess what is sound and worth keeping, then plan changes that improve layout, light, comfort and value without the cost and upheaval of building from scratch. Every renovation is different, so we shape the scope around your priorities, your budget and the realities of the existing structure.",
  whatIncluded: [
    "Condition assessment of the existing structure",
    "Re-planning of layouts, rooms and circulation",
    "Structural repairs and reinforcement where needed",
    "Upgrades to electrical, plumbing and waterproofing",
    "New flooring, ceilings, finishes and fittings",
    "Site supervision and coordination of all trades",
  ],
  process: [
    { step: "Assessment", description: "We inspect the existing structure to understand its condition and what can be retained or must be changed." },
    { step: "Design & Scope", description: "We plan the new layout and finishes, then agree a clear scope and budget with you." },
    { step: "Execution", description: "We carry out demolition, structural work, services and finishing with regular supervision." },
    { step: "Handover", description: "We complete snagging, test all systems and hand over the finished, refreshed space." },
  ],
  benefits: [
    "Get more from your space without rebuilding",
    "Repair and strengthen an ageing structure",
    "Modern comfort, layout and finishes",
    "A clear, agreed scope and budget up front",
  ],
  approach:
    "Renovating an existing building means working with the unknown — what is behind the walls is not always what the drawings say. We start with a careful condition assessment so surprises are minimised, and we are honest about where strengthening or replacement is genuinely needed versus optional. Waterproofing, structural soundness and updated services come first, because they protect everything you spend on finishes afterwards. Materials are chosen to sit well with what is being retained and to last in the local climate.",
  generalFaqs: [
    {
      q: "Is it cheaper to renovate or rebuild?",
      a: "It depends on the condition of the existing structure and how much you want to change. Renovation usually saves cost and time when the structure is sound, but if major structural work is needed across the building, rebuilding can sometimes be more economical. We advise honestly after assessing the site.",
    },
    {
      q: "Can you renovate part of a house while we live in it?",
      a: "Often yes. We can phase the work so that you continue living in part of the home while another part is renovated, though this depends on the scope and how much of the structure is affected.",
    },
    {
      q: "How do you handle unexpected problems found during renovation?",
      a: "Hidden issues like damp, weak structure or old wiring can surface once work begins. We flag these as soon as they appear, explain the options and cost implications, and agree the way forward with you before proceeding, so there are no silent additions to the bill.",
    },
  ],
  related: ["office-commercial-renovation", "interior-design", "construction-management"],
  locations: {
    ranchi: {
      intro:
        "Looking to renovate a home or building in Ranchi? Our head-office team helps homeowners across the city modernise, repair and reconfigure existing properties — from older houses in Harmu and Doranda to apartments and bungalows across Ranchi. Being based locally means we can assess your property in person, supervise the work closely and respond quickly when site conditions change.",
      localFaqs: [
        {
          q: "Do you renovate older houses in Ranchi?",
          a: "Yes. We regularly assess and renovate older homes across Ranchi, addressing structure, waterproofing and services before updating layouts and finishes.",
        },
        {
          q: "Can you visit my Ranchi property before quoting a renovation?",
          a: "From our Harmu head office we carry out on-site condition assessments across Ranchi before preparing a scope and estimate, since renovation cost depends heavily on the existing structure.",
        },
      ],
    },
    "daltonganj-medininagar": {
      intro:
        "For home and building renovation in Daltonganj (Medininagar), our local team helps families and owners across Palamu refresh and repair existing properties in a practical, cost-aware way. From updating older homes around Medininagar to reconfiguring spaces for growing families, we focus on getting the structure and services right before improving the look and comfort of the space.",
      localFaqs: [
        {
          q: "Do you take renovation projects in Daltonganj (Medininagar)?",
          a: "Yes. Our Medininagar office handles renovation and remodeling across Daltonganj and the wider Palamu region, with on-site assessments and supervision throughout.",
        },
        {
          q: "Can you source renovation materials locally around Medininagar?",
          a: "We work with trusted local suppliers around Medininagar where possible to keep costs and lead times reasonable, while making sure materials suit the work and local climate.",
        },
      ],
    },
  },
};
