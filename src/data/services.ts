import {
  ServiceEntry,
  ServiceLocation,
  ServiceLocationContent,
  SERVICE_LOCATIONS,
  getLocation,
  splitServiceSlug,
} from './services.types';

import { threeDVisualizationRendering } from './services/3d-visualization-rendering';
import { buildingApprovals } from './services/building-approvals';
import { commercialArchitecture } from './services/commercial-architecture';
import { commercialInteriorDesign } from './services/commercial-interior-design';
import { constructionManagement } from './services/construction-management';
import { customFurnitureDecor } from './services/custom-furniture-decor';
import { customHomeDesign } from './services/custom-home-design';
import { designedBlueprints } from './services/designed-blueprints';
import { educationalInstitutions } from './services/educational-institutions';
import { facadeExteriorDesign } from './services/facade-exterior-design';
import { healthcareHospitals } from './services/healthcare-hospitals';
import { hotelsHospitalityDesign } from './services/hotels-hospitality-design';
import { industrialArchitecture } from './services/industrial-architecture';
import { interiorDesign } from './services/interior-design';
import { landscapeArchitecture } from './services/landscape-architecture';
import { luxuryVillasFarmhouses } from './services/luxury-villas-farmhouses';
import { officeCommercialRenovation } from './services/office-commercial-renovation';
import { projectEstimation } from './services/project-estimation';
import { publicSpacesInfrastructure } from './services/public-spaces-infrastructure';
import { renovation } from './services/renovation';
import { retailShowroomRemodeling } from './services/retail-showroom-remodeling';
import { retailStoresShowrooms } from './services/retail-stores-showrooms';
import { sustainableGreenArchitecture } from './services/sustainable-green-architecture';
import { urbanPlanning } from './services/urban-planning';
import { vastuCompliantArchitecture } from './services/vastu-compliant-architecture';

// Single source of truth for the data-driven service pages.
// Each service renders one detailed page per location (Ranchi + Medininagar).
export const services: ServiceEntry[] = [
  customHomeDesign,
  luxuryVillasFarmhouses,
  sustainableGreenArchitecture,
  commercialArchitecture,
  retailStoresShowrooms,
  hotelsHospitalityDesign,
  industrialArchitecture,
  educationalInstitutions,
  healthcareHospitals,
  interiorDesign,
  commercialInteriorDesign,
  customFurnitureDecor,
  buildingApprovals,
  designedBlueprints,
  projectEstimation,
  constructionManagement,
  renovation,
  officeCommercialRenovation,
  retailShowroomRemodeling,
  urbanPlanning,
  landscapeArchitecture,
  publicSpacesInfrastructure,
  threeDVisualizationRendering,
  facadeExteriorDesign,
  vastuCompliantArchitecture,
];

export function getService(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug);
}

// Every page slug, e.g. "interior-design-ranchi", "interior-design-daltonganj-medininagar".
export function getAllServiceSlugs(): string[] {
  return services.flatMap((s) =>
    SERVICE_LOCATIONS.map((l) => `${s.slug}-${l.key}`)
  );
}

export interface ResolvedServicePage {
  service: ServiceEntry;
  location: ServiceLocation;
  content: ServiceLocationContent;
}

export function getServicePage(fullSlug: string): ResolvedServicePage | null {
  const parts = splitServiceSlug(fullSlug);
  if (!parts) return null;
  const service = getService(parts.serviceSlug);
  const location = getLocation(parts.locationKey);
  if (!service || !location) return null;
  const content = service.locations[parts.locationKey];
  if (!content) return null;
  return { service, location, content };
}
