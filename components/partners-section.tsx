const partners = [
  { name: "Dubai Properties", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Emaar", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Damac", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Nakheel", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Meraas", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Dubai Land Department", logo: "/placeholder.svg?height=60&width=120" },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
          <p className="text-lg text-gray-600">
            We work with Dubai's leading developers and institutions to bring you the best opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                className="w-full h-16 bg-contain bg-center bg-no-repeat opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                style={{ backgroundImage: `url(${partner.logo})` }}
                title={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
