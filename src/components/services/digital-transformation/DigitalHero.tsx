'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowRight, Cpu, Cloud, Database, Sparkles, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

const floatingIcons = [
  { icon: Cpu, delay: 0, x: '10%', y: '20%' },
  { icon: Cloud, delay: 0.5, x: '85%', y: '15%' },
  { icon: Database, delay: 1, x: '75%', y: '70%' },
  { icon: Sparkles, delay: 1.5, x: '15%', y: '75%' },
  { icon: Zap, delay: 2, x: '90%', y: '45%' },
  { icon: Shield, delay: 2.5, x: '5%', y: '50%' },
]

const codeLines = [
  { text: '> Initializing digital transformation...', delay: 0 },
  { text: '> Analyzing legacy systems ████████ 100%', delay: 0.8 },
  { text: '> Mapping AI opportunities...', delay: 1.6 },
  { text: '> Building intelligent automation ✓', delay: 2.4 },
  { text: '> Deploying cloud infrastructure ✓', delay: 3.2 },
  { text: '> Transformation complete. Ready to scale.', delay: 4, highlight: true },
]

export function DigitalHero() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])

  useEffect(() => {
    codeLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index])
      }, line.delay * 1000)
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/50 to-dark-950" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: item.delay, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
            className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/40"
          >
            <item.icon className="w-6 h-6" />
          </motion.div>
        </motion.div>
      ))}

      <div className="container-wide relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-400">AI-Powered Transformation</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Digital Transformation{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-[length:200%_auto] animate-gradient">
                  Fueled by AI
                </span>
              </span>
            </h1>

            <p className="mt-8 text-xl text-dark-300 max-w-xl leading-relaxed">
              Transform your business with smart technology, data, and AI solutions that
              optimize operations, unlock new growth, and future-proof your enterprise.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Transformation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#capabilities" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10">
                Explore Capabilities
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Terminal Window */}
              <div className="rounded-2xl bg-dark-900/80 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-800/50 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-dark-400 font-mono">transformation.sh</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-2 min-h-[280px]">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={visibleLines.includes(index) ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3 }}
                      className={line.highlight ? 'text-green-400' : 'text-dark-300'}
                    >
                      {line.text}
                      {index === visibleLines.length - 1 && !line.highlight && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-primary-400 ml-1"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-600 to-primary-600 rounded-xl opacity-20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}
