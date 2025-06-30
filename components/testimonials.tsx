"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      quote:
        "Ambassador Bridgewater's memoir is a masterclass in diplomacy. Her insights into conflict resolution and cultural understanding are invaluable for anyone interested in international relations.",
      author: "Kevin Pryor",
      title: "Community Tech",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "A compelling narrative that bridges the gap between policy and humanity. Bridgewater's experiences offer profound lessons in leadership and perseverance.",
      author: "Dr Mike Levey",
      title: "Special Envoy",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "This memoir is essential reading for diplomats and peace-builders. Bridgewater's ability to find common ground in the most challenging situations is truly inspiring.",
      author: "Prof. Maria Rodriguez",
      title: "International Relations",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-warm-ivory">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">What Leaders Say</h2>
          <p className="text-xl text-soft-charcoal max-w-3xl mx-auto">
            Praise from fellow diplomats, world leaders, and international relations experts
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-pearl-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-6 right-6 text-ambassador-gold/20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="relative z-10">
              <blockquote className="text-xl lg:text-2xl text-soft-charcoal leading-relaxed mb-8 font-serif italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-ambassador-gold"
                />
                <div>
                  <div className="font-bold text-diplomatic-navy text-lg">{testimonials[currentIndex].author}</div>
                  <div className="text-soft-charcoal">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="bg-diplomatic-navy text-pearl-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy transform hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-ambassador-gold scale-125"
                      : "bg-soft-charcoal/30 hover:bg-soft-charcoal/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="bg-diplomatic-navy text-pearl-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy transform hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
