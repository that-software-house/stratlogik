'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'

export function PECta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-primary-600">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-700 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to accelerate value creation in your portfolio?
          </h2>
          <p className="mt-6 text-xl text-white/80">
            Let&apos;s discuss how we can support your investment strategy and drive measurable
            results across your portfolio companies.
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
              href="tel:+12125550100"
              className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              +1 (212) 555-0100
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
