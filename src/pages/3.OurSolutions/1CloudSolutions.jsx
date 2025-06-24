import React from 'react';

const CloudSolutions = () => {
  const cloudServices = [
    {
      title: "Infrastructure as a Service (IaaS)",
      description: "Access to storage, networking, and virtualization"
    },
    {
      title: "Platform as a Service (PaaS)",
      description: "Environment for cloud application development and deployment"
    },
    {
      title: "Software as a Service (SaaS)",
      description: "Management of application software including underlying infrastructure and security"
    }
  ];

  const cloudBenefits = [
    {
      title: "Scalability and Flexibility",
      description: "Cloud computing allows for quick upscaling or downscaling based on the client's needs without the included cost of physical infrastructure."
    },
    {
      title: "Cost Saving",
      description: "Cloud computing eliminates the cost associated with purchasing and maintaining physical infrastructure."
    },
    {
      title: "Advanced Security",
      description: "Advanced user access controls are easier to implement in cloud computing. It also eliminates the security risk associated with access to physical resources."
    },
    {
      title: "Data Loss Prevention",
      description: "Cloud computing allows for easier data backup and recovery and prevents data loss associated with the destruction of physical infrastructure."
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Main Cloud Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-6">
              Cloud Solutions
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                Cloud computing allows businesses to manage their computer systems without the hassle of maintaining their own physical server. Businesses are moving towards cloud services, which offer quicker access, security, and scalability. This allows businesses to manage their IT resources without needing a dedicated IT team or paying high upfront costs for hardware components. Our cloud solutions center around Amazon Web Services (AWS) and Microsoft Azure, which offer several solutions tailored to your specific needs.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                You can choose public, private, or hybrid cloud deployments and the service model based on the level of flexibility, control, and management you need.
              </p>
            </div>

            {/* Cloud Services List */}
            <div className="space-y-4">
              {cloudServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#001d6c] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative">
              {/* Cloud computing image from Unsplash */}
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                alt="Cloud Computing"
                className="w-80 h-80 object-cover rounded-full shadow-lg"
              />
              {/* Floating elements to mimic the design */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-blue-500 font-bold text-xs">AWS</div>
              </div>
              <div className="absolute bottom-8 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-blue-500 font-bold text-xs">Azure</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits of Cloud Section */}
      <div className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-8 text-center">
            Benefits of Cloud
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {cloudBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-[#001d6c] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#001d6c] mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-4 mb-2">
                {/* Reliability Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#f59e42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="5" stroke="#f59e42" strokeWidth="2"/></svg>
              </div>
              <span className="font-semibold text-sm mt-1">Reliability</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-2">
                {/* Security Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2" stroke="#3b82f6" strokeWidth="2"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="#3b82f6" strokeWidth="2"/></svg>
              </div>
              <span className="font-semibold text-sm mt-1">Security</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-2">
                {/* Scalability Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2" stroke="#3b82f6" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="2" stroke="#3b82f6" strokeWidth="2"/><path d="M7 10v4a2 2 0 002 2h4" stroke="#3b82f6" strokeWidth="2"/></svg>
              </div>
              <span className="font-semibold text-sm mt-1">Scalability</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 rounded-full p-4 mb-2">
                {/* Expert Support Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#f59e42" strokeWidth="2"/><path d="M7 10h.01M12 10h.01M17 10h.01M7 15h10" stroke="#f59e42" strokeWidth="2"/></svg>
              </div>
              <span className="font-semibold text-sm mt-1">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudSolutions;