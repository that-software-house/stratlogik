'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail, Users } from 'lucide-react'
import Link from 'next/link'

export function PeopleCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-orange-600/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-600/10 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 mb-8">
              <Users className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to transform through your people?
            </h2>

            <p className="mt-6 text-xl text-dark-300 max-w-2xl mx-auto">
              Talk with us about aligning your organization and enabling change that lasts.
              Let&apos;s build a people strategy that drives real results.
            </p>

            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="btn bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:from-orange-600 hover:to-rose-600 font-semibold"
              >
                Start Your People Strategy
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:contact@stratlogik.com"
                className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10"
              >
                <Mail className="w-4 h-4" />
                contact@stratlogik.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
