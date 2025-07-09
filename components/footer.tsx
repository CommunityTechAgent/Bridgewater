import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    about: [],
    book: [],
    events: [],
    connect: [],
  }

  const socialLinks = []

  return (
    <footer className="bg-diplomatic-navy text-pearl-white">
      <div className="container mx-auto px-4 lg:px-20 py-16 max-w-2xl">
        {/* Main Footer Content */}
        <div className="flex justify-center items-center mb-12" />

        {/* Brand Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            {/* Title and description removed as requested */}
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 lg:col-span-4 gap-8">
            <div />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pearl-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-pearl-white/60 text-sm">
            © {currentYear} Ambassador Pamela Bridgewater. All rights reserved.
          </p>
          {/* Policy links removed as requested */}
        </div>
      </div>
    </footer>
  )
}
