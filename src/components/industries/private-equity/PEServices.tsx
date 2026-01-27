'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BarChart3, Building, Cog, DollarSign, LineChart, Users2 } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: BarChart3,
    title: 'Commercial Due Diligence',
    description: 'Deep-dive market analysis, competitive positioning assessment, and growth opportunity validation to support informed investment decisions.',
    link: '/services/strategy',
  },
  {
    icon: LineChart,
    title: 'Value Creation Planning',
    description: 'Comprehensive value creation roadmaps that identify and prioritize initiatives across revenue growth, cost optimization, and working capital.',
    link: '/services/strategy',
  },
  {
    icon: Cog,
    title: 'Operational Improvement',
    description: 'Hands-on operational transformation programs that drive measurable improvements in efficiency, quality, and customer satisfaction.',
    link: '/services/operations',
  },
  {
    icon: Building,
    title: 'Carve-Out & Integration',
    description: 'End-to-end support for complex transactions including separation planning, TSA management, and post-merger integration.',
    link: '/services/mergers-acquisitions',
  },
  {
    icon: Users2,
    title: 'Management Assessment',
    description: 'Objective evaluation of management teams and organizational capabilities to identify leadership needs and development opportunities.',
    link: '/services/strategy',
  },
  {
    icon: DollarSign,
    title: 'Exit Preparation',
    description: 'Strategic positioning, equity story development, and operational preparation to maximize exit value and transaction certainty.',
    link: '/services/strategy',
  },
]

export function PEServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="section-padding bg-dark-50" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            Specialized capabilities for PE success
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            Purpose-built solutions designed to address the unique challenges and opportunities
            in private equity investing.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.link}
                className="group block h-full p-8 rounded-2xl bg-white border border-dark-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-dark-900 flex items-center justify-center text-white group-hover:bg-primary-600 transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-dark-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
