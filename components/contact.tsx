"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, BookOpen, AlertCircle, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.')
    }
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-pearl-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">Get in Touch</h2>
          <p className="text-xl text-soft-charcoal max-w-3xl mx-auto">
            Connect with Ambassador Bridgewater for speaking engagements, interviews, or book discussions
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-ambassador-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-diplomatic-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-diplomatic-navy mb-1">Email</h3>
                  <p className="text-soft-charcoal">bkroystonpublishing@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-ambassador-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-diplomatic-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-diplomatic-navy mb-1">Office</h3>
                  <p className="text-soft-charcoal">
                    Washington, D.C.
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-ambassador-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-diplomatic-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-diplomatic-navy mb-1">Publisher</h3>
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src="/images/bk-royston-publishing-logo.png"
                      alt="BK Royston Publishing"
                      className="h-8 w-auto"
                    />
                  </div>
                  <a
                    href="http://www.bkroystonpublishing.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soft-charcoal hover:text-ambassador-gold transition-colors duration-300"
                  >
                    www.bkroystonpublishing.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-warm-ivory p-6 rounded-xl">
              <h3 className="font-bold text-diplomatic-navy mb-3">Speaking Engagements</h3>
              <p className="text-soft-charcoal text-sm leading-relaxed">
                Ambassador Bridgewater is available for keynote speeches, panel discussions, and diplomatic workshops.
                Contact us to discuss your event requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8">
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 text-lg mb-2">Thank You!</h4>
                  <p className="text-green-700 mb-2">Your message has been sent successfully.</p>
                  <p className="text-green-700 text-sm">We will be in touch with you soon.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div>
                  <h4 className="font-semibold text-red-800">Error Sending Message</h4>
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-diplomatic-navy">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-soft-charcoal/20 focus:border-ambassador-gold focus:ring-ambassador-gold/20"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-diplomatic-navy">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-soft-charcoal/20 focus:border-ambassador-gold focus:ring-ambassador-gold/20"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-diplomatic-navy">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-soft-charcoal/20 focus:border-ambassador-gold focus:ring-ambassador-gold/20"
                  placeholder="What would you like to discuss?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-diplomatic-navy">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="border-soft-charcoal/20 focus:border-ambassador-gold focus:ring-ambassador-gold/20 resize-none"
                  placeholder="Please share your message, inquiry, or speaking engagement details..."
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="bg-ambassador-gold hover:bg-ambassador-gold/90 text-diplomatic-navy font-semibold px-8 py-3 rounded-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-diplomatic-navy/20 border-t-diplomatic-navy rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : isSubmitted ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
