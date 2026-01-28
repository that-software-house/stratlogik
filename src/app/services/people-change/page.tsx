import { Metadata } from 'next'
import { PeopleHero } from '@/components/services/people-change/PeopleHero'
import { PeopleCapabilities } from '@/components/services/people-change/PeopleCapabilities'
import { PeopleOutcomes } from '@/components/services/people-change/PeopleOutcomes'
import { PeopleCta } from '@/components/services/people-change/PeopleCta'

export const metadata: Metadata = {
  title: 'People & Change | StratLogik',
  description: 'People-driven change that sticks. From change management to leadership alignment and culture design, we help organizations navigate transformation with a people-first approach.',
}

export default function PeopleChangePage() {
  return (
    <main>
      <PeopleHero />
      <PeopleCapabilities />
      <PeopleOutcomes />
      <PeopleCta />
    </main>
  )
}
