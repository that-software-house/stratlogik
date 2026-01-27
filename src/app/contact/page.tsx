import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { Offices } from '@/components/contact/Offices'

export const metadata: Metadata = {
  title: 'Contact Us | StratLogik',
  description: 'Get in touch with StratLogik. We\'re here to help you transform your organization and achieve sustainable growth.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <Offices />
    </>
  )
}
