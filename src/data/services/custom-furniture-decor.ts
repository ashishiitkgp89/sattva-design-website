import { ServiceEntry } from '../services.types';

export const customFurnitureDecor: ServiceEntry = {
  slug: 'custom-furniture-decor',
  name: 'Custom Furniture & Décor',
  category: 'Interior Design',
  tagline: 'Furniture and styling made to fit your space, your storage and your taste',
  overview:
    'Off-the-shelf furniture rarely fits a real room perfectly — corners are wasted, proportions feel off, and storage never quite matches how you live. Our custom furniture and décor service designs and builds pieces measured to your space, from wardrobes and TV units to dining tables, beds and statement shelving. Every piece is detailed for the right materials, finishes and hardware so it looks good and holds up to daily use. Alongside built and loose furniture, we curate the décor layer — rugs, lighting, art placement, soft furnishings and accessories — so the finished room reads as one considered scheme rather than a collection of separate purchases. The result is furniture that works harder and a space that feels finished, not furnished.',
  whatIncluded: [
    'Bespoke wardrobes, storage and modular units',
    'Custom beds, sofas, dining and study furniture',
    'Material, veneer, laminate and finish selection',
    'Hardware, handle and fitting specification',
    'Soft furnishings, rugs and curtain detailing',
    'Décor styling, art placement and accessories',
  ],
  process: [
    { step: 'Measure & Brief', description: 'We measure the space and understand your storage needs, style and budget.' },
    { step: 'Design & Detailing', description: 'We draw each piece with dimensions, materials, finishes and 3D views for sign-off.' },
    { step: 'Making & Sourcing', description: 'We build the custom pieces and source the loose furniture and décor to match.' },
    { step: 'Install & Style', description: 'We fit the furniture on site and style the room with the finishing décor layer.' },
  ],
  benefits: [
    'Pieces sized exactly to your room and storage needs',
    'Better use of awkward corners and full-height space',
    'A coordinated material and finish story throughout',
    'Quality and durability you can specify up front',
  ],
  approach:
    'We choose materials for how they perform over years of use, not just how they photograph — moisture-resistant boards for wet areas, durable laminates and veneers for high-touch surfaces, and quality hinges and channels that keep working smoothly. Finishes are selected for the local climate and for easy maintenance, and every joint and detail is drawn before a single panel is cut.',
  generalFaqs: [
    {
      q: 'Is custom furniture more expensive than ready-made?',
      a: 'It depends on the piece and the materials. Custom work often costs more than basic ready-made furniture but less than premium branded pieces, while fitting your space exactly and lasting longer. We agree a budget and material grade up front so there are no surprises.',
    },
    {
      q: 'How long does custom furniture take to make?',
      a: 'Timelines vary with the number and complexity of pieces, but most projects move from approved drawings to installation over a few weeks. We share a schedule once the design is signed off.',
    },
    {
      q: 'Can you match new furniture to my existing pieces?',
      a: 'Yes. We can match finishes, proportions and tones so new custom pieces sit comfortably alongside furniture and décor you already own and want to keep.',
    },
  ],
  related: ['interior-design', 'commercial-interior-design', 'custom-home-design'],
  locations: {
    ranchi: {
      intro:
        'For custom furniture in Ranchi, our head-office team designs and builds pieces that fit the real dimensions of city apartments and houses — full-height wardrobes for compact Harmu and Argora flats, modular kitchens, and storage that makes the most of every wall. Being based in Ranchi means we can measure on site, review samples with you in person and supervise installation closely.',
      localFaqs: [
        {
          q: 'Where do you make the furniture for Ranchi projects?',
          a: 'We work with trusted carpentry and joinery workshops serving Ranchi, and our team supervises the build and the on-site installation directly from our Harmu head office.',
        },
        {
          q: 'Can I see material and finish samples in Ranchi?',
          a: 'Yes. We bring laminate, veneer and hardware samples to your consultation in Ranchi so you can choose finishes by hand before anything is ordered.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'In Daltonganj (Medininagar), our local studio designs custom furniture and décor for homes and shops across Palamu where standard-sized pieces often do not fit well. We focus on practical, hard-wearing storage and furniture — built with locally available materials where it makes sense — so families and businesses get pieces sized for their space without long waits for outside suppliers.',
      localFaqs: [
        {
          q: 'Do you make custom furniture for homes in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office handles bespoke wardrobes, kitchens, beds and storage for homes across Daltonganj and the wider Palamu region, with on-site measurement and installation.',
        },
        {
          q: 'Can you use local materials and craftsmen in Medininagar?',
          a: 'Where quality allows, we use materials and carpenters available around Medininagar to keep costs and lead times sensible while still meeting our finish and durability standards.',
        },
      ],
    },
  },
};
