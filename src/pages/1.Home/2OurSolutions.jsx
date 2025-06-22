import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';

const solutions = [
  { label: 'NETWORK SOLUTIONS', icon: 'mdi:server-network' },
  { label: 'DATA & INNOVATION', icon: 'mdi:database-cog' },
  { label: 'ARTIFICIAL INTELLIGENCE', icon: 'mdi:robot' },
  { label: 'CLOUD SOLUTIONS', icon: 'mdi:cloud-outline' },
  { label: 'MODERNWORK', icon: 'mdi:monitor-dashboard' },
  { label: 'SECUFORTRESS', icon: 'mdi:castle' },
  { label: 'CYBERSECURITY', icon: 'mdi:shield-lock-outline' },
];

const OurSolutions = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move to next slide, reset to 0 when we reach the end of original solutions
        return (prevIndex + 1) % solutions.length;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  // Create multiple copies for seamless loop
  const loopedSolutions = [...solutions, ...solutions, ...solutions];

  const getTranslateValue = () => {
    const slider = sliderRef.current;
    if (!slider || !slider.children[0]) return 0;
    
    const itemWidth = slider.children[0].offsetWidth + 16; // 16 for gap-4
    return -(currentIndex * itemWidth);
  };

  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-[#001d6c]">
          Our Solutions
        </h2>
        
        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ 
              transform: `translateX(${getTranslateValue()}px)`,
              width: 'max-content' 
            }}
          >
            {loopedSolutions.map((item, idx) => (
              <div
                key={`${item.label}-${idx}`}
                className="flex items-center gap-2 bg-[#001d6c] rounded-lg px-3 py-3 
                           w-[140px] sm:w-[160px] md:w-[180px] 
                           cursor-pointer hover:scale-105 hover:bg-[#002080] 
                           transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon 
                  icon={item.icon} 
                  className="text-2xl sm:text-3xl md:text-4xl text-[#e88936] flex-shrink-0" 
                />
                <span className="text-white font-medium text-[10px] sm:text-xs 
                               leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {solutions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
                idx === currentIndex ? 'bg-[#001d6c]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default OurSolutions;