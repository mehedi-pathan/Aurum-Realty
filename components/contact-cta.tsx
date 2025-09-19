import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Let our expert team guide you through Dubai's luxury real estate market. Contact us today for a personalized
            consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-primary-foreground/90 mb-4">Speak directly with our experts</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <Link href="tel:+97141234567">+971 4 123 4567</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-primary-foreground/90 mb-4">Get detailed information via email</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <Link href="mailto:info@aurumrealty.ae">Send Email</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Live Chat</h3>
              <p className="text-primary-foreground/90 mb-4">Instant support and assistance</p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Start Chat</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg bg-transparent"
            asChild
          >
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
