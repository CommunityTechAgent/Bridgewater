"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isBookHovered, setIsBookHovered] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState(0)

  const heroImages = [
    {
      src: "/images/hero-ghana-map.png",
      alt: "Ghana flag map representing Ambassador Bridgewater's service in Ghana",
    },
    {
      src: "/images/hero-jamaica-map.png",
      alt: "Jamaica flag map representing Ambassador Bridgewater's service in Jamaica",
    },
    {
      src: "/images/hero-usa-map.jpg",
      alt: "United States flag map representing Ambassador Bridgewater's diplomatic service",
    },
    {
      src: "/images/hero-ghana-map-2.png",
      alt: "Ghana flag map highlighting diplomatic relations",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    // Preload images
    const imagePromises = heroImages.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          setLoadedImages(prev => prev + 1)
          resolve(image)
        }
        img.onerror = () => {
          setLoadedImages(prev => prev + 1)
          resolve(image) // Resolve even on error to continue
        }
        img.src = image.src
      })
    })

    const startAutoRotation = () => {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length)
      }, 4000)
    }

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true)
      // Start auto-rotation after images are loaded
      setTimeout(startAutoRotation, 1000)
    }).catch(() => {
      // Fallback: if image loading fails, still show the slider after a timeout
      setTimeout(() => {
        setImagesLoaded(true)
        // Start auto-rotation even if images failed
        setTimeout(startAutoRotation, 1000)
      }, 2000)
    })

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [heroImages.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen bg-diplomatic-navy flex items-center justify-center">
        <div className="text-center">
          <div className="text-pearl-white text-xl mb-4">Loading Ambassador Bridgewater's Story...</div>
          <div className="w-64 bg-pearl-white/20 rounded-full h-2">
            <div 
              className="bg-ambassador-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${(loadedImages / heroImages.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-pearl-white/70 mt-2">
            {loadedImages} of {heroImages.length} images loaded
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-diplomatic-navy via-ocean-blue to-diplomatic-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 pt-24 pb-16">
        {/* Centered Header */}
        <div className="text-center mb-12 relative max-w-6xl mx-auto">
          {/* Left Header Image */}
          <div className="absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 z-0">
            <img
              src="/images/l-image-header-m.png"
              alt="Diplomatic emblem"
              className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain opacity-60 hover:opacity-80 transition-opacity duration-500"
            />
          </div>

          {/* Right Header Image */}
          <div className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 z-0">
            <img
              src="/images/l-image-header-m.png"
              alt="Diplomatic emblem"
              className="w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain opacity-60 hover:opacity-80 transition-opacity duration-500"
            />
          </div>

          <div className="relative z-10 px-8 lg:px-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-pearl-white leading-tight mb-6">
              <span className="block animate-fade-in-up">Bridging</span>
              <span className="block animate-fade-in-up animation-delay-200">Troubled</span>
              <span className="block text-ambassador-gold animate-fade-in-up animation-delay-400">Waters</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-pearl-white/90 font-serif font-medium animate-fade-in-up animation-delay-600">
              A Diplomatic Memoir
            </p>
          </div>
        </div>

        {/* Content and Book */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="space-y-8 animate-fade-in-up animation-delay-1000">
              <p className="text-lg lg:text-xl text-pearl-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="text-ambassador-gold font-semibold">Discover the untold stories</span> of Ambassador
                Pamela Bridgewater's extraordinary journey through decades of international diplomacy—from
                groundbreaking negotiations with Nelson Mandela to building bridges across cultures and conflicts.
                <span className="block mt-2 text-pearl-white font-medium">
                  Experience history through the eyes of a trailblazing diplomat.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link href="/pre-order">
                  <Button
                    size="lg"
                    className="bg-ambassador-gold hover:bg-ambassador-gold/90 text-diplomatic-navy font-bold px-10 py-5 text-lg rounded-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl w-full"
                  >
                    Pre-Order Now
                  </Button>
                </Link>
                <Link href="/discover-her-story">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-ambassador-gold text-ambassador-gold hover:bg-ambassador-gold hover:text-diplomatic-navy px-10 py-5 text-lg font-bold rounded-xl transform hover:scale-105 transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl w-full"
                  >
                    Discover Her Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Book Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative group cursor-pointer animate-fade-in-up animation-delay-1200"
              onMouseEnter={() => setIsBookHovered(true)}
              onMouseLeave={() => setIsBookHovered(false)}
            >
              <div
                className={`transform transition-all duration-500 ${
                  isBookHovered ? "rotate-y-0 scale-105" : "rotate-y-[-15deg]"
                }`}
              >
                <div className="relative w-64 h-80 lg:w-72 lg:h-88">
                  {/* Book Cover Image */}
                  <div className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden">
                    <img
                      src="/images/bridging-cover-hero.jpg"
                      alt="Bridging Troubled Waters book cover by Ambassador Pamela Bridgewater"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Book Spine */}
                  <div className="absolute -right-2 top-2 w-4 h-80 lg:h-88 bg-gradient-to-b from-black to-gray-900 rounded-r-lg shadow-lg"></div>

                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-ambassador-gold/20 rounded-lg blur-xl transition-opacity duration-500 ${
                      isBookHovered ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-80 lg:h-96">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-contain p-8"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=400&width=800"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-diplomatic-navy/60 via-transparent to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-pearl-white/20 backdrop-blur-sm text-pearl-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy transform hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-pearl-white/20 backdrop-blur-sm text-pearl-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy transform hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-ambassador-gold scale-125"
                      : "bg-pearl-white/50 hover:bg-pearl-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
