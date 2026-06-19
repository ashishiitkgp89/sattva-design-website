import { ServiceEntry } from '../services.types';

export const projectEstimation: ServiceEntry = {
  slug: "project-estimation",
  name: "Project Estimation",
  category: "Naksha Pass & Approvals",
  tagline: "Know what your project will really cost before you build",
  overview:
    "Our project estimation service gives you a clear, itemised picture of what a construction or renovation project will actually cost — before you commit. We prepare detailed quantity take-offs and costings from your drawings, so you can plan your budget, compare options and avoid mid-project surprises. A reliable estimate is also a key input for loan applications and approval paperwork, where a credible cost figure is often required.",
  whatIncluded: [
    "Quantity take-off from architectural and structural drawings",
    "Itemised bill of quantities (BOQ) for materials and labour",
    "Rate analysis based on current local market prices",
    "Phase-wise cost breakdown for budgeting",
    "Comparison of material and specification options",
    "Estimate documentation suitable for loan and approval submissions",
  ],
  process: [
    { step: "Drawing Review", description: "We study your architectural and structural drawings to understand the full scope of work." },
    { step: "Quantity Take-off", description: "We measure and tabulate quantities for every item — earthwork, concrete, steel, finishes and more." },
    { step: "Rate Analysis", description: "We apply current local material and labour rates to produce an itemised cost." },
    { step: "Report & Review", description: "We deliver a structured estimate and walk you through it, adjusting for any specification changes." },
  ],
  benefits: [
    "Budget with confidence from the start",
    "Spot cost-heavy items early and adjust the design",
    "A documented basis for loan and approval applications",
    "Fair, transparent comparison of contractor quotes",
  ],
  approach:
    "A good estimate is only as accurate as the drawings and rates behind it. We base our take-offs on detailed drawings and current local market prices rather than generic per-square-foot figures, and we set out every line item so you can see exactly where the money goes. Where prices are volatile, we flag the assumptions and give ranges so you understand the sensitivity rather than relying on a single hard number.",
  generalFaqs: [
    {
      q: "How accurate is a project estimate?",
      a: "Accuracy depends on how detailed your drawings are and how stable material prices are at the time. A well-prepared estimate from complete drawings is a reliable budgeting tool, but final cost can still shift with specification changes and market movement, which is why we document our assumptions clearly.",
    },
    {
      q: "Can you estimate from incomplete drawings?",
      a: "We can produce a preliminary or ballpark estimate from concept-level drawings, but a detailed, itemised BOQ needs reasonably complete architectural and structural drawings. We will tell you what level of estimate your drawings support.",
    },
    {
      q: "What does an estimation service cost?",
      a: "It depends on the size and complexity of the project and the level of detail you need — a quick budget figure costs less than a full itemised BOQ with rate analysis. We quote after seeing the drawings and understanding the scope.",
    },
  ],
  related: ["building-approvals", "designed-blueprints", "construction-management"],
  locations: {
    ranchi: {
      intro:
        "Need a project estimate in Ranchi? Our head-office team prepares detailed cost estimates for homes, commercial buildings and renovations across the city, using current Ranchi-area material and labour rates. Whether you are planning a build in Harmu, Argora or the outskirts, a grounded estimate helps you budget, arrange finance and move forward with clarity.",
      localFaqs: [
        {
          q: "Do your estimates use Ranchi market rates?",
          a: "Yes. We base our rate analysis on current material and labour prices in and around Ranchi, so the estimate reflects what you are likely to actually pay locally.",
        },
        {
          q: "Can you prepare an estimate for a loan application in Ranchi?",
          a: "Yes. From our Harmu head office we prepare itemised, documented estimates that are suitable for submission with home-loan and project-finance applications.",
        },
      ],
    },
    "daltonganj-medininagar": {
      intro:
        "For project estimation in Daltonganj (Medininagar), our local team prepares clear, itemised cost estimates for builds and renovations across Palamu. Using rates that reflect material availability and labour costs in the Medininagar area, we help families and businesses understand what their project will cost before work begins.",
      localFaqs: [
        {
          q: "Do you account for Palamu-area material costs in your estimates?",
          a: "Yes. We use current local rates and factor in the availability and transport of materials in the Medininagar and wider Palamu region, which can differ from larger cities.",
        },
        {
          q: "Can you estimate small residential projects in Daltonganj?",
          a: "Absolutely. Our Medininagar office prepares estimates for projects of all sizes, from individual homes to commercial buildings across Daltonganj and Palamu.",
        },
      ],
    },
  },
};
