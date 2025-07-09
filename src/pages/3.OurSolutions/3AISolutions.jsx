import React, { useState } from 'react';

const tabData = [
  {
    label: "Generative AI",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // AI art/creative
    content: "Boost productivity and unleash creativity with generative AI. These innovative solutions enable you to effortlessly create content, including text, images, and audio, using simple prompts. They comprehend and process natural language to deliver the results you desire."
  },
  {
    label: "Microsoft Copilot",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Copilot/AI assistant
    content: "Leverage Microsoft Copilot to enhance productivity and automate repetitive tasks using AI-powered assistance."
  },
  {
    label: "Machine Learning",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // ML/graphs
    content: "Utilize machine learning algorithms to analyze data, predict trends, and make data-driven decisions."
  }
];

const AISolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">AI Solutions</h2>
          <p className="text-gray-700 mb-4">
            Artificial Intelligence (AI) is revolutionizing the way businesses operate, offering new opportunities for automation, efficiency, and innovation. Our AI solutions are designed to help you harness the power of AI to drive business growth and stay ahead of the competition.
          </p>
          <p className="text-gray-700 mb-4">
            From generative AI to machine learning and intelligent automation, we provide a range of solutions tailored to your unique needs.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="AI Solutions"
            className="w-80 h-56 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#001d6c] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">AI Solutions</h2>
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

export default AISolutions;
