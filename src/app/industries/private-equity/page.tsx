import { Metadata } from 'next'
import { PEHero } from '@/components/industries/private-equity/PEHero'
import { PEOverview } from '@/components/industries/private-equity/PEOverview'
import { PELifecycle } from '@/components/industries/private-equity/PELifecycle'
import { PEServices } from '@/components/industries/private-equity/PEServices'
import { PEResults } from '@/components/industries/private-equity/PEResults'
import { PECta } from '@/components/industries/private-equity/PECta'

export const metadata: Metadata = {
  title: 'Private Equity | StratLogik',
  description: 'Strategic consulting for private equity firms and portfolio companies. We drive value creation across the investment lifecycle.',
}

export default function PrivateEquityPage() {
  return (
    <main>
      <PEHero />
      <PEOverview />
      <PELifecycle />
      <PEServices />
      <PEResults />
      <PECta />
    </main>
  )
}
