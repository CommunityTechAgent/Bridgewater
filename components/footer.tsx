import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [
      { name: "Biography", href: "#about" },
      { name: "Career Timeline", href: "#timeline" },
      { name: "Achievements", href: "#achievements" },
      { name: "Press Kit", href: "#" },
    ],
    book: [
      { name: "Pre-Order", href: "/pre-order" },
      { name: "Book Excerpts", href: "#" },
      { name: "Reviews", href: "#testimonials" },
      { name: "Book Club Guide", href: "#" },
    ],
    events: [
      { name: "Speaking Engagements", href: "#contact" },
      { name: "Book Signings", href: "#" },
      { name: "Interviews", href: "#" },
      { name: "Workshops", href: "#" },
    ],
    connect: [
      { name: "Contact", href: "#contact" },
      { name: "Media Inquiries", href: "#contact" },
      { name: "Newsletter", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#contact", label: "Email" },
  ]

  return (
    <footer className="bg-diplomatic-navy text-pearl-white">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-ambassador-gold">Bridging Troubled Waters</h3>
            <p className="text-pearl-white/80 text-sm leading-relaxed">
              A diplomatic memoir by Ambassador Pamela Bridgewater, sharing three decades of international service and
              peace-building.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-pearl-white/10 p-2 rounded-full hover:bg-ambassador-gold hover:text-diplomatic-navy transform hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:col-span-4 gap-8">
            <div>
              <h4 className="font-bold text-ambassador-gold mb-4">About</h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-pearl-white/80 hover:text-ambassador-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-ambassador-gold mb-4">The Book</h4>
              <ul className="space-y-2">
                {footerLinks.book.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-pearl-white/80 hover:text-ambassador-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-ambassador-gold mb-4">Events</h4>
              <ul className="space-y-2">
                {footerLinks.events.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-pearl-white/80 hover:text-ambassador-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-ambassador-gold mb-4">Connect</h4>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-pearl-white/80 hover:text-ambassador-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-pearl-white/20 pt-8 mb-8">
          <div className="max-w-md">
            <h4 className="font-bold text-ambassador-gold mb-3">Stay Updated</h4>
            <p className="text-pearl-white/80 text-sm mb-4">
              Subscribe to receive updates about book events and speaking engagements.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-pearl-white/10 border border-pearl-white/20 text-pearl-white placeholder-pearl-white/60 focus:outline-none focus:border-ambassador-gold focus:bg-pearl-white/20 transition-all duration-300"
              />
              <button className="bg-ambassador-gold text-diplomatic-navy px-6 py-2 rounded-lg font-semibold hover:bg-ambassador-gold/90 transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pearl-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-pearl-white/60 text-sm">
            © {currentYear} Ambassador Pamela Bridgewater. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-pearl-white/60 hover:text-ambassador-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-pearl-white/60 hover:text-ambassador-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-pearl-white/60 hover:text-ambassador-gold transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
