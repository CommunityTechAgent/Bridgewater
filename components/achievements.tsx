"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Globe, Users, BookOpen } from "lucide-react"

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const achievements = [
    {
      icon: Trophy,
      title: "International Peace Award",
      description: "Recognized for outstanding contributions to conflict resolution and peace-building initiatives.",
      year: "2018",
    },
    {
      icon: Globe,
      title: "Global Diplomacy Excellence",
      description: "Honored for exceptional service in promoting international cooperation and understanding.",
      year: "2016",
    },
    {
      icon: Users,
      title: "Cultural Bridge Builder",
      description: "Celebrated for fostering cross-cultural dialogue and breaking down barriers between nations.",
      year: "2014",
    },
    {
      icon: BookOpen,
      title: "Distinguished Author",
      description: "Published acclaimed memoir sharing insights from decades of diplomatic experience.",
      year: "2020",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="py-16 lg:py-24 bg-gradient-to-br from-diplomatic-navy to-ocean-blue"
    >
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-pearl-white mb-4">
            Recognition & Achievements
          </h2>
          <p className="text-xl text-pearl-white/80 max-w-3xl mx-auto">
            A lifetime of service recognized by international organizations and governments worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon

            return (
              <div
                key={achievement.title}
                className={`transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-pearl-white/10 backdrop-blur-sm p-6 rounded-2xl border border-pearl-white/20 hover:bg-pearl-white/20 hover:border-ambassador-gold/50 transform hover:-translate-y-4 hover:scale-105 transition-all duration-300 group h-full">
                  <div className="text-center space-y-4">
                    <div className="bg-ambassador-gold p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="w-10 h-10 text-diplomatic-navy" />
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm text-ambassador-gold font-semibold">{achievement.year}</div>
                      <h3 className="text-xl font-bold text-pearl-white group-hover:text-ambassador-gold transition-colors duration-300">
                        {achievement.title}
                      </h3>
                    </div>

                    <p className="text-pearl-white/80 leading-relaxed text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
