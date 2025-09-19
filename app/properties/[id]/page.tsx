import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PropertyDetail from "@/components/property-detail"
import { getPropertyById } from "@/lib/property-data"

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const propertyId = Number.parseInt(params.id)
  const property = getPropertyById(propertyId)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <PropertyDetail property={property} />
      </main>
      <Footer />
    </div>
  )
}
