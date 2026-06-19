import { ServiceEntry } from '../services.types';

export const urbanPlanning: ServiceEntry = {
  slug: "urban-planning",
  heroImage: "https://images.pexels.com/photos/33803470/pexels-photo-33803470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Urban Planning",
  category: "Urban & Landscape Planning",
  tagline: "Layouts for neighbourhoods, townships and developments that work for the long term",
  overview:
    "Urban planning shapes how land, roads, open space and buildings come together across a whole site or neighbourhood. We plan layouts for townships, residential colonies, mixed-use developments and institutional campuses — balancing circulation, density, utilities and green space so the place functions well as it grows. Good planning at this scale prevents the congestion, drainage and access problems that are expensive to fix later.",
  whatIncluded: [
    "Site analysis and land-use planning",
    "Road network and circulation layouts",
    "Plotting, zoning and density planning",
    "Open space, parks and green-network design",
    "Utility, drainage and infrastructure layout",
    "Phasing strategy for staged development",
  ],
  process: [
    { step: "Site & Context Study", description: "We assess the land, surroundings, access and any regulatory constraints." },
    { step: "Concept Master Plan", description: "We develop land use, circulation and open-space structure as a master plan." },
    { step: "Detailed Layout", description: "We refine plotting, roads, utilities and phasing with supporting drawings." },
    { step: "Approvals Support", description: "We prepare documentation and support the approval process with the relevant authorities." },
  ],
  benefits: [
    "Efficient road and circulation networks",
    "Balanced density with usable open space",
    "Infrastructure planned in from the start",
    "Phasing that lets development grow in stages",
  ],
  approach:
    "We plan for how a place will actually be used and how it will grow. That means realistic road widths and circulation, drainage designed for monsoon loads, utilities routed sensibly, and green space treated as essential rather than leftover. We work within local development norms and authority requirements, and structure phasing so early stages stand on their own while later stages can follow without rework.",
  generalFaqs: [
    {
      q: "What size of project does urban planning apply to?",
      a: "It applies wherever multiple buildings, plots or land uses come together — from a residential colony or township to a mixed-use development or institutional campus. The scope and cost depend on the size and complexity of the site.",
    },
    {
      q: "Do you help with development approvals?",
      a: "Yes. We prepare the planning documentation and support the approval process with the relevant local authorities, though approval timelines depend on those authorities.",
    },
    {
      q: "Can a development be planned in phases?",
      a: "Yes, and for larger sites it usually should be. We structure a phasing strategy so each stage is functional on its own while the overall plan develops over time.",
    },
  ],
  related: ["landscape-architecture", "public-spaces-infrastructure", "building-approvals"],
  locations: {
    ranchi: {
      intro:
        "Planning a township, colony or large development in Ranchi? Our head-office team works on master-planning and layout projects across the Ranchi region, where the city's growth and plateau terrain make circulation, drainage and open space especially important. Being based in Harmu, we can study sites on the ground and coordinate with local authorities throughout.",
      localFaqs: [
        {
          q: "Do you prepare layout plans for residential colonies in Ranchi?",
          a: "Yes. Our head office is in Harmu, Ranchi, and we prepare master plans and layouts for colonies, townships and developments across the Ranchi region.",
        },
        {
          q: "Do you account for Ranchi's terrain and drainage in planning?",
          a: "We do. Ranchi's undulating plateau terrain affects roads, plotting and drainage, so we plan circulation and stormwater carefully for each site.",
        },
      ],
    },
    "daltonganj-medininagar": {
      intro:
        "For urban planning and layout work in Daltonganj (Medininagar), our local studio supports developments across the Palamu region — from residential colonies to mixed-use sites in and around Medininagar. We plan road networks, plotting and infrastructure suited to the area's growth pattern and land conditions.",
      localFaqs: [
        {
          q: "Do you plan layouts for developments in Daltonganj (Medininagar)?",
          a: "Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, preparing master plans and layouts for colonies and developments.",
        },
        {
          q: "Can you support approvals with local authorities in the Palamu region?",
          a: "We prepare the planning documentation and support the approval process with the relevant authorities in the Palamu region, though timelines depend on those bodies.",
        },
      ],
    },
  },
};
