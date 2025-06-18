import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
// Home
import Home from './pages/1.Home/0home';
import Hero from './pages/1.Home/1hero';
import OurSolutionsHome from './pages/1.Home/2OurSolutions';
import HomeService from './pages/1.Home/3HomeService';
import OurNumber from './pages/1.Home/4OurNumber';
import HomeCompanySlide from './pages/1.Home/5HomeCompanySlide';
// Who We Are
import AboutUs from './pages/2.WhoWeAre/1AboutUs/0AboutUs';
import OurHistory from './pages/2.WhoWeAre/1AboutUs/1OurHistory';
import OurValues from './pages/2.WhoWeAre/1AboutUs/2OurValues';
import OurPartners from './pages/2.WhoWeAre/1AboutUs/3OurPartners';
import Partners from './pages/2.WhoWeAre/2Partners/0Partners';
import PartnersHero from './pages/2.WhoWeAre/2Partners/1PartnersHero';
import Vendors from './pages/2.WhoWeAre/2Partners/2Vendors';
import Awards from './pages/2.WhoWeAre/2Partners/3Awards';
import Certifications from './pages/2.WhoWeAre/2Partners/4Certifications';
// Our Solutions
import OurSolutions from './pages/3.OurSolutions/0OurSolutions';
import CloudSolutions from './pages/3.OurSolutions/1CloudSolutions';
import DataSolutions from './pages/3.OurSolutions/2DataSolutions';
import AISolutions from './pages/3.OurSolutions/3AISolutions';
import NetworkSolutions from './pages/3.OurSolutions/4NetworkSolutions';
import SecuritySolutions from './pages/3.OurSolutions/5SecuritySolutions';
import InfrastructureSolutions from './pages/3.OurSolutions/6InfrastructureSolutions';
import ModernWorkSolutions from './pages/3.OurSolutions/7ModernWorkSolutions';
// Our Products
import OurProducts from './pages/4.OurProducts/0OurProducts';
import Secufortress from './pages/4.OurProducts/1Secufortress';
import VBook from './pages/4.OurProducts/2VBook';
import LoanApp from './pages/4.OurProducts/3LoanApp';
import Telemetric from './pages/4.OurProducts/4Telemetric';
import FraudDetection from './pages/4.OurProducts/5FraudDetection';
import Conveyancing from './pages/4.OurProducts/6Conveyancing';
// Our Services
import OurServices from './pages/5.OurServices/0OurServices';
import OurServicesHero from './pages/5.OurServices/1OurServicesHero';
import Implementation from './pages/5.OurServices/2Implementation';
import MigrationServices from './pages/5.OurServices/3MigrationServices';
import SupportServices from './pages/5.OurServices/4SupportServices';
import AdvisoryServices from './pages/5.OurServices/5AdvisoryServices';
import SecurityServices from './pages/5.OurServices/6SecurityServices';
import PostMigrationServices from './pages/5.OurServices/7PostMigrationServices';
// Contact Us (if exists, otherwise keep placeholder)

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Home subcomponents can be routed or used inside Home if needed */}
        <Route path="/who-we-are/about-us" element={<AboutUs />} />
        <Route path="/who-we-are/partners" element={<Partners />} />
        <Route path="/solutions/cloud" element={<CloudSolutions />} />
        <Route path="/solutions/data" element={<DataSolutions />} />
        <Route path="/solutions/ai" element={<AISolutions />} />
        <Route path="/solutions/network" element={<NetworkSolutions />} />
        <Route path="/solutions/security" element={<SecuritySolutions />} />
        <Route path="/solutions/infrastructure" element={<InfrastructureSolutions />} />
        <Route path="/solutions/modern-work" element={<ModernWorkSolutions />} />
        <Route path="/products/secufortress" element={<Secufortress />} />
        <Route path="/products/v-book" element={<VBook />} />
        <Route path="/products/loan-app" element={<LoanApp />} />
        <Route path="/products/telemetric" element={<Telemetric />} />
        <Route path="/products/fraud-detection" element={<FraudDetection />} />
        <Route path="/products/conveyancing" element={<Conveyancing />} />
        <Route path="/services/implementation" element={<Implementation />} />
        <Route path="/services/migration" element={<MigrationServices />} />
        <Route path="/services/support" element={<SupportServices />} />
        <Route path="/services/advisory" element={<AdvisoryServices />} />
        <Route path="/services/security" element={<SecurityServices />} />
        <Route path="/services/post-migration" element={<PostMigrationServices />} />
        {/* Add more routes as needed for other components */}
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;