'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react'

export function Cta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-dark-900 px-8 py-16 lg:px-16 lg:py-24"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-600/20 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white">
              Ready to transform your organization?
            </h2>
            <p className="mt-6 text-xl text-dark-300">
              Let&apos;s discuss how StratLogik can help you navigate complexity and unlock new opportunities for growth.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn bg-white text-dark-900 hover:bg-white/90 w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Start a Conversation
              </Link>
              <Link
                href="/contact?type=meeting"
                className="btn bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 w-full sm:w-auto"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Meeting
              </Link>
            </div>

            <p className="mt-8 text-sm text-dark-400">
              Or reach us directly at{' '}
              <a href="mailto:contact@stratlogik.com" className="text-primary-400 hover:text-primary-300">
                contact@stratlogik.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
