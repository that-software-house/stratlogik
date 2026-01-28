'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Gauge, Brain, TrendingUp, Layers, Users, Quote } from 'lucide-react'

const metrics = [
  { label: 'Operational Efficiency', value: 40, suffix: '%', prefix: '+', icon: Gauge, description: 'Average efficiency gains' },
  { label: 'Faster Decisions', value: 3, suffix: 'x', prefix: '', icon: Brain, description: 'Speed improvement' },
  { label: 'Cost Reduction', value: 30, suffix: '%', prefix: '', icon: TrendingUp, description: 'Infrastructure savings' },
  { label: 'Technical Debt', value: 60, suffix: '%', prefix: '-', icon: Layers, description: 'Legacy reduction' },
]

const outcomes = [
  'Increased operational efficiency and accelerated workflows',
  'Data-driven decision-making and real-time intelligence',
  'AI insights that unlock new revenue streams',
  'Scalable systems that reduce technical debt',
  'Enhanced customer and employee experiences',
]

const testimonial = {
  quote: "With StratLogik's digital transformation strategy and AI roadmap, we reduced process bottlenecks and improved forecasting accuracy — driving faster decisions and higher customer satisfaction.",
  author: 'Chief Technology Officer',
  company: 'Enterprise Manufacturing Company',
}

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export function DigitalOutcomes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-900 overflow-hidden" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Outcomes
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Measurable impact that matters
          </h2>
        </motion.div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 rounded-2xl bg-dark-800/50 border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-400 mb-4">
                    <metric.icon className="w-5 h-5" />
                  </div>

                  {/* Value */}
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} prefix={metric.prefix} />
                  </div>

                  <div className="text-sm font-medium text-dark-300">{metric.label}</div>
                  <div className="text-xs text-dark-500 mt-1">{metric.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Outcomes List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl bg-dark-800/50 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">What You&apos;ll Achieve</h3>
            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <motion.li
                  key={outcome}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-300">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 overflow-hidden"
          >
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            <div className="relative">
              <Quote className="w-12 h-12 text-white/20 mb-4" />
              <p className="text-xl text-white leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-white/70 text-sm">{testimonial.company}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Who This Is For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Built for organizations ready for next-generation growth</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Enterprises modernizing legacy systems',
              'Companies adopting AI beyond pilots',
              'Teams seeking intelligent automation',
              'Leadership seeking measurable digital ROI',
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
