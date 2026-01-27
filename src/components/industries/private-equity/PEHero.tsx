'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const rotatingWords = ['Growth', 'Transformation', 'Value Creation', 'Performance']

export function PEHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent" />
      </div>

      <div className="container-wide relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-primary-400 font-medium mb-6">
              <span className="w-8 h-px bg-primary-400" />
              Private Equity
            </span>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Accelerating{' '}
              <span className="relative">
                <motion.span
                  key={rotatingWords[0]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400"
                >
                  Value Creation
                </motion.span>
              </span>
            </h1>

            <p className="mt-8 text-xl text-dark-300 max-w-xl leading-relaxed">
              We partner with private equity firms and their portfolio companies to drive
              operational excellence and unlock sustainable value at every stage of the
              investment lifecycle.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#services" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                Explore Our Services
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
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-5xl font-bold text-white">$50B+</div>
                  <div className="mt-2 text-dark-400">Deal Value Advised</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-8">
                  <div className="text-5xl font-bold text-white">200+</div>
                  <div className="mt-2 text-dark-400">Portfolio Companies</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-5xl font-bold text-white">35%</div>
                  <div className="mt-2 text-dark-400">Avg. EBITDA Improvement</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mt-8">
                  <div className="text-5xl font-bold text-white">15+</div>
                  <div className="mt-2 text-dark-400">Years of PE Focus</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
