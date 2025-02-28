import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import DaltonganjMedininagar from './pages/service-areas/DaltonganjMedininagar';
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
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/service-areas/daltonganj-medininagar" element={<DaltonganjMedininagar />} />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
