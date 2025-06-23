import React from 'react';
import { Icon } from '@iconify/react';

const values = [
  {
    icon: 'mdi:shield-check',
    title: 'Security',
    desc: 'We prioritize the safety and integrity of your data and systems, ensuring robust protection at every layer.'
  },
  {
    icon: 'mdi:lightbulb-on-outline',
    title: 'Innovation',
    desc: 'We embrace the latest technologies and creative thinking to deliver future-ready solutions.'
  },
  {
    icon: 'mdi:account-group',
    title: 'Collaboration',
    desc: 'We work closely with our clients and partners to achieve shared success and lasting impact.'
  },
  {
    icon: 'mdi:handshake-outline',
    title: 'Integrity',
    desc: 'We act with honesty, transparency, and respect in every interaction and decision.'
  },
  {
    icon: 'mdi:star-outline',
    title: 'Excellence',
    desc: 'We are committed to delivering the highest quality in everything we do.'
  },
];

const OurValues = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-16 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#001d6c] mb-8">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, idx) => (
          <div key={idx} className="flex flex-col items-start bg-white rounded-xl shadow p-6 h-full">
            <Icon icon={value.icon} className="text-3xl text-[#e88936] mb-4" />
            <h3 className="text-xl font-semibold text-[#001d6c] mb-2">{value.title}</h3>
            <p className="text-gray-700 leading-snug font-medium text-base">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;