"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Property Investor",
    content:
      "Aurum Realty's expertise in Dubai's market is unmatched. They helped me secure an excellent investment property with outstanding ROI potential.",
    rating: 5,
    image: "/professional-woman-investor.png",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "First-time Buyer",
    content:
      "The team guided me through every step of buying my first home. Professional, knowledgeable, and trustworthy service throughout.",
    rating: 5,
    image: "/middle-eastern-businessman.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Villa Owner",
    content:
      "Found my dream villa in Palm Jumeirah through Aurum Realty. Their service exceeded all expectations and made the process seamless.",
    rating: 5,
    image: "/elegant-woman-villa-owner.jpg",
  },
  {
    name: "Michael Chen",
    role: "Apartment Buyer",
    content:
      "Exceptional service from start to finish. The team's knowledge of Dubai Marina helped me find the perfect waterfront apartment.",
    rating: 5,
    image: "/asian-businessman-apartment.jpg",
  },
  {
    name: "Fatima Al-Zahra",
    role: "Real Estate Investor",
    content:
      "Aurum Realty's market insights are invaluable. They've helped me build a diverse property portfolio across Dubai's prime locations.",
    rating: 5,
    image: "/arab-businesswoman-investor.jpg",
  },
  {
    name: "James Wilson",
    role: "Penthouse Owner",
    content:
      "The luxury penthouse they found for me in Downtown Dubai is beyond my expectations. Truly professional and dedicated team.",
    rating: 5,
    image: "/british-gentleman-penthouse.jpg",
  },
]

export default function DualTestimonialSlider() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Image src="/aurum-realty-logo.png" alt="Aurum Realty" width={60} height={60} className="mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from satisfied clients who found their dream properties with Aurum Realty.
          </p>
        </div>

        <div className="relative">
          {/* Top Layer - Moving Left Infinitely */}
          <div className="mb-8">
            <div className="flex animate-scroll-left">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`top-${index}`} className="w-80 px-4 flex-shrink-0">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Layer - Moving Right Infinitely */}
          <div>
            <div className="flex animate-scroll-right">
              {duplicatedTestimonials
                .slice()
                .reverse()
                .map((testimonial, index) => (
                  <div key={`bottom-${index}`} className="w-80 px-4 flex-shrink-0">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-primary/5 to-secondary/5">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="relative w-12 h-12 mr-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
