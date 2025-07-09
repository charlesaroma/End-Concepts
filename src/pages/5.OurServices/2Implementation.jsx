import React from 'react';

const Implementation = () => {
  const features = [
    {
      title: "Custom Development",
      description: "Tailored software development to meet your specific business requirements and workflows."
    },
    {
      title: "System Integration",
      description: "Seamless integration of new systems with existing infrastructure and applications."
    },
    {
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing protocols to ensure reliability and performance standards."
    },
    {
      title: "Training & Documentation",
      description: "User training and comprehensive documentation for smooth adoption and operation."
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
              Implementation Services
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Our implementation services ensure that your technology solutions are deployed efficiently and effectively. We follow industry best practices and proven methodologies to deliver successful implementations that meet your business objectives.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From initial planning to go-live and beyond, our expert team manages every aspect of the implementation process to minimize disruption and maximize value.
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
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" // Implementation/project management
                alt="Implementation Services"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implementation;