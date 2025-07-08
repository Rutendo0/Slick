"use client"

import type React from "react"
import { Phone, Mail, MapPin, Truck, Facebook, Instagram, MessageCircle } from "lucide-react"

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const SocialIcon: React.FC<{ type: string; href: string }> = ({ type, href }) => {
  const getIcon = () => {
    switch (type) {
      case "whatsapp":
        return <MessageCircle className="w-5 h-5" />
      case "instagram":
        return <Instagram className="w-5 h-5" />
      case "facebook":
        return <Facebook className="w-5 h-5" />
      case "x":
        return <XIcon className="w-5 h-5" />
      default:
        return <MessageCircle className="w-5 h-5" />
    }
  }

  return (
    <a
      href={href}
      className="group w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-700 hover:border-gray-600"
    >
      <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">{getIcon()}</div>
    </a>
  )
}

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16 mt-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Info */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <Truck className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="font-black text-2xl">Slick Logistics</h3>
              <p className="text-gray-400 text-sm font-medium">Premium Vehicle Import Services</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
            Your trusted partner for seamless vehicle imports from Japan. We handle everything from sourcing to delivery
            with professional expertise and care.
          </p>
          <div className="flex gap-4">
            <SocialIcon type="whatsapp" href="#" />
            <SocialIcon type="instagram" href="#" />
            <SocialIcon type="facebook" href="#" />
            <SocialIcon type="x" href="#" />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-black text-lg mb-6 text-white">Contact Information</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                <Phone className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold">+263 77 000 0000</p>
                <p className="text-gray-400 text-sm">Available 24/7</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                <Mail className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold break-all">info@slicklogistics.com</p>
                <p className="text-gray-400 text-sm">Response within 24hrs</p>
              </div>
            </div>
            <div className="flex items-start gap-3 group">
              <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-white font-semibold">123 Placeholder Ave</p>
                <p className="text-gray-400 text-sm">Harare, Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-black text-lg mb-6 text-white">Quick Links</h4>
          <div className="space-y-3">
            {[
              "Vehicle Import Services",
              "Shipping & Logistics",
              "Customs Clearance",
              "Free Consultation",
              "Track Your Order",
              "Customer Support",
            ].map((link, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Slick Logistics. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
