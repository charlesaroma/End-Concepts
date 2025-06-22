import React from "react";

const stats = [
  { value: "1,000+", label: "Projects Completed" },
  { value: "100+", label: "Customers Served" },
  { value: "38+", label: "Awards Won" },
];

const OurNumbers = () => {
  return (
    <div className="relative bg-[#001d6c] text-white min-h-[75vh] flex items-center py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Numbers
          </h2>
          <p className="mt-6 text-md leading-tight font-semibold text-gray-300">
            Our work is celebrated by clients and the industry alike, reflected
            in both our accolades and performance metrics—award-winning designs,
            increased brand visibility, and exceptional client growth.
          </p>
          <div className="mt-10 flex justify-center lg:justify-start gap-x-8 gap-y-10 flex-wrap">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start"
              >
                <dd className="text-5xl font-bold tracking-tight text-[#e88936]">
                  {stat.value}
                </dd>
                <dt className="text-base font-semibold leading-7 text-gray-300">
                  {stat.label}
                </dt>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative h-80 sm:h-96 lg:h-[500px] w-full">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/8353796/pexels-photo-8353796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="A smiling woman in a server room, indicating professional tech services."
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
