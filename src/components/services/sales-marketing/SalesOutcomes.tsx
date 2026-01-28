'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Timer, Target, Repeat, TrendingUp } from 'lucide-react'

const outcomes = [
  {
    icon: Timer,
    title: 'Shorter Sales Cycles',
    description: 'Streamlined processes and better alignment lead to faster deal velocity and improved win rates.',
  },
  {
    icon: Target,
    title: 'Higher Quality Leads',
    description: 'Marketing and sales alignment delivers leads with clearer conversion paths and better fit.',
  },
  {
    icon: Repeat,
    title: 'Consistent Experience',
    description: 'Seamless customer journeys from awareness to advocacy with unified messaging and touchpoints.',
  },
  {
    icon: TrendingUp,
    title: 'Improved Retention',
    description: 'Reduced churn and improved customer lifetime value through proactive success strategies.',
  },
]

const testimonial = {
  quote: "StratLogik's unified revenue strategy approach helped us realign sales and marketing, boosting our conversion rates by 35% within the first quarter. The transformation was remarkable.",
  author: 'VP of Revenue Operations',
  company: 'B2B SaaS Company',
}

const useCases = [
  'CEOs and revenue leaders needing alignment',
  'Teams with stagnant pipeline performance',
  'Organizations with sub-optimal CRM outcomes',
  'Companies with churn or retention challenges',
]

export function SalesOutcomes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Outcomes You Can Expect
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            Measurable business impact
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            Our unified approach to revenue operations delivers results you can measure and scale.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-dark-50 hover:bg-dark-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
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
          className="mt-20"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-dark-900 to-dark-800 p-12 lg:p-16">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-primary-600/20" />
            <div className="relative max-w-3xl mx-auto text-center">
              <p className="text-2xl lg:text-3xl font-medium text-white leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-dark-400">{testimonial.company}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who This Is For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-dark-900">Who this is for</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="px-4 py-2 rounded-full bg-dark-100 text-dark-700 text-sm font-medium"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
