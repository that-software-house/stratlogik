'use client'

import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/20">
            About StratLogik
          </span>
          <h1 className="mt-6 heading-xl text-white">
            Partnering with leaders to shape the future
          </h1>
          <p className="mt-6 text-xl text-white/70 max-w-3xl">
            For over 15 years, StratLogik has been the trusted advisor to organizations navigating transformation, driving growth, and building lasting competitive advantage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {[
            { label: 'Founded', value: '2009' },
            { label: 'Team Members', value: '250+' },
            { label: 'Global Offices', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="border-l-2 border-primary-500 pl-6">
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
