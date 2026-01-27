import { Metadata } from 'next'
import { HealthcareHero } from '@/components/industries/healthcare/HealthcareHero'
import { HealthcareOverview } from '@/components/industries/healthcare/HealthcareOverview'
import { HealthcareSectors } from '@/components/industries/healthcare/HealthcareSectors'
import { HealthcareServices } from '@/components/industries/healthcare/HealthcareServices'
import { HealthcareInsights } from '@/components/industries/healthcare/HealthcareInsights'
import { HealthcareCta } from '@/components/industries/healthcare/HealthcareCta'

export const metadata: Metadata = {
  title: 'Healthcare & Life Sciences | StratLogik',
  description: 'Strategic consulting for healthcare organizations. We help pharma, medtech, payers, and providers navigate transformation and improve patient outcomes.',
}

export default function HealthcarePage() {
  return (
    <main>
      <HealthcareHero />
      <HealthcareOverview />
      <HealthcareSectors />
      <HealthcareServices />
      <HealthcareInsights />
      <HealthcareCta />
    </main>
  )
}
