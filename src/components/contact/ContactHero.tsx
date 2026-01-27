'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/20">
            Get in Touch
          </span>
          <h1 className="mt-6 heading-xl text-white">
            Let&apos;s start a conversation
          </h1>
          <p className="mt-6 text-xl text-white/70">
            Whether you&apos;re facing a strategic challenge or exploring new opportunities, we&apos;re here to help.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
