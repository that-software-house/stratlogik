'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categories = ['All', 'Strategy', 'Digital', 'M&A', 'Operations', 'Industry']

const articles = [
  {
    title: 'The Future of Private Equity Value Creation',
    excerpt: 'How PE firms are evolving their playbooks to drive returns in a changing market.',
    category: 'Strategy',
    date: 'January 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    title: 'AI in the Enterprise: From Pilot to Scale',
    excerpt: 'Practical strategies for moving AI initiatives from experimentation to enterprise-wide deployment.',
    category: 'Digital',
    date: 'January 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'M&A Integration: The First 100 Days',
    excerpt: 'Critical actions that determine long-term deal success in the immediate post-close period.',
    category: 'M&A',
    date: 'December 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Supply Chain Resilience in 2026',
    excerpt: 'Building adaptive supply chains that can weather disruption and capture opportunity.',
    category: 'Operations',
    date: 'December 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Healthcare Transformation Accelerates',
    excerpt: 'Key trends reshaping healthcare delivery and the implications for industry leaders.',
    category: 'Industry',
    date: 'November 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'The New Growth Playbook',
    excerpt: 'How leading companies are finding growth in challenging economic conditions.',
    category: 'Strategy',
    date: 'November 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Digital Operating Models That Work',
    excerpt: 'Designing organizational structures that enable digital transformation success.',
    category: 'Digital',
    date: 'October 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Tech M&A: Valuation in a New Era',
    excerpt: 'How changing market dynamics are reshaping technology deal valuations.',
    category: 'M&A',
    date: 'October 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
  },
]

export function InsightsGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter((article) => article.category === activeCategory)

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = filteredArticles.filter((article) => !article.featured)

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-100 text-dark-600 hover:bg-dark-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === 'All' && featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link href="/insights/featured" className="group grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-primary-600">
                  Featured • {featuredArticle.category}
                </span>
                <h2 className="mt-4 text-3xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors lg:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-lg text-dark-500">{featuredArticle.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-dark-400">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-600">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link href="/insights/article" className="group">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="text-sm font-medium text-primary-600">{article.category}</span>
                  <h3 className="mt-2 text-xl font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-dark-500 line-clamp-2">{article.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-dark-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
