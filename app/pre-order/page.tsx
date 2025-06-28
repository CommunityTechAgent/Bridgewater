import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, BookOpen, Star, Truck, CreditCard, Shield } from "lucide-react"
import Link from "next/link"

export default function PreOrderPage() {
  return (
    <main className="min-h-screen bg-pearl-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-diplomatic-navy via-ocean-blue to-diplomatic-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-pearl-white hover:text-ambassador-gold transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-pearl-white mb-6">Pre-Order Now</h1>
            <p className="text-xl text-pearl-white/90 max-w-3xl mx-auto">
              Secure your copy of "Bridging Troubled Waters" - A diplomatic memoir by Ambassador Pamela Bridgewater
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Order Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Book Visual */}
            <div className="lg:col-span-5">
              <div className="sticky top-8">
                <div className="relative group">
                  <div className="transform group-hover:scale-105 transition-transform duration-500">
                    <div className="relative w-full max-w-md mx-auto">
                      <img
                        src="/images/bridging-cover-final.jpg"
                        alt="Bridging Troubled Waters book cover by Ambassador Pamela Bridgewater"
                        className="w-full rounded-2xl shadow-2xl"
                      />
                      <div className="absolute -inset-4 bg-gradient-to-r from-ambassador-gold to-amber-400 rounded-2xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Book Features */}
                <div className="mt-8 bg-warm-ivory p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-diplomatic-navy mb-4 text-lg">What's Included</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-ambassador-gold" />
                      <span>Hardcover Edition</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-ambassador-gold" />
                      <span>Free Shipping & Handling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-4 h-4 text-ambassador-gold" />
                      <span>Author's Personal Insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-ambassador-gold" />
                      <span>Secure Payment Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="lg:col-span-7">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-serif font-bold text-diplomatic-navy mb-8">Bridging Troubled Waters</h2>

                {/* Book Description */}
                <div className="bg-pearl-white p-8 rounded-2xl shadow-lg border border-soft-charcoal/10 mb-8">
                  <h3 className="text-2xl font-serif font-bold text-diplomatic-navy mb-6">Book Description</h3>

                  <blockquote className="border-l-4 border-ambassador-gold pl-6 mb-6">
                    <p className="text-lg text-soft-charcoal leading-relaxed italic mb-4">
                      "Pamela Bridgewater offers a straightforward and cogent window into her role in navigating U.S. -
                      South Africa relations during one of the most critical periods in global history in Bridging
                      Troubled Waters."
                    </p>
                    <footer className="text-diplomatic-navy font-semibold">~ Ambassador Harry K. Thomas, Jr.</footer>
                  </blockquote>

                  <p className="text-soft-charcoal leading-relaxed">
                    Experience firsthand the remarkable diplomatic journey of Ambassador Pamela Bridgewater as she
                    navigated some of the most challenging and historic moments in international relations. From her
                    groundbreaking work with Nelson Mandela during South Africa's transition from apartheid to her
                    distinguished service across multiple continents, this memoir offers unprecedented insights into the
                    world of high-stakes diplomacy.
                  </p>
                </div>

                {/* Pricing & Order */}
                <div className="bg-gradient-to-r from-diplomatic-navy to-ocean-blue p-8 rounded-2xl shadow-xl text-pearl-white">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Pre-Order Price</h3>
                      <p className="text-pearl-white/80">Includes shipping and handling</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-ambassador-gold">$45</div>
                      <div className="text-sm text-pearl-white/80">USD</div>
                    </div>
                  </div>

                  <div className="border-t border-pearl-white/20 pt-6 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-ambassador-gold" />
                        <span>Secure Payment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-ambassador-gold" />
                        <span>Free Shipping</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-ambassador-gold" />
                        <span>Hardcover Edition</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-ambassador-gold" />
                        <span>Money Back Guarantee</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Button */}
                  <a
                    href="https://square.link/u/CT74J4B1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-ambassador-gold hover:bg-ambassador-gold/90 text-diplomatic-navy font-bold py-4 px-8 rounded-xl text-center text-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Order Now - $45
                  </a>

                  <p className="text-center text-pearl-white/60 text-sm mt-4">
                    Secure payment processing powered by Square
                  </p>
                </div>

                {/* Additional Information */}
                <div className="mt-8 bg-warm-ivory p-6 rounded-xl">
                  <h4 className="font-bold text-diplomatic-navy mb-3">Why Pre-Order?</h4>
                  <ul className="space-y-2 text-sm text-soft-charcoal">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-ambassador-gold mt-0.5 flex-shrink-0" />
                      <span>Be among the first to read this historic memoir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-ambassador-gold mt-0.5 flex-shrink-0" />
                      <span>Support Ambassador Bridgewater's important work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-ambassador-gold mt-0.5 flex-shrink-0" />
                      <span>Gain insights into critical moments in diplomatic history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-ambassador-gold mt-0.5 flex-shrink-0" />
                      <span>Perfect for students, diplomats, and history enthusiasts</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="mt-8 text-center">
                  <p className="text-soft-charcoal mb-4">Questions about your order?</p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-ambassador-gold hover:text-diplomatic-navy font-semibold transition-colors duration-300"
                  >
                    Contact Us
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Book Section */}
      <section className="py-16 lg:py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">Also Available</h2>
            <p className="text-xl text-soft-charcoal">Another inspiring work by Ambassador Bridgewater</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Book Visual */}
              <div className="lg:col-span-4">
                <div className="relative group">
                  <div className="transform group-hover:scale-105 transition-transform duration-500">
                    <div className="relative w-full max-w-sm mx-auto">
                      <img
                        src="/images/neutral-on-nothing-cover.jpg"
                        alt="Neutral on Nothing book cover by Ambassador Pamela Bridgewater Awkard"
                        className="w-full rounded-2xl shadow-2xl"
                      />
                      <div className="absolute -inset-4 bg-gradient-to-r from-ambassador-gold to-amber-400 rounded-2xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Details */}
              <div className="lg:col-span-8">
                <div className="bg-pearl-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-3xl font-serif font-bold text-diplomatic-navy mb-6">Neutral on Nothing</h3>

                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-soft-charcoal leading-relaxed mb-4">
                      <em>"Neutral on nothing"</em> was the attitude of the Reverend B. H. Hester, who cared
                      passionately about the world around him, both here in Fredericksburg and around the nation, even
                      around the world.
                    </p>

                    <p className="text-soft-charcoal leading-relaxed mb-4">
                      Reverend Hester was selected in 1921 to serve as the eighth pastor of Shiloh Baptist Church (Old
                      Site). He was formally installed in 1922 after receiving degrees from Biddle University in North
                      Carolina and from Virginia Union University in Richmond.
                    </p>

                    <p className="text-soft-charcoal leading-relaxed">
                      His forty years as pastor of this congregation were remarkable in many ways. Drawing on many
                      original documents and family scrapbooks, his granddaughter, the Hon. Pamela Bridgewater Awkard, a
                      retired U.S. ambassador, has written a beautifully illustrated book on his life as a pastor,
                      educator, writer, and committed social activist.
                    </p>
                  </div>

                  {/* Pricing & Order Section */}
                  <div className="bg-gradient-to-r from-diplomatic-navy to-ocean-blue p-6 rounded-xl text-pearl-white">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">Special Price</h4>
                        <p className="text-pearl-white/80 text-sm">Includes shipping and handling</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-ambassador-gold">$25</div>
                        <div className="text-xs text-pearl-white/80">USD</div>
                      </div>
                    </div>

                    <div className="border-t border-pearl-white/20 pt-4 mb-4">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-3 h-3 text-ambassador-gold" />
                          <span>Illustrated Edition</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Truck className="w-3 h-3 text-ambassador-gold" />
                          <span>Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-3 h-3 text-ambassador-gold" />
                          <span>Historical Documents</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-3 h-3 text-ambassador-gold" />
                          <span>Secure Payment</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://square.link/u/aoClIkCE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-ambassador-gold hover:bg-ambassador-gold/90 text-diplomatic-navy font-bold py-3 px-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Order "Neutral on Nothing" - $25
                    </a>

                    <p className="text-center text-pearl-white/60 text-xs mt-3">
                      Secure payment processing powered by Square
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
