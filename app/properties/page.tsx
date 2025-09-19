import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PropertyListings from "@/components/property-listings"

export default function PropertiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PropertyListings />
      </main>
      <Footer />
    </div>
  )
}
