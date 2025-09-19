import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Aurum Realty - Luxury Real Estate in Dubai",
    template: "%s | Aurum Realty",
  },
  description:
    "Discover premium properties and luxury real estate opportunities in Dubai with Aurum Realty. Your trusted partner for high-end property investments, sales, and rentals in Dubai's most prestigious locations.",
  icons: {
    icon: "/aurum-realty-logo.png",
    shortcut: "/aurum-realty-logo.png",
    apple: "/aurum-realty-logo.png",
  },
  keywords: [
    "Dubai real estate",
    "luxury properties Dubai",
    "Dubai property investment",
    "premium real estate",
    "Dubai villas",
    "Dubai apartments",
    "real estate agency Dubai",
    "property sales Dubai",
    "Dubai Marina properties",
    "Downtown Dubai real estate",
    "Palm Jumeirah properties",
  ],
  authors: [{ name: "Aurum Realty", url: "https://aurumrealty.ae" }],
  creator: "Mehedi Pathan",
  publisher: "Aurum Realty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aurumrealty.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://aurumrealty.ae",
    siteName: "Aurum Realty",
    title: "Aurum Realty - Luxury Real Estate in Dubai",
    description: "Discover premium properties and luxury real estate opportunities in Dubai with Aurum Realty.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurum Realty - Luxury Real Estate in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurum Realty - Luxury Real Estate in Dubai",
    description: "Discover premium properties and luxury real estate opportunities in Dubai with Aurum Realty.",
    images: ["/og-image.jpg"],
    creator: "@aurumrealty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'Meehdi Pathan - web developer',
    applicationName: 'Aurum Realty',
    referrer: 'no-referrer-when-downgrade',
    themeColor: '#ffffff',
    colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${dmSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <span className="text-xl font-bold">Loading...</span>
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
