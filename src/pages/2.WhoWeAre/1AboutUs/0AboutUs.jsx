import React from 'react';
import AboutNavbar from './AboutNavbar';
import OurHistory from './1OurHistory';
import OurValues from './2OurValues';

const SECTION_NAV_HEIGHT = 64; // px, matches top-16

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col gap-16 py-0">
      {/* Section Navbar - fixed below main navbar */}
      <AboutNavbar />
      {/* Spacer for fixed navbars */}
      <div style={{ height: SECTION_NAV_HEIGHT + 16 }} />
      {/* Our History Section */}
      <section id="history">
        <OurHistory />
      </section>
      {/* Our Values Section */}
      <section id="values">
        <OurValues />
      </section>
    </div>
  );
};

export default AboutUs;