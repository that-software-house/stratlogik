'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass, Lightbulb, Rocket, Map } from 'lucide-react'

const capabilities = [
  {
    icon: Compass,
    title: 'Strategic Planning & Vision',
    description: 'We work with leadership to set direction that aligns ambition with operational reality.',
    services: [
      'Market opportunity assessments',
      'Competitive analysis',
      'Visioning & strategic roadmaps',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Product & Service Innovation',
    description: 'Turn bold ideas into viable offerings that capture market opportunity.',
    services: [
      'New product/service definition',
      'Innovation workshop facilitation',
      'Minimum viable product (MVP) strategy',
    ],
  },
  {
    icon: Rocket,
    title: 'Go-to-Market Strategy',
    description: 'Launch with velocity and visibility, ensuring market traction from day one.',
    services: [
      'Value proposition development',
      'Channel & pricing strategy',
      'Launch planning & measurement frameworks',
    ],
  },
  {
    icon: Map,
    title: 'Strategic Execution Roadmaps',
    description: 'Bridge the gap between strategy and outcomes with actionable plans.',
    services: [
      'Implementation sequencing',
      'Performance metrics & OKRs',
      'Cross-functional alignment sessions',
    ],
  },
]

export function StrategyCapabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-50" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            Our strategic capabilities
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            Comprehensive strategy services designed to move your business forward with clarity and confidence.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-dark-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-dark-900 flex items-center justify-center text-white group-hover:bg-primary-600 transition-colors">
                <capability.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                {capability.title}
              </h3>
              <p className="mt-3 text-dark-500 leading-relaxed">
                {capability.description}
              </p>
              <ul className="mt-6 space-y-3">
                {capability.services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-sm text-dark-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
