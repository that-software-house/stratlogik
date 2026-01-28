'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Zap, Eye, LineChart, FileText, Users } from 'lucide-react'

const outcomes = [
  {
    icon: Zap,
    title: 'Faster Decisions',
    description: 'Data-backed decision-making that reduces guesswork and accelerates action.',
  },
  {
    icon: Eye,
    title: 'Operational Visibility',
    description: 'Clear performance metrics and operational clarity across your organization.',
  },
  {
    icon: LineChart,
    title: 'Predictive Insights',
    description: 'Forecasts that reduce risk and help you seize opportunities before competitors.',
  },
  {
    icon: FileText,
    title: 'Automated Reporting',
    description: 'Self-service analytics and automated reports that save hours every week.',
  },
  {
    icon: Users,
    title: 'Customer Understanding',
    description: 'Deep customer insights that enable personalization and improve retention.',
  },
]

const testimonial = {
  quote: "StratLogik's analytics team helped us structure our data and deliver BI dashboards that became central to strategic planning, reducing reporting time by 80% and improving decision confidence across leadership.",
  author: 'VP of Business Intelligence',
  company: 'Retail Enterprise',
}

const useCases = [
  'Teams struggling with siloed or messy data',
  'Leaders looking to improve forecasting',
  'Organizations operationalizing analytics',
  'Companies with rich data but low insight extraction',
]

export function DataOutcomes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-950" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Outcomes
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Business impact that moves the needle
          </h2>
        </motion.div>

        {/* Outcomes Grid - Hexagonal-inspired layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-dark-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 ${
                index === 4 ? 'lg:col-start-2' : ''
              }`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-600/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-primary-500/20 flex items-center justify-center text-cyan-400 group-hover:from-cyan-500 group-hover:to-primary-500 group-hover:text-white transition-all duration-300">
                  <outcome.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{outcome.title}</h3>
                <p className="mt-2 text-sm text-dark-400">{outcome.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden mb-16"
        >
          {/* Background with data visualization pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-primary-600">
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative p-12 lg:p-16">
            <Quote className="w-12 h-12 text-white/20 mb-6" />
            <p className="text-2xl lg:text-3xl font-medium text-white leading-relaxed max-w-4xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-8">
              <div className="font-semibold text-white">{testimonial.author}</div>
              <div className="text-white/70">{testimonial.company}</div>
            </div>
          </div>
        </motion.div>

        {/* Who This Is For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Who this is for</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
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
