'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Building2, Heart, Cpu, Landmark } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: 'Private Equity',
    description: 'Accelerate value creation across the deal lifecycle—from due diligence to exit.',
    stats: '200+ PE engagements',
    href: '/industries/private-equity',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  },
  {
    icon: Heart,
    title: 'Healthcare & Life Sciences',
    description: 'Navigate regulatory complexity and drive innovation in a rapidly evolving sector.',
    stats: '50+ health systems served',
    href: '/industries/healthcare',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Scale rapidly and innovate continuously in fast-moving markets.',
    stats: '100+ tech transformations',
    href: '/industries/technology',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    description: 'Transform banking, insurance, and wealth management for the digital age.',
    stats: '75+ financial institutions',
    href: '/industries/financial-services',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&auto=format&fit=crop&q=80',
  },
]

export function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              Industries We Serve
            </span>
            <h2 className="mt-4 heading-lg text-dark-900">
              Deep expertise across sectors
            </h2>
            <p className="mt-4 text-lg text-dark-500">
              We bring specialized knowledge and proven methodologies to the unique challenges of your industry.
            </p>
          </div>
          <Link
            href="/industries"
            className="btn-outline shrink-0"
          >
            View All Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={industry.href}
                className="group relative block h-80 overflow-hidden rounded-2xl"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${industry.image})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">
                    {industry.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/50">
                      {industry.stats}
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-1" />
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
