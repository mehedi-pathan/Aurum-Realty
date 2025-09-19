import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}
