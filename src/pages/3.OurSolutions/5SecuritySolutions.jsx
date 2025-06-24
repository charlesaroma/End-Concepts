import React, { useState } from 'react';

const tabData = [
  {
    label: "Threat Protection",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80",
    content: "Protect your business from evolving cyber threats with advanced threat detection and response solutions."
  },
  {
    label: "Compliance",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
    content: "Ensure your organization meets industry regulations and standards with comprehensive compliance solutions."
  },
  {
    label: "Identity & Access",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    content: "Manage user identities and control access to critical resources with robust identity and access management."
  },
  {
    label: "Data Security",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80",
    content: "Safeguard your sensitive data with encryption, monitoring, and data loss prevention solutions."
  }
];

const SecuritySolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">Security Solutions</h2>
          <p className="text-gray-700 mb-4">
            Security is a top priority for modern organizations. Our security solutions are designed to protect your business from cyber threats, ensure compliance, and safeguard your data and resources.
          </p>
          <p className="text-gray-700 mb-4">
            We offer a comprehensive suite of security services, including threat protection, compliance, identity and access management, and data security.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80"
            alt="Security Solutions"
            className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#001d6c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Security Solutions</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            {tabData.map((tab, idx) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-t-md font-semibold transition ${
                  activeTab === idx
                    ? "bg-white text-[#001d6c] border-b-4 border-[#f59e42]"
                    : "bg-transparent text-white"
                }`}
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

export default SecuritySolutions;