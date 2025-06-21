import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import WhatsAppDemo from '@/components/sections/WhatsAppDemo'
import IntegrationsSection from '@/components/sections/IntegrationsSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import SolutionsSection from '@/components/sections/Solutions'
import CtaSection from '@/components/sections/CtaSection'
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
      <IntegrationsSection />
      <FeaturesSection />
      <SolutionsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  )
}