import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-2xl font-bold text-foreground">Aurum Realty</span>
        </div>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
            <Home className="w-16 h-16 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Property Not Found</h1>
          <p className="text-gray-600 leading-relaxed">
            The property you're looking for doesn't exist or may have been moved. Let's help you find your dream
            property instead.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <Button asChild className="w-full" size="lg">
            <Link href="/properties">
              <Search className="w-5 h-5 mr-2" />
              Browse All Properties
            </Link>
          </Button>

          <div className="flex space-x-4">
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help finding a specific property?{" "}
            <Link href="/contact" className="text-primary hover:text-secondary transition-colors">
              Contact our team
            </Link>{" "}
            for personalized assistance.
          </p>
        </div>
      </div>
    </div>
  )
}
