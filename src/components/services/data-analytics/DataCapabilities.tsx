'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Compass,
  Database,
  BarChart3,
  Brain,
  Sparkles,
  GraduationCap,
  ArrowRight,
  Layers
} from 'lucide-react'

const capabilities = [
  {
    icon: Compass,
    title: 'Data Strategy & Governance',
    description: 'Build a foundation for reliable insights with clear data policies and quality frameworks.',
    details: [
      'Data maturity assessments',
      'Analytics roadmap & prioritization',
      'Governance, quality frameworks & policies',
    ],
    layer: 'Foundation',
    color: 'from-slate-500 to-slate-600',
  },
  {
    icon: Database,
    title: 'Data Engineering & Architecture',
    description: 'Turn fragmented data into a structured, scalable ecosystem.',
    details: [
      'ETL/ELT pipelines',
      'Data warehousing & lake architecture',
      'Scalable cloud data environments',
    ],
    layer: 'Infrastructure',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence & Visualization',
    description: 'Transform complexity into clarity with powerful dashboards and reporting.',
    details: [
      'Executive dashboards & KPI reporting',
      'Self-service analytics tools',
      'Interactive visualizations',
    ],
    layer: 'Insights',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Brain,
    title: 'Predictive & Advanced Analytics',
    description: 'Forecast trends and unlock future insights with sophisticated modeling.',
    details: [
      'Machine learning modeling',
      'Predictive forecasts & simulations',
      'Statistical analytics for strategic decisions',
    ],
    layer: 'Intelligence',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Analytics Integration',
    description: 'Leverage intelligent systems for deeper, automated insight discovery.',
    details: [
      'AI-driven pattern recognition',
      'Natural language analytics',
      'Embedded analytics in workflows',
    ],
    layer: 'Automation',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: GraduationCap,
    title: 'Analytics Adoption & Enablement',
    description: 'Empower teams to act on insights with training and best practices.',
    details: [
      'Training & capability building',
      'Analytics playbooks',
      'Ongoing support frameworks',
    ],
    layer: 'Enablement',
    color: 'from-emerald-500 to-green-600',
  },
]

export function DataCapabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="capabilities" className="section-padding bg-white" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            Our data & analytics services
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            A complete stack of capabilities to transform your data into strategic advantage.
          </p>
        </motion.div>

        {/* Data Stack Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stack Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-32 space-y-3">
              <div className="flex items-center gap-3 mb-8">
                <Layers className="w-6 h-6 text-primary-600" />
                <span className="text-sm font-semibold uppercase tracking-wider text-dark-400">
                  The Analytics Stack
                </span>
              </div>

              {capabilities.map((capability, index) => (
                <motion.button
                  key={capability.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-dark-900 border-dark-800 shadow-lg'
                      : 'bg-dark-50 border-dark-100 hover:border-primary-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${capability.color} flex items-center justify-center text-white`}>
                        <capability.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`font-semibold transition-colors ${activeIndex === index ? 'text-white' : 'text-dark-900'}`}>
                          {capability.title}
                        </div>
                        <div className={`text-xs transition-colors ${activeIndex === index ? 'text-dark-400' : 'text-dark-500'}`}>
                          {capability.layer}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-all ${
                      activeIndex === index
                        ? 'text-primary-400 rotate-90'
                        : 'text-dark-400'
                    }`} />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {activeIndex !== null ? (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="sticky top-32 p-8 rounded-2xl bg-dark-900 text-white"
              >
                <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${capabilities[activeIndex].color} items-center justify-center mb-6`}>
                  {(() => {
                    const Icon = capabilities[activeIndex].icon
                    return <Icon className="w-7 h-7 text-white" />
                  })()}
                </div>

                <h3 className="text-2xl font-bold mb-4">{capabilities[activeIndex].title}</h3>
                <p className="text-dark-300 leading-relaxed mb-8">
                  {capabilities[activeIndex].description}
                </p>

                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-dark-500">
                    What&apos;s Included
                  </p>
                  {capabilities[activeIndex].details.map((detail, idx) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${capabilities[activeIndex].color}`} />
                      <span className="text-dark-200">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <div className="sticky top-32 p-8 rounded-2xl bg-dark-50 border border-dark-100 border-dashed">
                <div className="text-center py-12">
                  <Layers className="w-12 h-12 text-dark-300 mx-auto mb-4" />
                  <p className="text-dark-500">
                    Select a capability from the stack to explore details
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
