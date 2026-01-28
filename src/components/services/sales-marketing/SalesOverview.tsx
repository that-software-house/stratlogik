'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Layers } from 'lucide-react'

const siloProblems = [
  {
    area: 'Sales',
    problem: 'Chasing leads without marketing alignment',
    impact: 'Wasted effort on unqualified prospects',
  },
  {
    area: 'Marketing',
    problem: 'Generating MQLs that sales ignores',
    impact: 'Budget spent on low-conversion campaigns',
  },
  {
    area: 'Customer Success',
    problem: 'Reacting to churn instead of preventing it',
    impact: 'Revenue leakage and poor retention',
  },
]

export function SalesOverview() {
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
              Why This Matters
            </span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900 leading-tight">
              Growth requires more than tactics
            </h2>
            <p className="mt-6 text-lg text-dark-500 leading-relaxed">
              Most companies tackle sales, marketing, and customer success in isolation.
              That&apos;s a mistake. At StratLogik, we unify these core growth functions so your
              revenue engine operates as one connected system.
            </p>
            <p className="mt-4 text-lg text-dark-500 leading-relaxed">
              Whether you&apos;re launching a new product, scaling sales operations, or reducing
              churn, we build strategies that turn prospects into loyal customers and revenue
              into predictable growth.
            </p>

            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-primary-50 border border-primary-100">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold text-dark-900">Unified Revenue Operations</div>
                <div className="text-sm text-dark-600">One connected system, not three siloed teams</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-6">
              The Cost of Siloed Operations
            </div>
            {siloProblems.map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-dark-50 border border-dark-100 hover:border-primary-200 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-dark-200 text-dark-700 text-xs font-semibold mb-3">
                      {item.area}
                    </span>
                    <h3 className="font-semibold text-dark-900">{item.problem}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
                      <ArrowRight className="w-4 h-4" />
                      {item.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
