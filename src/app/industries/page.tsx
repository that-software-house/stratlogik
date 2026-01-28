import { IndustriesHero } from '@/components/industries/IndustriesHero'
import { IndustriesList } from '@/components/industries/IndustriesList'
import { Cta } from '@/components/home/Cta'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Industries | StratLogik',
  description:
    'Deep industry expertise across Private Equity, Healthcare, Technology, and Financial Services.',
  path: '/industries',
})

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesList />
      <Cta />
    </main>
  )
}
