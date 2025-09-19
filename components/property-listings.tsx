"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Grid,
  List,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  Heart,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  Users,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { getProperties, getPropertyTypes, getLocations, formatPrice, type Property } from "@/lib/property-data"
import DualTestimonialSlider from "./dual-testimonial-slider"

const PROPERTIES_PER_PAGE = 6

export default function PropertyListings() {
  const [properties] = useState<Property[]>(getProperties())
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [favorites, setFavorites] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const propertyTypes = getPropertyTypes()
  const locations = getLocations()

  const filteredProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesType = selectedType === "all" || property.type === selectedType
      const matchesLocation = selectedLocation === "all" || property.location === selectedLocation
      const matchesStatus = selectedStatus === "all" || property.status === selectedStatus

      let matchesPrice = true
      if (priceRange !== "all") {
        const price = property.price
        switch (priceRange) {
          case "1-2m":
            matchesPrice = price >= 1000000 && price <= 2000000
            break
          case "2-5m":
            matchesPrice = price >= 2000000 && price <= 5000000
            break
          case "5-10m":
            matchesPrice = price >= 5000000 && price <= 10000000
            break
          case "10m+":
            matchesPrice = price >= 10000000
            break
        }
      }

      return matchesSearch && matchesType && matchesLocation && matchesStatus && matchesPrice
    })

    // Sort properties
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filtered.sort((a, b) => b.yearBuilt - a.yearBuilt)
        break
      case "area":
        filtered.sort((a, b) => b.area - a.area)
        break
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    return filtered
  }, [properties, searchQuery, selectedType, selectedLocation, selectedStatus, priceRange, sortBy])

  const totalPages = Math.ceil(filteredProperties.length / PROPERTIES_PER_PAGE)
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE
  const paginatedProperties = filteredProperties.slice(startIndex, startIndex + PROPERTIES_PER_PAGE)

  const toggleFavorite = (propertyId: number) => {
    setFavorites((prev) => (prev.includes(propertyId) ? prev.filter((id) => id !== propertyId) : [...prev, propertyId]))
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedType("all")
    setSelectedLocation("all")
    setSelectedStatus("all")
    setPriceRange("all")
    setSortBy("featured")
    setCurrentPage(1)
  }

  const handleFilterChange = (filterFn: () => void) => {
    filterFn()
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">Premium Properties</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Discover exceptional properties in Dubai's most prestigious locations. Your dream home awaits.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <Input
                placeholder="Search by title, location, or description..."
                value={searchQuery}
                onChange={(e) => handleFilterChange(() => setSearchQuery(e.target.value))}
                className="pl-14 h-14 text-lg border-2 border-gray-200 focus:border-primary rounded-xl"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Select value={selectedType} onValueChange={(value) => handleFilterChange(() => setSelectedType(value))}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedLocation}
                onValueChange={(value) => handleFilterChange(() => setSelectedLocation(value))}
              >
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedStatus}
                onValueChange={(value) => handleFilterChange(() => setSelectedStatus(value))}
              >
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="For Rent">For Rent</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={(value) => handleFilterChange(() => setPriceRange(value))}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="1-2m">1M - 2M AED</SelectItem>
                  <SelectItem value="2-5m">2M - 5M AED</SelectItem>
                  <SelectItem value="5-10m">5M - 10M AED</SelectItem>
                  <SelectItem value="10m+">10M+ AED</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="area">Largest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Filter Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-700">{filteredProperties.length} properties found</span>
                {(searchQuery ||
                  selectedType !== "all" ||
                  selectedLocation !== "all" ||
                  selectedStatus !== "all" ||
                  priceRange !== "all") && (
                  <Button variant="outline" size="sm" onClick={clearFilters} className="rounded-xl bg-transparent">
                    Clear Filters
                  </Button>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-xl"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-xl"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-6">
              <Filter className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No properties found</h3>
            <p className="text-lg text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
            <Button onClick={clearFilters} size="lg" className="rounded-xl">
              Clear All Filters
            </Button>
          </div>
        ) : (
          <>
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
              {paginatedProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  viewMode={viewMode}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={() => toggleFavorite(property.id)}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-xl"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-10 h-10 rounded-xl"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-xl"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dubai Real Estate Market</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest market trends and insights from our expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Market Growth",
                value: "+12.5%",
                description: "Property values increased in Q4 2024",
                color: "text-green-600",
              },
              {
                icon: Award,
                title: "Premium Locations",
                value: "25+",
                description: "Exclusive areas across Dubai",
                color: "text-blue-600",
              },
              {
                icon: Users,
                title: "Happy Clients",
                value: "2,000+",
                description: "Successful property transactions",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <DualTestimonialSlider />

      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Ready to Find Your Dream Property?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty">
            Let our expert team help you discover the perfect property in Dubai's most prestigious locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold rounded-xl">
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Get Expert Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl"
            >
              <a href="tel:+97141234567">
                <Phone className="w-5 h-5 mr-2" />
                Call: +971 4 123 4567
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

interface PropertyCardProps {
  property: Property
  viewMode: "grid" | "list"
  isFavorite: boolean
  onToggleFavorite: () => void
}

function PropertyCard({ property, viewMode, isFavorite, onToggleFavorite }: PropertyCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-auto">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${property.images[0]})` }}
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <Badge className="bg-primary text-white rounded-full">{property.status}</Badge>
                {property.featured && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 rounded-full">
                    Featured
                  </Badge>
                )}
              </div>
              <button
                onClick={onToggleFavorite}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-current" : "text-gray-600"}`} />
              </button>
            </div>

            {/* Content */}
            <div className="md:col-span-2 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {formatPrice(property.price, property.currency)}
                  </div>
                  <div className="text-sm text-gray-600">{property.type}</div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Bed className="w-4 h-4" />
                  <span className="text-sm">{property.bedrooms}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Bath className="w-4 h-4" />
                  <span className="text-sm">{property.bathrooms}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Car className="w-4 h-4" />
                  <span className="text-sm">{property.parking}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Maximize className="w-4 h-4" />
                  <span className="text-sm">{property.area.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button asChild className="flex-1 rounded-xl">
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
                <Button variant="outline" asChild className="flex-1 bg-transparent rounded-xl">
                  <Link href="/contact">Contact Agent</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl">
      <CardContent className="p-0">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url(${property.images[0]})` }}
          />
          <div className="absolute top-4 left-4 flex space-x-2">
            <Badge className="bg-primary text-white rounded-full">{property.status}</Badge>
            {property.featured && (
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 rounded-full">
                Featured
              </Badge>
            )}
          </div>
          <button
            onClick={onToggleFavorite}
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-current" : "text-gray-600"}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{property.title}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
            <div className="text-xl font-bold text-primary">{formatPrice(property.price, property.currency)}</div>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Car className="w-4 h-4" />
              <span>{property.parking}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Maximize className="w-4 h-4" />
              <span>{property.area.toLocaleString()}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

          <div className="flex space-x-2">
            <Button asChild size="sm" className="flex-1 rounded-xl">
              <Link href={`/properties/${property.id}`}>View Details</Link>
            </Button>
            <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent rounded-xl">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
