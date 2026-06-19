import { ServiceEntry } from '../services.types';

export const publicSpacesInfrastructure: ServiceEntry = {
  slug: "public-spaces-infrastructure",
  name: "Public Spaces & Infrastructure",
  category: "Urban & Landscape Planning",
  tagline: "Designing parks, plazas and civic spaces that communities actually use",
  overview:
    "Our public spaces and infrastructure service focuses on the shared environments where community life happens — parks, plazas, streetscapes, community centres and the connective infrastructure between them. We design these spaces to be safe, accessible and genuinely usable across all ages and abilities, balancing the demands of footfall, drainage, planting, lighting and maintenance. Good public space is not just an open area; it is a carefully planned environment that brings people together and stands up to years of daily use.",
  whatIncluded: [
    "Site analysis covering access, footfall and drainage",
    "Layout planning for circulation, gathering and green areas",
    "Hardscape design — paving, seating, steps and edges",
    "Softscape and planting strategy for shade and greenery",
    "Public lighting and basic utility coordination",
    "Universal-access and pedestrian-safety planning",
  ],
  process: [
    { step: "Study & Brief", description: "We assess the site, its surroundings and the needs of the community who will use it." },
    { step: "Concept Planning", description: "We develop layout options for circulation, gathering spaces, planting and amenities." },
    { step: "Detailed Design", description: "We resolve levels, drainage, materials, lighting and access into buildable drawings." },
    { step: "Documentation", description: "We prepare the drawings and details needed for execution and tendering." },
  ],
  benefits: [
    "Spaces that are inclusive and accessible to everyone",
    "Durable materials suited to heavy public use",
    "Greenery and shade that improve comfort year-round",
    "Layouts that handle footfall and drainage well",
  ],
  approach:
    "Public space has to perform for many people at once and for many years, so we design for durability, safety and low maintenance first. Levels and drainage are planned carefully to avoid waterlogging, materials are chosen to withstand heavy footfall and the local climate, and circulation is laid out so that movement, gathering and greenery coexist without conflict. Accessibility is built in from the start rather than added on, so the space works for children, the elderly and people with reduced mobility alike.",
  generalFaqs: [
    {
      q: "Who commissions public space projects?",
      a: "These projects can be commissioned by local authorities, institutions, residential developments, housing societies or private developers creating shared spaces. We adapt our scope to the client and the approvals their project requires.",
    },
    {
      q: "How do you plan for ongoing maintenance?",
      a: "We design with maintenance in mind from the outset — choosing robust materials, hardy planting and layouts that are easy to clean and repair — and we can advise on a basic upkeep plan so the space stays in good condition over time.",
    },
    {
      q: "How is the cost of a public space project determined?",
      a: "Cost depends heavily on the area, the level of hardscaping and planting, lighting and any structures involved. Because these factors vary so widely, we develop a cost picture against a specific brief and site rather than quoting a standard rate.",
    },
  ],
  related: ["landscape-architecture", "urban-planning", "sustainable-green-architecture"],
  locations: {
    ranchi: {
      intro:
        "For public spaces and infrastructure design in Ranchi, our head-office team helps create parks, plazas, campus grounds and shared community areas across the city. As Ranchi continues to grow, well-planned public spaces — from neighbourhood parks in Harmu and Argora to gathering areas within larger developments — make a real difference to daily life. Being based in the city means we understand its climate, footfall patterns and drainage challenges first-hand.",
      localFaqs: [
        {
          q: "Do you design parks and community spaces within Ranchi developments?",
          a: "Yes. From our Harmu head office we plan and detail parks, plazas and shared open spaces for residential developments, institutions and community projects across Ranchi.",
        },
        {
          q: "Do you account for Ranchi's monsoon drainage in public space design?",
          a: "We do. Drainage and level planning are central to our public space work, especially given Ranchi's heavy monsoon rainfall, so spaces stay usable and avoid waterlogging.",
        },
      ],
    },
    "daltonganj-medininagar": {
      intro:
        "For public spaces and infrastructure in Daltonganj (Medininagar), our local team helps plan parks, civic areas and shared community spaces across Palamu. In a region where well-designed public spaces are increasingly valued, we focus on practical, durable and accessible designs that suit the local climate and the way communities in and around Medininagar gather and move.",
      localFaqs: [
        {
          q: "Do you design community and public spaces in Daltonganj (Medininagar)?",
          a: "Yes. Our Medininagar office plans parks, plazas and shared community spaces for developments and civic projects across Daltonganj and the wider Palamu region.",
        },
        {
          q: "Can you use locally suited planting and materials in Palamu projects?",
          a: "We design with hardy, locally suited planting and durable materials that handle the Palamu climate and heavy public use, helping keep the space resilient and low-maintenance.",
        },
      ],
    },
  },
};
