"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTestimonials, type Testimonial } from "@/lib/property-data"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonials] = useState<Testimonial[]>(getTestimonials())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  if (testimonials.length === 0) return null

  const currentReview = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">
            Hear what our satisfied clients have to say about their experience with Aurum Realty
          </p>
        </div>

        <div className="relative">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-white">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentReview.content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div
                  className="w-16 h-16 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${currentReview.image})` }}
                />
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">{currentReview.name}</div>
                  <div className="text-gray-600">{currentReview.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-primary scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
