'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Twitter } from 'lucide-react'

const leaders = [
  {
    name: 'Alexandra Chen',
    role: 'Managing Partner & CEO',
    bio: 'Former McKinsey partner with 20+ years of experience in corporate strategy and transformation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Michael Roberts',
    role: 'Partner, Digital Practice',
    bio: 'Technology leader specializing in digital transformation and AI-driven business models.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sarah Williams',
    role: 'Partner, Private Equity',
    bio: 'PE expert with track record of driving value creation across portfolio companies.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'David Park',
    role: 'Partner, Operations',
    bio: 'Operations specialist focused on supply chain optimization and operational excellence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    linkedin: '#',
    twitter: '#',
  },
]

export function Leadership() {
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
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Leadership
          </span>
          <h2 className="mt-4 heading-lg text-dark-900">
            Meet our leadership team
          </h2>
          <p className="mt-4 text-lg text-dark-500">
            Experienced consultants and industry veterans committed to delivering exceptional results.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2">
                    <a
                      href={leader.linkedin}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={leader.twitter}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-dark-900">{leader.name}</h3>
              <p className="text-sm font-medium text-primary-600">{leader.role}</p>
              <p className="mt-2 text-sm text-dark-500">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
