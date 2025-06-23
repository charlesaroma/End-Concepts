// Imports
import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/heroimage.png";

// Hero Component
const hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row lg:items-center justify-between gap-8 md:gap-0 px-4 md:px-16 py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex-1 z-10 flex flex-col items-start">
        <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-4">
          <span className="block font-bold mb-2 md:mb-4 md:text-2xl lg:text-4xl text-[#e88936]">
            We are CRAG
          </span>
          <span className="block font-bold text-[#001d6c]">
            Solutions for the
            <br />
            future
          </span>
        </h2>
        {/* Button */}
        <Link
          to="/services/implementation" // The Link component is the main interactive element
          
          className="mt-8 px-8 py-3 rounded-full bg-[#001d6c] text-white font-medium flex items-center gap-2 shadow-lg hover:bg-[#163a8a] transition"
        >
          See all our expertise {/* This is the content inside the Link */}
          <span className="p-2 bg-gray-500/50 rounded-full">
            <Icon icon="mdi:arrow-right" className="text-xl" />
          </span>
        </Link>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center z-10">
        <img
          src={HeroImage}
          alt="Server Room Woman"
          className="rounded-2xl w-full max-w-xl object-cover shadow-xl"
        />
      </div>
    </section>
  );
};

// Export
export default hero;
