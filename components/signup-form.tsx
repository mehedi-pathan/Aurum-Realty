"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    userType: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters"
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match"
    if (!formData.userType) newErrors.userType = "Please select user type"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Sign up attempt:", formData)
    alert("Account created successfully! (Demo)")
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="text-center mb-8">
          {/* logo import */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex justify-start">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className={`relative group-hover:scale-105 transition-all duration-300 w-10 h-10`}>

                  <Image src="/aurum-realty-logo.png" alt="Aurum Realty" fill className="object-contain" />
                </div>
                <div className="hidden sm:block">
                  <div className="transition-all duration-300">
                    <div className="text-xl font-bold text-gray-900">Aurum Realty</div>
                    <div className="text-xs text-gray-600 font-medium -mt-1">The Gold Standard in Real Estate</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join Aurum Realty and discover premium properties in Dubai</p>
        </div>

        {/* Sign Up Form */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Sign Up</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                    <Input
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`pl-10 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-gray-300 ${
                        errors.firstName ? "border-red-300 focus:border-red-500" : ""
                      }`}
                      required
                    />
                  </div>
                  {errors.firstName && <p className="text-sm text-red-600">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={`h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-gray-300 ${
                      errors.lastName ? "border-red-300 focus:border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.lastName && <p className="text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`pl-10 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-gray-300 ${
                      errors.email ? "border-red-300 focus:border-red-500" : ""
                    }`}
                    required
                  />
                </div>
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                  <Input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`pl-10 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-gray-300 ${
                      errors.phone ? "border-red-300 focus:border-red-500" : ""
                    }`}
                    required
                  />
                </div>
                {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* User Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">I am a</label>
                <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                  <SelectTrigger
                    className={`h-12 border-gray-200 focus:border-primary transition-all duration-300 hover:border-gray-300 ${
                      errors.userType ? "border-red-300" : ""
                    }`}
                  >
                    <Building className="w-5 h-5 mr-2 text-gray-400" />
                    <SelectValue placeholder="Select user type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buyer">Property Buyer</SelectItem>
                    <SelectItem value="seller">Property Seller</SelectItem>
                    <SelectItem value="investor">Real Estate Investor</SelectItem>
                    <SelectItem value="tenant">Tenant</SelectItem>
                    <SelectItem value="landlord">Landlord</SelectItem>
                  </SelectContent>
                </Select>
                {errors.userType && <p className="text-sm text-red-600">{errors.userType}</p>}
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className={`pl-10 pr-10 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-gray-300 ${
                        errors.password ? "border-red-300 focus:border-red-500" : ""
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className={`pl-10 pr-10 h-12 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 hover:border-gray-300 ${
                        errors.confirmPassword ? "border-red-300 focus:border-red-500" : ""
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword}</p>}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    className={`mt-1 border-gray-300 ${errors.agreeToTerms ? "border-red-300" : ""}`}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:text-secondary transition-colors">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:text-secondary transition-colors">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.agreeToTerms && <p className="text-sm text-red-600">{errors.agreeToTerms}</p>}

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                    className="mt-1 border-gray-300"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer leading-relaxed">
                    Subscribe to our newsletter for market updates and exclusive property listings
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Create Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:text-secondary font-semibold transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
