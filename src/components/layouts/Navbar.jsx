import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

// Menu Data
const menuData = [
  { label: "Home", path: "/" },
  {
    label: "Who We Are",
    dropdown: [
      { label: "About Us", path: "/who-we-are/about-us" },
      { label: "Partners", path: "/who-we-are/partners" },
    ],
  },
  {
    label: "Our Solutions",
    dropdown: [
      { label: "Cloud Solutions", path: "/solutions/cloud" },
      { label: "Data Solutions", path: "/solutions/data" },
      { label: "AI Solutions", path: "/solutions/ai" },
      { label: "Network Solutions", path: "/solutions/network" },
      { label: "Security Solutions", path: "/solutions/security" },
      { label: "Infrastructure Solutions", path: "/solutions/infrastructure" },
      { label: "Modern Work Solutions", path: "/solutions/modern-work" },
    ],
  },
  {
    label: "Our Products",
    dropdown: [
      { label: "Secufortress", path: "/products/secufortress" },
      { label: "V-Book", path: "/products/v-book" },
      { label: "Loan App", path: "/products/loan-app" },
      { label: "Telemetric", path: "/products/telemetric" },
      { label: "Fraud Detection", path: "/products/fraud-detection" },
      { label: "Conveyancing", path: "/products/conveyancing" },
    ],
  },
  {
    label: "Our Services",
    dropdown: [
      { label: "Implementation", path: "/services/implementation" },
      { label: "Migration Services", path: "/services/migration" },
      { label: "Support Services", path: "/services/support" },
      { label: "Advisory Services", path: "/services/advisory" },
      { label: "Security Services", path: "/services/security" },
      { label: "Post Migration Services", path: "/services/post-migration" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeout = useRef(null);

  // Dropdown Handlers
  const handleMouseEnter = (idx) => {
    clearTimeout(closeTimeout.current);
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <nav className="relative">
      <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-3 md:py-4 shadow-sm bg-white">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/cragroup.svg"
            alt="CRA Group Logo"
            className="h-8 md:h-10 lg:h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 items-center">
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
                      openDropdown === idx
                        ? "text-[#e88936]"
                        : "text-[#001d6c] hover:text-[#e88936]"
                    }`}
                    onClick={() => handleDropdownClick(idx)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === idx}
                  >
                    {item.label}
                    <Icon icon="mdi:chevron-down" className="text-base" />
                  </button>
                  {openDropdown === idx && (
                    <div className="absolute left-0 top-full mt-2 min-w-[200px] font-medium bg-white shadow-lg rounded z-20 transition-opacity">
                      <ul
                        className="py-2"
                        onMouseEnter={() => clearTimeout(closeTimeout.current)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <NavLink
                              to={sub.path}
                              className={({ isActive }) =>
                                `block px-6 py-2 whitespace-nowrap hover:bg-gray-100 text-[#001d6c] cursor-pointer ${
                                  isActive ? "font-medium text-[#e88936]" : ""
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
                      isActive
                        ? "text-[#e88936]"
                        : "text-[#001d6c] hover:text-[#e88936]"
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
        <button
          className="md:hidden ml-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Icon
            icon={mobileOpen ? "mdi:close" : "mdi:menu"}
            className="text-3xl text-[#001d6c]"
          />
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col p-6 transition-all overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <img src="/cragroup.svg" alt="CRA Group Logo" className="h-10" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <Icon icon="mdi:close" className="text-3xl text-[#001d6c]" />
              </button>
            </div>
            {/* Mobile Menu List */}
            <ul className="flex flex-col gap-2">
              {menuData.map((item, idx) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        className={`flex w-full items-center justify-between py-2 px-2 font-medium cursor-pointer ${
                          openDropdown === idx
                            ? "text-[#e88936]"
                            : "text-[#001d6c]"
                        }`}
                        onClick={() => handleDropdownClick(idx)}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === idx}
                      >
                        {item.label}
                        <Icon
                          icon={
                            openDropdown === idx
                              ? "mdi:chevron-up"
                              : "mdi:chevron-down"
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
                                  `block py-2 px-2 text-[#001d6c] cursor-pointer ${
                                    isActive
                                      ? "font-semibold text-[#e88936]"
                                      : ""
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
                          isActive ? "text-[#e88936]" : "text-[#001d6c]"
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
    </nav>
  );
};

export default Navbar;
