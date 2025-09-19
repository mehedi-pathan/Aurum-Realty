import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SignUpForm from "@/components/signup-form"

export default function SignUpPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <SignUpForm />
      </main>
      <Footer />
    </div>
  )
}
