import React from 'react';

const Conveyancing = () => {
  const features = [
    {
      title: "Digital Document Management",
      description: "Streamlined digital management of property documents and legal paperwork."
    },
    {
      title: "Automated Workflows",
      description: "Automated conveyancing workflows to reduce processing time and human error."
    },
    {
      title: "Compliance Tracking",
      description: "Built-in compliance tracking for property law requirements and regulations."
    },
    {
      title: "Client Portal",
      description: "Secure client portal for real-time updates and document sharing."
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
              Conveyancing
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Conveyancing is our specialized legal technology solution designed to streamline the property transfer process. This comprehensive platform digitizes and automates the complex legal procedures involved in property transactions, making the process more efficient and transparent.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From document preparation to final settlement, our conveyancing solution ensures compliance, reduces processing time, and provides a seamless experience for legal professionals and their clients.
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
                src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80"
                alt="Conveyancing Legal Tech"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conveyancing;