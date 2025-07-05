"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState(0)

  const heroImages = [
    {
      src: "/images/hero-ghana-map.png",
      alt: "Ghana map",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Map_of_Belgium-LvaA04CBIFigpTmQHtguUoY8CaTKGr.png",
      alt: "Belgium map",
    },
    {
      src: "/images/south-africa-map.png",
      alt: "South Africa map",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Map_of_Bahamas-0gMWkVfGsNS2ORiWZFqFbC9NGHWXO3.png",
      alt: "Bahamas map",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usa_map_a-1PG2BVY6drqNm8Cgq9x3fhs7RjzVcB.png",
      alt: "USA map",
    },
    {
      src: "/images/hero-jamaica-map.png",
      alt: "Jamaica map",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    // Preload images
    const imagePromises = heroImages.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          setLoadedImages((prev) => prev + 1)
          resolve(image)
        }
        img.onerror = () => {
          setLoadedImages((prev) => prev + 1)
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

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true)
        // Start auto-rotation after images are loaded
        setTimeout(startAutoRotation, 1000)
      })
      .catch(() => {
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
    <section className="min-h-screen bg-diplomatic-navy relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-16 pt-24 pb-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-8 mb-6">
            <img
              src="/images/laurel-wreath.png"
              alt="Decorative laurel wreath"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-80"
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-pearl-white leading-tight">
              <span className="block">Bridging</span>
              <span className="block">Troubled</span>
              <span className="block text-ambassador-gold">Waters</span>
            </h1>
            <img
              src="/images/laurel-wreath.png"
              alt="Decorative laurel wreath"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 opacity-80"
            />
          </div>
          <p className="text-2xl lg:text-3xl text-pearl-white font-serif font-medium">A Diplomatic Memoir</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="space-y-8">
              <p className="text-lg lg:text-xl text-pearl-white leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover the untold stories of Ambassador Pamela Bridgewater's extraordinary journey through decades of
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
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    transition: "opacity 1s",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center p-8 md:p-12 rounded-2xl">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="max-w-full max-h-full object-contain drop-shadow-xl"
                      style={{ background: "transparent" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 text-white p-3 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-ambassador-gold scale-125"
                      : "bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80"
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
