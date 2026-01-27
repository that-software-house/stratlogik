'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    title: 'Private Equity',
    slug: 'private-equity',
    description: 'We partner with PE firms and their portfolio companies to drive value creation throughout the investment lifecycle.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    stats: [
      { value: '$50B+', label: 'Deal value advised' },
      { value: '200+', label: 'Portfolio companies supported' },
    ],
    capabilities: [
      'Commercial due diligence',
      'Value creation planning',
      'Performance improvement',
      'Exit preparation',
    ],
  },
  {
    title: 'Healthcare & Life Sciences',
    slug: 'healthcare',
    description: 'We help healthcare organizations navigate industry transformation and deliver better patient outcomes.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    stats: [
      { value: '150+', label: 'Healthcare clients' },
      { value: '40%', label: 'Average cost reduction' },
    ],
    capabilities: [
      'Market access strategy',
      'Commercial excellence',
      'Operational transformation',
      'Digital health enablement',
    ],
  },
  {
    title: 'Technology',
    slug: 'technology',
    description: 'We advise technology companies on growth strategy, go-to-market optimization, and operational excellence.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    stats: [
      { value: '300+', label: 'Tech companies advised' },
      { value: '3x', label: 'Average growth acceleration' },
    ],
    capabilities: [
      'Product-market fit optimization',
      'Sales & go-to-market strategy',
      'Scaling operations',
      'Technology M&A',
    ],
  },
  {
    title: 'Financial Services',
    slug: 'financial-services',
    description: 'We help financial institutions transform their business models and operations for the digital age.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80',
    stats: [
      { value: '100+', label: 'Financial institutions' },
      { value: '25%', label: 'Average efficiency gain' },
    ],
    capabilities: [
      'Digital banking transformation',
      'Risk & compliance optimization',
      'Customer experience design',
      'Fintech partnerships',
    ],
  },
]

export function IndustriesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        <div className="space-y-24">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h2 className="text-3xl font-bold text-dark-900 lg:text-4xl">
                  {industry.title}
                </h2>
                <p className="mt-4 text-lg text-dark-500">
                  {industry.description}
                </p>

                <div className="mt-8 flex gap-8">
                  {industry.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                      <div className="mt-1 text-sm text-dark-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-dark-900">Our Focus Areas</h3>
                  <ul className="mt-4 grid grid-cols-2 gap-3">
                    {industry.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                        <span className="text-sm text-dark-600">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-600 hover:text-primary-700"
                >
                  Explore {industry.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
