'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Search, FileCheck, Rocket, TrendingUp, LogOut } from 'lucide-react'

const stages = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Deal Sourcing',
    subtitle: 'Identifying Opportunities',
    description: 'We help identify and evaluate potential investments through market mapping, competitive analysis, and proprietary deal flow development.',
    services: [
      'Market opportunity assessment',
      'Target identification & screening',
      'Preliminary valuation analysis',
      'Investment thesis development',
    ],
  },
  {
    id: 'diligence',
    icon: FileCheck,
    title: 'Due Diligence',
    subtitle: 'Validating the Thesis',
    description: 'Comprehensive commercial, operational, and strategic due diligence to validate investment theses and uncover hidden risks and opportunities.',
    services: [
      'Commercial due diligence',
      'Operational assessment',
      'Management evaluation',
      'Synergy identification',
    ],
  },
  {
    id: 'onboarding',
    icon: Rocket,
    title: 'First 100 Days',
    subtitle: 'Accelerating Impact',
    description: 'Rapid value creation planning and execution support to build momentum immediately following close.',
    services: [
      '100-day planning',
      'Quick-win identification',
      'Governance establishment',
      'Team alignment & mobilization',
    ],
  },
  {
    id: 'value-creation',
    icon: TrendingUp,
    title: 'Value Creation',
    subtitle: 'Driving Performance',
    description: 'Ongoing partnership to execute strategic initiatives, drive operational improvements, and accelerate growth.',
    services: [
      'Revenue growth initiatives',
      'Cost optimization programs',
      'Digital transformation',
      'M&A integration support',
    ],
  },
  {
    id: 'exit',
    icon: LogOut,
    title: 'Exit Preparation',
    subtitle: 'Maximizing Returns',
    description: 'Strategic positioning and operational preparation to maximize exit value and ensure a smooth transaction process.',
    services: [
      'Exit readiness assessment',
      'Equity story development',
      'Vendor due diligence support',
      'Management presentation prep',
    ],
  },
]

export function PELifecycle() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStage, setActiveStage] = useState('diligence')

  const currentStage = stages.find((s) => s.id === activeStage) || stages[1]

  return (
    <section className="section-padding bg-dark-900" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Investment Lifecycle
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            End-to-end support across the deal lifecycle
          </h2>
          <p className="mt-4 text-lg text-dark-400">
            From sourcing to exit, we provide strategic guidance and operational support
            at every stage of the investment journey.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-dark-700" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-500"
              style={{ width: `${(stages.findIndex(s => s.id === activeStage) / (stages.length - 1)) * 100}%` }}
            />

            {/* Stage Buttons */}
            <div className="relative flex justify-between">
              {stages.map((stage, index) => {
                const isActive = stage.id === activeStage
                const isPast = stages.findIndex(s => s.id === activeStage) >= index

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className="flex flex-col items-center group"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-primary-600 text-white scale-110'
                          : isPast
                          ? 'bg-primary-600/20 text-primary-400'
                          : 'bg-dark-800 text-dark-500 group-hover:bg-dark-700'
                      }`}
                    >
                      <stage.icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`mt-3 text-sm font-medium transition-colors hidden md:block ${
                        isActive ? 'text-white' : 'text-dark-500 group-hover:text-dark-300'
                      }`}
                    >
                      {stage.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Active Stage Content */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-primary-400 font-medium mb-4">
              <currentStage.icon className="w-5 h-5" />
              {currentStage.subtitle}
            </div>
            <h3 className="text-3xl font-bold text-white">{currentStage.title}</h3>
            <p className="mt-4 text-lg text-dark-400 leading-relaxed">
              {currentStage.description}
            </p>
          </div>

          <div className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-6">
              Key Services
            </h4>
            <ul className="space-y-4">
              {currentStage.services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="w-2 h-2 rounded-full bg-primary-500" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
