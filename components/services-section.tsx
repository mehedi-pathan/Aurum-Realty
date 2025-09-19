import { Card, CardContent } from "@/components/ui/card"
import { Home, TrendingUp, Key, Shield, Calculator, Users } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Expert guidance in buying and selling luxury properties with comprehensive market analysis.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Key,
    title: "Property Rentals",
    description: "Premium rental services for both landlords and tenants with full property management.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment consulting to maximize returns in Dubai's dynamic real estate market.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Property Management",
    description: "Complete property management services ensuring optimal maintenance and tenant satisfaction.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Calculator,
    title: "Market Analysis",
    description: "In-depth market research and valuation services for informed investment decisions.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Client Relations",
    description: "Dedicated relationship management with personalized service for all your real estate needs.",
    gradient: "from-amber-500 to-yellow-500",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Real Estate Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored services designed to meet your unique needs and investment goals in Dubai's luxury market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-8 text-center relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
