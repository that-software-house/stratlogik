'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = {
  services: {
    title: 'Services',
    items: [
      { name: 'Strategy & Innovation', href: '/services/strategy-innovation', description: 'Define winning strategies and drive innovation' },
      { name: 'Sales, Marketing & Customer Success', href: '/services/sales-marketing', description: 'Accelerate revenue and customer growth' },
      { name: 'Digital Transformation & Technology', href: '/services/digital-transformation', description: 'Modernize operations with cutting-edge technology' },
      { name: 'Data & Analytics', href: '/services/data-analytics', description: 'Turn data into actionable insights' },
      { name: 'People & Change', href: '/services/people-change', description: 'Transform culture and drive organizational change' },
    ],
  },
  industries: {
    title: 'Industries',
    items: [
      { name: 'Private Equity', href: '/industries/private-equity', description: 'Value creation for portfolio companies' },
      { name: 'Healthcare & Life Sciences', href: '/industries/healthcare', description: 'Navigate complex regulatory landscapes' },
      { name: 'Technology', href: '/industries/technology', description: 'Scale and innovate in fast-moving markets' },
      { name: 'Financial Services', href: '/industries/financial-services', description: 'Transform banking and insurance' },
    ],
  },
  insights: { title: 'Insights', href: '/insights' },
  about: { title: 'About', href: '/about' },
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-accent-500">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className={cn(
              'text-xl font-display font-bold transition-colors',
              isScrolled ? 'text-dark-900' : 'text-white'
            )}>
              StratLogik
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                  isScrolled ? 'text-dark-600 hover:text-dark-900' : 'text-white/90 hover:text-white'
                )}
              >
                {navigation.services.title}
                <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', activeDropdown === 'services' && 'rotate-180')} />
              </button>
              <div
                className={cn(
                  'absolute left-0 top-full w-80 pt-2 transition-all duration-200',
                  activeDropdown === 'services'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                )}
              >
                <div className="rounded-xl bg-white p-2 shadow-xl ring-1 ring-dark-900/5">
                  {navigation.services.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg p-3 transition-colors hover:bg-dark-50"
                    >
                      <div className="font-medium text-dark-900">{item.name}</div>
                      <div className="mt-1 text-sm text-dark-500">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors',
                  isScrolled ? 'text-dark-600 hover:text-dark-900' : 'text-white/90 hover:text-white'
                )}
              >
                {navigation.industries.title}
                <ChevronDown className={cn('h-4 w-4 transition-transform duration-200', activeDropdown === 'industries' && 'rotate-180')} />
              </button>
              <div
                className={cn(
                  'absolute left-0 top-full w-80 pt-2 transition-all duration-200',
                  activeDropdown === 'industries'
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                )}
              >
                <div className="rounded-xl bg-white p-2 shadow-xl ring-1 ring-dark-900/5">
                  {navigation.industries.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg p-3 transition-colors hover:bg-dark-50"
                    >
                      <div className="font-medium text-dark-900">{item.name}</div>
                      <div className="mt-1 text-sm text-dark-500">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Simple Links */}
            <Link
              href={navigation.insights.href}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                isScrolled ? 'text-dark-600 hover:text-dark-900' : 'text-white/90 hover:text-white'
              )}
            >
              {navigation.insights.title}
            </Link>
            <Link
              href={navigation.about.href}
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors',
                isScrolled ? 'text-dark-600 hover:text-dark-900' : 'text-white/90 hover:text-white'
              )}
            >
              {navigation.about.title}
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(
                'btn text-sm',
                isScrolled
                  ? 'bg-dark-900 text-white hover:bg-dark-800'
                  : 'bg-white text-dark-900 hover:bg-white/90'
              )}
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn('h-6 w-6', isScrolled ? 'text-dark-900' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', isScrolled ? 'text-dark-900' : 'text-white')} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - CSS only */}
      <div
        className={cn(
          'lg:hidden bg-white border-t overflow-hidden transition-all duration-300',
          mobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container-wide py-4 space-y-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-dark-400">Services</p>
            {navigation.services.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-dark-600 hover:text-dark-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-dark-400">Industries</p>
            {navigation.industries.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-dark-600 hover:text-dark-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="space-y-2 pt-2 border-t">
            <Link
              href="/insights"
              className="block py-2 text-dark-600 hover:text-dark-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="block py-2 text-dark-600 hover:text-dark-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <Link
            href="/contact"
            className="btn-primary w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
