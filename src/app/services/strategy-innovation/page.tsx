import { Metadata } from 'next'
import { StrategyHero } from '@/components/services/strategy-innovation/StrategyHero'
import { StrategyOverview } from '@/components/services/strategy-innovation/StrategyOverview'
import { StrategyCapabilities } from '@/components/services/strategy-innovation/StrategyCapabilities'
import { StrategyApproach } from '@/components/services/strategy-innovation/StrategyApproach'
import { StrategyOutcomes } from '@/components/services/strategy-innovation/StrategyOutcomes'
import { StrategyCta } from '@/components/services/strategy-innovation/StrategyCta'

export const metadata: Metadata = {
  title: 'Strategy & Innovation | StratLogik',
  description: 'Strategic planning and innovation services that move you forward. From strategic clarity to real business outcomes — we help you define where to play, how to win, and make it happen.',
}

export default function StrategyInnovationPage() {
  return (
    <main>
      <StrategyHero />
      <StrategyOverview />
      <StrategyCapabilities />
      <StrategyApproach />
      <StrategyOutcomes />
      <StrategyCta />
    </main>
  )
}
