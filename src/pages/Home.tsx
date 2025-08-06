import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import WhatsAppDemo from '@/components/sections/WhatsAppDemo'
import BeforeAfterSection from '@/components/sections/BeforeAfterSection'
import IntegrationsSection from '@/components/sections/IntegrationsSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import PricingSection from '@/components/sections/PricingSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/ui/Footer'

interface HomeProps {
  isAnimationComplete: boolean;
}

export default function Home({ isAnimationComplete }: HomeProps) {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Navbar isAnimationComplete={isAnimationComplete} />
      <Hero />
      <WhatsAppDemo />
      <BeforeAfterSection />
      <IntegrationsSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  )
}