import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  HeroSection,
  ServicesSection,
  FeaturedWorksSection,
  StatementSection,
  ContactCTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturedWorksSection />
      <StatementSection />
      <ContactCTASection />
      <Footer />
    </main>
  )
}
