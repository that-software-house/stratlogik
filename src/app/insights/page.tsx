import { Metadata } from 'next'
import { InsightsHero } from '@/components/insights/InsightsHero'
import { InsightsGrid } from '@/components/insights/InsightsGrid'

export const metadata: Metadata = {
  title: 'Insights | StratLogik',
  description: 'Expert perspectives on strategy, digital transformation, and industry trends.',
}

export default function InsightsPage() {
  return (
    <main>
      <InsightsHero />
      <InsightsGrid />
    </main>
  )
}
