import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-[#002366] text-white pt-10 pb-4 px-4 md:px-12 lg:px-24 relative">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 relative z-10">
        {/* Logo & Policies */}
        <div className="flex flex-col gap-6 md:w-1/4">
          <img src="/cragroup2.svg" alt="CRA Group Logo" className="h-14 w-auto mb-2" />
          <div className="flex gap-4 mt-2">
            <button className="border border-white rounded-full px-5 py-2 text-white hover:bg-white hover:text-[#002366] transition font-medium text-sm">Terms of Service</button>
            <button className="border border-white rounded-full px-5 py-2 text-white hover:bg-white hover:text-[#002366] transition font-medium text-sm">Privacy Policy</button>
          </div>
        </div>
        {/* Our Expertise */}
        <div className="md:w-1/4">
          <h4 className="font-bold mb-3 text-base">OUR EXPERTISE</h4>
          <ul className="space-y-2 text-sm">
            <li>Cloud Solutions</li>
            <li>Data Solutions</li>
            <li>AI Solutions</li>
            <li>Network Solutions</li>
            <li>Security Solutions</li>
            <li>Data Center Solutions</li>
            <li>Modern Work</li>
          </ul>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/4">
          <h4 className="font-bold mb-3 text-base">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Who We Are</li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>Secufortress</li>
            <li>V-Book</li>
            <li>Loan App</li>
          </ul>
        </div>
        {/* Get In Touch */}
        <div className="md:w-1/4">
          <h4 className="font-bold mb-3 text-base">GET IN TOUCH</h4>
          <div className="mb-2 text-sm">
            <span className="block font-semibold">Tell:</span>
            <span className="block">+254 20-2675208</span>
            <span className="block">+254 20-2675207</span>
            <span className="block">+254 20-2099726</span>
            <span className="block">+254 057-2513222</span>
          </div>
          <div className="text-sm">
            <span className="block font-semibold">Email:</span>
            <span className="block">info@cragroup.co.ke</span>
            <span className="block">sales@cragroup.co.ke</span>
          </div>
        </div>
      </div>
      {/* World Map Background (optional, subtle) */}
      {/* <div className="absolute inset-0 opacity-10 z-0 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: 'url(/path-to-worldmap.png)' }} /> */}
      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <span>© 2025 CRA Group. | All Rights Reserved</span>
        <div className="flex gap-4 text-xl">
          <a href="#" aria-label="X" className="hover:text-[#e88936]"><Icon icon="ri:twitter-x-fill" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#e88936]"><Icon icon="ri:linkedin-fill" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-[#e88936]"><Icon icon="ri:instagram-fill" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;