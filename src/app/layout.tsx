import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { MotionProvider } from '@/components/MotionProvider'
import { siteConfig } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'StratLogik | Strategy & Management Consulting',
    template: '%s | StratLogik',
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: 'StratLogik',
  authors: [{ name: 'StratLogik' }],
  category: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: 'StratLogik',
    title: 'StratLogik | Strategy & Management Consulting',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StratLogik | Strategy & Management Consulting',
    description: siteConfig.description,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'StratLogik',
              url: siteConfig.url,
            }),
          }}
        />
        <Header />
        <MotionProvider>
          <main>{children}</main>
        </MotionProvider>
        <Footer />
      </body>
    </html>
  )
}
