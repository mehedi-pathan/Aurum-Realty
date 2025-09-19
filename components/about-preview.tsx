import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Building, TrendingUp, Star } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: Building, value: "500+", label: "Properties Sold", color: "text-blue-600" },
  { icon: Users, value: "1000+", label: "Happy Clients", color: "text-emerald-600" },
  { icon: Award, value: "15+", label: "Years Experience", color: "text-purple-600" },
  { icon: TrendingUp, value: "2B+", label: "AED in Sales", color: "text-orange-600" },
]

const gridImages = [
  { src: "/dubai-skyline-luxury-properties.jpg", alt: "Dubai Skyline", className: "col-span-2 row-span-2" },
  { src: "/luxury-villa-palm-jumeirah.jpg", alt: "Luxury Villa", className: "col-span-1 row-span-1" },
  { src: "/modern-apartment-downtown-dubai.jpg", alt: "Modern Apartment", className: "col-span-1 row-span-1" },
  { src: "/penthouse-burj-khalifa-view.jpg", alt: "Penthouse View", className: "col-span-1 row-span-2" },
  { src: "/dubai-marina-waterfront-properties.jpg", alt: "Marina Properties", className: "col-span-1 row-span-1" },
]

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                <Star className="w-4 h-4" />
                <span>Dubai's Premier Agency</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Redefining Luxury Real Estate in
                <span className="text-primary block">the Heart of Dubai</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Since 2009, Aurum Realty has been at the forefront of Dubai's luxury real estate market. We specialize
                in connecting discerning clients with exceptional properties that define sophisticated living in one of
                the world's most dynamic cities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced professionals combines deep market knowledge with personalized service to
                deliver results that exceed expectations. From luxury penthouses to exclusive villas, we curate only the
                finest properties for our valued clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <stat.icon
                      className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1 sm:flex-none">
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none bg-transparent">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
              {gridImages.map((image, index) => (
                <div
                  key={index}
                  className={`${image.className} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${image.src}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full animate-pulse" />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
