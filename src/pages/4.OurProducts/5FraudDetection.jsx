import React from 'react';

const FraudDetection = () => {
  const features = [
    {
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms to detect fraudulent activities in real-time."
    },
    {
      title: "Behavioral Analysis",
      description: "User behavior analysis to identify suspicious patterns and anomalies."
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Comprehensive monitoring across multiple channels and transaction types."
    },
    {
      title: "Automated Response",
      description: "Automated fraud prevention measures with configurable response rules."
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
              Fraud Detection
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Our Fraud Detection solution is a cutting-edge AI-powered platform designed to protect businesses from financial fraud and cyber threats. This comprehensive system uses advanced machine learning algorithms to identify and prevent fraudulent activities in real-time.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                With continuous learning capabilities and behavioral analysis, our fraud detection system adapts to evolving threats and provides robust protection for your business operations.
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
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" // AI/fraud detection
                alt="Fraud Detection AI"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudDetection;