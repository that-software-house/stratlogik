'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const insights = [
  {
    category: 'Strategy',
    title: 'The Future of Value Creation in Private Equity',
    excerpt: 'How leading PE firms are adapting their playbooks for a higher-rate environment and increased competition.',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    href: '/insights/pe-value-creation',
    featured: true,
  },
  {
    category: 'Digital',
    title: 'AI in the Enterprise: From Hype to Impact',
    excerpt: 'Practical frameworks for implementing generative AI that drives measurable business outcomes.',
    readTime: '6 min read',
    date: 'Jan 12, 2025',
    href: '/insights/ai-enterprise',
    featured: false,
  },
  {
    category: 'Operations',
    title: 'Building Resilient Supply Chains',
    excerpt: 'Lessons from leading companies on creating agile, risk-aware supply networks.',
    readTime: '5 min read',
    date: 'Jan 8, 2025',
    href: '/insights/supply-chain-resilience',
    featured: false,
  },
]

export function Insights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
              Latest Insights
            </span>
            <h2 className="mt-4 heading-lg text-white">
              Perspectives that shape strategy
            </h2>
            <p className="mt-4 text-lg text-dark-300">
              Thought leadership and research from our experts on the trends transforming business.
            </p>
          </div>
          <Link
            href="/insights"
            className="btn bg-white/10 text-white backdrop-blur-sm ring-1 ring-white/20 hover:bg-white/20 shrink-0"
          >
            View All Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href={insights[0].href}
              className="group block h-full rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                  {insights[0].category}
                </span>
                <span className="text-xs text-white/70">{insights[0].date}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white lg:text-3xl">
                {insights[0].title}
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed">
                {insights[0].excerpt}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock className="h-4 w-4" />
                  {insights[0].readTime}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Articles */}
          <div className="flex flex-col gap-6">
            {insights.slice(1).map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={insight.href}
                  className="group block rounded-2xl bg-dark-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-dark-700"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary-600/20 px-3 py-1 text-xs font-medium text-primary-400">
                      {insight.category}
                    </span>
                    <span className="text-xs text-dark-400">{insight.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-300 line-clamp-2">
                    {insight.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-dark-400">
                    <Clock className="h-3.5 w-3.5" />
                    {insight.readTime}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
