'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="rounded-2xl bg-green-50 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-dark-900">Thank you!</h3>
                <p className="mt-2 text-dark-500">
                  We&apos;ve received your message and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-dark-900">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-2 block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 ring-1 ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-primary-600"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-dark-900">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-2 block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 ring-1 ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-primary-600"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-900">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 ring-1 ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-primary-600"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark-900">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 ring-1 ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-primary-600"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-dark-900">
                    Area of interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-2 block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 ring-1 ring-dark-200 focus:ring-2 focus:ring-primary-600"
                  >
                    <option value="">Select an option</option>
                    <option value="strategy">Strategy Consulting</option>
                    <option value="digital">Digital Transformation</option>
                    <option value="ma">M&A Advisory</option>
                    <option value="operations">Operations Excellence</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-lg border-0 bg-dark-50 px-4 py-3 text-dark-900 ring-1 ring-dark-200 placeholder:text-dark-400 focus:ring-2 focus:ring-primary-600"
                    placeholder="Tell us about your project or challenge..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pl-8"
          >
            <h2 className="text-2xl font-bold text-dark-900">
              How can we help?
            </h2>
            <p className="mt-4 text-dark-500">
              Our team of experts is ready to discuss your challenges and explore how we can support your organization&apos;s growth and transformation.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-dark-900">General Inquiries</h3>
                <a href="mailto:contact@stratlogik.com" className="text-primary-600 hover:text-primary-700">
                  contact@stratlogik.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Media & Press</h3>
                <a href="mailto:press@stratlogik.com" className="text-primary-600 hover:text-primary-700">
                  press@stratlogik.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-dark-900">Careers</h3>
                <a href="mailto:careers@stratlogik.com" className="text-primary-600 hover:text-primary-700">
                  careers@stratlogik.com
                </a>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-dark-50 p-6">
              <h3 className="font-semibold text-dark-900">What to expect</h3>
              <ul className="mt-4 space-y-3 text-sm text-dark-500">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-600">1</span>
                  <span>We&apos;ll respond within 24 business hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-600">2</span>
                  <span>A partner will schedule an initial consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-600">3</span>
                  <span>We&apos;ll provide a tailored proposal</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
