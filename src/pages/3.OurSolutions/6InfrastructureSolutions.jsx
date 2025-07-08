import React, { useState } from 'react';

const tabData = [
  {
    label: "Server Management",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    content: "Comprehensive server management services including deployment, monitoring, maintenance, and optimization of your server infrastructure."
  },
  {
    label: "Storage Solutions",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80",
    content: "Scalable storage solutions designed to meet your data storage needs with high availability and performance."
  },
  {
    label: "Virtualization",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    content: "Virtualization technologies to optimize resource utilization and improve infrastructure efficiency."
  },
  {
    label: "Disaster Recovery",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    content: "Comprehensive disaster recovery solutions to ensure business continuity and data protection."
  }
];

const InfrastructureSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">Infrastructure Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our infrastructure solutions provide the foundation for reliable, scalable, and secure IT operations. We design and implement infrastructure that supports your business growth and technological advancement.
          </p>
          <p className="text-gray-700 mb-4">
            From server management to disaster recovery, we ensure your infrastructure is robust, efficient, and aligned with your business objectives.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Infrastructure Solutions"
            className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#001d6c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Infrastructure Solutions</h2>
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

export default InfrastructureSolutions;