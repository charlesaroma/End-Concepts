import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const menuData = [
  { label: 'Home', path: '/' },
  {
    label: 'Who We Are',
    dropdown: [
      { label: 'About Us', path: '/who-we-are/about-us' },
      { label: 'Partners', path: '/who-we-are/partners' },
    ],
  },
  {
    label: 'Our Solutions',
    dropdown: [
      { label: 'Cloud Solutions', path: '/solutions/cloud' },
      { label: 'Data Solutions', path: '/solutions/data' },
      { label: 'AI Solutions', path: '/solutions/ai' },
      { label: 'Network Solutions', path: '/solutions/network' },
      { label: 'Security Solutions', path: '/solutions/security' },
      { label: 'Infrastructure Solutions', path: '/solutions/infrastructure' },
      { label: 'Modern Work Solutions', path: '/solutions/modern-work' },
    ],
  },
  {
    label: 'Our Products',
    dropdown: [
      { label: 'Secufortress', path: '/products/secufortress' },
      { label: 'V-Book', path: '/products/v-book' },
      { label: 'Loan App', path: '/products/loan-app' },
      { label: 'Telemetric', path: '/products/telemetric' },
      { label: 'Fraud Detection', path: '/products/fraud-detection' },
      { label: 'Conveyancing', path: '/products/conveyancing' },
    ],
  },
  {
    label: 'Our Services',
    dropdown: [
      { label: 'Implementation', path: '/services/implementation' },
      { label: 'Migration Services', path: '/services/migration' },
      { label: 'Support Services', path: '/services/support' },
      { label: 'Advisory Services', path: '/services/advisory' },
      { label: 'Security Services', path: '/services/security' },
      { label: 'Post Migration Services', path: '/services/post-migration' },
    ],
  },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeout = useRef(null);

  const handleMouseEnter = (idx) => {
    clearTimeout(closeTimeout.current);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Delay in ms
  };

  const handleDropdownClick = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <nav className="w-full flex items-center justify-between px-20 py-4 shadow-sm bg-white">
      <Link to="/" className="flex items-center">
        <img src="/cragroup.svg" alt="CRA Group Logo" className="h-16" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 items-center">
        {menuData.map((item, idx) => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            {item.dropdown ? (
              <>
                <button
                  className={`flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                    openDropdown === idx ? 'text-orange-400' : 'text-blue-900 hover:text-orange-400'
                  }`}
                  onClick={() => handleDropdownClick(idx)}
                >
                  {item.label}
                  <Icon icon="mdi:chevron-down" className="text-base" />
                </button>
                {openDropdown === idx && (
                  <div className="absolute left-0 top-full mt-2 min-w-[200px] bg-white shadow-lg rounded z-20 transition-opacity">
                    <ul className="py-2" onMouseEnter={() => clearTimeout(closeTimeout.current)} onMouseLeave={handleMouseLeave}>
                      {item.dropdown.map((sub) => (
                        <li key={sub.label}>
                          <NavLink
                            to={sub.path}
                            className={({ isActive }) =>
                              `block px-6 py-2 whitespace-nowrap hover:bg-gray-100 text-blue-900 cursor-pointer ${
                                isActive ? 'font-medium text-orange-400' : ''
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors cursor-pointer ${
                    isActive ? 'text-orange-400' : 'text-blue-900 hover:text-orange-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
        <Icon icon={mobileOpen ? 'mdi:close' : 'mdi:menu'} className="text-3xl text-blue-900" />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col p-6 transition-all">
          <div className="flex items-center justify-between mb-6">
            <img src="/cragroup.svg" alt="CRA Group Logo" className="h-10" />
            <button onClick={() => setMobileOpen(false)}>
              <Icon icon="mdi:close" className="text-3xl text-blue-900" />
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {menuData.map((item, idx) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <div>
                    <button
                      className={`flex w-full items-center justify-between py-2 px-2 font-medium cursor-pointer ${
                        openDropdown === idx ? 'text-orange-400' : 'text-blue-900'
                      }`}
                      onClick={() => handleDropdownClick(idx)}
                    >
                      {item.label}
                      <Icon
                        icon={
                          openDropdown === idx ? 'mdi:chevron-up' : 'mdi:chevron-down'
                        }
                      />
                    </button>
                    {openDropdown === idx && (
                      <ul className="pl-4 border-l border-gray-200">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <NavLink
                              to={sub.path}
                              className={({ isActive }) =>
                                `block py-2 px-2 text-blue-900 cursor-pointer ${
                                  isActive ? 'font-semibold text-orange-400' : ''
                                }`
                              }
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 px-2 font-medium cursor-pointer ${
                        isActive ? 'text-orange-400' : 'text-blue-900'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
