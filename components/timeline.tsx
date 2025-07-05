"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Award } from "lucide-react"

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLElement>(null)

  const timelineEvents = [
    {
      year: "1980",
      title: "Diplomatic Career Begins",
      location: "Washington, D.C.",
      description: "Joined the Foreign Service as a Junior Officer, beginning a journey that would span three decades.",
      icon: Calendar,
    },
    {
      year: "1982",
      title: "Vice Consul",
      location: "Brussels, Belgium",
      description: "Served in the Joint Administrative Services Section, gaining early diplomatic experience in Europe.",
      icon: MapPin,
    },
    {
      year: "2000",
      title: "Ambassador to Benin",
      location: "Republic of Benin",
      description: "Helped solidify fledgling democratic institutions; hosted successful Africa Growth and Opportunity Act forum; facilitated business and commercial opportunities.",
      icon: MapPin,
    },
    {
      year: "2001",
      title: "Deputy Chief of Mission",
      location: "Nassau, The Bahamas",
      description: "Managed the embassy's large counternarcotics program, strengthened interagency cooperation; provided resources for the Bahamian courts and enhanced assistance and training for Bahamian security structures.",
      icon: Award,
    },
    {
      year: "2005",
      title: "Ambassador to Ghana",
      location: "Accra, Ghana",
      description: "Served as U.S. Ambassador to Ghana, oversaw new U.S. embassy construction, facilitated Ghana's $550 million Millennium Challenge Compact, and managed successful three-day visit by President George W. Bush and Secretary Rice.",
      icon: Award,
    },
    {
      year: "2010",
      title: "Champion of Security in Jamaica",
      location: "Kingston, Jamaica",
      description: "Ambassador Bridgewater repaired strained U.S.-Jamaica relations after extradition crisis by broadening partnership beyond security through comprehensive diplomatic engagement.",
      icon: Award,
    },
    {
      year: "2015",
      title: "Senior Consultant & Advisor",
      location: "State Department",
      description: "Served as Senior Advisor for the Department of State and other U.S. government agencies.",
      icon: Calendar,
    },
    {
      year: "2019",
      title: "Author",
      location: "Global Release",
      description: "Published 'Neutral on Nothing: The Social Activism of Rev. Dr. B. H. Hester'",
      icon: Award,
    },
    {
      year: "2025",
      title: "Memoir Publication",
      location: "Global Release",
      description: "Published 'Bridging Troubled Waters' sharing decades of diplomatic insights and experiences.",
      icon: Award,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.5 },
    )

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={timelineRef} id="timeline" className="py-16 lg:py-24 bg-pearl-white relative overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <img
          src="/images/world-map-background.png"
          alt="World map background"
          className="w-full h-full object-contain max-w-6xl"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">Diplomatic Journey</h2>
          <p className="text-xl text-soft-charcoal max-w-3xl mx-auto">
            Three decades of service, negotiation, and bridge-building across the globe
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-ambassador-gold to-ocean-blue hidden lg:block"></div>

          <div className="space-y-8 lg:space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isVisible = visibleItems.includes(index)
              const isEven = index % 2 === 0

              return (
                <div
                  key={event.year}
                  className={`timeline-item relative ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex flex-col lg:flex items-center`}
                  data-index={index}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 transform transition-all duration-1000 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : isEven
                          ? "-translate-x-10 opacity-0"
                          : "translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="bg-warm-ivory p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group hover:ring-4 hover:ring-[#D4AF37] hover:ring-opacity-50">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-ambassador-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-diplomatic-navy" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-ambassador-gold">{event.year}</div>
                          <div className="text-sm text-soft-charcoal flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-diplomatic-navy mb-3 group-hover:text-ambassador-gold transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-soft-charcoal leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`hidden lg:flex w-6 h-6 bg-ambassador-gold rounded-full border-4 border-pearl-white shadow-lg transform transition-all duration-1000 ${
                      isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{ transitionDelay: "500ms" }}
                  ></div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
