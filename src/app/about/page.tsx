import { AboutHero } from '@/components/about/AboutHero'
import { Values } from '@/components/about/Values'
import { Leadership } from '@/components/about/Leadership'
import { Cta } from '@/components/home/Cta'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'About Us | StratLogik',
  description:
    'Learn about StratLogik, our mission, values, and the leadership team driving transformation for organizations worldwide.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Values />
      <Leadership />
      <Cta />
    </>
  )
}
