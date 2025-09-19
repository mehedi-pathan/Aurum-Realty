"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Bed, Bath, Car, Maximize } from "lucide-react"
import Link from "next/link"
import { getFeaturedProperties, formatPrice, type Property } from "@/lib/property-data"

export default function FeaturedPropertiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [properties] = useState<Property[]>(getFeaturedProperties())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [properties.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length)
  }

  if (properties.length === 0) return null

  const currentProperty = properties[currentSlide]

  return (
    <section id="featured-properties" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in Dubai's most prestigious locations
          </p>
        </div>

        {/* Two-Layer Synchronized Slider */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Property Images */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="aspect-[4/3] relative">
              {currentProperty.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-800 ${
                    index === 0 ? "opacity-100 animate-slide-in-left" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-white px-3 py-1 text-sm font-semibold">
                  {currentProperty.status}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-900 px-3 py-1 text-sm font-semibold">
                  Featured
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Side - Property Details */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{currentProperty.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{currentProperty.location}</p>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {formatPrice(currentProperty.price, currentProperty.currency)}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Bed className="w-5 h-5" />
                  <span className="font-medium">{currentProperty.bedrooms} Beds</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Bath className="w-5 h-5" />
                  <span className="font-medium">{currentProperty.bathrooms} Baths</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Car className="w-5 h-5" />
                  <span className="font-medium">{currentProperty.parking} Parking</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Maximize className="w-5 h-5" />
                  <span className="font-medium">{currentProperty.area.toLocaleString()} sq ft</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{currentProperty.description}</p>

              <div className="flex flex-wrap gap-2">
                {currentProperty.amenities.slice(0, 4).map((amenity, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {amenity}
                  </Badge>
                ))}
                {currentProperty.amenities.length > 4 && (
                  <Badge variant="outline" className="px-3 py-1">
                    +{currentProperty.amenities.length - 4} more
                  </Badge>
                )}
              </div>

              <div className="flex space-x-4">
                <Button asChild className="flex-1">
                  <Link href={`/properties/${currentProperty.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" asChild className="flex-1 bg-transparent">
                  <Link href="/contact">Contact Agent</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex space-x-1.5">
            {properties.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary scale-150" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
