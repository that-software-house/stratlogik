'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, HeartPulse, Shield, TrendingDown } from 'lucide-react'

const challenges = [
  {
    icon: TrendingDown,
    title: 'Cost Pressures',
    description: 'Rising costs and reimbursement pressures demand operational excellence and innovative care models.',
  },
  {
    icon: Brain,
    title: 'Digital Disruption',
    description: 'AI, analytics, and digital health are reshaping how care is delivered and experienced.',
  },
  {
    icon: Shield,
    title: 'Regulatory Change',
    description: 'Evolving regulations require agility and proactive compliance strategies.',
  },
  {
    icon: HeartPulse,
    title: 'Patient Expectations',
    description: 'Consumers demand seamless, personalized experiences across the care journey.',
  },
]

export function HealthcareOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Industry Expertise
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900 leading-tight">
              Cross-disciplinary expertise spanning the healthcare value chain
            </h2>
            <p className="mt-6 text-lg text-dark-500 leading-relaxed">
              Healthcare is at an inflection point. Cost pressures, technological disruption,
              and changing consumer expectations are forcing organizations to fundamentally
              rethink how they operate and compete.
            </p>
            <p className="mt-4 text-lg text-dark-500 leading-relaxed">
              We bring deep sector expertise and proven methodologies to help healthcare
              organizations navigate this transformation—improving performance while
              advancing patient outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {challenges.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:shadow-lg hover:shadow-primary-900/5 transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold text-dark-900">{item.title}</h3>
                <p className="mt-2 text-sm text-dark-500">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
