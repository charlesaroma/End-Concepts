import React from 'react';

const PostMigrationServices = () => {
  const features = [
    {
      title: "Performance Optimization",
      description: "Fine-tuning of migrated systems to ensure optimal performance and efficiency."
    },
    {
      title: "User Training",
      description: "Comprehensive training programs to help users adapt to new systems and workflows."
    },
    {
      title: "Ongoing Support",
      description: "Continued technical support and maintenance to ensure smooth operations post-migration."
    },
    {
      title: "System Monitoring",
      description: "Continuous monitoring and health checks to maintain system reliability and performance."
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
              Post-Migration Services
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Our post-migration services ensure that your newly migrated systems continue to perform optimally and deliver the expected business value. We provide ongoing support, optimization, and monitoring to maximize your technology investment.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From performance tuning to user training, our post-migration services help you fully realize the benefits of your migration project and maintain long-term success.
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
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" // Post-migration/success
                alt="Post-Migration Services"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMigrationServices;