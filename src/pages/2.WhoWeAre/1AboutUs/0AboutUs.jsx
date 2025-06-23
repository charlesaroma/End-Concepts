import React from "react";
import OurHistory from "./1AboutUsHero";
import OurValues from "./2OurValues";

const SECTION_NAV_HEIGHT = 64; // px, matches top-16

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col gap-16 py-0">
      <OurHistory />
      <OurValues />
    </div>
  );
};

export default AboutUs;
