"use client"
import type React from "react"
import {
  Truck,
  Shield,
  Zap,
  MessageCircle,
  FileCheck,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Tag,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Car,
} from "lucide-react"

const CreativeCTA = () => {
  return (
    <div className="relative mt-32 mb-20">
      {/* White background that blends with main background */}
      <div className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side - Enhanced Content */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Simple car delivery icon */}
                <div className="inline-block mb-8">
                  <div className="w-24 h-24 bg-red-600/10 rounded-3xl flex items-center justify-center">
                    <Car className="w-12 h-12 text-red-600/60" />
                  </div>
                </div>

                {/* Creative headline with stacked layout */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-1 w-16 bg-red-600 rounded-full"></div>
                    <span className="text-red-600 font-bold text-lg uppercase tracking-wider">Ready?</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-gray-800 leading-[0.9] tracking-tight mb-4">
                    Import Your
                  </h3>
                  <div className="relative inline-block">
                    <h3 className="text-5xl md:text-6xl font-black text-red-600 leading-[0.9] tracking-tight">
                      Dream Car
                    </h3>
                    {/* Creative underline */}
                    <div className="absolute -bottom-3 left-0 w-full h-2 bg-red-600/20 rounded-full transform -skew-x-12"></div>
                  </div>
                </div>

                <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light max-w-2xl">
                  Join over <span className="font-bold text-red-600">2,500+</span> satisfied customers who trusted us
                  with their vehicle imports. Get your free consultation and personalized quote today.
                </p>

                {/* Updated trust indicators with faint red icons */}
                <div className="space-y-4 mb-12">
                  {[
                    { icon: CheckCircle, text: "Free Consultation" },
                    { icon: CheckCircle, text: "No Hidden Fees" },
                    { icon: CheckCircle, text: "24/7 Support" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-2xl bg-red-600/10 group-hover:bg-red-600/15 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-red-600/60" />
                      </div>
                      <span className="text-gray-700 font-semibold text-lg">{item.text}</span>
                      {/* Animated line */}
                      <div className="flex-1 h-px bg-gray-200 ml-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Simple CTA Card like CompactFeatures */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                {/* Card header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-4">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-red-600 font-bold text-sm">LIMITED TIME OFFER</span>
                  </div>
                  <h4 className="text-2xl font-black text-gray-800 mb-2">Get Started Today</h4>
                  <p className="text-gray-600">Choose your preferred way to connect</p>
                </div>

                <div className="space-y-4">
                  {/* Primary CTA */}
                  <button className="w-full group bg-red-600 text-white px-8 py-6 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-red-700 hover:-translate-y-1 flex items-center justify-center gap-4">
                    <div className="p-2 bg-white/20 rounded-xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span>Get Free Consultation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>

                  {/* Secondary CTA */}
                  <button className="w-full group bg-white border-2 border-gray-200 hover:border-red-300 text-gray-800 px-8 py-6 rounded-2xl font-bold text-xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-4">
                    <div className="p-2 bg-gray-100 group-hover:bg-red-100 rounded-xl transition-colors duration-300">
                      <Mail className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
                    </div>
                    <span>Request Quote</span>
                  </button>

                  {/* Creative divider */}
                  <div className="flex items-center gap-4 py-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    <span className="text-gray-400 font-medium text-sm">OR</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>

                  {/* Enhanced contact info */}
                  <div className="text-center bg-gray-50 rounded-2xl p-6">
                    <p className="text-gray-500 text-base mb-3">Call us directly</p>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="p-2 bg-white rounded-xl shadow-sm">
                        <Phone className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="font-black text-2xl text-gray-800 tracking-wide">+1 (555) 123-4567</p>
                    </div>
                    <p className="text-sm text-gray-500">Available 24/7 for your convenience</p>
                  </div>
                </div>

                {/* Bottom accent line like CompactFeatures */}
                <div className="mt-8 h-px bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const CompactFeatures = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Expert Consultation",
      description: "24/7 specialist support",
    },
    {
      icon: Zap,
      title: "Quick Start Process",
      description: "50% deposit to begin",
    },
    {
      icon: FileCheck,
      title: "Hassle-Free Customs",
      description: "Complete paperwork handling",
    },
  ]

  return (
    <div className="relative mb-20">
      {/* Feature Strip */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              {/* Icon */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                <feature.icon className="w-7 h-7 text-gray-600" />
              </div>
              {/* Content */}
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 text-base mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
              {/* Check Mark */}
              <CheckCircle className="w-5 h-5 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        {/* Bottom accent line */}
        <div className="mt-8 h-px bg-gray-200"></div>
      </div>
    </div>
  )
}

const VehicleGallery = () => {
  const vehicles = [
    {
      id: 1,
      name: "Toyota Land Cruiser",
      type: "SUV",
      year: "2023",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Popular",
      description: "Legendary off-road capability meets modern luxury",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      type: "Sports Car",
      year: "2024",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Premium",
      description: "Pure performance engineering from Japan",
    },
    {
      id: 3,
      name: "Honda Civic Type R",
      type: "Hatchback",
      year: "2023",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Hot",
      description: "Track-bred performance for the street",
    },
    {
      id: 4,
      name: "Mazda MX-5 Miata",
      type: "Convertible",
      year: "2024",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Classic",
      description: "The pure joy of driving, redefined",
    },
    {
      id: 5,
      name: "Subaru WRX STI",
      type: "Sedan",
      year: "2023",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Rally",
      description: "Rally-bred performance meets daily usability",
    },
    {
      id: 6,
      name: "Lexus LC 500",
      type: "Coupe",
      year: "2024",
      image: "/placeholder.svg?height=400&width=400",
      badge: "Luxury",
      description: "Artistry in motion with uncompromising luxury",
    },
  ]

  const scrollLeft = () => {
    const container = document.getElementById("vehicle-gallery")
    if (container) {
      container.scrollBy({ left: -420, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById("vehicle-gallery")
    if (container) {
      container.scrollBy({ left: 420, behavior: "smooth" })
    }
  }

  return (
    <div className="relative mt-20">
      {/* Header */}
      <div className="flex items-start justify-between mb-8 gap-8">
        <div className="flex-1">
          <h3 className="text-3xl font-black text-gray-800 mb-3">Featured Vehicles</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Handpicked from Japan's most prestigious auctions and dealerships. Each vehicle represents the pinnacle of
            automotive excellence.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={scrollLeft}
            className="group p-3 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollRight}
            className="group p-3 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <div
        id="vehicle-gallery"
        className="flex gap-8 overflow-x-auto scrollbar-hide pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {vehicles.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className="flex-shrink-0 w-96 h-[500px] group cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Full Background Image Card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] group">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              {/* Multiple Gradient Overlays for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

              {/* Top Section - Only Year Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-white/20 backdrop-blur-md rounded-xl px-3 py-2 border border-white/30 shadow-2xl">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white" />
                    <span className="text-sm font-bold text-white">{vehicle.year}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                {/* Vehicle Type */}
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-white/80" />
                  <span className="text-white/90 font-semibold text-sm uppercase tracking-wider">{vehicle.type}</span>
                </div>
                {/* Vehicle Name */}
                <h4 className="font-black text-3xl text-white mb-3 drop-shadow-2xl leading-tight">{vehicle.name}</h4>
                {/* Description */}
                <p className="text-white/90 leading-relaxed text-base mb-6 drop-shadow-lg font-medium">
                  {vehicle.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200"></div>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll Indicators */}
      <div className="flex justify-center gap-4 mt-10">
        {Array.from({ length: Math.ceil(vehicles.length / 2) }).map((_, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => {
              const container = document.getElementById("vehicle-gallery")
              if (container) {
                container.scrollTo({ left: index * 840, behavior: "smooth" })
              }
            }}
          >
            <div className="w-16 h-3 rounded-full bg-gray-200 group-hover:bg-gray-400 transition-all duration-300 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gray-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const OfficialDealerBadge = () => (
  <div className="mx-auto mb-16 flex flex-col items-center w-full max-w-md group">
    <div className="relative w-full">
      <div className="relative bg-red-600 rounded-t-2xl w-full py-4 flex items-center justify-center shadow-xl">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-white" />
          <span className="text-white font-bold text-xl tracking-wide">OFFICIAL DEALER</span>
          <Shield className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="relative bg-white rounded-b-2xl w-full flex items-center justify-between px-6 py-6 border-t border-gray-100 shadow-xl">
        {/* BE FORWARD */}
        <div className="flex-1 flex flex-col items-center group/item">
          <div className="w-20 h-10 bg-gray-50 border border-gray-200 rounded-lg mb-2 flex items-center justify-center text-gray-700 font-bold text-sm shadow-sm">
            BE FORWARD
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gray-400 text-gray-400" />
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="w-px h-12 bg-gray-200 mx-4" />
        {/* SBT */}
        <div className="flex-1 flex flex-col items-center group/item">
          <div className="w-20 h-10 bg-gray-50 border border-gray-200 rounded-lg mb-2 flex items-center justify-center text-gray-700 font-bold text-sm shadow-sm">
            SBT
          </div>
          <span className="text-xs text-gray-600 font-semibold">GLOBAL EXPORTER</span>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gray-400 text-gray-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Services: React.FC = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Premium Vehicle Import & Delivery</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the future of vehicle importing with our cutting-edge logistics and white-glove service.
        </p>
      </div>
      <div className="relative z-10">
        <OfficialDealerBadge />
        {/* Hero Service Card */}
        <div className="mb-12">
          <div className="relative group">
            <div className="bg-red-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden">
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Truck className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-3xl md:text-4xl mb-2 drop-shadow-lg">Your Dream Car</h3>
                    <p className="text-xl font-semibold opacity-90">Delivered Worldwide</p>
                  </div>
                </div>
                <p className="text-lg md:text-xl mb-8 font-medium leading-relaxed drop-shadow">
                  From Tokyo auctions to your driveway. We don't just import cars – we deliver dreams. Our premium
                  service handles everything: sourcing, shipping, customs, and delivery with military precision and
                  luxury-level care.
                </p>
              </div>
              {/* Floating car silhouette */}
              <div className="absolute bottom-0 right-0 w-80 h-40 opacity-20 pointer-events-none">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <path
                    d="M50 150 L80 120 L120 110 L200 110 L280 120 L320 130 L350 150 L350 170 L320 170 L300 160 L100 160 L80 170 L50 170 Z"
                    fill="white"
                  />
                  <circle cx="120" cy="170" r="20" fill="white" />
                  <circle cx="280" cy="170" r="20" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Compact Features Strip */}
        <CompactFeatures />
        {/* Vehicle Gallery */}
        <VehicleGallery />
        {/* Creative CTA Section */}
        <CreativeCTA />
      </div>
    </div>
    <style jsx>{`
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  </section>
)

export default Services
