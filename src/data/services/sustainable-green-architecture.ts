import { ServiceEntry } from '../services.types';

export const sustainableGreenArchitecture: ServiceEntry = {
  slug: "sustainable-green-architecture",
  heroImage: "https://images.pexels.com/photos/13111771/pexels-photo-13111771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Sustainable & Green Architecture",
  category: "Residential Architecture",
  tagline: "Homes that work with the climate to cut energy use and live more comfortably",
  overview:
    "Sustainable architecture is about designing buildings that need less energy, water and maintenance while staying comfortable year round. We start with the basics that cost nothing to get right — orientation, shading, cross ventilation and daylight — then layer in efficient materials and systems. The result is a home that stays cooler in summer, brighter through the day and cheaper to run, without depending on technology to fix poor design.",
  whatIncluded: [
    "Site and climate-responsive orientation",
    "Passive cooling, shading and ventilation design",
    "Daylight planning to cut artificial lighting",
    "Energy-efficient and low-impact material selection",
    "Rainwater harvesting and water-saving planning",
    "Solar readiness and efficient services layout",
  ],
  process: [
    { step: "Site & Climate Study", description: "We assess sun path, wind, site conditions and how you want to live in the home." },
    { step: "Passive Design Concept", description: "We shape orientation, openings, shading and ventilation to reduce energy needs first." },
    { step: "Materials & Systems", description: "We select efficient materials, water systems and solar-ready services with costing." },
    { step: "Detailing & Build Support", description: "We detail the design and support construction so the sustainability features are built as intended." },
  ],
  benefits: [
    "Lower electricity and water bills over the building's life",
    "Comfortable temperatures with less air conditioning",
    "Healthier interiors with better daylight and airflow",
    "A home ready for solar and future upgrades",
  ],
  approach:
    "Good sustainable design is climate-first. For Jharkhand's hot summers and monsoon rains we prioritise shading, cross ventilation and thermally sensible materials before adding any equipment. We choose durable, locally available materials to cut transport impact and maintenance, plan for rainwater harvesting, and design roofs and services so solar can be added easily. Every green feature is judged on real payback, not just on looking eco-friendly.",
  generalFaqs: [
    {
      q: "Does sustainable design cost more to build?",
      a: "It depends on the choices. Many of the most effective measures — orientation, shading, ventilation and daylight — cost little or nothing extra and are decided in the design itself. Features like solar or rainwater harvesting add cost up front but pay back over time through lower bills.",
    },
    {
      q: "Will a green home actually be more comfortable?",
      a: "Yes. The same passive measures that save energy — shading, ventilation and good daylight — also keep interiors cooler, brighter and fresher, so the home feels better to live in day to day.",
    },
    {
      q: "Can you make my existing house more sustainable?",
      a: "Often, yes. We can assess an existing home and suggest practical improvements such as added shading, better ventilation, efficient lighting, water-saving measures and solar readiness, within a budget that makes sense.",
    },
  ],
  related: ["custom-home-design", "vastu-compliant-architecture", "landscape-architecture"],
  locations: {
    ranchi: {
      intro:
        "Interested in a sustainable or green home in Ranchi? Our head-office team designs climate-responsive homes that suit Ranchi's relatively moderate climate and plateau setting — using orientation, shading and ventilation to keep homes comfortable through hot afternoons and the monsoon. Being based in Harmu, we can study your plot's sun and wind on site and guide the build closely.",
      localFaqs: [
        {
          q: "Do you design energy-efficient homes in Ranchi?",
          a: "Yes. Our head office is in Harmu, Ranchi, and we design climate-responsive homes across the city, tuned to local sun path, wind and plot orientation.",
        },
        {
          q: "Can you plan rainwater harvesting and solar for a Ranchi home?",
          a: "We design homes that are solar-ready and incorporate rainwater harvesting where the site allows, factoring in Ranchi's rainfall and local conditions.",
        },
      ],
    },
    "daltonganj-medininagar": {
      intro:
        "For sustainable and green homes in Daltonganj (Medininagar), our local studio designs houses suited to Palamu's hotter, drier summers — where shading, ventilation and water-wise planning matter most. We help families across the Medininagar region build homes that stay cooler naturally and cost less to run.",
      localFaqs: [
        {
          q: "Do you design climate-friendly homes in Daltonganj (Medininagar)?",
          a: "Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, designing homes that respond to the area's hot summers with shading and natural ventilation.",
        },
        {
          q: "Is rainwater harvesting worthwhile in the Palamu region?",
          a: "In an area with hotter, drier summers, water-saving measures and rainwater harvesting can be especially valuable. We plan them to suit your plot and the local water situation.",
        },
      ],
    },
  },
};
