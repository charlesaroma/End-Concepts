import React from 'react';

const SecurityServices = () => {
  const features = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments to identify potential risks."
    },
    {
      title: "Security Implementation",
      description: "Implementation of security solutions and best practices to protect your infrastructure."
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery services for security incidents and cyber threats."
    },
    {
      title: "Security Training",
      description: "Employee security awareness training and best practices education programs."
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
              Security Services
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Our security services help organizations protect their digital assets and maintain compliance with industry regulations. We provide comprehensive security solutions that address both current threats and emerging risks.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From security assessments to incident response, our expert team ensures that your organization is well-protected against cyber threats and maintains a strong security posture.
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
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80"
                alt="Security Services"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityServices;