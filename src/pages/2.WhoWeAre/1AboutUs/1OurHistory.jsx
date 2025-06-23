import React from 'react';
// Correct image path assuming SimonKinuthia.jpg is in the public/images folder
import Simon from '/images/SimonKinuthia.jpg'; // Direct path from public folder root

const historyParagraphs = [
  "Established in Kenya in 1995 with the aim of successfully integrating innovation and technology in business, Computer Revolution Africa Group has grown to become one of the leading IT business solutions providers in Africa. We are committed to fostering outstanding client relations; we provide first-rate IT solutions and services to a wide range of constant challenges. In addition, we combine and adopt pioneering IT knowledge in developing component solutions that keep businesses one-step ahead of the competition.",
  "We are currently a recognized Microsoft Gold Certified Partner, an Enterprise Software Advisor and a Dell Enterprise Partner; associations that invariably allow us to consistently deliver end-to-end professional and robust technology solutions suitable for mid to large size businesses.",
  "We strive to help clients meet their daily business objectives, handling their most difficult and complex IT problems and freeing them to do more with less, whilst delivering the best business solutions faster. Whether your business requires Network Management, Data Centres, Unified Messaging, Business Intelligence, Virtualization, or Customer Relationship Management, Mobility services, or you are simply looking for the ideal Security Solutions software; Computer Revolution Africa Group will identify the perfect IT solution for you. We will listen carefully to your issues and needs and recommend innovative technology and proven methods that will help you succeed."
];

const OurHistory = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 w-full max-w-6xl mx-auto px-4 md:px-16 py-8">
      {/* Left: Text */}
      <div className="flex-1 w-full flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">Our History</h2>
        {historyParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 font-medium leading-snug mb-4 text-justify leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      {/* Right: Image */}
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        <img
          src={Simon}
          alt="Mr. Simon Kinuthia – Founder & CEO, CRA Group"
          className="rounded-2xl object-cover w-[520px] h-[600px] shadow-lg"
        />
        <div className="mt-4 text-sm text-gray-500 font-medium text-center">
          Mr. Simon Kinuthia – Founder & CEO, CRA Group
        </div>
      </div>
    </div>
  );
}

export default OurHistory;