import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#002366] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo & Policies */}
          <div className="flex flex-col">
            <img
              src="/cragroup2.svg"
              alt="END CONCEPTS Logo"
              className="h-14 w-auto mb-4"
              loading="lazy"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              <button className="border border-white cursor-pointer rounded-full px-4 py-1.5 text-white hover:bg-white hover:text-[#002366] transition-all duration-200 font-medium text-xs whitespace-nowrap">
                Terms of Service
              </button>
              <button className="border border-white cursor-pointer rounded-full px-4 py-1.5 text-white hover:bg-white hover:text-[#002366] transition-all duration-200 font-medium text-xs whitespace-nowrap">
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Our Expertise */}
          <div>
            <h4 className="font-bold mb-4 text-base uppercase tracking-wider">Our Expertise</h4>
            <ul className="space-y-2 text-sm">
              {['Cloud Migration', 'Cybersecurity', 'Microsoft 365', 'Data Analytics', 'Managed IT Support', 'Network Infrastructure', 'Digital Transformation'].map((item) => (
                <li key={item} className="hover:text-[#e88936] transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-base uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'Contact Us', 'Our Services', 'Cloud Migration', 'Cybersecurity', 'Data Analytics'].map((item) => (
                <li key={item} className="hover:text-[#e88936] transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4 text-base uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <h5 className="font-semibold mb-1">Phone:</h5>
                {['+256 785939224', '+256 702190179', '+256 705153856'].map((phone) => (
                  <p key={phone} className="hover:text-[#e88936] transition-colors cursor-pointer">{phone}</p>
                ))}
              </div>
              <div>
                <h5 className="font-semibold mb-1">Email:</h5>
                {['ofoemma@gmail.com', 'endconcepts@gmail.com'].map((email) => (
                  <p key={email} className="hover:text-[#e88936] transition-colors cursor-pointer break-all">{email}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/80">© {new Date().getFullYear()} END CONCEPTS. All Rights Reserved</span>
          
          <div className="flex gap-5">
            {[
              { icon: 'ri:twitter-x-fill', label: 'Twitter' },
              { icon: 'ri:linkedin-fill', label: 'LinkedIn' },
              { icon: 'ri:instagram-fill', label: 'Instagram' },
              { icon: 'ri:facebook-fill', label: 'Facebook' }
            ].map((social) => (
              <a 
                key={social.label}
                href="#" 
                aria-label={social.label}
                className="text-white hover:text-[#e88936] transition-colors text-xl"
              >
                <Icon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;