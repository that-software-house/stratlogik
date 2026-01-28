'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Heart, Sparkles, Target } from 'lucide-react'
import Link from 'next/link'

const connectionLines = [
  { x1: 20, y1: 30, x2: 50, y2: 50 },
  { x1: 50, y1: 50, x2: 80, y2: 35 },
  { x1: 50, y1: 50, x2: 35, y2: 75 },
  { x1: 50, y1: 50, x2: 70, y2: 70 },
  { x1: 20, y1: 30, x2: 35, y2: 75 },
  { x1: 80, y1: 35, x2: 70, y2: 70 },
]

const nodes = [
  { x: 20, y: 30, delay: 0 },
  { x: 50, y: 50, delay: 0.2, main: true },
  { x: 80, y: 35, delay: 0.4 },
  { x: 35, y: 75, delay: 0.6 },
  { x: 70, y: 70, delay: 0.8 },
]

export function PeopleHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-rose-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">People & Change</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              People-Driven{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                Change That Sticks
              </span>
            </h1>

            <p className="mt-8 text-xl text-dark-300 max-w-xl leading-relaxed">
              Align your organization, empower your teams, and lead transformational change
              with a people-first approach. We help organizations navigate growth with
              resilience and clarity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:from-orange-600 hover:to-rose-600">
                Start Your People Strategy
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#capabilities" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10">
                See Our Approach
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: '94%', label: 'Adoption Rate' },
                { value: '3x', label: 'Faster Change' },
                { value: '40%', label: 'Less Resistance' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Connected People Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* SVG Network Visualization */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Connection lines */}
                {connectionLines.map((line, index) => (
                  <motion.line
                    key={index}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                ))}

                {/* Gradient definition */}
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                  <radialGradient id="nodeGrad">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </radialGradient>
                </defs>

                {/* Nodes */}
                {nodes.map((node, index) => (
                  <motion.g key={index}>
                    {/* Pulse ring for main node */}
                    {node.main && (
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="8"
                        fill="none"
                        stroke="url(#nodeGrad)"
                        strokeWidth="0.5"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.main ? 6 : 4}
                      fill="url(#nodeGrad)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: node.delay }}
                    />
                  </motion.g>
                ))}
              </svg>

              {/* Floating cards around the network */}
              <motion.div
                className="absolute top-4 left-4 p-4 rounded-xl bg-dark-800/90 backdrop-blur border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Leadership</div>
                    <div className="text-xs text-dark-400">Aligned & Enabled</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 p-4 rounded-xl bg-dark-800/90 backdrop-blur border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Culture</div>
                    <div className="text-xs text-dark-400">Transformed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 p-4 rounded-xl bg-dark-800/90 backdrop-blur border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Teams</div>
                    <div className="text-xs text-dark-400">Empowered</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
