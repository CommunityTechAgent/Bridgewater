"use client"

import type React from "react"

import { Mail, MapPin, BookOpen } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-pearl-white">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-diplomatic-navy mb-4">Get in Touch</h2>
          <p className="text-xl text-soft-charcoal max-w-3xl mx-auto">
            Connect with Ambassador Bridgewater for speaking engagements, interviews, or book discussions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-warm-ivory p-8 lg:p-12 rounded-xl shadow-lg">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Email Contact */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-ambassador-gold p-4 rounded-full group-hover:scale-110 transition-transform duration-300 mb-4">
                  <Mail className="w-8 h-8 text-diplomatic-navy" />
                </div>
                <h3 className="font-bold text-diplomatic-navy mb-2 text-lg">Email</h3>
                <p className="text-soft-charcoal mb-2">bkroystonpublishing@gmail.com</p>
                <a
                  href="mailto:bkroystonpublishing@gmail.com"
                  className="text-ambassador-gold hover:text-diplomatic-navy transition-colors duration-300 font-medium"
                >
                  Send Email
                </a>
              </div>

              {/* Office Location */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-ambassador-gold p-4 rounded-full group-hover:scale-110 transition-transform duration-300 mb-4">
                  <MapPin className="w-8 h-8 text-diplomatic-navy" />
                </div>
                <h3 className="font-bold text-diplomatic-navy mb-2 text-lg">Office</h3>
                <p className="text-soft-charcoal mb-2">
                  Washington, D.C.
                  <br />
                  United States
                </p>
                <span className="text-soft-charcoal/70 text-sm">Diplomatic Headquarters</span>
              </div>

              {/* Publisher Information */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-ambassador-gold p-4 rounded-full group-hover:scale-110 transition-transform duration-300 mb-4">
                  <BookOpen className="w-8 h-8 text-diplomatic-navy" />
                </div>
                <h3 className="font-bold text-diplomatic-navy mb-2 text-lg">Publisher</h3>
                <div className="flex items-center justify-center mb-2">
                  <img
                    src="/images/bk-royston-publishing-logo.png"
                    alt="BK Royston Publishing"
                    className="h-10 w-auto"
                  />
                </div>
                <a
                  href="http://www.bkroystonpublishing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft-charcoal hover:text-ambassador-gold transition-colors duration-300 font-medium"
                >
                  Visit Website
                </a>
              </div>
            </div>

            {/* Speaking Engagements Section */}
            <div className="mt-12 pt-8 border-t border-soft-charcoal/20">
              <div className="text-center">
                <h3 className="font-bold text-diplomatic-navy mb-4 text-xl">Speaking Engagements</h3>
                <p className="text-soft-charcoal text-lg leading-relaxed max-w-2xl mx-auto">
                  Ambassador Bridgewater is available for keynote speeches, panel discussions, and diplomatic workshops.
                  Contact us to discuss your event requirements and schedule a consultation.
                </p>
                <div className="mt-6">
                  <a
                    href="mailto:bkroystonpublishing@gmail.com?subject=Speaking Engagement Inquiry"
                    className="inline-flex items-center gap-2 bg-ambassador-gold hover:bg-ambassador-gold/90 text-diplomatic-navy font-semibold px-8 py-3 rounded-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-4 h-4" />
                    Request Speaking Engagement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
