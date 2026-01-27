'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Pill, Stethoscope, Building2, HeartHandshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const sectors = [
  {
    id: 'pharma',
    icon: Pill,
    title: 'Pharmaceuticals & Life Sciences',
    description: 'We help pharmaceutical and biotech companies optimize R&D productivity, accelerate commercialization, and navigate market access challenges.',
    capabilities: [
      'R&D portfolio optimization',
      'Commercial launch excellence',
      'Market access strategy',
      'Supply chain transformation',
      'AI-driven drug discovery support',
    ],
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'medtech',
    icon: Stethoscope,
    title: 'Medical Technology & Devices',
    description: 'We support medtech companies in driving innovation, optimizing go-to-market strategies, and building integrated digital platforms.',
    capabilities: [
      'Product portfolio strategy',
      'Digital health integration',
      'Sales force effectiveness',
      'Manufacturing optimization',
      'Regulatory strategy',
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'payers',
    icon: Building2,
    title: 'Healthcare Payers',
    description: 'We help health plans improve market position, optimize medical costs, and deliver superior member experiences.',
    capabilities: [
      'Medical cost management',
      'Member experience design',
      'Analytics & automation',
      'Value-based care enablement',
      'Network optimization',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'providers',
    icon: HeartHandshake,
    title: 'Healthcare Providers & Services',
    description: 'We partner with health systems and provider organizations to improve clinical and operational performance while enhancing patient outcomes.',
    capabilities: [
      'Clinical operating model design',
      'Revenue cycle optimization',
      'Workforce transformation',
      'Care delivery innovation',
      'Strategic growth planning',
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80',
  },
]

export function HealthcareSectors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeSector, setActiveSector] = useState('pharma')

  const currentSector = sectors.find((s) => s.id === activeSector) || sectors[0]

  return (
    <section id="sectors" className="section-padding bg-dark-900" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Sectors We Serve
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
            Deep expertise across the healthcare ecosystem
          </h2>
        </motion.div>

        {/* Sector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {sectors.map((sector) => {
            const isActive = sector.id === activeSector
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  isActive
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                <sector.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{sector.title.split('&')[0].trim()}</span>
                <span className="sm:hidden">{sector.title.split(' ')[0]}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Active Sector Content */}
        <motion.div
          key={activeSector}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white">
                <currentSector.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{currentSector.title}</h3>
            </div>
            <p className="text-lg text-dark-400 leading-relaxed">
              {currentSector.description}
            </p>

            <div className="mt-8 bg-dark-800/50 rounded-2xl p-6 border border-dark-700">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-400 mb-4">
                Key Capabilities
              </h4>
              <ul className="space-y-3">
                {currentSector.capabilities.map((capability, index) => (
                  <motion.li
                    key={capability}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    {capability}
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-primary-300 transition-colors"
            >
              Discuss your challenges
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={currentSector.image}
                alt={currentSector.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
