import type { Metadata } from 'next'

const fallbackUrl = 'stratlogik.netlify.app'

export const siteConfig = {
  name: 'StratLogik',
  description:
    'StratLogik is a leading strategy and management consulting firm helping organizations transform, grow, and achieve sustainable competitive advantage.',
  keywords: [
    'strategy consulting',
    'management consulting',
    'business transformation',
    'growth strategy',
    'digital transformation',
  ],
  locale: 'en_US',
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
}

const normalizePath = (path: string) => {
  if (!path || path === '/') return '/'
  return path.endsWith('/') ? path : `${path}/`
}

export const canonical = (path = '/') =>
  new URL(normalizePath(path), siteConfig.url || fallbackUrl).toString()

export const lastUpdated = () => new Date()

type PageMetaInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  type?: 'website' | 'article'
}

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords,
  type = 'website',
}: PageMetaInput) => {
  const pageKeywords = keywords ?? siteConfig.keywords
  const url = canonical(path)

  return {
    title,
    description,
    keywords: pageKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  } satisfies Metadata
}
