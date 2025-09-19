import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react"
import Link from "next/link"

const insights = [
  {
    icon: TrendingUp,
    title: "Property Values Rise 12%",
    description: "Dubai property values increased by 12% in Q3 2024, showing strong market resilience.",
    date: "Nov 2024",
  },
  {
    icon: BarChart3,
    title: "Luxury Segment Growth",
    description: "High-end properties in Palm Jumeirah and Downtown Dubai see 18% increase in demand.",
    date: "Oct 2024",
  },
  {
    icon: PieChart,
    title: "Investment Opportunities",
    description: "New developments in Business Bay offer attractive ROI potential for investors.",
    date: "Oct 2024",
  },
  {
    icon: Activity,
    title: "Market Forecast 2025",
    description: "Experts predict continued growth in Dubai's real estate market through 2025.",
    date: "Nov 2024",
  },
]

export default function MarketInsights() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Market Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest trends and analysis from Dubai's dynamic real estate market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <insight.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-sm text-gray-500 mb-2">{insight.date}</div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{insight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">Get Market Report</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
