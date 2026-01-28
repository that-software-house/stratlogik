import { Metadata } from 'next'
import { DataHero } from '@/components/services/data-analytics/DataHero'
import { DataCapabilities } from '@/components/services/data-analytics/DataCapabilities'
import { DataOutcomes } from '@/components/services/data-analytics/DataOutcomes'
import { DataCta } from '@/components/services/data-analytics/DataCta'

export const metadata: Metadata = {
  title: 'Data & Analytics | StratLogik',
  description: 'Transform raw data into actionable insights, predictive intelligence, and operational clarity. Data engineering, analytics, and AI-powered insights that drive real business outcomes.',
}

export default function DataAnalyticsPage() {
  return (
    <main>
      <DataHero />
      <DataCapabilities />
      <DataOutcomes />
      <DataCta />
    </main>
  )
}
