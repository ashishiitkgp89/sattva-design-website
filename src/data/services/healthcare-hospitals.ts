import { ServiceEntry } from '../services.types';

export const healthcareHospitals: ServiceEntry = {
  slug: 'healthcare-hospitals',
  name: 'Healthcare & Hospitals',
  category: 'Industrial & Institutional',
  tagline: 'Hospitals and clinics planned around patient care, hygiene and efficient workflows',
  overview:
    'We design healthcare facilities — from multi-speciality hospitals and nursing homes to clinics, diagnostic centres and dental practices — where layout directly affects safety, hygiene and the speed of care. Every plan is built around the journeys of patients, staff and supplies, so departments connect logically, infection-control zones stay separate, and emergency access is never compromised. The aim is a building that is calm and reassuring for patients while being genuinely efficient for the people who work in it.',
  whatIncluded: [
    'Departmental zoning and patient-flow planning',
    'OT, ICU and isolation layouts to infection-control norms',
    'Mechanical, electrical, plumbing and medical-gas coordination',
    'Compliance with NABH and fire and safety requirements',
    'Wayfinding, signage and accessible circulation',
    'Phased designs that let an existing facility keep running',
  ],
  process: [
    { step: 'Requirement Study', description: 'We map your specialities, bed count, equipment and staffing to define the brief.' },
    { step: 'Functional Planning', description: 'We zone departments and plan patient, staff and material flows with infection control in mind.' },
    { step: 'Detailing & Compliance', description: 'We develop services, finishes and layouts to meet fire, accessibility and accreditation norms.' },
    { step: 'Execution Support', description: 'We coordinate contractors and equipment vendors through construction to commissioning.' },
  ],
  benefits: [
    'Layouts that shorten staff movement and waiting times',
    'Clear separation of clean, sterile and contaminated zones',
    'Designs that ease accreditation and licensing approvals',
    'Flexible plans that allow future expansion',
  ],
  approach:
    'Healthcare interiors take heavy daily wear, so we specify durable, easy-to-clean and antimicrobial surfaces, seamless flooring and finishes that withstand repeated disinfection. We coordinate medical gases, HVAC and electrical loads early so critical areas like operation theatres and ICUs perform reliably, and we plan circulation so infection-control and emergency requirements are met without making the building feel clinical or stressful.',
  generalFaqs: [
    {
      q: 'Do you design facilities to meet NABH and licensing standards?',
      a: 'Yes. We plan departments, finishes and services around applicable NABH, fire and accessibility norms so the facility is well positioned for accreditation and statutory licensing, and we coordinate with your team on the documentation those processes require.',
    },
    {
      q: 'Can you redesign or expand a hospital that is still operational?',
      a: 'We do this regularly. We plan work in phases and isolate construction zones so clinical areas can keep functioning, sequencing the work to limit disruption to patients and staff.',
    },
    {
      q: 'How much does a healthcare project cost?',
      a: 'It depends heavily on the type of facility, the specialities involved, equipment and the level of finish — an ICU or operation theatre costs very differently from outpatient areas. We prepare a detailed estimate once the brief and scope are clear rather than quoting a flat figure up front.',
    },
  ],
  related: ['industrial-architecture', 'building-approvals', 'construction-management'],
  locations: {
    ranchi: {
      intro:
        'Planning a hospital, clinic or diagnostic centre in Ranchi? Our head-office team works with healthcare providers across the city — from established medical hubs to new clinics in growing areas like Argora, Kanke Road and Booty More — to plan facilities that are efficient, compliant and comfortable for patients. Being based in Harmu means we are on site through the critical planning and construction stages.',
      localFaqs: [
        {
          q: 'Do you design hospitals and clinics in Ranchi?',
          a: 'Yes. Our head office is in Harmu, Ranchi, and we plan healthcare facilities of all sizes across the city, with regular in-person coordination and site supervision.',
        },
        {
          q: 'Can you help with approvals for a medical facility in Ranchi?',
          a: 'We prepare the architectural drawings and documentation needed for building and statutory approvals and coordinate with the relevant Ranchi authorities as part of the process.',
        },
      ],
    },
    'daltonganj-medininagar': {
      intro:
        'For healthcare projects in Daltonganj (Medininagar), our local studio helps doctors and hospital owners across Palamu build clinics, nursing homes and diagnostic centres suited to the region. With fewer large specialist facilities in the area, we focus on planning efficient, well-equipped buildings that serve a wide catchment reliably and can grow as demand increases.',
      localFaqs: [
        {
          q: 'Do you take healthcare projects in Daltonganj (Medininagar)?',
          a: 'Yes. Our Medininagar office serves Daltonganj and the wider Palamu region, planning clinics, nursing homes and diagnostic centres with in-person consultations and site visits.',
        },
        {
          q: 'Can you design a facility that is easy to expand later in Medininagar?',
          a: 'We plan layouts and services so departments and bed capacity can be added in stages, which suits growing practices serving the wider Palamu catchment.',
        },
      ],
    },
  },
};
