'use client'

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Furrendly
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                The premier platform for adoption, care, and community.
                Nurturing bonds that last a lifetime.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Product
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white transition hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/download" className="text-gray-400 hover:text-white transition hover:underline">
                    Download App
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition hover:underline">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition hover:underline">
                    Careers
                  </Link>
                </li>
                 <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white transition">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Legal
              </h3>
              <ul className="space-y-3 text-sm columns-1">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/data-safety" className="text-gray-400 hover:text-white transition hover:underline">
                    Data Safety
                  </Link>
                </li>
                <li>
                  <Link href="/account-deletion" className="text-gray-400 hover:text-white transition hover:underline">
                    Account Deletion Policy
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-gray-400 hover:text-white transition hover:underline">
                    Safety Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/csae" className="text-gray-400 hover:text-white transition hover:underline">
                    CSAE Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-400 text-sm">
            © {year} Furrendly. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm uppercase tracking-wide">
              Follow Us
            </span>

            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/furrend.ly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition text-gray-300 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/furrendly/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition text-gray-300 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition text-gray-300 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M20.317 4.369A19.791 19.791 0 0015.885 3c-.191.347-.403.8-.553 1.165a18.27 18.27 0 00-6.664 0c-.15-.365-.362-.818-.553-1.165a19.736 19.736 0 00-4.433 1.369C1.533 7.07.89 9.662 1.08 12.223c1.977 1.463 3.89 2.354 5.776 2.939.465-.63.873-1.294 1.215-1.992-.664-.25-1.296-.555-1.892-.907.158-.117.314-.24.466-.366 3.65 1.67 7.61 1.67 11.222 0 .153.126.308.249.466.366-.596.352-1.228.657-1.892.907.342.698.75 1.362 1.215 1.992 1.886-.585 3.799-1.476 5.776-2.939.239-3.126-.408-5.694-1.68-7.854z" />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}