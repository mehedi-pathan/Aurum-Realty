"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Building, Users } from "lucide-react"
import Link from "next/link"
import { getFeaturedProjects, type FeaturedProject } from "@/lib/property-data"

export default function FeaturedProjectsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [projects] = useState<FeaturedProject[]>(getFeaturedProjects())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [projects.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  if (projects.length === 0) return null

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exclusive developments and upcoming projects that define luxury living in Dubai
          </p>
        </div>

        {/* Premium Animation Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Project Image */}
                        <div className="relative aspect-[4/3] lg:aspect-auto">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.image})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-6 left-6">
                            <Badge className="bg-primary text-white px-4 py-2 text-sm font-semibold">New Project</Badge>
                          </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{project.name}</h3>
                              <div className="flex items-center space-x-2 text-gray-300 mb-4">
                                <MapPin className="w-5 h-5" />
                                <span className="text-lg">{project.location}</span>
                              </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>

                            <div className="grid grid-cols-2 gap-6">
                              <div className="flex items-center space-x-3">
                                <Building className="w-6 h-6 text-primary" />
                                <div>
                                  <p className="text-sm text-gray-400">Type</p>
                                  <p className="font-semibold text-white">{project.type}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Users className="w-6 h-6 text-primary" />
                                <div>
                                  <p className="text-sm text-gray-400">Units</p>
                                  <p className="font-semibold text-white">{project.units}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Calendar className="w-6 h-6 text-primary" />
                                <div>
                                  <p className="text-sm text-gray-400">Completion</p>
                                  <p className="font-semibold text-white">{project.completionDate}</p>
                                </div>
                              </div>
                              <div>
                                <p className="text-sm text-gray-400">Price Range</p>
                                <p className="font-semibold text-primary text-lg">{project.priceRange}</p>
                              </div>
                            </div>

                            <div className="flex space-x-4 pt-4">
                              <Button className="flex-1" asChild>
                                <Link href="/contact">Get Brochure</Link>
                              </Button>
                              <Button
                                variant="outline"
                                className="flex-1 border-gray-600 text-white hover:bg-white hover:text-gray-900 bg-transparent"
                                asChild
                              >
                                <Link href="/contact">Schedule Visit</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-gray-600 text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary scale-125" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-gray-600 text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
