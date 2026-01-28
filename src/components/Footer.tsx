import Link from 'next/link'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Strategy & Innovation', href: '/services/strategy-innovation' },
    { name: 'Sales, Marketing & Customer Success', href: '/services/sales-marketing' },
    { name: 'Digital Transformation & Technology', href: '/services/digital-transformation' },
    { name: 'Data & Analytics', href: '/services/data-analytics' },
    { name: 'People & Change', href: '/services/people-change' },
  ],
  industries: [
    { name: 'Private Equity', href: '/industries/private-equity' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Technology', href: '/industries/technology' },
    { name: 'Financial Services', href: '/industries/financial-services' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-wide section-padding">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <span className="text-xl font-display font-bold">StratLogik</span>
            </Link>
            <p className="mt-4 text-dark-300 max-w-sm">
              Empowering organizations to navigate complexity, drive transformation, and achieve sustainable competitive advantage.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-800 text-dark-300 transition-colors hover:bg-dark-700 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-800 text-dark-300 transition-colors hover:bg-dark-700 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@stratlogik.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-800 text-dark-300 transition-colors hover:bg-dark-700 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white">Industries</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-dark-800 pt-8 sm:flex-row">
          <p className="text-sm text-dark-400">
            &copy; {new Date().getFullYear()} StratLogik. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-dark-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
