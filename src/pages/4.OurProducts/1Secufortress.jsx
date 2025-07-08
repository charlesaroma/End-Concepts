import React from 'react';

const Secufortress = () => {
  const features = [
    {
      title: "Advanced Threat Detection",
      description: "Real-time monitoring and detection of cyber threats using AI-powered algorithms."
    },
    {
      title: "Multi-Layer Security",
      description: "Comprehensive security layers including firewall, antivirus, and intrusion prevention."
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance features for GDPR, HIPAA, and other regulatory requirements."
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous security monitoring with automated alerts and incident response."
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
              Secufortress
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Secufortress is our flagship cybersecurity solution designed to protect your business from evolving cyber threats. This comprehensive security platform combines advanced threat detection, real-time monitoring, and automated response capabilities to ensure your digital assets remain secure.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                With Secufortress, you get enterprise-grade security that's easy to deploy and manage, providing peace of mind for your organization's digital infrastructure.
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
                alt="Secufortress Security"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secufortress;