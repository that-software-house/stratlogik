'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import Link from 'next/link'

export function HealthcareHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&auto=format&fit=crop&q=80"
          alt="Healthcare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/40" />
      </div>

      <div className="container-wide relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-primary-400 font-medium mb-6">
            <Heart className="w-4 h-4" />
            Healthcare & Life Sciences
          </span>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Moving healthcare forward—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
              for the better
            </span>
          </h1>

          <p className="mt-8 text-xl text-dark-300 leading-relaxed">
            We partner with healthcare organizations to navigate complex market dynamics,
            regulatory forces, and evolving patient expectations—delivering measurable
            improvements in performance and outcomes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#sectors" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
              Explore Our Expertise
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold text-white">150+</div>
              <div className="mt-1 text-dark-400">Healthcare Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="mt-1 text-dark-400">Engagements Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">40%</div>
              <div className="mt-1 text-dark-400">Avg. Cost Reduction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
