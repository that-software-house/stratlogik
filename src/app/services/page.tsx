import { Metadata } from 'next'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesList } from '@/components/services/ServicesList'
import { Approach } from '@/components/services/Approach'
import { Cta } from '@/components/home/Cta'

export const metadata: Metadata = {
  title: 'Services | StratLogik',
  description: 'Our comprehensive consulting services help organizations navigate complex challenges and unlock sustainable growth.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <Approach />
      <Cta />
    </main>
  )
}
