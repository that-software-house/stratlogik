'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Database, Globe, Heart } from 'lucide-react'

const capabilities = [
  {
    icon: Zap,
    title: 'Sales Enablement & Operations',
    description: 'Equip your sales teams with the tools, processes, and systems to close deals faster.',
    services: [
      'Sales process design & optimization',
      'Sales enablement content & playbooks',
      'CRM strategy & tool implementation',
      'Funnel conversion analysis',
    ],
  },
  {
    icon: Database,
    title: 'CRM Strategy & Optimization',
    description: 'Transform your customer relationship data into action and insights.',
    services: [
      'CRM audit & roadmap',
      'GTM data integration',
      'Automated lead routing & workflow configuration',
      'Reporting & performance dashboards',
    ],
  },
  {
    icon: Globe,
    title: 'Omnichannel Marketing',
    description: 'Reach your audience where they engage most with integrated campaigns.',
    services: [
      'Integrated campaign strategy',
      'Digital advertising & audience targeting',
      'Content strategy & SEO support',
      'Analytics and marketing performance measurement',
    ],
  },
  {
    icon: Heart,
    title: 'Customer Experience & Success',
    description: 'Keep customers longer and expand lifetime value through exceptional experiences.',
    services: [
      'Customer journey mapping',
      'Churn prevention strategies',
      'Success metrics & KPIs',
      'Post-sale support optimization',
    ],
  },
]

export function SalesCapabilities() {
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
            Our capabilities in sales, marketing & customer success
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            End-to-end revenue operations support designed to align your growth functions and accelerate results.
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
