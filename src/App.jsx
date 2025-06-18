import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';

// Placeholder components for each route
const Placeholder = ({ label }) => <div className="p-8 text-2xl">{label}</div>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Placeholder label="Home" />} />
        <Route path="/who-we-are/about-us" element={<Placeholder label="About Us" />} />
        <Route path="/who-we-are/partners" element={<Placeholder label="Partners" />} />
        <Route path="/solutions/cloud" element={<Placeholder label="Cloud Solutions" />} />
        <Route path="/solutions/data" element={<Placeholder label="Data Solutions" />} />
        <Route path="/solutions/ai" element={<Placeholder label="AI Solutions" />} />
        <Route path="/solutions/network" element={<Placeholder label="Network Solutions" />} />
        <Route path="/solutions/security" element={<Placeholder label="Security Solutions" />} />
        <Route path="/solutions/infrastructure" element={<Placeholder label="Infrastructure Solutions" />} />
        <Route path="/solutions/modern-work" element={<Placeholder label="Modern Work Solutions" />} />
        <Route path="/products/secufortress" element={<Placeholder label="Secufortress" />} />
        <Route path="/products/v-book" element={<Placeholder label="V-Book" />} />
        <Route path="/products/loan-app" element={<Placeholder label="Loan App" />} />
        <Route path="/products/telemetric" element={<Placeholder label="Telemetric" />} />
        <Route path="/products/fraud-detection" element={<Placeholder label="Fraud Detection" />} />
        <Route path="/products/conveyancing" element={<Placeholder label="Conveyancing" />} />
        <Route path="/services/implementation" element={<Placeholder label="Implementation" />} />
        <Route path="/services/migration" element={<Placeholder label="Migration Services" />} />
        <Route path="/services/support" element={<Placeholder label="Support Services" />} />
        <Route path="/services/advisory" element={<Placeholder label="Advisory Services" />} />
        <Route path="/services/security" element={<Placeholder label="Security Services" />} />
        <Route path="/services/post-migration" element={<Placeholder label="Post Migration Services" />} />
        <Route path="/contact" element={<Placeholder label="Contact Us" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;