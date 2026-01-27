'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const caseStudies = [
  {
    industry: 'Industrial Services',
    title: 'Transforming a platform company into a market leader',
    metrics: [
      { value: '45%', label: 'Revenue Growth' },
      { value: '800bps', label: 'Margin Expansion' },
      { value: '3.2x', label: 'Exit Multiple' },
    ],
    description: 'Supported a PE-backed industrial services platform through organic growth acceleration and strategic M&A, culminating in a successful exit to a strategic buyer.',
  },
  {
    industry: 'Healthcare Services',
    title: 'Operational turnaround of multi-site healthcare provider',
    metrics: [
      { value: '$15M', label: 'Annual Savings' },
      { value: '25%', label: 'Productivity Gain' },
      { value: '18mo', label: 'Payback Period' },
    ],
    description: 'Implemented comprehensive operational improvement program across 50+ locations, driving significant cost savings while improving patient outcomes.',
  },
  {
    industry: 'Software',
    title: 'Accelerating growth in B2B SaaS portfolio company',
    metrics: [
      { value: '85%', label: 'ARR Growth' },
      { value: '140%', label: 'NRR Improvement' },
      { value: '<12mo', label: 'CAC Payback' },
    ],
    description: 'Redesigned go-to-market strategy and customer success function to accelerate growth and improve unit economics ahead of Series C funding.',
  },
]

const testimonial = {
  quote: "StratLogik brings a rare combination of strategic thinking and operational execution. They've become an essential partner in our value creation efforts across the portfolio.",
  author: 'Managing Director',
  firm: 'Leading Middle-Market PE Firm',
}

export function PEResults() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Results
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            Proven track record of value creation
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            We measure our success by the tangible results we deliver for our clients.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-dark-50 hover:bg-dark-900 transition-colors duration-500">
                <span className="text-sm font-medium text-primary-600 group-hover:text-primary-400 transition-colors">
                  {study.industry}
                </span>
                <h3 className="mt-3 text-xl font-bold text-dark-900 group-hover:text-white transition-colors">
                  {study.title}
                </h3>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold text-primary-600 group-hover:text-primary-400 transition-colors">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-xs text-dark-500 group-hover:text-dark-400 transition-colors">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm text-dark-500 group-hover:text-dark-300 transition-colors leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-dark-900 to-dark-800 p-12 lg:p-16">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary-600/20" />
            <div className="relative max-w-3xl mx-auto text-center">
              <p className="text-2xl lg:text-3xl font-medium text-white leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-dark-400">{testimonial.firm}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
