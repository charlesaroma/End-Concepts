import React, { useRef, useState, useEffect, useCallback } from 'react';
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
  const runwayRef = useRef(null);
  const rightContentRef = useRef(null);
  const gridRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleScroll = useCallback(() => {
    const runway = runwayRef.current;
    const grid = gridRef.current;
    const rightContent = rightContentRef.current;

    if (!runway || !grid || !rightContent) {
      return;
    }

    const { top, height } = runway.getBoundingClientRect();
    const runwayScrollableDist = height - window.innerHeight;

    // Before scrolling into the component
    if (top > 0) {
      setTranslateY(0);
      return;
    }
    // After scrolling past the component
    if (top < -runwayScrollableDist) {
      const maxGridScroll = grid.scrollHeight - rightContent.clientHeight;
      setTranslateY(-maxGridScroll);
      return;
    }

    // When the component is active in the viewport
    const progress = -top / runwayScrollableDist;
    const maxGridScroll = grid.scrollHeight - rightContent.clientHeight;

    if (maxGridScroll > 0) {
      const newTranslateY = -progress * maxGridScroll;
      setTranslateY(newTranslateY);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll, isMobile]);

  if (isMobile) {
    return (
      <section className="w-full py-16 bg-[#fdf9f2]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 px-4">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-[#001d6c] mb-4">Our Services</h2>
            <p className="text-[#001d6c] mb-8">
              Computer Revolution Africa Group provides end-to-end IT services, including consultancy, managed IT,
              cybersecurity, cloud, and infrastructure solutions, empowering businesses to enhance efficiency,
              security, and competitiveness in the digital age.
            </p>
            <Link
              to="/services/implementation"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#001d6c] text-white font-medium shadow-lg hover:bg-[#163a8a] transition w-max"
            >
              See all our Services
              <span className="p-2 bg-gray-500/50 rounded-full">
                <Icon icon="mdi:arrow-right" className="text-xl" />
              </span>
            </Link>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col gap-2 bg-white rounded-lg p-6 shadow-sm min-w-[300px]">
                <Icon icon={service.icon} className="text-3xl text-[#e88936] mb-2" />
                <h3 className="text-lg font-semibold text-[#001d6c]">{service.title}</h3>
                <p className="text-[#001d6c] text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={runwayRef} className="relative w-full h-[250vh] bg-[#fdf9f2]">
      <div className="sticky top-0 h-screen w-full flex items-center">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-10 px-4 md:px-8 h-[75vh]">
          {/* Left Content */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-4">Our Services</h2>
            <p className="text-[#001d6c] mb-8">
              Computer Revolution Africa Group provides end-to-end IT services, including consultancy, managed IT,
              cybersecurity, cloud, and infrastructure solutions, empowering businesses to enhance efficiency,
              security, and competitiveness in the digital age.
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

          {/* Right Content */}
          <div className="md:w-2/3 h-full flex flex-col justify-center">
            <div ref={rightContentRef} className="flex-grow overflow-hidden">
              <div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                style={{ transform: `translateY(${translateY}px)` }}
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
        </div>
      </div>
    </section>
  );
};

export default HomeService;