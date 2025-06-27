import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Timeline from "@/components/timeline"
import Achievements from "@/components/achievements"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-pearl-white">
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
