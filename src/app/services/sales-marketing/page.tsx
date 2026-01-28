import { Metadata } from 'next'
import { SalesHero } from '@/components/services/sales-marketing/SalesHero'
import { SalesOverview } from '@/components/services/sales-marketing/SalesOverview'
import { SalesCapabilities } from '@/components/services/sales-marketing/SalesCapabilities'
import { SalesApproach } from '@/components/services/sales-marketing/SalesApproach'
import { SalesOutcomes } from '@/components/services/sales-marketing/SalesOutcomes'
import { SalesCta } from '@/components/services/sales-marketing/SalesCta'

export const metadata: Metadata = {
  title: 'Sales, Marketing & Customer Success | StratLogik',
  description: 'Integrated sales, marketing, and customer success strategies that drive revenue, retention, and measurable impact. Align your revenue engine for scalable growth.',
}

export default function SalesMarketingPage() {
  return (
    <main>
      <SalesHero />
      <SalesOverview />
      <SalesCapabilities />
      <SalesApproach />
      <SalesOutcomes />
      <SalesCta />
    </main>
  )
}
