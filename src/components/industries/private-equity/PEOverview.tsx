'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, TrendingUp, Users, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Target,
    title: 'Deal Sourcing & Diligence',
    description: 'Rigorous commercial due diligence and market analysis to validate investment theses.',
  },
  {
    icon: TrendingUp,
    title: 'Value Creation',
    description: 'Comprehensive playbooks to accelerate growth and improve operational performance.',
  },
  {
    icon: Users,
    title: 'Portfolio Support',
    description: 'Hands-on partnership with management teams to execute strategic initiatives.',
  },
  {
    icon: Zap,
    title: 'Exit Optimization',
    description: 'Strategic positioning and preparation to maximize exit multiples.',
  },
]

export function PEOverview() {
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
              Why StratLogik
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900 leading-tight">
              Your partner in private equity excellence
            </h2>
            <p className="mt-6 text-lg text-dark-500 leading-relaxed">
              In today&apos;s competitive landscape, successful private equity investing requires
              more than financial engineering. It demands operational expertise, strategic vision,
              and the ability to drive meaningful transformation.
            </p>
            <p className="mt-4 text-lg text-dark-500 leading-relaxed">
              We bring deep sector knowledge, proven methodologies, and hands-on experience
              to help PE firms and their portfolio companies outperform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-50 hover:bg-dark-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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
