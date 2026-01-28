'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, CheckCircle2, TrendingUp, Users, Shield, Heart, Sparkles } from 'lucide-react'

const outcomes = [
  {
    icon: TrendingUp,
    title: 'Higher Adoption',
    description: 'Lower resistance and faster acceptance of change initiatives.',
  },
  {
    icon: Users,
    title: 'Aligned Leadership',
    description: 'Leaders driving unified execution with shared vision.',
  },
  {
    icon: Shield,
    title: 'Organizational Agility',
    description: 'Enhanced resilience and adaptability to future changes.',
  },
  {
    icon: Heart,
    title: 'Stronger Culture',
    description: 'Culture that actively supports strategy and transformation.',
  },
  {
    icon: Sparkles,
    title: 'Engaged Employees',
    description: 'Teams who understand, embrace, and own the change.',
  },
]

const testimonial = {
  quote: "StratLogik helped us build a sustainable change framework that empowered our leaders and aligned our teams — leading to faster adoption and measurable performance gains across the organization.",
  author: 'Chief People Officer',
  company: 'Global Financial Services Firm',
}

const useCases = [
  'Transforming organizational culture',
  'Rolling out new systems or processes',
  'Leadership alignment challenges',
  'Teams undergoing restructuring',
  'Rapid growth transitions',
]

export function PeopleOutcomes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-gradient-to-b from-dark-50 to-white" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Outcomes
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            What success looks like
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            Measurable outcomes that prove the impact of people-centered transformation.
          </p>
        </motion.div>

        {/* Outcomes in a horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-64 md:w-auto p-6 rounded-2xl bg-white border border-dark-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-rose-100 flex items-center justify-center text-orange-600 group-hover:from-orange-500 group-hover:to-rose-500 group-hover:text-white transition-all duration-300">
                <outcome.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-bold text-dark-900">{outcome.title}</h3>
              <p className="mt-2 text-sm text-dark-500">{outcome.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid lg:grid-cols-5 gap-8 items-center"
        >
          {/* Quote */}
          <div className="lg:col-span-3 relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-orange-500 to-rose-500 overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white" />
                </pattern>
                <rect width="100" height="100" fill="url(#circles)" />
              </svg>
            </div>

            <div className="relative">
              <Quote className="w-12 h-12 text-white/30 mb-4" />
              <p className="text-xl lg:text-2xl font-medium text-white leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-white/70">{testimonial.company}</div>
              </div>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-dark-900 mb-6">Who this is for</h3>
            <ul className="space-y-4">
              {useCases.map((useCase, index) => (
                <motion.li
                  key={useCase}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-dark-600">{useCase}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
