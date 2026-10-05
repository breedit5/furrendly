'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const MotionLink = motion(Link)

export default function Features() {

  const features = [
    {
      id: 1,
      icon: "💗",
      title: 'Find a Playmate',
      description: 'Discover local pets that match your furry friend’s energy, size, and personality for the perfect playdate.',
      color: 'from-pink-400 to-pink-500'
    },
    {
      id: 2,
      icon: "🎁",
      title: 'Secure Rehoming',
      description: 'Compassionate, verified transitions for pets seeking a loving new beginning.',
      color: 'from-orange-400 to-orange-500'
    },
    {
      id: 3,
      icon: "🏠",
      title: 'Verified Adoptions',
      description: 'Connect with local shelters and owners to complete your adoption with total confidence.',
      color: 'from-purple-400 to-purple-500'
    },
    {
      id: 4,
      icon: "⭐",
      title: 'Full Circle Care',
      description: 'Coming soon: From expert grooming and vet care to professional training, everything your pet needs to thrive, all in one place.',
      color: 'from-purple-400 to-purple-500'
    }
  ]

  const futureServices = [
    { icon: '🏥', label: 'Vet', description: 'Book an on-demand check-up' },
    { icon: '✂️', label: 'Spa & Styling', description: "Grooming, at your pet's pace" },
    { icon: '🏪', label: 'Curated Essentials', description: "Food and gear we'd actually pick" },
    { icon: '🎓', label: 'Expert Coaching', description: 'Training guidance from real trainers' }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            The Complete Pet Ecosystem
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
           Playdates, adoptions, rehoming, and total care. The ultimate hub for modern pet parents.
          </p>
        </motion.div>

        {/* Features - PERFECTLY FITS ALL SCREENS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-16 lg:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-4 sm:p-5 md:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full min-h-[140px] sm:min-h-[160px] md:min-h-[180px]"
            >
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${feature.color}`} />
              <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-sm text-gray-600 leading-relaxed line-clamp-3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live Now */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 
bg-gradient-to-br from-orange-50/80 to-amber-100/60 
border border-white/40 
shadow-xl backdrop-blur-md"
        >
          {/* Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="inline-block bg-orange-500/90 backdrop-blur-sm text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 shadow-md">
              Just Landed
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-3 leading-tight">
              Paws and progress
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Healthcare, grooming, training, and premium essentials are live in the
              Marketplace right now. Tap any of these to explore.
            </p>
          </div>

          {/* Services */}
          <div className="relative flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="hidden sm:block absolute left-[27px] top-9 bottom-9 w-px border-l-2 border-dashed border-orange-300/60 -z-0" />
            {futureServices.map((service, index) => (
              <MotionLink
                key={service.label}
                href="/marketplace"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className={`group relative z-10 flex items-center gap-3 sm:gap-4
bg-white/95 rounded-2xl border border-gray-200
shadow-sm hover:shadow-lg hover:border-orange-300
transition-all duration-300
px-4 sm:px-6 py-3.5 sm:py-4
${index % 2 === 1 ? 'sm:ml-14' : ''}`}
              >
                <span className="flex-none w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-lg sm:text-2xl">
                  {service.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-lg leading-tight">
                    {service.label}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 truncate">
                    {service.description}
                  </div>
                </div>
                <span className="flex-none hidden sm:inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-white bg-green-600 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
                  Live now
                </span>
                <span className="flex-none w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </MotionLink>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-8 sm:mt-10"
          >
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-md hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              Explore the Marketplace
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}