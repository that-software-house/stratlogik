'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Cpu, DollarSign, GitMerge, LineChart, Rocket, Users } from 'lucide-react'

const services = [
  {
    icon: LineChart,
    title: 'Performance Improvement',
    description: 'Comprehensive operational transformation to reduce costs, improve quality, and enhance the patient experience.',
  },
  {
    icon: Cpu,
    title: 'Digital & AI Transformation',
    description: 'Unlock AI\'s full potential across the value chain—from drug discovery to patient engagement to back-office automation.',
  },
  {
    icon: Rocket,
    title: 'Go-to-Market Strategy',
    description: 'Launch excellence and commercial optimization to maximize market access and drive adoption.',
  },
  {
    icon: GitMerge,
    title: 'M&A and Integration',
    description: 'End-to-end transaction support from strategy through integration to capture synergies and accelerate value.',
  },
  {
    icon: Users,
    title: 'Organization & Change',
    description: 'Operating model design and change management to build agile, high-performing organizations.',
  },
  {
    icon: DollarSign,
    title: 'Value-Based Care',
    description: 'Strategy and enablement for success in risk-based arrangements and alternative payment models.',
  },
]

export function HealthcareServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            How We Help
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            Solutions for healthcare&apos;s toughest challenges
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            We combine deep industry expertise with functional excellence to help
            healthcare organizations win consistently in competitive markets.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8 rounded-2xl bg-dark-50 group-hover:bg-transparent transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-lg shadow-primary-900/10 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-dark-900 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-dark-500 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
