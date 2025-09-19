"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Building,
  User,
  Calendar,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Shield,
  Headphones,
  Globe,
  Star,
  ArrowRight,
  ExternalLink,
} from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["Business Bay, Dubai", "United Arab Emirates"],
    action: "Get Directions",
    color: "bg-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+971 4 123 4567", "+971 50 123 4567"],
    action: "Call Now",
    color: "bg-green-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@aurumrealty.ae", "sales@aurumrealty.ae"],
    action: "Send Email",
    color: "bg-purple-500",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat: 10:00 AM - 5:00 PM"],
    action: "Schedule Visit",
    color: "bg-orange-500",
  },
]

const services = [
  "Property Purchase",
  "Property Sale",
  "Property Rental",
  "Investment Consultation",
  "Property Management",
  "Market Analysis",
  "Other",
]

export default function ContactContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center border-0 shadow-2xl">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>
            <Button asChild className="w-full">
              <a href="/properties">Browse Properties</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Let's Find Your Perfect Property</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty">
              Connect with Dubai's premier real estate experts. We're here to turn your property dreams into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +971 4 123 4567
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Aurum Realty?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over a decade of experience in Dubai's real estate market, we deliver exceptional results for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized as Dubai's top real estate agency for 3 consecutive years",
                stat: "50+ Awards",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with deep market knowledge and expertise",
                stat: "25+ Experts",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Successfully closed over 2,000 property transactions",
                stat: "2,000+ Deals",
              },
              {
                icon: Shield,
                title: "Trusted Service",
                description: "100% transparent process with complete legal compliance",
                stat: "100% Secure",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{feature.stat}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our team. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    {info.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Fill out the form below and our expert team will get back to you within 2 hours during business hours.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Headphones className="w-4 h-4 mr-2" />
                    24/7 Support
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Secure & Private
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Multi-language
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="pl-10 h-12 border-gray-200 focus:border-primary transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <Input
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="h-12 border-gray-200 focus:border-primary transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10 h-12 border-gray-200 focus:border-primary transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            type="tel"
                            placeholder="+971 50 123 4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="pl-10 h-12 border-gray-200 focus:border-primary transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service & Budget */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Service Needed</label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="h-12 border-gray-200 focus:border-primary">
                            <Building className="w-5 h-5 mr-2 text-gray-400" />
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Budget Range</label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="h-12 border-gray-200 focus:border-primary">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2m">1M - 2M AED</SelectItem>
                            <SelectItem value="2-5m">2M - 5M AED</SelectItem>
                            <SelectItem value="5-10m">5M - 10M AED</SelectItem>
                            <SelectItem value="10m+">10M+ AED</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Message</label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <Textarea
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="pl-10 min-h-[120px] border-gray-200 focus:border-primary transition-all duration-300 resize-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side Content */}
            <div className="space-y-8">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890!2d55.2708!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sBusiness%20Bay%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">Aurum Realty</p>
                          <p className="text-xs text-gray-600">Business Bay, Dubai</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Button asChild size="sm" className="bg-white/95 text-gray-900 hover:bg-white shadow-lg">
                        <a
                          href="https://maps.google.com/?q=Business+Bay,+Dubai,+UAE"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open in Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    Our Location
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <strong>Address:</strong> Business Bay, Dubai, United Arab Emirates
                    </p>
                    <p>
                      <strong>Landmark:</strong> Near Dubai Mall and Burj Khalifa
                    </p>
                    <p>
                      <strong>Parking:</strong> Free valet parking available
                    </p>
                    <p>
                      <strong>Public Transport:</strong> Business Bay Metro Station (5 min walk)
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Located in the heart of Dubai's business district, our office is easily accessible by car, metro,
                      or taxi.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-secondary text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
                  <p className="text-white/90 mb-6">Our team is available 24/7 for urgent inquiries</p>
                  <div className="space-y-4">
                    <Button asChild className="w-full h-12 bg-white text-primary hover:bg-white/90" size="lg">
                      <a href="tel:+97141234567">
                        <Phone className="w-5 h-5 mr-2" />
                        Emergency Hotline: +971 4 123 4567
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="w-full h-12 border-white/30 text-white hover:bg-white/10 bg-transparent"
                      size="lg"
                    >
                      <a href="https://wa.me/971501234567">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp Chat
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "Aurum Realty exceeded our expectations. Their professionalism and market expertise helped us find
                    our dream home in record time."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Johnson</div>
                      <div className="text-sm text-gray-500">Property Investor</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to buy a property in Dubai?",
                answer:
                  "The process typically takes 2-4 weeks from offer acceptance to completion, depending on financing and legal requirements.",
              },
              {
                question: "Do you assist with property financing?",
                answer:
                  "Yes, we work with leading banks and financial institutions to help secure the best mortgage rates for our clients.",
              },
              {
                question: "What are the fees involved in buying property?",
                answer:
                  "Fees include 4% DLD transfer fee, 2% agent commission, plus legal and administrative costs. We provide detailed breakdowns upfront.",
              },
              {
                question: "Can foreigners buy property in Dubai?",
                answer:
                  "Yes, foreigners can buy freehold properties in designated areas. We guide you through all legal requirements and procedures.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
