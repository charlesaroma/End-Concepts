import React, { useState } from 'react';

const tabData = [
  {
    label: "Collaboration Tools",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", // Collaboration
    content: "Modern collaboration tools and platforms that enable seamless teamwork and communication across distributed teams."
  },
  {
    label: "Remote Work",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Remote work
    content: "Comprehensive remote work solutions including secure access, virtual desktops, and remote collaboration platforms."
  },
  {
    label: "Productivity Apps",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Productivity
    content: "Productivity applications and tools designed to streamline workflows and enhance team efficiency."
  },
  {
    label: "Digital Workspace",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80", // Digital workspace
    content: "Integrated digital workspace solutions that provide a unified environment for modern work practices."
  }
];

const ModernWorkSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">Modern Work Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our modern work solutions enable organizations to embrace flexible, collaborative, and efficient work practices. We provide the tools and technologies that support the evolving workplace and enhance productivity.
          </p>
          <p className="text-gray-700 mb-4">
            From collaboration platforms to remote work solutions, we help you create a modern work environment that drives innovation and employee satisfaction.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Modern Work Solutions"
            className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#001d6c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Modern Work Solutions</h2>
          <div className="flex border-b border-white/30 mb-8">
            {tabData.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 font-semibold transition border-b-2 focus:outline-none cursor-pointer
                  ${activeTab === idx
                    ? "border-[#f59e42] text-[#f59e42] bg-white/5"
                    : "border-transparent text-white hover:text-[#f59e42]"}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-center gap-8 shadow">
            <img
              src={tabData[activeTab].image}
              alt={tabData[activeTab].label}
              className="w-56 h-40 object-contain rounded"
            />
            <p className="text-gray-700 text-lg">{tabData[activeTab].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernWorkSolutions;