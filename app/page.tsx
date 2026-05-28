import { WarningBar } from "@/components/warning-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import StatsBanner from "@/components/stats-banner" // <-- Removed the curly braces here!
import { VisionSection } from "@/components/vision-section"
import { AgendasSection } from "@/components/agendas-section"
import { EligibilitySection } from "@/components/eligibility-section"
import { FounderSection } from "@/components/founder-section"
import { JoinForm } from "@/components/join-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Top Warning Bar */}
      <WarningBar />
      
      {/* 2. Header / Navbar */}
      <Navbar />
      
      {/* 3. Hero Section */}
      <HeroSection />
      
      {/* 4. Stats Banner */}
      <StatsBanner />
      
      {/* 5. Vision Section */}
      <VisionSection />
      
      {/* 6. Manifesto / Agendas Section */}
      <AgendasSection />
      
      {/* 7. Eligibility Section */}
      <EligibilitySection />
      
      {/* 8. Founder Section */}
      <FounderSection />
      
      {/* 10. Join Form */}
      <JoinForm />
      
      {/* 11. Dark Footer */}
      <Footer />
    </main>
  )
}