'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Users, Target, Shield } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We challenge conventional thinking and bring fresh perspectives to every engagement.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work alongside our clients as true partners, invested in their success.',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'We measure ourselves by the tangible outcomes we deliver for our clients.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in everything we do.',
  },
]

export function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Our Values
          </span>
          <h2 className="mt-4 heading-lg text-dark-900">
            Principles that guide our work
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-dark-900">{value.title}</h3>
              <p className="mt-3 text-dark-500">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
