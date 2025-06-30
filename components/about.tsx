"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp, Award, Globe, Users, Heart } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(true)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const achievementCards = [
    {
      id: 1,
      icon: Globe,
      title: "Historic Trailblazer in South Africa",
      subtitle: "Breaking Barriers in History's Most Critical Moment",
      year: "1990-1996",
      shortDescription:
        "First African-American woman Consul General in Durban, South Africa during apartheid transition.",
      fullDescription:
        "Established strong relationships with Nelson Mandela and the ANC, opening new channels of communication between the ANC and the U.S. government during the historic transition from apartheid to democracy. Served as the longest-serving U.S. diplomat in South Africa during the end of apartheid.",
      quote: "Building bridges when the world was watching",
      bgGradient: "from-amber-100 to-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: 2,
      icon: Heart,
      title: "Peacemaker in War-Torn Liberia",
      subtitle: "Leading Peace in Times of Crisis",
      year: "2003",
      shortDescription: "Special Coordinator for Peace in Liberia during the devastating civil war.",
      fullDescription:
        "Led U.S. delegation to peace talks at the height of Liberia's devastating civil war, playing a key role in setting the nation on a path to recovery and lasting peace. Instrumental in ending one of Africa's most destructive conflicts through diplomatic courage and strategic negotiation.",
      quote: "When diplomacy matters most, courage leads the way",
      bgGradient: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      icon: Award,
      title: "Champion of Security in Jamaica",
      subtitle: "Strengthening Caribbean Security & Partnership",
      year: "2010-2013",
      shortDescription: "U.S. Ambassador to Jamaica under President Barack Obama, focusing on regional security.",
      fullDescription:
        'Ambassador Bridgewater inherited severely strained U.S.-Jamaica relations after a 15-month diplomatic void caused by Jamaica\'s refusal to extradite drug lord Christopher "Dudas" Coke. She successfully rebuilt trust by broadening the partnership beyond security concerns, using comprehensive diplomatic tools including commercial, cultural, and public diplomacy to restore bilateral cooperation.',
      quote: "Building safer communities through diplomatic partnership",
      bgGradient: "from-green-100 to-teal-100",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      icon: Users,
      title: "Mentor & Gender Equality Advocate",
      subtitle: "Empowering the Next Generation of Leaders",
      year: "Throughout Career",
      shortDescription: "Tireless advocate for women, children, and gender equality in diplomatic service.",
      fullDescription:
        "Spoken publicly about the need for workplace transformation and self-transformation to break barriers for women. Urged women to be present at decision-making tables and advocate for their positions. Mentored students who became notable leaders in law, government, academia, and foreign affairs. Recipient of Girl Scouts of Virginia Lifetime Achievement Award and 100 Black Women's Candace Award.",
      quote: "Pam's Principles: Believe in yourself, be passionate, stand up for what's right",
      bgGradient: "from-purple-100 to-pink-100",
      iconColor: "text-purple-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleCard = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  return (
    <section ref={sectionRef} id="about" className="py-16 lg:py-24 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Ambassador Photo */}
          <div className="lg:col-span-4">
            <div
              className={`relative group transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/bridging-cover-final.jpg"
                  alt="Bridging Troubled Waters complete book cover featuring Ambassador Pamela Bridgewater with Nelson Mandela"
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: "16/10", maxHeight: "455px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-diplomatic-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-ambassador-gold to-amber-400 rounded-2xl -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>

            {/* Quick Stats */}
            <div
              className={`mt-8 grid grid-cols-2 gap-4 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {[
                { number: "30+", label: "Years in Diplomacy" },
                { number: "15", label: "Countries Served" },
                { number: "50+", label: "Peace Negotiations" },
                { number: "5", label: "International Awards" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-pearl-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-ambassador-gold group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-soft-charcoal font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-8">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy text-center lg:text-left">
                About Ambassador Bridgewater
              </h2>

              <div className="space-y-4 text-lg text-soft-charcoal leading-relaxed">
                <p>
                  Ambassador Pamela Bridgewater has dedicated over three decades to international diplomacy, serving as
                  a bridge between nations during some of the most challenging periods in modern history.
                </p>
                <p>
                  Her distinguished career spans multiple continents and conflicts, where she has consistently
                  demonstrated an exceptional ability to find common ground and foster understanding between diverse
                  cultures and opposing viewpoints.
                </p>
              </div>
            </div>

            {/* Interactive Achievement Cards */}
            <div
              className={`space-y-4 transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-2xl font-serif font-bold text-diplomatic-navy mb-6">Career Highlights</h3>

              {achievementCards.map((card, index) => {
                const Icon = card.icon
                const isExpanded = expandedCard === card.id

                return (
                  <div
                    key={card.id}
                    className={`bg-gradient-to-r ${card.bgGradient} rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer`}
                    onClick={() => toggleCard(card.id)}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="p-6">
                      {/* Card Header */}
                      <div className="flex items-start gap-4">
                        <div className={`${card.iconColor} bg-white p-3 rounded-full shadow-md flex-shrink-0`}>
                          <Icon className="w-6 h-6" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-bold text-diplomatic-navy mb-1">{card.title}</h4>
                              <p className="text-sm text-ambassador-gold font-semibold mb-2">{card.year}</p>
                            </div>
                            <button className="text-diplomatic-navy hover:text-ambassador-gold transition-colors duration-300">
                              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                          </div>

                          <p className="text-soft-charcoal leading-relaxed">{card.shortDescription}</p>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-white/50 pt-4">
                          <h5 className="font-bold text-diplomatic-navy mb-2">{card.subtitle}</h5>
                          <p className="text-soft-charcoal leading-relaxed mb-4">{card.fullDescription}</p>
                          <blockquote className="italic text-ambassador-gold font-medium border-l-4 border-ambassador-gold pl-4">
                            {card.quote}
                          </blockquote>
                        </div>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div
                      className={`h-1 bg-gradient-to-r from-ambassador-gold to-amber-400 transform transition-all duration-300 ${
                        isExpanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
