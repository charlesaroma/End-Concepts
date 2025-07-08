import React from 'react';

const AdvisoryServices = () => {
  const features = [
    {
      title: "Technology Strategy",
      description: "Strategic technology planning and roadmap development aligned with business objectives."
    },
    {
      title: "Digital Transformation",
      description: "Guidance on digital transformation initiatives and technology adoption strategies."
    },
    {
      title: "Technology Assessment",
      description: "Comprehensive assessment of current technology infrastructure and recommendations for improvement."
    },
    {
      title: "Vendor Selection",
      description: "Expert guidance in selecting the right technology vendors and solutions for your business."
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
              Advisory Services
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Our advisory services provide strategic guidance to help organizations make informed technology decisions. We work closely with your leadership team to understand your business objectives and develop technology strategies that drive growth and innovation.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From technology roadmaps to digital transformation initiatives, our expert consultants help you navigate complex technology decisions and maximize your technology investments.
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
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
                alt="Advisory Services"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryServices;