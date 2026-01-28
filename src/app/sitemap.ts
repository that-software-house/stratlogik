import type { MetadataRoute } from 'next'
import { canonical, lastUpdated } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = lastUpdated()

  const routes = ['/', '/about', '/services', '/industries', '/insights', '/contact']

  return routes.map((path) => ({
    url: canonical(path),
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
