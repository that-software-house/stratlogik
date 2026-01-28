import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesList } from '@/components/services/ServicesList'
import { Approach } from '@/components/services/Approach'
import { Cta } from '@/components/home/Cta'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Services | StratLogik',
  description:
    'Our comprehensive consulting services help organizations navigate complex challenges and unlock sustainable growth.',
  path: '/services',
})

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
