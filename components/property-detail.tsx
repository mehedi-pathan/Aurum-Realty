"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Phone,
  Mail,
  MessageCircle,
  Star,
  Check,
} from "lucide-react"
import Link from "next/link"
import { formatPrice, type Property } from "@/lib/property-data"

interface PropertyDetailProps {
  property: Property
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
    setShowContactForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="relative h-[60vh] bg-black">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${property.images[currentImage]})` }}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
          {currentImage + 1} / {property.images.length}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`w-6 h-6 ${isFavorite ? "text-red-500 fill-current" : "text-gray-600"}`} />
          </button>
          <button onClick={handleShare} className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Share2 className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-white px-4 py-2 text-lg">{property.status}</Badge>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-2 overflow-x-auto">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImage ? "border-primary" : "border-gray-200"
                }`}
              >
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                {property.featured && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 px-3 py-1">
                    Featured Property
                  </Badge>
                )}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {formatPrice(property.price, property.currency)}
              </div>
            </div>

            {/* Key Features */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Property Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Bed className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Bath className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Car className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">{property.parking}</div>
                    <div className="text-sm text-gray-600">Parking</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Maximize className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-semibold text-gray-900">{property.area.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">sq ft</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Built in {property.yearBuilt}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>{property.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Virtual Tour / Map Placeholder */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Location & Virtual Tour</h2>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Interactive Map & Virtual Tour</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    View on Map
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Agent</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${property.agent.image})` }}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{property.agent.name}</div>
                    <div className="text-sm text-gray-600">Senior Property Consultant</div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">(4.9)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button asChild className="w-full">
                    <Link href={`tel:${property.agent.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href={`mailto:${property.agent.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => setShowContactForm(!showContactForm)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>

                {/* Contact Form */}
                {showContactForm && (
                  <form onSubmit={handleSubmit} className="space-y-4 border-t border-gray-200 pt-6">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                    <Button type="submit" className="w-full">
                      Send Inquiry
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Schedule Visit */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Schedule a Visit</h3>
                <p className="text-gray-600 mb-4">Book a private viewing of this property at your convenience.</p>
                <Button className="w-full" asChild>
                  <Link href="/contact">Schedule Visit</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mortgage Calculator */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Mortgage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Price</label>
                    <Input value={formatPrice(property.price, property.currency)} disabled />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label>
                    <Input placeholder="20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (Years)</label>
                    <Input placeholder="25" />
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Calculate Monthly Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
