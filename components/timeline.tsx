"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Award, Users } from "lucide-react"

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLElement>(null)

  const timelineData = [
    {
      year: "1975-1978",
      title: "Early Diplomatic Service",
      location: "Various Postings",
      description:
        "Began distinguished career in foreign service with postings across multiple continents, establishing foundation for future leadership roles.",
      icon: Calendar,
      category: "Early Career",
    },
    {
      year: "1985-1988",
      title: "Regional Security Specialist",
      location: "Caribbean Region",
      description:
        "Developed expertise in regional security matters, building relationships with Caribbean nations and understanding complex geopolitical dynamics.",
      icon: Award,
      category: "Specialization",
    },
    {
      year: "1995-1998",
      title: "Deputy Chief of Mission",
      location: "West Africa",
      description:
        "Served as second-in-command at a major embassy, overseeing daily operations and representing U.S. interests in critical diplomatic negotiations.",
      icon: Users,
      category: "Leadership",
    },
    {
      year: "2005-2008",
      title: "Ambassador to Ghana",
      location: "Accra, Ghana",
      description:
        "First ambassadorial appointment, successfully strengthening bilateral relations and promoting democratic governance in West Africa.",
      icon: MapPin,
      category: "Ambassador",
    },
    {
      year: "2010-2013",
      title: "Champion of Security in Jamaica",
      location: "Kingston, Jamaica",
      description:
        'When Ambassador Bridgewater assumed her duties in Jamaica, the bilateral relationship between the U.S. and Jamaica was strained and distrustful. Jamaica had been without a U.S. ambassador for over fifteen months and relations had been tested over the government of Jamaica\'s protracted refusal to extradite a "drug lord," Christopher "Dudas" Coke, who was wanted in the U.S. for drug and related crimes. Coke is now in prison in the U.S. Ambassador Bridgewater not only smoothed and recalibrated the relationship with the government. She worked on many fronts to ensure that the people of Jamaica understood that the U.S. relationship with Jamaica was not one-dimensional, focused exclusively on security partnerships, countering illegal narcotics trafficking and other criminal activity. She utilized many tools of diplomatic engagement including commercial, cultural, consular and public diplomacy avenues to successfully bridge the troubled waters she encountered to put the relationship back on track.',
      icon: Award,
      category: "Ambassador",
    },
    {
      year: "2015-2018",
      title: "Senior Diplomatic Advisor",
      location: "Washington, D.C.",
      description:
        "Provided strategic counsel on Caribbean and African affairs, influencing policy decisions at the highest levels of government.",
      icon: Users,
      category: "Advisory",
    },
    {
      year: "2020-Present",
      title: "Author & Speaker",
      location: "Global",
      description:
        "Published acclaimed memoir 'Bridging Troubled Waters' and continues to share insights through speaking engagements worldwide.",
      icon: Award,
      category: "Legacy",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item")
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const getCategoryColor = (category: string) => {
    const colors = {
      "Early Career": "bg-blue-500",
      Specialization: "bg-green-500",
      Leadership: "bg-purple-500",
      Ambassador: "bg-ambassador-gold",
      Advisory: "bg-ocean-blue",
      Legacy: "bg-diplomatic-navy",
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <section ref={timelineRef} id="timeline" className="py-16 lg:py-24 bg-pearl-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">Career Highlights</h2>
          <p className="text-xl text-diplomatic-navy/70 max-w-3xl mx-auto">
            A distinguished journey through decades of diplomatic service, building bridges across continents
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-diplomatic-navy via-ambassador-gold to-ocean-blue h-full hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {timelineData.map((item, index) => {
              const Icon = item.icon
              const isVisible = visibleItems.includes(index)
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`timeline-item flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 transform transition-all duration-1000 ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : isEven
                          ? "translate-x-8 opacity-0"
                          : "-translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-l-4 border-ambassador-gold hover:shadow-xl transition-all duration-300 ${
                        isEven ? "lg:text-right" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-full ${getCategoryColor(item.category)} text-white`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ambassador-gold uppercase tracking-wide">
                            {item.category}
                          </div>
                          <div className="text-lg font-bold text-diplomatic-navy">{item.year}</div>
                        </div>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-diplomatic-navy mb-2">{item.title}</h3>

                      <div className="flex items-center gap-2 mb-4 text-ocean-blue">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{item.location}</span>
                      </div>

                      <p className="text-diplomatic-navy/80 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 hidden lg:block">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transform transition-all duration-1000 ${
                        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      } ${getCategoryColor(item.category)}`}
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    ></div>
                  </div>

                  {/* Spacer for even items */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
