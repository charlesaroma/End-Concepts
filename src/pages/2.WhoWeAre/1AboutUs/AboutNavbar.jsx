import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const sections = [
  { id: 'history', label: 'Our History' },
  { id: 'values', label: 'Our Values' },
];

const SECTION_NAV_HEIGHT = 64;

const AboutNavbar = () => {
  const [active, setActive] = React.useState('history');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  // Scroll spy effect for AboutUs sections only
  React.useEffect(() => {
    const handleScroll = () => {
      const ids = ['history', 'values'];
      const offsets = ids.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });
      const activeIdx = offsets.findIndex((top, idx) => top > 0 && (idx === 0 || offsets[idx - 1] <= 0));
      setActive(ids[Math.max(0, activeIdx - 1)] || 'history');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -SECTION_NAV_HEIGHT - 16;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePartnersClick = () => {
    navigate('/who-we-are/partners');
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className="fixed top-16 sm:top-18 md:top-24 left-0 right-0 z-40 w-full bg-[#001d6c] shadow-lg"
      style={{ minHeight: SECTION_NAV_HEIGHT }}
    >
      {/* Desktop Navigation */}
      <div className="hidden w-full md:flex justify-center lg:justify-end items-center h-full px-4 py-4 lg:px-8 xl:px-32 gap-4 lg:gap-6 xl:gap-8">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`text-sm lg:text-base font-medium transition-all duration-200 px-2 py-1 rounded ${
              active === section.id 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-300 hover:text-white hover:bg-blue-800'
            } cursor-pointer whitespace-nowrap`}
          >
            {section.label}
          </button>
        ))}
        <button
          onClick={handlePartnersClick}
          className="text-sm lg:text-base font-medium transition-all duration-200 px-2 py-1 rounded text-gray-300 hover:text-white hover:bg-blue-800 cursor-pointer whitespace-nowrap"
        >
          Our Partners
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between h-full px-4">
        {/* Current Section Indicator */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="text-white font-medium text-sm">
            {sections.find(s => s.id === active)?.label || 'Our History'}
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white hover:text-gray-300 transition-colors p-2 rounded"
          aria-label="Toggle navigation menu"
        >
          <Icon icon={isMobileMenuOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'} className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#001d6c] border-t border-blue-800 shadow-xl">
          <div className="flex flex-col py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  active === section.id 
                    ? 'text-white bg-blue-800 border-l-4 border-white' 
                    : 'text-gray-300 hover:text-white hover:bg-blue-800'
                } cursor-pointer flex items-center gap-3`}
              >
                {active === section.id && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
                {section.label}
              </button>
            ))}
            <button
              onClick={handlePartnersClick}
              className="text-left px-4 py-3 text-sm font-medium transition-all duration-200 text-gray-300 hover:text-white hover:bg-blue-800 cursor-pointer"
            >
              Our Partners
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AboutNavbar;