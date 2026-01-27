'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Target, Zap, GitMerge, Settings } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Strategy Consulting',
    description: 'Define winning strategies that create sustainable competitive advantage and drive long-term value creation.',
    href: '/services/strategy',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Modernize your operations with cutting-edge technology and data-driven insights to stay ahead of disruption.',
    href: '/services/digital',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: GitMerge,
    title: 'M&A Advisory',
    description: 'End-to-end support for mergers, acquisitions, and integrations that maximize deal value and minimize risk.',
    href: '/services/ma',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Settings,
    title: 'Operations Excellence',
    description: 'Optimize processes, reduce costs, and build resilient operations that scale with your ambitions.',
    href: '/services/operations',
    color: 'from-amber-500 to-orange-600',
  },
]

export function Services() {
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
            What We Do
          </span>
          <h2 className="mt-4 heading-lg text-dark-900">
            Comprehensive consulting services for every challenge
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            From strategy to execution, we partner with you at every stage of your transformation journey.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full rounded-2xl bg-white p-8 shadow-lg shadow-dark-900/5 ring-1 ring-dark-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-dark-900/10"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-dark-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-600">
                  Explore service
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
