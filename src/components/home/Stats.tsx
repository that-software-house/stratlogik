'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '500+', label: 'Clients Served', suffix: '' },
  { value: '95', label: 'Client Satisfaction', suffix: '%' },
  { value: '2.5', label: 'Avg. Value Creation', suffix: 'x' },
  { value: '15', label: 'Years of Excellence', suffix: '+' },
]

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative -mt-20 z-20">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white p-8 shadow-2xl shadow-dark-900/10 ring-1 ring-dark-900/5 lg:p-12"
        >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-dark-900 lg:text-5xl">
                  {stat.value}
                  <span className="text-primary-600">{stat.suffix}</span>
                </div>
                <div className="mt-2 text-sm font-medium text-dark-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
