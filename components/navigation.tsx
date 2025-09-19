"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200/50"
        : "bg-white/90 backdrop-blur-md shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? "h-14" : "h-16 lg:h-20"
            }`}
        >
          <div className="hidden lg:grid lg:grid-cols-3 w-full items-center">
            <div className="flex justify-start">
              <Link href="/" className="flex items-center space-x-3 group">
                <div
                  className={`relative group-hover:scale-105 transition-all duration-300 ${isScrolled ? "w-8 h-8" : "w-10 h-10"
                    }`}
                >
                  <Image src="/aurum-realty-logo.png" alt="Aurum Realty" fill className="object-contain" />
                </div>
                <div className="hidden sm:block">
                  <div
                    className={`transition-opacity duration-[300ms] ${isScrolled ? "opacity-0" : "opacity-100"
                      }`}
                  >
                    <div className="text-xl font-bold text-gray-900">Aurum Realty</div>
                    <div className="text-xs text-gray-600 font-medium -mt-1">
                      The Gold Standard in Real Estate
                    </div>
                  </div>


                </div>
              </Link>
            </div>

            <div className="flex justify-center">
              <div
                className={`flex items-center space-x-2 bg-white/95 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-lg transition-all duration-300 ${isScrolled ? "p-1.5" : "p-2"
                  }`}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-full font-medium transition-all duration-300 ${isScrolled ? "px-3 py-1.5 text-sm" : "px-4 py-2"
                      } ${isActive(item.href)
                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <div className="hidden xl:flex items-center space-x-4">
                <div
                  className={`flex items-center space-x-4 text-gray-600 transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"
                    }`}
                >
                  <a
                    href="tel:+97141234567"
                    className={`flex items-center space-x-1 hover:text-primary transition-colors`}
                  >
                    <Phone
                      className={`transition-all duration-300 ${isScrolled ? "w-3 h-3" : "w-4 h-4"}`}
                    />
                    <span className="hidden 2xl:block">+971 4 123 4567</span>
                  </a>

                </div>
                <Button
                  asChild
                  className={`rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isScrolled ? "px-4 py-1.5 text-sm" : "px-6"
                    }`}
                >
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>

              <div className="flex xl:hidden items-center">
                <Button
                  asChild
                  className={`rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${isScrolled ? "px-4 py-1.5 text-sm" : "px-6"
                    }`}
                >
                  <Link href="/login">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex justify-between items-center w-full">
            <Link href="/" className="flex items-center space-x-3 group">
              <div
                className={`relative group-hover:scale-105 transition-all duration-300 ${isScrolled ? "w-8 h-8" : "w-10 h-10"
                  }`}
              >
                <Image src="/aurum-realty-logo.png" alt="Aurum Realty" fill className="object-contain" />
              </div>
              <div className="hidden sm:block">
                <div
                  className={`transition-all duration-300 ${isScrolled ? "opacity-0 max-w-0 overflow-hidden" : "opacity-100 max-w-full"
                    }`}
                >
                  <div className="text-xl font-bold text-gray-900">Aurum Realty</div>
                  <div className="text-xs text-gray-600 font-medium -mt-1">The Gold Standard in Real Estate</div>
                </div>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-full bg-white/95 backdrop-blur-sm border border-gray-200/50 text-gray-700 hover:text-primary hover:bg-primary/10 transition-all duration-200 shadow-md ${isScrolled ? "p-1.5" : "p-2"
                }`}
            >
              {isOpen ? (
                <X className={`transition-all duration-300 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`} />
              ) : (
                <Menu className={`transition-all duration-300 ${isScrolled ? "w-5 h-5" : "w-6 h-6"}`} />
              )}
            </button>
          </div>

          <div
            ref={mobileMenuRef}
            className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="bg-white/98 backdrop-blur-md rounded-2xl mx-4 my-4 border border-gray-200/50 shadow-xl">
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${isActive(item.href)
                      ? "text-white bg-primary shadow-lg shadow-primary/25"
                      : "text-gray-700 hover:text-primary hover:bg-primary/10"
                      }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="border-t border-gray-200/50 pt-4 mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50/80 rounded-xl p-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+971 4 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50/80 rounded-xl p-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>info@aurumrealty.ae</span>
                    </div>
                  </div>
                  <Button className="w-full rounded-xl shadow-lg" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
