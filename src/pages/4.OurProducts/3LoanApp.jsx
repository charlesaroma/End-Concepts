import React from 'react';

const LoanApp = () => {
  const features = [
    {
      title: "Digital Loan Processing",
      description: "Streamlined digital loan application and approval process for faster turnaround times."
    },
    {
      title: "Risk Assessment",
      description: "AI-powered risk assessment algorithms for accurate loan evaluation and decision making."
    },
    {
      title: "Document Management",
      description: "Integrated document upload and verification system for loan applications."
    },
    {
      title: "Payment Tracking",
      description: "Real-time payment tracking and automated reminders for loan repayments."
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
              LoanApp
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-justify leading-relaxed">
                LoanApp is our comprehensive digital lending platform designed to modernize the loan application and management process. This innovative solution combines advanced technology with user-friendly interfaces to deliver a seamless lending experience.
              </p>
              
              <p className="text-gray-700 text-justify leading-relaxed">
                From application submission to loan disbursement and repayment tracking, LoanApp provides end-to-end digital lending solutions for financial institutions and borrowers alike.
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
                alt="LoanApp Digital Lending"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApp;