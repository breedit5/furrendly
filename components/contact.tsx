'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { Mail, Phone, Instagram, Linkedin } from "lucide-react"

interface ContactProps {
  setCurrentPage: (page: 'home' | 'contact' | 'faq') => void
}

export default function Contact({ setCurrentPage }: ContactProps) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // ✅ FINAL HANDLE SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })

        setTimeout(() => setSubmitted(false), 4000)
      } else {
        alert("Something went wrong")
      }

    } catch (err) {
      alert("Error sending message")
    }

    setLoading(false)
  }

  return (
    <section className="py-12 md:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>

          <p className="text-gray-600 md:text-lg">
            Get in touch with us — we'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
                <Mail className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">team@furrendly.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-md transition">
                <Phone className="w-6 h-6 text-gray-700" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 7701819295</p>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4">
                <p className="font-semibold text-gray-900 mb-3">
                  Follow Us
                </p>

                <div className="flex gap-4">

                  <a
                    href="https://www.instagram.com/furrend.ly"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-pink-50 hover:scale-110 transition"
                  >
                    <Instagram className="w-5 h-5 text-gray-700 hover:text-pink-500" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/furrendly/"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full border hover:bg-blue-50 hover:scale-110 transition"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 hover:text-blue-700" />
                  </a>
                   {/* Discord */}
   <a 
  href="#" 
  className="w-10 h-10 rounded-full bg-white border flex items-center justify-center transition hover:bg-indigo-50 hover:scale-110"
  aria-label="Discord"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-gray-700 transition hover:text-indigo-600"
  >
    <path d="M20.317 4.369A19.791 19.791 0 0015.885 3c-.191.347-.403.8-.553 1.165a18.27 18.27 0 00-6.664 0c-.15-.365-.362-.818-.553-1.165a19.736 19.736 0 00-4.433 1.369C1.533 7.07.89 9.662 1.08 12.223c1.977 1.463 3.89 2.354 5.776 2.939.465-.63.873-1.294 1.215-1.992-.664-.25-1.296-.555-1.892-.907.158-.117.314-.24.466-.366 3.65 1.67 7.61 1.67 11.222 0 .153.126.308.249.466.366-.596.352-1.228.657-1.892.907.342.698.75 1.362 1.215 1.992 1.886-.585 3.799-1.476 5.776-2.939.239-3.126-.408-5.694-1.68-7.854zM8.02 13.016c-1.12 0-2.04-1.034-2.04-2.307 0-1.273.9-2.307 2.04-2.307 1.14 0 2.06 1.034 2.04 2.307 0 1.273-.9 2.307-2.04 2.307zm7.96 0c-1.12 0-2.04-1.034-2.04-2.307 0-1.273.9-2.307 2.04-2.307 1.14 0 2.06 1.034 2.04 2.307 0 1.273-.9-2.307-2.04 2.307z"/>
  </svg>
</a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a message
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg resize-none"
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  )
}