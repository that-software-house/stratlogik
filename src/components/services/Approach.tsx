'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves in your business to understand your unique challenges, opportunities, and strategic context.',
  },
  {
    number: '02',
    title: 'Analyze',
    description: 'We apply rigorous analytical frameworks and industry expertise to develop data-driven insights.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We collaborate with your team to design tailored solutions that address your specific needs.',
  },
  {
    number: '04',
    title: 'Implement',
    description: 'We work alongside you to execute the strategy and ensure sustainable results.',
  },
]

export function Approach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Our Approach
          </span>
          <h2 className="mt-4 heading-lg text-white">
            A proven methodology for lasting impact
          </h2>
          <p className="mt-4 text-lg text-dark-300">
            Our structured approach ensures we deliver measurable results while building capabilities that endure.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary-600/50 to-transparent hidden lg:block" />
              )}
              <div className="text-5xl font-bold text-primary-600/20">{step.number}</div>
              <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-dark-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
