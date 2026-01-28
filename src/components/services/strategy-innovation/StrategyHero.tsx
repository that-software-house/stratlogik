'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Target, Rocket, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export function StrategyHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-900/20 to-transparent" />
      </div>

      <div className="container-wide relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-accent-400 font-medium mb-6">
              <span className="w-8 h-px bg-accent-400" />
              Strategy & Innovation
            </span>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Strategy That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                Moves You Forward
              </span>
            </h1>

            <p className="mt-8 text-xl text-dark-300 max-w-xl leading-relaxed">
              Not just ideas. Strategic impact with execution muscle. We help you define
              where to play, how to win, and make it happen — from strategic clarity to
              real business outcomes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to a Strategist
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#approach" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                See Our Approach
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Capability Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-white">Strategic Planning</div>
                  <div className="mt-2 text-sm text-dark-400">Direction that aligns ambition with reality</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-8 group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center text-accent-400 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-white">Product Innovation</div>
                  <div className="mt-2 text-sm text-dark-400">Turn bold ideas into viable offerings</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-white">Go-to-Market</div>
                  <div className="mt-2 text-sm text-dark-400">Launch with velocity and visibility</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-8 group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center text-accent-400 group-hover:bg-accent-600 group-hover:text-white transition-colors">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="mt-4 text-lg font-semibold text-white">Execution Roadmaps</div>
                  <div className="mt-2 text-sm text-dark-400">Bridge strategy to outcomes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
