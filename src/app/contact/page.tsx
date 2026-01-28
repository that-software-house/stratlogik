import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { Offices } from '@/components/contact/Offices'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Contact Us | StratLogik',
  description:
    "Get in touch with StratLogik. We're here to help you transform your organization and achieve sustainable growth.",
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Offices />
    </>
  )
}
