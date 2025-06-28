import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Award, Globe, BookOpen, Heart } from "lucide-react"
import Link from "next/link"

export default function DiscoverHerStoryPage() {
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
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-pearl-white mb-6">Discover Her Story</h1>
            <p className="text-xl text-pearl-white/90 max-w-3xl mx-auto">
              The remarkable journey of Ambassador Pamela E. Bridgewater through decades of diplomatic service
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Ambassador Photo */}
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="relative group">
                  <img
                    src="/images/ambassador-headshot.jpg"
                    alt="Ambassador Pamela Bridgewater"
                    className="w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-ambassador-gold to-amber-400 rounded-2xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                {/* Quick Facts */}
                <div className="mt-8 bg-warm-ivory p-6 rounded-xl shadow-lg">
                  <h3 className="font-bold text-diplomatic-navy mb-4 text-lg">Quick Facts</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-ambassador-gold" />
                      <span>Born: April 14, 1947, Fredericksburg, VA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-ambassador-gold" />
                      <span>34-year diplomatic career</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-ambassador-gold" />
                      <span>4 honorary doctorates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-4 h-4 text-ambassador-gold" />
                      <span>Married to Rev. Dr. A. Russell Awkard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-serif font-bold text-diplomatic-navy mb-8">
                  Ambassador Bridgewater's Full Biography
                </h2>

                <div className="bg-pearl-white p-8 rounded-2xl shadow-lg border border-soft-charcoal/10 mb-8">
                  <p className="text-lg text-soft-charcoal leading-relaxed mb-6">
                    <strong className="text-diplomatic-navy">Pamela E. Bridgewater</strong> is an American career
                    diplomat who served as U.S. ambassador to the Republic of Benin, the Republic of Ghana, and Jamaica.
                  </p>

                  <p className="text-soft-charcoal leading-relaxed mb-6">
                    She was born April 14, 1947, in Fredericksburg, Virginia, and graduated from the Walker-Grant High
                    School. She received a Bachelor of Arts degree from Virginia State College and a Master of Arts
                    degree from the University of Cincinnati, both in political science.
                  </p>

                  <p className="text-soft-charcoal leading-relaxed mb-6">
                    Following a teaching career at Voorhees College in South Carolina, Bowie State and Morgan State
                    Universities in Maryland, she entered the U.S. Foreign Service in 1980. During the course of her
                    distinguished thirty-four-year diplomatic career, she also served in Brussels, Belgium; South
                    Africa; and as the deputy chief of mission in The Bahamas.
                  </p>
                </div>

                {/* South Africa Service Highlight */}
                <div className="bg-gradient-to-r from-ambassador-gold/10 to-amber-100 p-8 rounded-2xl shadow-lg mb-8">
                  <h3 className="text-2xl font-serif font-bold text-diplomatic-navy mb-4">
                    Historic Service in South Africa
                  </h3>
                  <p className="text-soft-charcoal leading-relaxed mb-4">
                    From 1990–1993, Pamela Bridgewater served as a political officer in Pretoria, South Africa. She was
                    then assigned to Durban, South Africa, as the{" "}
                    <strong className="text-diplomatic-navy">first African American woman Consul General</strong>{" "}
                    (1993–1996). When she was assigned to Durban, the province of Natal (later named KwaZulu-Natal) was
                    South Africa's most violent province.
                  </p>
                  <p className="text-soft-charcoal leading-relaxed">
                    She worked closely with <strong className="text-diplomatic-navy">Nelson Mandela</strong> and played
                    a key role in South Africa's historic transition from apartheid.
                  </p>
                </div>

                {/* Career Highlights */}
                <div className="bg-pearl-white p-8 rounded-2xl shadow-lg border border-soft-charcoal/10 mb-8">
                  <h3 className="text-2xl font-serif font-bold text-diplomatic-navy mb-4">
                    Distinguished Career Highlights
                  </h3>
                  <p className="text-soft-charcoal leading-relaxed mb-6">
                    While serving as deputy assistant secretary of state for Africa, she managed the Department of
                    State's relationship with fifteen West African countries. Her other assignments included serving as
                    a senior inspector in the Office of Inspector General, as an analyst in the Bureau of Intelligence
                    and Research, and as Diplomat in Residence at Howard University. She also served in the Bureau of
                    Oceans and International Environmental and Scientific Affairs.
                  </p>

                  <div className="bg-warm-ivory p-6 rounded-xl">
                    <h4 className="font-bold text-diplomatic-navy mb-3">Honors & Awards</h4>
                    <p className="text-soft-charcoal text-sm leading-relaxed">
                      Ambassador Bridgewater has received numerous honors and awards including the Secretary of State's
                      Distinguished Service and Career Achievement Awards and the Thursday Luncheon Group Pioneer Award.
                      Her memberships include the Association of Black American Ambassadors, the American Academy Of
                      Diplomacy, Dacor Bacon House, the American Foreign Service Association, the Thursday Luncheon
                      Group, and Delta Sigma Theta Sorority, Inc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-16 lg:py-24 bg-warm-ivory">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">
                About "Neutral on Nothing"
              </h2>
              <p className="text-xl text-soft-charcoal">A beautifully illustrated tribute to Reverend B. H. Hester</p>
            </div>

            <div className="bg-pearl-white p-8 lg:p-12 rounded-2xl shadow-xl">
              <div className="grid lg:grid-cols-3 gap-8 items-center mb-8">
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-diplomatic-navy to-ocean-blue p-6 rounded-xl text-center">
                    <BookOpen className="w-16 h-16 text-ambassador-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-pearl-white mb-2">Book Description</h3>
                    <p className="text-pearl-white/80 text-sm">A tribute to social activism and faith</p>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-serif font-bold text-diplomatic-navy mb-4">"Neutral on Nothing"</h3>
                  <p className="text-soft-charcoal leading-relaxed mb-4">
                    <em>"Neutral on nothing"</em> was the attitude of the Reverend B. H. Hester, who cared passionately
                    about the world around him, both here in Fredericksburg and around the nation, even around the
                    world.
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-soft-charcoal leading-relaxed mb-6">
                  Reverend Hester was selected in 1921 to serve as the eighth pastor of Shiloh Baptist Church (Old
                  Site). He was formally installed in 1922 after receiving degrees from Biddle University in North
                  Carolina and from Virginia Union University in Richmond.
                </p>

                <p className="text-soft-charcoal leading-relaxed">
                  His forty years as pastor of this congregation were remarkable in many ways. Drawing on many original
                  documents and family scrapbooks, his granddaughter, the Hon. Pamela Bridgewater Awkard, a retired U.S.
                  ambassador, has written a beautifully illustrated book on his life as a pastor, educator, writer, and
                  committed social activist.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-soft-charcoal/10">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/"
                    className="bg-ambassador-gold hover:bg-ambassador-gold/90 text-diplomatic-navy font-bold px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Pre-Order "Bridging Troubled Waters"
                  </Link>
                  <Link
                    href="#contact"
                    className="border-2 border-ambassador-gold text-ambassador-gold hover:bg-ambassador-gold hover:text-diplomatic-navy px-8 py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Contact Ambassador Bridgewater
                  </Link>
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
