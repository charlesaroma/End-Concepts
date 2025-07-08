import React from 'react';

const SupportServices = () => {
  const features = [
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock technical support to resolve issues and ensure system availability."
    },
    {
      title: "Proactive Monitoring",
      description: "Continuous monitoring of systems to identify and prevent potential issues before they impact operations."
    },
    {
      title: "Performance Optimization",
      description: "Regular system optimization and tuning to maintain peak performance and efficiency."
    },
    {
      title: "Emergency Response",
      description: "Rapid response team for critical issues and emergency situations with minimal downtime."
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">
              Support Services
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Our comprehensive support services ensure that your technology infrastructure runs smoothly and efficiently. We provide proactive monitoring, technical support, and ongoing maintenance to keep your systems operating at peak performance.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                With our 24/7 support team, you can rest assured that any technical issues will be resolved quickly, minimizing downtime and maintaining business continuity.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#001d6c] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
                alt="Support Services"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServices;