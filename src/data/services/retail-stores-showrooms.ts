import { ServiceEntry } from '../services.types';

export const retailStoresShowrooms: ServiceEntry = {
  slug: "retail-stores-showrooms",
  name: "Retail Stores & Showrooms",
  category: "Commercial Architecture",
  tagline: "Retail spaces that pull customers in and keep them moving toward the sale",
  overview:
    "We design retail stores and showrooms that work as selling tools, not just rooms with products in them. From the storefront and signage that catch the eye to the layout that guides a shopper through your range, every decision is made around footfall, sightlines and the moment of purchase. We balance brand identity, display flexibility and the practical realities of stock, staff and security.",
  whatIncluded: [
    "Storefront, entrance and signage design",
    "Customer flow and zoning layouts",
    "Display systems, shelving and fixture design",
    "Retail lighting to highlight products",
    "Billing, trial and storage area planning",
    "Branding, materials and finish schemes",
  ],
  process: [
    { step: "Brief & Brand Study", description: "We study your products, target customer and brand to shape the right retail experience." },
    { step: "Layout & Concept", description: "We plan customer flow, display zones and the storefront, with 3D views of the space." },
    { step: "Fixtures & Finishes", description: "We detail shelving, lighting, materials and signage with costing." },
    { step: "Fit-out & Handover", description: "We coordinate vendors through the fit-out to a store ready to open." },
  ],
  benefits: [
    "Layouts that lead customers past more of your range",
    "Storefronts that stand out on a busy street",
    "Flexible displays that adapt to new stock",
    "Lighting that makes products look their best",
  ],
  approach:
    "Retail interiors take heavy daily use, so we specify hard-wearing flooring, durable fixtures and lighting that performs over long opening hours. We design displays to be reconfigured as ranges change, plan clear sightlines for both selling and security, and keep back-of-house, billing and storage efficient so staff can serve customers without friction.",
  generalFaqs: [
    {
      q: "How long does it take to design and fit out a retail store?",
      a: "It depends on the size of the space and the scope of work. A small shop can move quickly, while a large multi-zone showroom takes longer. We agree a realistic timeline at the start and plan the fit-out to minimise downtime.",
    },
    {
      q: "Can you work within a fixed budget?",
      a: "Yes. We plan the scheme to a budget agreed up front and prioritise the elements that most affect sales — storefront, lighting and key display zones — so your spend works hardest.",
    },
    {
      q: "Do you handle the storefront and signage as well as the interior?",
      a: "We design the store as a whole, including the storefront, entrance and signage, so the exterior and interior tell one consistent brand story.",
    },
  ],
  related: ["retail-showroom-remodeling", "commercial-interior-design", "facade-exterior-design"],
  locations: {
    ranchi: {
      intro:
        "Planning a retail store or showroom in Ranchi? Our head-office team designs shops and showrooms for the city's busy commercial stretches — from Main Road and the Lalpur and Kutchery belts to newer retail developments. Being based in Harmu means we can study footfall on your street, run in-person consultations and supervise the fit-out closely through to opening day.",
      localFaqs: [
        {
          q: "Do you design retail stores for Main Road and other commercial areas in Ranchi?",
          a: "Yes. Our head office is in Harmu, Ranchi, and we design stores and showrooms across the city's commercial areas, factoring in local footfall, frontage and parking.",
        },
        {
          q: "Can you handle the full shop fit-out in Ranchi?",
          a: "We can take a Ranchi retail project from design through to a complete fit-out, coordinating local carpenters, electricians and signage vendors and supervising the site.",
        },
      ],
    },
    "daltonganj-medininagar": {
      intro:
        "For retail stores and showrooms in Daltonganj (Medininagar), our local studio helps shopkeepers and brands across Palamu create stores that stand out on the main market streets. We plan storefronts, displays and customer flow that suit local shopping habits and the realities of frontage and footfall in the Medininagar commercial area.",
      localFaqs: [
        {
          q: "Do you design shops and showrooms in Daltonganj (Medininagar)?",
          a: "Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, with site visits and in-person consultations for retail projects.",
        },
        {
          q: "Can you source shop fixtures and signage locally in Medininagar?",
          a: "We work with trusted local vendors around Medininagar for fixtures, lighting and signage wherever possible, balancing quality, cost and availability.",
        },
      ],
    },
  },
};
