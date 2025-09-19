import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Building, TrendingUp, Target, Eye, Heart, Star, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

const stats = [
  { icon: Building, value: "500+", label: "Properties Sold", description: "Luxury properties successfully sold" },
  { icon: Users, value: "1000+", label: "Happy Clients", description: "Satisfied customers worldwide" },
  { icon: Award, value: "15+", label: "Years Experience", description: "In Dubai's real estate market" },
  { icon: TrendingUp, value: "2B+", label: "AED in Sales", description: "Total transaction value" },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every transaction, ensuring the highest standards of service and professionalism.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Complete transparency in all our dealings, providing clear information and honest advice to our clients.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Our clients are at the heart of everything we do. We tailor our services to meet their unique needs.",
  },
]

const team = [
  {
    name: "Sarah Al-Mansouri",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years in Dubai's real estate market, Sarah founded Aurum Realty with a vision to redefine luxury property services.",
    linkedin: "#",
    email: "sarah@aurumrealty.ae",
    phone: "+971 50 123 4567",
  },
  {
    name: "Ahmed Hassan",
    role: "Head of Sales",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ahmed leads our sales team with expertise in luxury properties and investment opportunities across Dubai's prime locations.",
    linkedin: "#",
    email: "ahmed@aurumrealty.ae",
    phone: "+971 50 234 5678",
  },
  {
    name: "Fatima Al-Zahra",
    role: "Senior Property Consultant",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Fatima specializes in residential properties and has helped hundreds of families find their dream homes in Dubai.",
    linkedin: "#",
    email: "fatima@aurumrealty.ae",
    phone: "+971 50 345 6789",
  },
  {
    name: "Michael Thompson",
    role: "Commercial Director",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael oversees our commercial real estate division, focusing on office spaces and investment properties in DIFC.",
    linkedin: "#",
    email: "michael@aurumrealty.ae",
    phone: "+971 50 456 7890",
  },
]

const milestones = [
  { year: "2009", title: "Company Founded", description: "Aurum Realty established in Dubai" },
  { year: "2012", title: "100 Properties Sold", description: "Reached our first major milestone" },
  { year: "2015", title: "Team Expansion", description: "Grew to 20+ real estate professionals" },
  { year: "2018", title: "1B AED in Sales", description: "Achieved 1 billion AED in total sales" },
  { year: "2021", title: "Digital Innovation", description: "Launched virtual property tours" },
  { year: "2024", title: "Market Leader", description: "Recognized as Dubai's premier luxury agency" },
]

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2">Established 2009</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About Aurum Realty</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty">
              Dubai's premier luxury real estate agency, dedicated to connecting discerning clients with exceptional
              properties in the world's most dynamic city.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2009 by Sarah Al-Mansouri, Aurum Realty began with a simple yet ambitious vision: to
                    redefine luxury real estate services in Dubai. What started as a boutique agency has grown into one
                    of the city's most respected real estate firms.
                  </p>
                  <p>
                    Our journey has been marked by unwavering commitment to excellence, deep market expertise, and
                    genuine care for our clients' needs. We've witnessed Dubai's transformation into a global real
                    estate hub and have been proud partners in our clients' success stories.
                  </p>
                  <p>
                    Today, Aurum Realty stands as a testament to what's possible when passion meets professionalism. We
                    continue to set new standards in luxury real estate, one exceptional property at a time.
                  </p>
                </div>
              </div>
              <Button asChild size="lg">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/modern-real-estate-office-dubai-team-professional.jpg')`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones that have shaped Aurum Realty into what it is today</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to helping you achieve your real estate goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex space-x-3">
                          <Link
                            href={member.linkedin}
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Linkedin className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`mailto:${member.email}`}
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Mail className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`tel:${member.phone}`}
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex items-center mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">(4.9)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or investing, our team is here to guide you through every step of your real
            estate journey in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/properties">View Properties</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
