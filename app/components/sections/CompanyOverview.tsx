"use client"

import type React from "react"
import { CheckCircle, Users, Globe, Shield, Award, ArrowRight } from "lucide-react"

const CompanyOverview: React.FC = () => (
  <section className="relative bg-white py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            {/* Main image container */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <img
                src="/about-placeholder.jpg"
                alt="About Slick Logistics"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="text-center">
                <div className="text-3xl font-black text-red-600 mb-1">2,500+</div>
                <div className="text-gray-600 font-semibold text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2">
          <div className="max-w-xl">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-16 bg-red-600 rounded-full"></div>
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
                About <span className="text-red-600">Slick Logistics</span>
              </h2>
              <p className="text-2xl text-gray-600 font-light leading-relaxed">Empowering Your Logistics Journey</p>
            </div>

            {/* Description */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                Slick Logistics is your trusted partner for seamless, secure, and efficient logistics solutions. We
                specialize in vehicle sourcing, import, shipping, and customs clearance, serving both individuals and
                businesses with professionalism and care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                With a team of experienced professionals and a global network, we ensure every step of your logistics
                process is handled with expertise. Whether you're importing a single vehicle or managing complex
                freight, Slick Logistics delivers reliability and peace of mind.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {[
                { icon: CheckCircle, text: "Comprehensive vehicle sourcing and import services" },
                { icon: Globe, text: "Global shipping network with trusted partners" },
                { icon: Shield, text: "Secure customs clearance and documentation" },
                { icon: Users, text: "Expert consultation team available 24/7" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 bg-red-600/10 rounded-xl group-hover:bg-red-600/15 transition-colors duration-300 flex-shrink-0 mt-1">
                    <feature.icon className="w-5 h-5 text-red-600/70" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg leading-relaxed">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600 font-medium text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Globe className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">50+</div>
                  <div className="text-gray-600 font-medium text-sm">Countries Served</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">99%</div>
                  <div className="text-gray-600 font-medium text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                className="group bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 flex items-center gap-3"
                onClick={() => (window.location.href = "#contact")}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CompanyOverview
