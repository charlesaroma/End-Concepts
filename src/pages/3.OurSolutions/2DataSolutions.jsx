// src/pages/3.OurSolutions/2DataSolutions.jsx
import React, { useState } from 'react';

const tabData = [
  {
    label: "Data Integration",
    image: "https://cdn.pixabay.com/photo/2017/01/10/19/05/database-1978236_1280.png",
    content: "Seamlessly integrate data from multiple sources to create a unified and coherent view of your business operations."
  },
  {
    label: "Data Warehousing",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    content: "Store and manage large volumes of structured and unstructured data efficiently for analytics and reporting."
  },
  {
    label: "Data Analytics",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    content: "Analyze your data to uncover trends, patterns, and actionable insights for better decision-making."
  },
  {
    label: "Data Visualization",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    content: "Visualize complex data sets with interactive dashboards and reports for easier understanding."
  },
  {
    label: "Business Intelligence",
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80",
    content: "Transform data into actionable intelligence to drive business growth and efficiency."
  }
];

const DataSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">Data Solutions</h2>
          <p className="text-gray-700 mb-4">
            In today's data-driven world, businesses and organizations are increasingly placing data at the core of their operations. As data volumes continue to grow, it is crucial to harness this valuable resource for better outcomes. Analysis of this data is a crucial step in helping businesses make informed decisions.
          </p>
          <p className="text-gray-700 mb-4">
            <b>CRAG</b> offers comprehensive data and business intelligence solutions designed to unlock the full potential of your data. Our solutions provide actionable insights that drive informed decision-making and strategic planning, ensuring your business remains competitive and ahead of the curve.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Data Solutions"
            className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#001d6c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Data Solutions</h2>
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

export default DataSolutions;