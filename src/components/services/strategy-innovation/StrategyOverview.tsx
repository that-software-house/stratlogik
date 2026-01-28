'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

const differentiation = [
  {
    traditional: 'Deliver recommendations and disappear',
    stratlogik: 'Build execution pathways into every recommendation',
  },
  {
    traditional: 'Generic frameworks applied to your business',
    stratlogik: 'Custom strategies rooted in your operational reality',
  },
  {
    traditional: 'Strategy decks that collect dust',
    stratlogik: 'Living roadmaps with clear owners and metrics',
  },
  {
    traditional: 'Separate strategy and execution teams',
    stratlogik: 'Integrated approach from vision to results',
  },
]

export function StrategyOverview() {
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
              Strategy without execution is just noise
            </h2>
            <p className="mt-6 text-lg text-dark-500 leading-relaxed">
              Too many firms deliver recommendations and disappear. At StratLogik, we craft
              strategies with real operational pathways and built-in execution support.
            </p>
            <p className="mt-4 text-lg text-dark-500 leading-relaxed">
              Whether you&apos;re expanding into new markets, launching products, or reinventing
              business models, we reduce ambiguity and drive measurable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {differentiation.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-dark-600">{item.traditional}</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-dark-900 font-medium">{item.stratlogik}</span>
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
