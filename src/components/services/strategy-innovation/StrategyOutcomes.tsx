'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, MapPin, Clock, FileText, Users } from 'lucide-react'

const outcomes = [
  {
    icon: MapPin,
    title: 'Strategic Clarity',
    description: 'Clear strategic roadmaps that reduce execution uncertainty and align your organization around shared priorities.',
  },
  {
    icon: Clock,
    title: 'Faster Time-to-Market',
    description: 'Accelerated launch timelines for new initiatives through focused planning and resource allocation.',
  },
  {
    icon: FileText,
    title: 'Actionable Playbooks',
    description: 'Operational playbooks linked to measurable outcomes that your teams can execute independently.',
  },
  {
    icon: Users,
    title: 'Team Alignment',
    description: 'Better alignment across teams and functions, with shared understanding of goals and accountabilities.',
  },
]

const testimonial = {
  quote: "StratLogik helped us define our product strategy and led the execution roadmap that delivered 22% revenue growth within six months. Their approach is refreshingly practical.",
  author: 'Chief Strategy Officer',
  company: 'Growth-Stage Technology Company',
}

const useCases = [
  'CEOs & Founders seeking growth acceleration',
  'Product leaders needing strategic clarity',
  'Organizations pivoting or entering new markets',
  'Teams stuck between vision and execution',
]

export function StrategyOutcomes() {
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
            What Success Looks Like
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-dark-900">
            Client outcomes & impact
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            We measure our success by the tangible business results we help you achieve.
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
