import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!slider) return;

      const firstChild = slider.children[0];
      const childWidth = firstChild.offsetWidth + 24; // 24 = gap-6

      scrollAmount += childWidth;

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
        slider.scrollTo({ left: 0 });
      } else {
        slider.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const loopedSolutions = [...solutions, ...solutions];

  return (
    <section className="w-full py-10 overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 text-[#001d6c]">
        Our Solutions
      </h2>
      <div className="max-w-screen-xl mx-auto overflow-hidden px-4">
        <div
          ref={sliderRef}
          className="flex gap-6 w-max overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {loopedSolutions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-[#001d6c] rounded-md px-5 py-4 min-w-[200px] cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ flex: '0 0 auto' }}
            >
              <Icon icon={item.icon} className="text-2xl text-[#e88936]" />
              <span className="text-white font-normal text-sm md:text-sm leading-tight whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
