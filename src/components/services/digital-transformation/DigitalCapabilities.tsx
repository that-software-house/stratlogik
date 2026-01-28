'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Bot, Code2, Cloud, Database, Shield, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const capabilities = [
  {
    icon: Brain,
    title: 'AI Strategy & Roadmap',
    description: 'Align AI initiatives with business goals through enterprise opportunity mapping, governance frameworks, and prioritized use cases.',
    features: ['Enterprise AI mapping', 'Ethical AI frameworks', 'High-impact use cases'],
    size: 'large',
    gradient: 'from-violet-600 to-indigo-600',
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Automate operations with AI-powered RPA, NLP solutions, and predictive analytics.',
    features: ['AI-powered RPA', 'Workflow optimization', 'Predictive analytics'],
    size: 'medium',
    gradient: 'from-primary-600 to-cyan-600',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Build digital platforms that scale with modern architecture.',
    features: ['Web & mobile apps', 'API architecture', 'System integration'],
    size: 'medium',
    gradient: 'from-emerald-600 to-teal-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Modernization',
    description: 'Future-ready infrastructure for agility and resilience.',
    features: ['Cloud migration', 'Scalable architecture', 'Cost optimization'],
    size: 'small',
    gradient: 'from-sky-600 to-blue-600',
  },
  {
    icon: Database,
    title: 'Data & AI Analytics',
    description: 'Turn raw data into strategic advantage with ML and BI.',
    features: ['Data architecture', 'ML modeling', 'Real-time analytics'],
    size: 'small',
    gradient: 'from-orange-600 to-amber-600',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Protect your digital ecosystem while scaling confidently.',
    features: ['AI-enhanced security', 'Risk strategy', 'Data governance'],
    size: 'small',
    gradient: 'from-rose-600 to-pink-600',
  },
]

export function DigitalCapabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="capabilities" className="section-padding bg-dark-950" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Digital transformation & technology services
          </h2>
          <p className="mt-4 text-lg text-dark-400">
            End-to-end capabilities to modernize, automate, and scale your business with intelligent technology.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
          {capabilities.map((capability, index) => {
            const isLarge = capability.size === 'large'
            const isMedium = capability.size === 'medium'

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  group relative rounded-3xl overflow-hidden
                  ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}
                  ${isMedium ? 'lg:col-span-2' : ''}
                `}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-dark-900 border border-white/10 rounded-3xl" />

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center text-white shadow-lg`}>
                    <capability.icon className="w-7 h-7" />
                  </div>

                  {/* Text */}
                  <div className="mt-6 flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className={`mt-3 text-dark-400 leading-relaxed ${isLarge ? 'text-lg' : 'text-sm'}`}>
                      {capability.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {capability.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-dark-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
          >
            Discuss your transformation needs
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
