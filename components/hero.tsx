"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      src: "/images/hero-ghana-map.png",
      alt: "Ghana map",
    },
    {
      src: "/images/hero-jamaica-map.png",
      alt: "Jamaica map",
    },
    {
      src: "/images/hero-belgium-map.png",
      alt: "Belgium map",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <section className="min-h-screen bg-diplomatic-navy relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-16 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-pearl-white leading-tight mb-6">
            <span className="block">Bridging</span>
            <span className="block">Troubled</span>
            <span className="block text-ambassador-gold">Waters</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-pearl-white font-serif font-medium">A Diplomatic Memoir</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="space-y-8">
              <p className="text-lg lg:text-xl text-pearl-white leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover the untold stories of Ambassador Pamela Bridgewater extraordinary journey through decades of
                international diplomacy.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link href="/pre-order">
                  <Button
                    size="lg"
                    className="bg-ambassador-gold hover:bg-amber-500 text-diplomatic-navy font-bold px-10 py-5 text-lg rounded-xl w-full"
                  >
                    Pre-Order Now
                  </Button>
                </Link>
                <Link href="/discover-her-story">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-ambassador-gold text-ambassador-gold hover:bg-ambassador-gold hover:text-diplomatic-navy px-10 py-5 text-lg font-bold rounded-xl bg-transparent w-full"
                  >
                    Discover Her Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="relative w-64 h-80 lg:w-72 lg:h-88">
                <div className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden">
                  <img
                    src="/images/bridging-cover-hero.jpg"
                    alt="Bridging Troubled Waters book cover"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white bg-opacity-10 border border-white border-opacity-20">
            <div className="relative h-80 lg:h-96">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transition: "opacity 1s",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center p-12">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-pearl-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-pearl-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: index === currentSlide ? "#D4AF37" : "rgba(255, 255, 255, 0.5)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
