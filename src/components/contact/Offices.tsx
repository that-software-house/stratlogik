'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Phone } from 'lucide-react'

const offices = [
  {
    city: 'New York',
    address: '350 Fifth Avenue, Suite 4500',
    zip: 'New York, NY 10118',
    phone: '+1 (212) 555-0100',
  },
  {
    city: 'San Francisco',
    address: '101 California Street, Suite 2500',
    zip: 'San Francisco, CA 94111',
    phone: '+1 (415) 555-0100',
  },
  {
    city: 'London',
    address: '1 Canada Square, Level 25',
    zip: 'London E14 5AA, UK',
    phone: '+44 20 7555 0100',
  },
  {
    city: 'Singapore',
    address: '1 Raffles Place, Tower 2',
    zip: 'Singapore 048616',
    phone: '+65 6555 0100',
  },
]

export function Offices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-wide">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Our Offices
          </span>
          <h2 className="mt-4 heading-lg text-dark-900">
            Global presence, local expertise
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-dark-900/5 ring-1 ring-dark-900/5"
            >
              <h3 className="text-lg font-bold text-dark-900">{office.city}</h3>
              <div className="mt-4 space-y-3 text-sm text-dark-500">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-dark-400 mt-0.5" />
                  <div>
                    <p>{office.address}</p>
                    <p>{office.zip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-dark-400" />
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-primary-600">
                    {office.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
