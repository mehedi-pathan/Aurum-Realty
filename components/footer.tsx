import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Shield } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
             {/* logo import */}
          <div className="flex space-x-2 mb-6">
            <div className="flex justify-start">
              <Link href="/" className="flex items-center space-x-3 group invert">
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
            <p className="text-gray-300 text-sm leading-relaxed">
              Dubai's premier luxury real estate agency, specializing in high-end properties and exceptional client
              service since 2015.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-300 hover:text-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Property Sales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Property Rentals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Market Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Business Bay, Dubai
                  <br />
                  United Arab Emirates
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">+971 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@aurumrealty.ae</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col space-y-6">
            {/* Payment Methods */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-semibold text-gray-300">Secure SSL Commerce Payment Options</span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {/* Credit Cards */}
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-blue-600">VISA</span>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-red-600">MasterCard</span>
                </div>
                <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-blue-800">AMEX</span>
                </div>

                {/* Digital Wallets */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">PayPal</span>
                </div>
                <div className="bg-black rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">Apple Pay</span>
                </div>
                <div className="bg-green-600 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">Google Pay</span>
                </div>

                {/* Regional Options */}
                <div className="bg-blue-500 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">Emirates NBD</span>
                </div>
                <div className="bg-red-600 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">ADCB</span>
                </div>
                <div className="bg-purple-600 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">FAB</span>
                </div>
                <div className="bg-orange-500 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">RAKBANK</span>
                </div>

                {/* Crypto & Alternative */}
                <div className="bg-orange-400 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">Bitcoin</span>
                </div>
                <div className="bg-gray-700 rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-sm font-bold text-white">Ethereum</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4 border-t border-gray-800">
              <div className="text-sm text-gray-400 text-center md:text-left">
                <p>&copy; 2024 Aurum Realty. All rights reserved.</p>
                <p className="mt-1">
                  Developed by{" "}
                  <Link
                    href="https://mehedipathan.online"
                    target="_blank"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Mehedi Pathan
                  </Link>
                </p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
