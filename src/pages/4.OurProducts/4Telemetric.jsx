import React from 'react';

const Telemetric = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of vehicle and equipment performance with real-time data collection."
    },
    {
      title: "GPS Tracking",
      description: "Advanced GPS tracking capabilities for fleet management and route optimization."
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered predictive maintenance alerts to prevent equipment failures and reduce downtime."
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics dashboard for performance insights and operational optimization."
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
              Telemetric
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Telemetric is our advanced IoT and telematics solution designed to provide real-time monitoring and analytics for vehicles, equipment, and industrial assets. This comprehensive platform helps businesses optimize operations, reduce costs, and improve safety through intelligent data collection and analysis.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From fleet management to predictive maintenance, Telemetric delivers actionable insights that drive operational efficiency and business growth.
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
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" // IoT/telematics
                alt="Telemetric IoT Platform"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemetric;