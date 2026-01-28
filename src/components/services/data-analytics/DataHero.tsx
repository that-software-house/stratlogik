'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, PieChart, TrendingUp, Activity } from 'lucide-react'
import Link from 'next/link'

// Animated bar chart component
function AnimatedBars() {
  const bars = [65, 85, 45, 90, 70, 55, 80]

  return (
    <div className="flex items-end gap-2 h-32">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          className="w-6 rounded-t-md bg-gradient-to-t from-primary-600 to-primary-400"
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2,
          }}
        />
      ))}
    </div>
  )
}

// Animated line chart component
function AnimatedLine() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-20">
      <motion.path
        d="M 0 60 Q 25 50, 50 45 T 100 35 T 150 25 T 200 15"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Floating data points - fixed positions to avoid hydration mismatch
const dataPoints = [
  { id: 0, x: 15, y: 20, delay: 0, duration: 3.5 },
  { id: 1, x: 85, y: 15, delay: 0.3, duration: 4 },
  { id: 2, x: 25, y: 70, delay: 0.6, duration: 3.8 },
  { id: 3, x: 90, y: 45, delay: 0.9, duration: 4.2 },
  { id: 4, x: 10, y: 55, delay: 1.2, duration: 3.2 },
  { id: 5, x: 75, y: 80, delay: 1.5, duration: 4.5 },
  { id: 6, x: 45, y: 10, delay: 0.2, duration: 3.6 },
  { id: 7, x: 60, y: 65, delay: 0.8, duration: 4.1 },
  { id: 8, x: 30, y: 35, delay: 1.1, duration: 3.4 },
  { id: 9, x: 80, y: 25, delay: 1.4, duration: 4.3 },
  { id: 10, x: 5, y: 85, delay: 0.4, duration: 3.7 },
  { id: 11, x: 55, y: 40, delay: 0.7, duration: 4.4 },
  { id: 12, x: 95, y: 70, delay: 1.0, duration: 3.3 },
  { id: 13, x: 35, y: 90, delay: 1.3, duration: 4.6 },
  { id: 14, x: 70, y: 5, delay: 1.6, duration: 3.9 },
]

function FloatingDataPoints() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dataPoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-primary-500/30"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: point.duration,
            repeat: Infinity,
            delay: point.delay,
          }}
        />
      ))}
    </div>
  )
}

export function DataHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-dark-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px]" />
        <FloatingDataPoints />
      </div>

      <div className="container-wide relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Data & Analytics</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Turn Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary-400">
                Decisions
              </span>
            </h1>

            <p className="mt-8 text-xl text-dark-300 max-w-xl leading-relaxed">
              Unlock strategic advantage with data engineering, analytics, and insights
              that drive real business outcomes. Transform raw data into actionable
              intelligence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Analytics Journey
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#capabilities" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10">
                See Capabilities
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="rounded-2xl bg-dark-900/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-primary-500 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Analytics Dashboard</div>
                      <div className="text-xs text-dark-400">Real-time insights</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-dark-400">Live</span>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'Data Points', value: '2.4M', change: '+12%' },
                    { label: 'Accuracy', value: '99.2%', change: '+0.8%' },
                    { label: 'Insights', value: '847', change: '+24%' },
                  ].map((metric) => (
                    <div key={metric.label} className="p-3 rounded-xl bg-white/5">
                      <div className="text-xs text-dark-400">{metric.label}</div>
                      <div className="text-xl font-bold text-white mt-1">{metric.value}</div>
                      <div className="text-xs text-green-400">{metric.change}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="p-4 rounded-xl bg-white/5 mb-4">
                  <div className="text-xs text-dark-400 mb-3">Revenue Forecast</div>
                  <AnimatedLine />
                </div>

                {/* Bar Chart */}
                <div className="p-4 rounded-xl bg-white/5">
                  <div className="text-xs text-dark-400 mb-3">Weekly Performance</div>
                  <AnimatedBars />
                </div>
              </div>

              {/* Floating Mini Cards */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 rounded-xl bg-dark-800/90 backdrop-blur border border-white/10 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <PieChart className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-xs text-dark-400">Conversion</div>
                    <div className="text-lg font-bold text-white">34.2%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 p-4 rounded-xl bg-dark-800/90 backdrop-blur border border-white/10 shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <div>
                    <div className="text-xs text-dark-400">Growth</div>
                    <div className="text-lg font-bold text-white">+127%</div>
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
