'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const insights = [
  {
    category: 'Digital Health',
    title: 'Unlocking AI\'s Full Potential in Healthcare',
    excerpt: 'How leading organizations are moving from pilot projects to enterprise-wide AI transformation.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    category: 'Pharmaceuticals',
    title: 'The New Commercial Model for Pharma',
    excerpt: 'Adapting go-to-market strategies for an omnichannel world.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Providers',
    title: 'Workforce Transformation in Healthcare',
    excerpt: 'Building resilient organizations in an era of talent scarcity.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&auto=format&fit=crop&q=80',
  },
  {
    category: 'Payers',
    title: 'The Future of Member Experience',
    excerpt: 'How health plans are reimagining engagement to drive loyalty and outcomes.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop&q=80',
  },
]

export function HealthcareInsights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featured = insights.find((i) => i.featured)
  const articles = insights.filter((i) => !i.featured)

  return (
    <section className="section-padding bg-dark-50" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Latest Thinking
            </span>
            <h2 className="mt-4 text-4xl font-bold text-dark-900">
              Healthcare insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
          >
            View all insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/insights" className="group block h-full">
                <div className="relative h-full rounded-2xl overflow-hidden bg-dark-900">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="relative h-full p-8 flex flex-col justify-end min-h-[400px]">
                    <span className="text-sm font-medium text-primary-400">
                      {featured.category}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">
                      {featured.title}
                    </h3>
                    <p className="mt-3 text-dark-300">
                      {featured.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-400 group-hover:text-primary-300">
                      Read more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Article List */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link href="/insights" className="group flex gap-6">
                  <div className="w-32 h-24 shrink-0 rounded-xl overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-primary-600">
                      {article.category}
                    </span>
                    <h3 className="mt-1 font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm text-dark-500 line-clamp-2">
                      {article.excerpt}
                    </p>
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
