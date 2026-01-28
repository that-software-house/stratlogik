'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function DigitalCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden" ref={ref}>
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-dark-950">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-600/30 blur-[128px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-600/30 blur-[128px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-white/80">Start your transformation today</span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to modernize with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400">
                intelligent technology?
              </span>
            </h2>

            <p className="mt-6 text-xl text-dark-300 max-w-2xl mx-auto">
              Connect with our team to explore how AI and digital systems can
              accelerate your business outcomes.
            </p>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-dark-900 bg-white hover:bg-dark-50 transition-colors overflow-hidden"
              >
                <span className="relative z-10">Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="mailto:contact@stratlogik.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 transition-all"
              >
                contact@stratlogik.com
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-16 pt-16 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-dark-500 mb-6">Trusted by forward-thinking enterprises</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                {['Enterprise', 'Growth-Stage', 'Fortune 500', 'Startups'].map((type) => (
                  <div key={type} className="text-lg font-semibold text-dark-400">
                    {type}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
