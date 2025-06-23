import React from 'react';
import OurHistory from './1OurHistory';
import OurValues from './2OurValues';
import OurPartners from './3OurPartners';
import PartnersHero from '../2Partners/1PartnersHero';

const sections = [
  { id: 'history', label: 'Our History' },
  { id: 'values', label: 'Our Values' },
  { id: 'partners-hero', label: 'Our Partners' },
];

const AboutUs = () => {
  const [active, setActive] = React.useState('history');

  // Scroll spy effect
  React.useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const activeIdx = offsets.findIndex((top, idx) => top > 0 && (idx === 0 || offsets[idx - 1] <= 0));
      setActive(sections[Math.max(0, activeIdx - 1)].id || 'history');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-col gap-16 py-0">
      {/* Section Navbar */}
      <nav className="sticky top-0 z-10 w-full bg-[#001d6c] px-4 md:px-12 lg:px-32 py-4 flex justify-end gap-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`text-base font-medium transition-colors duration-200 ${active === section.id ? 'text-white' : 'text-gray-300 hover:text-white'}`}
          >
            {section.label}
          </button>
        ))}
      </nav>
      {/* Our History Section */}
      <section id="history">
        <OurHistory />
      </section>
      {/* Our Values Section */}
      <section id="values">
        <OurValues />
      </section>
      {/* Our Partners Hero Section */}
      <section id="partners-hero">
        <PartnersHero />
      </section>
      {/* Our Partners Section (if needed elsewhere) */}
      {/* <section id="partners">
        <OurPartners />
      </section> */}
    </div>
  );
};

export default AboutUs;