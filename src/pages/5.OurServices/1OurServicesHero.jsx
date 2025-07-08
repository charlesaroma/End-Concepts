import React from 'react';

const OurServicesHero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#001d6c] to-[#003a9c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-200 leading-relaxed">
                We provide comprehensive IT services designed to transform your business operations and drive digital innovation. Our expert team delivers tailored solutions that align with your strategic objectives.
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                From implementation and migration to ongoing support and advisory services, we ensure your technology investments deliver maximum value and competitive advantage.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-gray-200">Seamless deployment of technology solutions tailored to your business needs.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Migration</h3>
                <p className="text-gray-200">Smooth transition to modern platforms with minimal disruption to operations.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-200">24/7 technical support and maintenance to ensure optimal performance.</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
                alt="Our Services"
                className="w-96 h-80 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesHero;