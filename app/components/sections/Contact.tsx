"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Send, CheckCircle, Headphones, ExternalLink } from "lucide-react"

const GoogleMapsEmbed: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-600/10 rounded-lg">
            <MapPin className="w-4 h-4 text-red-600" />
          </div>
          <h4 className="text-base font-black text-gray-900">Our Location</h4>
        </div>
        <a
          href="https://maps.google.com/?q=123+Placeholder+Ave,+Harare,+Zimbabwe"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-semibold transition-colors duration-300"
        >
          <span>View Map</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.2!2d31.0522!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjciUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1234567890"
          width="100%"
          height="150"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />

        {/* Overlay for better interaction */}
        <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors duration-300 pointer-events-none"></div>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-white rounded shadow-sm">
            <MapPin className="w-4 h-4 text-red-600" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 text-sm mb-1">130 Smora Machel Ave</p>
            <p className="text-gray-600 text-sm mb-2">Harare, Zimbabwe</p>
            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
              <span>• Parking available</span>
              <span>• Public transport</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: send to info@slicklogistics.co.zw
    setSubmitted(true)
  }

  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
            <div className="h-1 w-16 bg-red-600 rounded-full"></div>
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
            Let's <span className="text-red-600">Connect</span>
          </h2>
          <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Ready to import your dream vehicle? Get in touch with our expert team for a free consultation and
            personalized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10"
              onSubmit={handleSubmit}
              id="contact"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3">Send us a Message</h3>
                <p className="text-gray-600 font-light">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-3 font-semibold text-gray-700 text-sm uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block mb-3 font-semibold text-gray-700 text-sm uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-3 font-semibold text-gray-700 text-sm uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              <div className="mb-8">
                <label className="block mb-3 font-semibold text-gray-700 text-sm uppercase tracking-wide">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  rows={6}
                  placeholder="Tell us about your vehicle import needs, budget, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-red-600 text-white px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-red-700 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Send Message</span>
              </button>

              {submitted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 font-medium">Thank you! We'll get back to you within 24 hours.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information and Map Cards */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact Information Card - Slightly Larger */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-red-600/10 rounded-lg">
                  <Headphones className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-base font-black text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-4">
                {/* Phone */}
                <div className="group">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <div className="p-2 bg-white rounded shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                      <Phone className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Call Us</p>
                      <p className="text-sm font-black text-gray-900 mb-1">+263 77 364 6014</p>
                      <p className="text-gray-600 text-xs font-medium">Available 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <div className="p-2 bg-white rounded shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                      <Mail className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Email Us</p>
                      <p className="text-sm font-black text-gray-900 mb-1 break-all">info@slicklogistics.co.zw</p>
                      <p className="text-gray-600 text-xs font-medium">Response within 24hrs</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-100 hover:border-gray-200">
                    <div className="p-2 bg-white rounded shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                      <MapPin className="w-4 h-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Visit Us</p>
                      <p className="text-sm font-black text-gray-900 mb-1">130 Samora Machel Ave</p>
                      <p className="text-gray-600 text-xs font-medium">Harare, Zimbabwe</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="mt-5 h-px bg-gray-200"></div>
            </div>

            {/* Google Maps Component */}
            <GoogleMapsEmbed />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
