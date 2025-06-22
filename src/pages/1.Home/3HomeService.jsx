import React, { useRef, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'mdi:account-tie',
    title: 'Consultancy Services',
    desc: 'Elevate your business with strategic consultancy that leverages cutting-edge technology and innovation. Our team of expert advisors helps craft tailored plans to maximize business value and ensure seamless digital transformation.',
  },
  {
    icon: 'mdi:account-group',
    title: 'Managed Services',
    desc: 'Our managed services ensure smooth and efficient operations across various IT platforms, maintaining optimal performance and reliability. Ideal for clients with limited technical expertise, we provide continuous support and service optimization.',
  },
  {
    icon: 'mdi:shield-lock-outline',
    title: 'Cybersecurity',
    desc: 'We develop customized cybersecurity strategies that align with your specific business needs, ensuring comprehensive protection. By utilizing advanced technologies and expert consulting, we create robust defenses against evolving cyber threats.',
  },
  {
    icon: 'mdi:server-network',
    title: 'Infrastructure Services',
    desc: 'Our infrastructure services are tailored to meet each clients unique requirements with the latest technologies and strategies. We build and maintain secure, high-performance systems that enhance operational efficiency.',
  },
  {
    icon: 'mdi:clipboard-check-outline',
    title: 'Maintenance and Service Level Agreements (SLAs)',
    desc: 'We provide cost-effective maintenance solutions that keep hardware and software functioning optimally. Our services ensure productive networks, effective communication systems, and continuous user support around the clock.',
  },
  {
    icon: 'mdi:account-cog-outline',
    title: 'Adoption and Change Management',
    desc: 'Facilitating seamless technology deployment through structured training and user adoption strategies. We empower your teams to embrace new systems, ensuring a smooth transition and high user engagement.',
  },
  {
    icon: 'mdi:clipboard-list-outline',
    title: 'Project Management',
    desc: 'Our project management services help clients define clear priorities, manage risks effectively, and implement robust control systems. We ensure that projects are executed efficiently and align with strategic business goals.',
  },
  {
    icon: 'mdi:truck-fast-outline',
    title: 'Deployment and Migration Services',
    desc: 'From implementing new projects to upgrading existing systems, our deployment and migration services are designed to deliver on time, within budget, and to the highest standards.',
  },
];

const HomeService = () => {
  const containerRef = useRef(null);
  const rightContentRef = useRef(null);

  const handleWheel = useCallback(e => {
    const rightContent = rightContentRef.current;
    if (rightContent) {
      const { scrollTop, scrollHeight, clientHeight } = rightContent;
      const scrollAmount = e.deltaY;

      // If we're scrolling up but already at the top, or scrolling down but already at the bottom,
      // let the default page scroll happen.
      if ((scrollAmount < 0 && scrollTop === 0) || (scrollAmount > 0 && scrollTop + clientHeight >= scrollHeight - 1)) {
        return;
      }

      // Otherwise, prevent the page from scrolling and scroll the content on the right.
      e.preventDefault();
      rightContent.scrollTop += scrollAmount;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  return (
    <section className="w-full py-16 bg-[#fdf9f2]">
      {/* This container will capture the scroll wheel events */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 md:px-8 h-[600px] md:h-[700px] relative"
      >
        {/* Left Content - Now truly sticky within its parent 'h-screen' or 'h-[600px]' */}
        <div className="md:w-1/3 flex flex-col sticky top-16 md:top-20 h-full"> {/* Adjust top value as needed for header */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-4">Our Services</h2>
          <p className="text-[#001d6c] mb-8">
            Computer Revolution Africa Group provides end-to-end IT services, including consultancy, managed IT,
            cybersecurity, cloud, and infrastructure solutions, empowering businesses to enhance efficiency, security,
            and competitiveness in the digital age.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#001d6c] text-white font-medium shadow-lg hover:bg-[#163a8a] transition w-max"
          >
            See all our Services
            <span className="p-2 bg-gray-500/50 rounded-full">
              <Icon icon="mdi:arrow-right" className="text-xl" />
            </span>
          </Link>
        </div>

        {/* Right Content - This section is now the primary scrollable area for services */}
        <div className="md:w-2/3 h-full flex flex-col">
          <div
            ref={rightContentRef}
            // Added classes to hide scrollbar
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow overflow-y-scroll pr-2 overscroll-y-contain
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col gap-2 bg-white rounded-lg p-6 shadow-sm min-w-[300px]">
                <Icon icon={service.icon} className="text-3xl text-[#e88936] mb-2" />
                <h3 className="text-lg font-semibold text-[#001d6c]">{service.title}</h3>
                <p className="text-[#001d6c] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeService;