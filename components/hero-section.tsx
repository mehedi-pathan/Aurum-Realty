"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Home, DollarSign } from "lucide-react"
import Link from "next/link"

const heroImages = [
  "/luxury-dubai-skyline-with-burj-khalifa.jpg",
  "/palm-jumeirah-aerial-view-luxury-villas.jpg",
  "/dubai-marina-luxury-apartments-night-view.jpg",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Discover Luxury
            <span className="block text-primary">Real Estate in Dubai</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto text-pretty">
            Your gateway to premium properties and exclusive investment opportunities in the world's most dynamic city
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto mb-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-gray-900"
                />
              </div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="h-12 text-gray-900">
                  <Home className="w-5 h-5 mr-2 text-gray-400" />
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="h-12 text-gray-900">
                  <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="downtown">Downtown Dubai</SelectItem>
                  <SelectItem value="marina">Dubai Marina</SelectItem>
                  <SelectItem value="palm">Palm Jumeirah</SelectItem>
                  <SelectItem value="jbr">JBR</SelectItem>
                  <SelectItem value="difc">DIFC</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="h-12 text-gray-900">
                  <DollarSign className="w-5 h-5 mr-2 text-gray-400" />
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2m">1M - 2M AED</SelectItem>
                  <SelectItem value="2-5m">2M - 5M AED</SelectItem>
                  <SelectItem value="5-10m">5M - 10M AED</SelectItem>
                  <SelectItem value="10m+">10M+ AED</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button asChild className="w-full md:w-auto mt-4 h-12 px-8 text-lg">
              <Link href="/properties">Search Properties</Link>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/properties">Explore Properties</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            const featuredSection = document.getElementById("featured-properties")
            featuredSection?.scrollIntoView({ behavior: "smooth" })
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-primary transition-colors cursor-pointer"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </button>
      </div>
    </section>
  )
}
