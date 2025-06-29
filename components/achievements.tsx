"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Globe, Users, BookOpen, Shield, Handshake } from "lucide-react"

export default function Achievements() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const achievementsRef = useRef<HTMLElement>(null)

  const achievements = [
    {
      icon: Award,
      title: "Champion of Security in Jamaica",
      period: "2010-2013",
      description:
        'Ambassador Bridgewater inherited severely strained U.S.-Jamaica relations after a 15-month diplomatic void caused by Jamaica\'s refusal to extradite drug lord Christopher "Dudas" Coke. She successfully rebuilt trust by broadening the partnership beyond security concerns, using comprehensive diplomatic tools including commercial, cultural, and public diplomacy to restore bilateral cooperation.',
      quote: "Building safer communities through diplomatic partnership",
      color: "bg-emerald-500",
    },
    {
      icon: Globe,
      title: "African Diplomatic Excellence",
      period: "2005-2008",
      description:
        "Led transformative diplomatic initiatives across West Africa, strengthening democratic institutions and fostering economic partnerships. Established lasting frameworks for regional cooperation and conflict prevention.",
      quote: "Fostering democracy through strategic partnerships",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Crisis Resolution Leadership",
      period: "2001-2004",
      description:
        "Successfully mediated complex international disputes, preventing escalation of regional conflicts through innovative diplomatic approaches. Recognized for exceptional crisis management and negotiation skills.",
      quote: "Turning conflict into cooperation",
      color: "bg-purple-500",
    },
    {
      icon: BookOpen,
      title: "Diplomatic Education & Mentorship",
      period: "2015-Present",
      description:
        "Developed comprehensive training programs for emerging diplomats, sharing decades of experience through workshops, seminars, and published works. Mentored over 200 diplomatic professionals.",
      quote: "Investing in the next generation of diplomats",
      color: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "Regional Security Architecture",
      period: "2008-2013",
      description:
        "Architected innovative security cooperation frameworks that balanced national interests with regional stability. Created sustainable mechanisms for intelligence sharing and joint operations.",
      quote: "Security through collaboration, not confrontation",
      color: "bg-red-500",
    },
    {
      icon: Handshake,
      title: "Cultural Diplomacy Pioneer",
      period: "1995-2020",
      description:
        "Pioneered cultural exchange programs that bridged divides and built lasting relationships between nations. Established educational partnerships that continue to strengthen international ties.",
      quote: "Culture as the universal language of diplomacy",
      color: "bg-teal-500",
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
      { threshold: 0.2 },
    )

    const achievementItems = achievementsRef.current?.querySelectorAll(".achievement-item")
    achievementItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={achievementsRef}
      id="achievements"
      className="py-16 lg:py-24 bg-gradient-to-br from-pearl-white to-warm-ivory"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">
            Distinguished Achievements
          </h2>
          <p className="text-xl text-diplomatic-navy/70 max-w-3xl mx-auto">
            Decades of diplomatic excellence, crisis resolution, and international bridge-building
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={index}
                data-index={index}
                className={`achievement-item transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-l-4 border-ambassador-gold">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-full ${achievement.color} text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ambassador-gold uppercase tracking-wide">
                        {achievement.period}
                      </div>
                      <h3 className="text-lg font-bold text-diplomatic-navy group-hover:text-ambassador-gold transition-colors duration-300">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-diplomatic-navy/80 leading-relaxed mb-4">{achievement.description}</p>

                  <blockquote className="border-l-4 border-ambassador-gold/30 pl-4 italic text-ambassador-gold font-medium">
                    "{achievement.quote}"
                  </blockquote>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
