import React from 'react'
import { Icon } from '@iconify/react'

// Solutions Data Array
const solutions = [
  { label: 'NETWORK SOLUTIONS', icon: 'mdi:server-network' },
  { label: 'DATA & INNOVATION', icon: 'mdi:database-cog' },
  { label: 'ARTIFICIAL INTELLIGENCE', icon: 'mdi:robot' },
  { label: 'CLOUD SOLUTIONS', icon: 'mdi:cloud-outline' },
  { label: 'MODERNWORK', icon: 'mdi:monitor-dashboard' },
  { label: 'SECUFORTRESS', icon: 'mdi:castle' },
  { label: 'CYBERSECURITY', icon: 'mdi:shield-lock-outline' },
]

const OurSolutions = () => {
  // Duplicate the array for looping effect
  const loopedSolutions = [...solutions, ...solutions]

  return (
    <section className="w-full py-10 bg-[#fdf9f2]">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-[#001d6c]">Our Solutions</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 md:px-0 min-w-max">
          {loopedSolutions.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-[#001d6c] rounded-md px-6 py-5 min-w-[220px] max-w-xs"
              style={{ flex: '0 0 auto' }}
            >
              <Icon icon={item.icon} className="text-3xl text-[#e88936]" />
              <span className="text-white font-bold text-sm md:text-base leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurSolutions
