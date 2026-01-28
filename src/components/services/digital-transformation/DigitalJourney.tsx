'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Search, Map, Hammer, Rocket, Users, CheckCircle2 } from 'lucide-react'

const journeySteps = [
  {
    phase: '01',
    icon: Search,
    title: 'Discovery & Assessment',
    description: 'We evaluate your current state of technology, data, and processes to identify the most strategic AI and digital opportunities.',
    deliverables: ['Technology audit report', 'Opportunity matrix', 'Risk assessment'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    phase: '02',
    icon: Map,
    title: 'Strategic Planning',
    description: 'Co-create a roadmap that balances innovation with realistic milestones and measurable outcomes.',
    deliverables: ['Transformation roadmap', 'Business case', 'Success metrics'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    phase: '03',
    icon: Hammer,
    title: 'Design & Build',
    description: "We build digital solutions and AI systems that integrate seamlessly with your organization's workflows and goals.",
    deliverables: ['Solution architecture', 'Working prototypes', 'Integration specs'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    phase: '04',
    icon: Rocket,
    title: 'Deployment & Scaling',
    description: 'Launch successfully and scale with performance monitoring, optimization, and governance mechanisms.',
    deliverables: ['Production deployment', 'Monitoring dashboards', 'Scale playbook'],
    color: 'from-orange-500 to-amber-600',
  },
  {
    phase: '05',
    icon: Users,
    title: 'Change Enablement',
    description: 'We ensure teams adopt new tools and ways of working with training, documentation, and ongoing support.',
    deliverables: ['Training programs', 'Documentation', 'Support handoff'],
    color: 'from-rose-500 to-pink-600',
  },
]

export function DigitalJourney() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="section-padding bg-white overflow-hidden" ref={containerRef}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Our Approach
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            A practical, iterative transformation framework
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            We guide you through every phase of your digital transformation journey,
            from initial assessment to full-scale adoption.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-dark-200 lg:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-primary-600 to-accent-600"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-start gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      <step.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-28 lg:ml-0 lg:w-[calc(50%-4rem)] ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="group p-8 rounded-2xl bg-dark-50 border border-dark-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300">
                      {/* Phase badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                          PHASE {step.phase}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-dark-500 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mt-6 pt-6 border-t border-dark-200">
                        <p className="text-xs font-semibold uppercase tracking-wider text-dark-400 mb-3">
                          Key Deliverables
                        </p>
                        <div className="space-y-2">
                          {step.deliverables.map((deliverable) => (
                            <div key={deliverable} className="flex items-center gap-2 text-sm text-dark-600">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-4rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
