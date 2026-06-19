import { ServiceAreaEntry } from '../serviceArea.types';

// Canonical example entry. Harmu is the locality of Sattva Design's Ranchi office,
// so this page is anchored to a real, physical presence.
export const ranchiHarmu: ServiceAreaEntry[] = [
  {
    slug: 'harmu-ranchi',
    name: 'Harmu',
    type: 'locality',
    parentCity: 'Ranchi',
    region: 'Jharkhand',
    office: 'ranchi',
    intro:
      'Sattva Design Consultancy is based in Harmu, Ranchi, with our studio in Sunita Complex on the Argora bypass road. As a locally-rooted architecture and interior design practice, we work with homeowners and businesses across the Harmu Housing Colony and surrounding neighbourhoods to plan, design and execute spaces that are functional, well-lit and built to last.',
    about:
      'Because our office is in Harmu, clients here get the most hands-on service we offer — in-person consultations, site visits and close coordination through construction. From compact residential plots in the housing colony to commercial fit-outs along the main roads, our team handles the full journey from concept and naksha approvals to interiors and handover.',
    seoTitle:
      'Architecture & Interior Design in Harmu, Ranchi | Sattva Design',
    seoDescription:
      'Architecture and interior design services in Harmu, Ranchi — home to Sattva Design Consultancy. Custom homes, interiors, building approvals and more, with in-person consultations from our local studio.',
    keywords:
      'architect in Harmu, interior designer Harmu Ranchi, architecture firm Ranchi, house design Harmu, naksha pass Ranchi, Sattva Design',
    mapQuery: 'Sattva Design Consultancy, Harmu, Ranchi, Jharkhand 834002',
    faqs: [
      {
        q: 'Where is Sattva Design located in Harmu?',
        a: 'Our Ranchi studio is on the 3rd floor of Sunita Complex, Shivdayal Nagar, on the Argora bypass road opposite V Mart, in the Harmu Housing Colony, Ranchi 834002.',
      },
      {
        q: 'Do you offer in-person consultations in Harmu?',
        a: 'Yes. Since our office is in Harmu, we offer face-to-face consultations and regular site visits for projects across the locality and the wider Ranchi area.',
      },
      {
        q: 'What types of projects do you take on in Harmu?',
        a: 'We handle residential homes, apartments and villas, commercial and retail spaces, interior design, building approvals (naksha pass), 3D visualisation and full construction management.',
      },
      {
        q: 'Do you help with building approvals and naksha pass in Ranchi?',
        a: 'Yes — we prepare designed blueprints and assist with the building approval and sanction process for projects in Harmu and across Ranchi.',
      },
    ],
  },
];
