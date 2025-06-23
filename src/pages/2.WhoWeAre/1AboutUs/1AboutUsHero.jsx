import React from 'react';

const aboutParagraphs = [
  "At END CONCEPTS, we are passionate about transforming businesses through smart, secure, and innovative technology solutions. With a strong foundation in IT services, data analytics, and digital transformation, we empower organizations of all sizes to thrive in an ever-evolving tech landscape.",
  "Our team of certified professionals brings deep expertise in cloud migration, cybersecurity, Microsoft 365 solutions, and managed IT support. Whether you're a growing business looking to scale with robust network infrastructure or a research team seeking meaningful data insights, we're here to guide and support you every step of the way.",
  "We go beyond problem-solving — we future-proof your business. From seamless software development to tailored training programs, we help you harness technology as a strategic asset. Our data analysts and IT consultants not only deliver solutions but also ensure you and your team understand how to use them effectively.",
  "With a customer-first mindset, we're committed to reliability, integrity, and measurable impact. Partner with us for services you can trust and a team that's always ready to help your business succeed."
];

const techImageUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80";

const AboutUsHero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-6xl mx-auto px-4 md:px-16 py-8">
      {/* Left: Text */}
      <div className="flex-1 w-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">About Us</h2>
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 font-medium leading-snug mb-4 text-justify">
            {paragraph}
          </p>
        ))}
      </div>
      {/* Right: Image */}
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <img
          src={techImageUrl}
          alt="Technology and cybersecurity illustration"
          className="rounded-2xl object-cover w-[520px] h-[400px] shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutUsHero;