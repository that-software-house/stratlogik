'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export function DataCta() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white" ref={ref}>
      <div className="container-wide">
        <div className="relative rounded-3xl bg-dark-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-600/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-600/20 to-transparent" />
          </div>

          <div className="relative px-8 py-16 lg:px-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-400">Let&apos;s talk data</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ready to transform your data into strategic advantage?
                </h2>

                <p className="mt-6 text-lg text-dark-300">
                  Connect with us to explore how StratLogik can help make your data work
                  harder and smarter for your business.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="btn bg-gradient-to-r from-cyan-500 to-primary-500 text-white hover:from-cyan-600 hover:to-primary-600 font-semibold"
                  >
                    Start Your Analytics Journey
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="mailto:contact@stratlogik.com"
                    className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10"
                  >
                    contact@stratlogik.com
                  </a>
                </div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  {/* Animated data visualization preview */}
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="aspect-square rounded-xl bg-white/5 border border-white/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <motion.div
                          className="h-full w-full rounded-xl bg-gradient-to-br from-cyan-500/20 to-primary-500/20"
                          animate={{
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Overlay stat */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-2xl bg-dark-800/90 backdrop-blur border border-white/10 shadow-2xl"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="text-center">
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary-400">
                        80%
                      </div>
                      <div className="text-sm text-dark-400 mt-1">Faster Insights</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
