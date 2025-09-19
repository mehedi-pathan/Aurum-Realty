import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
