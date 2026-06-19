import { ServiceEntry } from '../services.types';

export const threeDVisualizationRendering: ServiceEntry = {
  slug: '3d-visualization-rendering',
  name: '3D Visualization & Rendering',
  category: 'Specialized Services',
  tagline: 'See your project in photorealistic detail before a single brick is laid',
  overview:
    'Our 3D visualization and rendering service turns drawings, plans and ideas into clear, photorealistic images and walkthroughs you can actually understand. Instead of trying to read a floor plan or imagine how a finish will look, you see the space — its proportions, light, materials and mood — exactly as it will be built. This removes guesswork, speeds up decisions and makes it far easier to align everyone involved in a project.',
  whatIncluded: [
    'Photorealistic exterior renders from key viewpoints',
    'Interior renders showing materials, lighting and furniture',
    'Material, texture and finish previews in context',
    'Day, night and ambient lighting variations',
    'Walkthrough animations and 360-degree views',
    'Revisions to refine views before sign-off',
  ],
  process: [
    { step: 'Brief & Inputs', description: 'We collect your drawings, plans, references and the look you want to achieve.' },
    { step: '3D Modelling', description: 'We build an accurate 3D model of the space from your plans and dimensions.' },
    { step: 'Texturing & Lighting', description: 'We apply real materials, finishes and lighting to create a true-to-life scene.' },
    { step: 'Rendering & Revisions', description: 'We produce final high-resolution images and adjust them based on your feedback.' },
  ],
  benefits: [
    'Make confident design decisions before construction',
    'Catch issues early when changes cost nothing',
    'Stronger presentations for clients, investors or approvals',
    'Compare material and finish options side by side',
  ],
  approach:
    'We model to scale from your actual drawings so renders reflect real proportions, not artistic licence. Lighting is set up to mimic genuine conditions — sun angle, interior fittings and reflections — and materials are matched to what is realistically available, so the final result is a reliable preview rather than a flattering exaggeration. Output resolution and formats are tailored to how you intend to use the images, whether for print, web or large-format display.',
  generalFaqs: [
    {
      q: 'What do you need from me to start a 3D render?',
      a: 'Ideally floor plans, elevations and any reference images for the style you want. If you only have rough sketches or measurements, we can still work from those, though more detailed inputs produce more accurate results.',
    },
    {
      q: 'How long does a 3D rendering project take?',
      a: 'It depends on scope — a single interior view turns around faster than a full set of exterior renders or an animated walkthrough. We agree a timeline up front based on the number of views and the level of detail required.',
    },
    {
      q: 'How many revisions are included?',
      a: 'We include a set number of revision rounds so you can refine lighting, materials and angles. The exact count depends on the package and scope, which we confirm before starting.',
    },
  ],
  related: ['interior-design', 'commercial-architecture', 'facade-exterior-design'],
  locations: {
    ranchi: {
      intro:
        'Need 3D visualization and rendering in Ranchi? From our head office in Harmu, we help homeowners, builders and businesses across the city see their projects clearly before construction begins. Whether it is a new house in Argora, a showroom on a commercial road or an apartment interior, we can sit down with you in person, review your drawings together and produce renders that make decisions simple.',
      localFaqs: [
        {
          q: 'Can I review the 3D renders in person in Ranchi?',
          a: 'Yes. Our head office is in Harmu, Ranchi, so we can walk you through the renders face to face and make adjustments together rather than only over email.',
        },
        {
          q: 'Do you create renders for builders and developers in Ranchi?',
          a: 'We do. We produce marketing-ready exterior and interior visuals for residential and commercial projects across Ranchi, useful for pre-launch sales and client presentations.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For 3D visualization and rendering in Daltonganj (Medininagar), our local office helps families and businesses across Palamu picture their projects with confidence. Many clients here are building or renovating for the first time, so seeing a photorealistic view of the finished space — its rooms, light and finishes — makes the whole process far less daunting and helps avoid costly mid-build changes.',
      localFaqs: [
        {
          q: 'I am building my first home in Medininagar — can renders help me?',
          a: 'Very much so. Renders let you see how your home will look and feel before construction, so you can confirm layouts, finishes and proportions early and avoid expensive changes later.',
        },
        {
          q: 'Can you work from drawings prepared by another firm in Palamu?',
          a: 'Yes. As long as we have accurate plans and dimensions, we can build the 3D model and produce renders even if the original design was prepared elsewhere.',
        },
      ],
    },
  },
};
