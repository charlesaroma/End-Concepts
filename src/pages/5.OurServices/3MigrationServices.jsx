import React from 'react';

const MigrationServices = () => {
  const features = [
    {
      title: "Data Migration",
      description: "Secure and efficient migration of data from legacy systems to modern platforms."
    },
    {
      title: "Application Migration",
      description: "Seamless migration of applications to cloud or modern infrastructure environments."
    },
    {
      title: "Infrastructure Migration",
      description: "Complete infrastructure migration with minimal downtime and business disruption."
    },
    {
      title: "Post-Migration Support",
      description: "Ongoing support and optimization after migration to ensure optimal performance."
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
              Migration Services
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Our migration services help organizations transition smoothly from legacy systems to modern, scalable solutions. We ensure that your critical data and applications are migrated securely with minimal disruption to your business operations.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                Whether you're moving to the cloud, upgrading systems, or consolidating platforms, our expert team provides comprehensive migration planning and execution services.
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
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Migration Services"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MigrationServices;