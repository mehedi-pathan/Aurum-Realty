import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import FeaturedPropertiesSlider from "@/components/featured-properties-slider"
import FeaturedProjectsSlider from "@/components/featured-projects-slider"
import ServicesSection from "@/components/services-section"
import AboutPreview from "@/components/about-preview"
import TestimonialsSection from "@/components/testimonials-section"
import MarketInsights from "@/components/market-insights"
import ContactCTA from "@/components/contact-cta"
import PartnersSection from "@/components/partners-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedPropertiesSlider />
        <ServicesSection />
        <FeaturedProjectsSlider />
        <AboutPreview />
        <TestimonialsSection />
        <MarketInsights />
        <ContactCTA />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
