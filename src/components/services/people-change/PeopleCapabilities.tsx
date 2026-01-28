'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Route,
  Crown,
  Building2,
  GraduationCap,
  HeartHandshake,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const capabilities = [
  {
    icon: Route,
    title: 'Change Management Strategy',
    description: 'Prepare your organization for transformation with structured change approaches.',
    points: [
      'Change readiness assessments',
      'Stakeholder engagement planning',
      'Communication strategies',
      'Resistance management',
    ],
    color: 'orange',
  },
  {
    icon: Crown,
    title: 'Leadership Alignment & Enablement',
    description: 'Equip leaders to drive change with confidence and clarity.',
    points: [
      'Executive alignment workshops',
      'Leadership coaching',
      'Decision-making frameworks',
      'Change sponsorship roadmaps',
    ],
    color: 'rose',
  },
  {
    icon: Building2,
    title: 'Organizational Development',
    description: 'Shape your structure for performance and adaptability.',
    points: [
      'Role & team effectiveness',
      'Culture transformation',
      'OD interventions',
    ],
    color: 'amber',
  },
  {
    icon: GraduationCap,
    title: 'Talent Strategy & Workforce Enablement',
    description: 'Empower your people to thrive through change.',
    points: [
      'Talent alignment with goals',
      'Learning & capability building',
      'Retention & engagement strategy',
    ],
    color: 'orange',
  },
  {
    icon: HeartHandshake,
    title: 'Employee Experience & Engagement',
    description: 'Design meaningful experiences that reduce churn and boost morale.',
    points: [
      'Employee journey mapping',
      'Feedback & sentiment tracking',
      'Culture diagnostics',
    ],
    color: 'rose',
  },
]

const colorClasses = {
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    icon: 'bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white',
    dot: 'bg-orange-500',
  },
  rose: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    icon: 'bg-rose-500/20 text-rose-400 group-hover:bg-rose-500 group-hover:text-white',
    dot: 'bg-rose-500',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    icon: 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-white',
    dot: 'bg-amber-500',
  },
}

export function PeopleCapabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="capabilities" className="section-padding bg-white" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            What we do in people & change
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            Comprehensive capabilities to align your organization and enable lasting transformation.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const colors = colorClasses[capability.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-8 rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300 ${
                  index === 0 || index === 1 ? 'lg:row-span-1' : ''
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center transition-all duration-300`}>
                  <capability.icon className="w-7 h-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-dark-900 group-hover:text-orange-600 transition-colors">
                  {capability.title}
                </h3>

                <p className="mt-3 text-dark-500">
                  {capability.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {capability.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-dark-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
          >
            Discuss your people strategy
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
