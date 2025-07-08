import React, { useState } from 'react';

const tabData = [
  {
    label: "Network Infrastructure",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    content: "Design and implement robust network infrastructure solutions that provide reliable connectivity and optimal performance for your business operations."
  },
  {
    label: "Network Security",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80",
    content: "Comprehensive network security solutions including firewalls, intrusion detection, and advanced threat protection to safeguard your network."
  },
  {
    label: "Network Monitoring",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    content: "Real-time network monitoring and analytics to ensure optimal performance and identify potential issues before they impact operations."
  },
  {
    label: "Network Optimization",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    content: "Network optimization services to improve performance, reduce latency, and enhance overall network efficiency."
  }
];

const NetworkSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">Network Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our network solutions provide the foundation for reliable, secure, and high-performance connectivity that supports your business operations. We design and implement network infrastructure that scales with your business needs.
          </p>
          <p className="text-gray-700 mb-4">
            From network design and implementation to ongoing monitoring and optimization, we ensure your network infrastructure delivers the performance and security your business requires.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Network Solutions"
            className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#001d6c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Network Solutions</h2>
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

export default NetworkSolutions;