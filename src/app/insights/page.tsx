import { InsightsHero } from '@/components/insights/InsightsHero'
import { InsightsGrid } from '@/components/insights/InsightsGrid'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Insights | StratLogik',
  description:
    'Expert perspectives on strategy, digital transformation, and industry trends.',
  path: '/insights',
})

export default function InsightsPage() {
  return (
    <main>
      <InsightsHero />
      <InsightsGrid />
    </main>
  )
}
