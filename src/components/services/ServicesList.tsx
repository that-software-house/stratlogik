'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Cpu, Building2, Cog, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: TrendingUp,
    title: 'Strategy Consulting',
    slug: 'strategy',
    description: 'We help organizations define winning strategies that drive sustainable growth and competitive advantage.',
    capabilities: [
      'Corporate strategy & portfolio optimization',
      'Growth strategy & market entry',
      'Competitive positioning & differentiation',
      'Strategic planning & execution',
      'Business model innovation',
    ],
  },
  {
    icon: Cpu,
    title: 'Digital Transformation',
    slug: 'digital',
    description: 'We guide organizations through digital transformation, leveraging technology to create new value and capabilities.',
    capabilities: [
      'Digital strategy & roadmap development',
      'Technology modernization',
      'Data & analytics strategy',
      'AI & automation implementation',
      'Digital operating model design',
    ],
  },
  {
    icon: Building2,
    title: 'M&A Advisory',
    slug: 'mergers-acquisitions',
    description: 'We support clients throughout the deal lifecycle, from strategy through integration and value capture.',
    capabilities: [
      'M&A strategy & target screening',
      'Due diligence & valuation',
      'Integration planning & execution',
      'Synergy identification & capture',
      'Carve-out & separation',
    ],
  },
  {
    icon: Cog,
    title: 'Operations Excellence',
    slug: 'operations',
    description: 'We help organizations optimize operations to improve efficiency, reduce costs, and enhance customer experience.',
    capabilities: [
      'Supply chain optimization',
      'Operational efficiency & cost reduction',
      'Process redesign & automation',
      'Quality & performance improvement',
      'Organizational effectiveness',
    ],
  },
]

export function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`grid gap-12 lg:grid-cols-2 lg:gap-20 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-dark-900 lg:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-dark-500">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className={`rounded-2xl bg-dark-50 p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="font-semibold text-dark-900">Key Capabilities</h3>
                <ul className="mt-6 space-y-4">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                      <span className="text-dark-600">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
