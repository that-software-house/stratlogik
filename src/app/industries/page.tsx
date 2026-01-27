import { Metadata } from 'next'
import { IndustriesHero } from '@/components/industries/IndustriesHero'
import { IndustriesList } from '@/components/industries/IndustriesList'
import { Cta } from '@/components/home/Cta'

export const metadata: Metadata = {
  title: 'Industries | StratLogik',
  description: 'Deep industry expertise across Private Equity, Healthcare, Technology, and Financial Services.',
}

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesList />
      <Cta />
    </main>
  )
}
