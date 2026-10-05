'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Testimonials() {

  const testimonials = [
    {
      id: 1,
      name: "Joshna",
      image: "/team-1.jpg",
      review: "I found my best friend here",
      desc: "Adopting Bruno through Furrendly was the best decision I’ve ever made."
    },
    {
      id: 2,
      name: "Amir Ali",
      image: "/team-2.jpg",
      review: "My dog finally found a match",
      desc: "The matchmaking feature on Furrendly was amazing. My dog finally found a companion."
    },
    {
      id: 3,
      name: "Kathrine",
      image: "/team-3.jpg",
      review: "My pet was re-homed easily",
      desc: "Rehoming my pet was not an easy decision, but Furrendly made the process smooth and trustworthy."
    },
    {
      id: 4,
      name: "Joshna",
      image: "/team-4.jpg",
      review: "I found my best buddy here",
      desc: "Adopting Suzie through Furrendly was the best decision I’ve ever made."
    }
  ]

  return (

    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             Stories from Our Community
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Real experiences from pet lovers who found their perfect companions
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center border hover:shadow-xl transition"
            >

              {/* Avatar (CIRCLE) */}
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="text-yellow-400 mb-3 text-lg">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review Title */}
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {item.review}
              </h3>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-gray-200 mx-auto mb-3"></div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                {item.desc}
              </p>

              {/* Name */}
              <p className="text-sm font-medium text-gray-800">
                ~ {item.name}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}