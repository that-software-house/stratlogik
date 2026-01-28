import { Metadata } from 'next'
import { DigitalHero } from '@/components/services/digital-transformation/DigitalHero'
import { DigitalCapabilities } from '@/components/services/digital-transformation/DigitalCapabilities'
import { DigitalOutcomes } from '@/components/services/digital-transformation/DigitalOutcomes'
import { DigitalCta } from '@/components/services/digital-transformation/DigitalCta'

export const metadata: Metadata = {
  title: 'Digital Transformation & Technology | StratLogik',
  description: 'Transform your business with AI, intelligent automation, and modern technology solutions. We partner with organizations to build digital systems that are efficient, scalable, and intelligent.',
}

export default function DigitalTransformationPage() {
  return (
    <main>
      <DigitalHero />
      <DigitalCapabilities />
      <DigitalOutcomes />
      <DigitalCta />
    </main>
  )
}
