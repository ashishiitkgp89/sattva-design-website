import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';
import DaltonganjMedininagar from './pages/service-areas/DaltonganjMedininagar';
import CustomHomeDesignDaltonganjMedininagar from './pages/services/custom-home-design-daltonganj-medininagar';
import Lesliganj from './pages/service-areas/Lesliganj';
import Chainpur from './pages/service-areas/Chainpur';
import NawaBazar from './pages/service-areas/NawaBazar';
import Chhatarpur from './pages/service-areas/Chhatarpur';
import Hariharganj from './pages/service-areas/Hariharganj';
import Satbarwa from './pages/service-areas/Satbarwa';
import Garhwa from './pages/service-areas/Garhwa';
import Ranka from './pages/service-areas/Ranka';
import Bhawnathpur from './pages/service-areas/Bhawnathpur';
import Latehar from './pages/service-areas/Latehar';
import Balumath from './pages/service-areas/Balumath';
import Herhanj from './pages/service-areas/Herhanj';
import HussainabadJapla from './pages/service-areas/HussainabadJapla';
import Haidernagar from './pages/service-areas/Haidernagar';
import NagarUtari from './pages/service-areas/NagarUtari';
import ModernResidenceChainpur from './pages/projects/modern-residence-chainpur';
import LuxuryResidenceChhatarpur from './pages/projects/luxury-residence-chhatarpur';
import LuxuryVillaDaltonganj from './pages/projects/luxury-villa-daltonganj';
import ModernResidenceHariharganj from './pages/projects/modern-residence-hariharganj';
import CustomHomeDesign from './pages/services/custom-home-design';
import LuxuryVillasFarmhousesDaltonganjMedininagar from './pages/services/luxury-villas-farmhouses-daltonganj-medininagar';
import SustainableGreenArchitectureDaltonganjMedininagar from './pages/services/sustainable-green-architecture-daltonganj-medininagar';
import CommercialArchitectureDaltonganjMedininagar from './pages/services/commercial-architecture-daltonganj-medininagar';
import IndustrialArchitectureDaltonganjMedininagar from './pages/services/industrial-architecture-daltonganj-medininagar';
import UrbanPlanningDaltonganjMedininagar from './pages/services/urban-planning-daltonganj-medininagar';
import InteriorDesignDaltonganjMedininagar from './pages/services/interior-design-daltonganj-medininagar';
import ConstructionManagementDaltonganjMedininagar from './pages/services/construction-management-daltonganj-medininagar';
import RenovationDaltonganjMedininagar from './pages/services/renovation-daltonganj-medininagar';
import BuildingApprovalsDaltonganjMedininagar from './pages/services/building-approvals-daltonganj-medininagar';
import RetailStoresShowroomsDaltonganjMedininagar from './pages/services/retail-stores-showrooms-daltonganj-medininagar';
import HotelsHospitalityDesignDaltonganjMedininagar from './pages/services/hotels-hospitality-design-daltonganj-medininagar';
import EducationalInstitutionsDaltonganjMedininagar from './pages/services/educational-institutions-daltonganj-medininagar';
import HealthcareHospitalsDaltonganjMedininagar from './pages/services/healthcare-hospitals-daltonganj-medininagar';
import LandscapeArchitectureDaltonganjMedininagar from './pages/services/landscape-architecture-daltonganj-medininagar';
import PublicSpacesInfrastructureDaltonganjMedininagar from './pages/services/public-spaces-infrastructure-daltonganj-medininagar';
import DesignedBlueprintsDaltonganjMedininagar from './pages/services/designed-blueprints-daltonganj-medininagar';
import ProjectEstimationDaltonganjMedininagar from './pages/services/project-estimation-daltonganj-medininagar';
import CommercialInteriorDesignDaltonganjMedininagar from './pages/services/commercial-interior-design-daltonganj-medininagar';
import CustomFurnitureDecorDaltonganjMedininagar from './pages/services/custom-furniture-decor-daltonganj-medininagar';
import OfficeCommercialRenovationDaltonganjMedininagar from './pages/services/office-commercial-renovation-daltonganj-medininagar';
import RetailShowroomRemodelingDaltonganjMedininagar from './pages/services/retail-showroom-remodeling-daltonganj-medininagar';
import ThreeDVisualizationRenderingDaltonganjMedininagar from './pages/services/3d-visualization-rendering-daltonganj-medininagar';
import FacadeExteriorDesignDaltonganjMedininagar from './pages/services/facade-exterior-design-daltonganj-medininagar';
import VastuCompliantArchitectureDaltonganjMedininagar from './pages/services/vastu-compliant-architecture-daltonganj-medininagar';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/service-areas/daltonganj-medininagar" element={<DaltonganjMedininagar />} />
            <Route path="/services/custom-home-design-daltonganj-medininagar" element={<CustomHomeDesignDaltonganjMedininagar />} />
            <Route path="/services/luxury-villas-farmhouses-daltonganj-medininagar" element={<LuxuryVillasFarmhousesDaltonganjMedininagar />} />
            <Route path="/services/sustainable-green-architecture-daltonganj-medininagar" element={<SustainableGreenArchitectureDaltonganjMedininagar />} />
            <Route path="/services/commercial-architecture-daltonganj-medininagar" element={<CommercialArchitectureDaltonganjMedininagar />} />
            <Route path="/services/industrial-architecture-daltonganj-medininagar" element={<IndustrialArchitectureDaltonganjMedininagar />} />
            <Route path="/services/urban-planning-daltonganj-medininagar" element={<UrbanPlanningDaltonganjMedininagar />} />
            <Route path="/services/interior-design-daltonganj-medininagar" element={<InteriorDesignDaltonganjMedininagar />} />
            <Route path="/services/construction-management-daltonganj-medininagar" element={<ConstructionManagementDaltonganjMedininagar />} />
            <Route path="/services/renovation-daltonganj-medininagar" element={<RenovationDaltonganjMedininagar />} />
            <Route path="/services/building-approvals-daltonganj-medininagar" element={<BuildingApprovalsDaltonganjMedininagar />} />
            <Route path="/services/retail-stores-showrooms-daltonganj-medininagar" element={<RetailStoresShowroomsDaltonganjMedininagar />} />
            <Route path="/services/hotels-hospitality-design-daltonganj-medininagar" element={<HotelsHospitalityDesignDaltonganjMedininagar />} />
            <Route path="/services/educational-institutions-daltonganj-medininagar" element={<EducationalInstitutionsDaltonganjMedininagar />} />
            <Route path="/services/healthcare-hospitals-daltonganj-medininagar" element={<HealthcareHospitalsDaltonganjMedininagar />} />
            <Route path="/services/landscape-architecture-daltonganj-medininagar" element={<LandscapeArchitectureDaltonganjMedininagar />} />
            <Route path="/services/public-spaces-infrastructure-daltonganj-medininagar" element={<PublicSpacesInfrastructureDaltonganjMedininagar />} />
            <Route path="/services/designed-blueprints-daltonganj-medininagar" element={<DesignedBlueprintsDaltonganjMedininagar />} />
            <Route path="/services/project-estimation-daltonganj-medininagar" element={<ProjectEstimationDaltonganjMedininagar />} />
            <Route path="/services/commercial-interior-design-daltonganj-medininagar" element={<CommercialInteriorDesignDaltonganjMedininagar />} />
            <Route path="/services/custom-furniture-decor-daltonganj-medininagar" element={<CustomFurnitureDecorDaltonganjMedininagar />} />
            <Route path="/services/office-commercial-renovation-daltonganj-medininagar" element={<OfficeCommercialRenovationDaltonganjMedininagar />} />
            <Route path="/services/retail-showroom-remodeling-daltonganj-medininagar" element={<RetailShowroomRemodelingDaltonganjMedininagar />} />
            <Route path="/services/3d-visualization-rendering-daltonganj-medininagar" element={<ThreeDVisualizationRenderingDaltonganjMedininagar />} />
            <Route path="/services/facade-exterior-design-daltonganj-medininagar" element={<FacadeExteriorDesignDaltonganjMedininagar />} />
            <Route path="/services/vastu-compliant-architecture-daltonganj-medininagar" element={<VastuCompliantArchitectureDaltonganjMedininagar />} />
            <Route path="/service-areas/lesliganj" element={<Lesliganj />} />
            <Route path="/service-areas/chainpur" element={<Chainpur />} />
            <Route path="/service-areas/nawa-bazar" element={<NawaBazar />} />
            <Route path="/service-areas/chhatarpur" element={<Chhatarpur />} />
            <Route path="/service-areas/hariharganj" element={<Hariharganj />} />
            <Route path="/service-areas/satbarwa" element={<Satbarwa />} />
            <Route path="/service-areas/garhwa" element={<Garhwa />} />
            <Route path="/service-areas/ranka" element={<Ranka />} />
            <Route path="/service-areas/bhawnathpur" element={<Bhawnathpur />} />
            <Route path="/service-areas/latehar" element={<Latehar />} />
            <Route path="/service-areas/balumath" element={<Balumath />} />
            <Route path="/service-areas/herhanj" element={<Herhanj />} />
            <Route path="/service-areas/hussainabad-japla" element={<HussainabadJapla />} />
            <Route path="/service-areas/haidernagar" element={<Haidernagar />} />
            <Route path="/service-areas/nagar-utari" element={<NagarUtari />} />
            <Route path="/projects/modern-residence-chainpur" element={<ModernResidenceChainpur />} />
            <Route path="/projects/luxury-residence-chhatarpur" element={<LuxuryResidenceChhatarpur />} />
            <Route path="/projects/luxury-villa-daltonganj" element={<LuxuryVillaDaltonganj />} />
            <Route path="/projects/modern-residence-hariharganj" element={<ModernResidenceHariharganj />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
