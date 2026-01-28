'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Search, Map, Cog, LineChart } from 'lucide-react'

const steps = [
  {
    id: 'discovery',
    number: '01',
    icon: Search,
    title: 'Discovery & Alignment',
    subtitle: 'Understanding Your Revenue Operations',
    description: 'We start by understanding your current funnel, data, tech stack, and organizational structure. This deep dive reveals bottlenecks, misalignments, and opportunities across your revenue functions.',
    activities: [
      'Funnel & pipeline analysis',
      'Tech stack audit',
      'Team structure & process review',
      'Customer journey assessment',
    ],
  },
  {
    id: 'strategy',
    number: '02',
    icon: Map,
    title: 'Strategy & Roadmap',
    subtitle: 'Designing Your Revenue Blueprint',
    description: 'We co-create a tailored strategy that aligns sales, marketing, and success goals. The roadmap prioritizes initiatives based on impact and feasibility.',
    activities: [
      'Unified revenue strategy design',
      'Goal alignment workshops',
      'Initiative prioritization',
      'Resource & timeline planning',
    ],
  },
  {
    id: 'execution',
    number: '03',
    icon: Cog,
    title: 'Execution Enablement',
    subtitle: 'Building Your Revenue Infrastructure',
    description: 'We build the systems, processes, and content that support your revenue organization. This includes everything from CRM configuration to sales playbooks.',
    activities: [
      'CRM & tool implementation',
      'Process documentation & training',
      'Sales & marketing content creation',
      'Automation & workflow setup',
    ],
  },
  {
    id: 'optimize',
    number: '04',
    icon: LineChart,
    title: 'Measure & Optimize',
    subtitle: 'Driving Continuous Improvement',
    description: "We help you define the right metrics and iterate based on performance insights. Ongoing optimization ensures your revenue engine keeps improving.",
    activities: [
      'KPI framework establishment',
      'Performance dashboard creation',
      'A/B testing & experimentation',
      'Quarterly business reviews',
    ],
  },
]

export function SalesApproach() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeStep, setActiveStep] = useState('discovery')

  const currentStep = steps.find((s) => s.id === activeStep) || steps[0]

  return (
    <section id="approach" className="section-padding bg-dark-900" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Our Approach
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            A unified go-to-revenue framework
          </h2>
          <p className="mt-4 text-lg text-dark-400">
            We bring sales, marketing, and customer success together into one cohesive
            revenue operation.
          </p>
        </motion.div>

        {/* Step Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-dark-700 hidden md:block" />
            <div
              className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 transition-all duration-500 hidden md:block"
              style={{ width: `${(steps.findIndex(s => s.id === activeStep) / (steps.length - 1)) * 100}%` }}
            />

            {/* Step Buttons */}
            <div className="relative flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              {steps.map((step, index) => {
                const isActive = step.id === activeStep
                const isPast = steps.findIndex(s => s.id === activeStep) >= index

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="flex md:flex-col items-center gap-4 md:gap-0 group text-left md:text-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive
                          ? 'bg-primary-600 text-white scale-110'
                          : isPast
                          ? 'bg-primary-600/20 text-primary-400'
                          : 'bg-dark-800 text-dark-500 group-hover:bg-dark-700'
                      }`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className="md:mt-3">
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isActive ? 'text-white' : 'text-dark-500 group-hover:text-dark-300'
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Active Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-16 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-5xl font-bold text-primary-600/30">{currentStep.number}</span>
              <div>
                <div className="text-primary-400 font-medium">{currentStep.subtitle}</div>
                <h3 className="text-3xl font-bold text-white">{currentStep.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-lg text-dark-400 leading-relaxed">
              {currentStep.description}
            </p>
          </div>

          <div className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-6">
              Key Activities
            </h4>
            <ul className="space-y-4">
              {currentStep.activities.map((activity, index) => (
                <motion.li
                  key={activity}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="w-2 h-2 rounded-full bg-primary-500" />
                  {activity}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
