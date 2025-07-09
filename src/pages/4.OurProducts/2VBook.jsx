import React from 'react';

const VBook = () => {
  const features = [
    {
      title: "Digital Documentation",
      description: "Convert paper-based records into secure digital formats for easy access and management."
    },
    {
      title: "Smart Search",
      description: "Advanced search capabilities with OCR technology for quick document retrieval."
    },
    {
      title: "Version Control",
      description: "Track document changes and maintain version history for compliance and audit trails."
    },
    {
      title: "Secure Storage",
      description: "Encrypted storage with role-based access control for document security."
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
              VBook
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                VBook is our comprehensive digital document management solution designed to streamline your organization's document workflows. This powerful platform helps businesses digitize, organize, and manage their documents efficiently while ensuring security and compliance.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From document scanning and OCR to advanced search and collaboration features, VBook transforms how you handle your business documents.
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
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" // Document management
                alt="VBook Document Management"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VBook;