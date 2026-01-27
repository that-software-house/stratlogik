'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export function HealthcareCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to transform your healthcare organization?
            </h2>
            <p className="mt-6 text-xl text-white/80">
              Let&apos;s discuss how we can help you navigate industry challenges
              and deliver better outcomes for patients and stakeholders.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn bg-white text-primary-600 hover:bg-dark-50 font-semibold"
              >
                Schedule a Discussion
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:healthcare@stratlogik.com"
                className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
              >
                <Mail className="w-4 h-4" />
                healthcare@stratlogik.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-xl font-bold text-white">Connect with our healthcare team</h3>
            <p className="mt-2 text-white/70">
              Our healthcare practice leaders are ready to discuss your most pressing challenges.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                  SW
                </div>
                <div>
                  <div className="font-semibold text-white">Sarah Williams</div>
                  <div className="text-sm text-white/70">Partner, Healthcare Practice Lead</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div>
                  <div className="font-semibold text-white">James Mitchell</div>
                  <div className="text-sm text-white/70">Partner, Life Sciences</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
