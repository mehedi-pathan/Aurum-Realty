import propertyData from "@/data/properties.json"

export interface Property {
  id: number
  title: string
  type: string
  price: number
  currency: string
  location: string
  area: number
  bedrooms: number
  bathrooms: number
  parking: number
  yearBuilt: number
  status: string
  featured: boolean
  images: string[]
  description: string
  amenities: string[]
  agent: {
    name: string
    phone: string
    email: string
    image: string
  }
}

export interface FeaturedProject {
  id: number
  name: string
  location: string
  type: string
  units: number
  priceRange: string
  completionDate: string
  image: string
  description: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export const getProperties = (): Property[] => {
  return propertyData.properties
}

export const getFeaturedProperties = (): Property[] => {
  return propertyData.properties.filter((property) => property.featured)
}

export const getPropertyById = (id: number): Property | undefined => {
  return propertyData.properties.find((property) => property.id === id)
}

export const getFeaturedProjects = (): FeaturedProject[] => {
  return propertyData.featuredProjects
}

export const getTestimonials = (): Testimonial[] => {
  return propertyData.testimonials
}

export const formatPrice = (price: number, currency = "AED"): string => {
  return new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const getPropertyTypes = (): string[] => {
  const types = propertyData.properties.map((property) => property.type)
  return [...new Set(types)]
}

export const getLocations = (): string[] => {
  const locations = propertyData.properties.map((property) => property.location)
  return [...new Set(locations)]
}
