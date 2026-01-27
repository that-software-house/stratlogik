import { Hero } from '@/components/home/Hero'
import { Stats } from '@/components/home/Stats'
import { Services } from '@/components/home/Services'
import { Industries } from '@/components/home/Industries'
import { Insights } from '@/components/home/Insights'
import { Cta } from '@/components/home/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Insights />
      <Cta />
    </>
  )
}
