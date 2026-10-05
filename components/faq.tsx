'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

interface FAQProps {
  setCurrentPage: (page: 'home' | 'contact' | 'faq') => void
}

export default function FAQ({ setCurrentPage }: FAQProps) {

  const [openItem, setOpenItem] = useState<number | null>(null)
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = [
    "All",
    "Adoption",
    "Matchmaking",
    "Re-homing",
    "Payments",
    "Help & Support"
  ]

  const faqs = [
    {
      id: 1,
      category: "Adoption",
      question: 'How do I adopt a pet on Furrendly?',
      answer: 'Use our smart matching algorithm to find your perfect pet. Browse profiles, connect with owners or shelters, and complete the adoption process securely within the app.'
    },
    {
      id: 2,
      category: "Adoption",
      question: 'Can I meet the pet before finalizing the adoption?',
      answer: 'Yes! We encourage meeting your potential pet before finalizing adoption. You can schedule meetups and verify health records through the app.'
    },
    {
      id: 3,
      category: "Help & Support",
      question: 'What documents are required for adoption?',
      answer: 'Required documents include proof of identity, proof of residence, and sometimes a veterinary reference.'
    },
    {
      id: 4,
      category: "Matchmaking",
      question: 'How does Furrendly verify pet adoptions and donors?',
      answer: 'Furrendly verifies adopters and donors through background checks and references to ensure safe placements.'
    },
    {
      id: 5,
      category: "Payments",
      question: 'Is it safe and can I trust the people on Furrendly?',
      answer: 'Yes! We implement user verification, secure messaging, and a community rating system.'
    }
  ]

  // Filtering logic
  const filteredFaqs = faqs.filter((faq) => {

    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      activeFilter === "All" || faq.category === activeFilter

    return matchesSearch && matchesFilter
  })

  return (
    <section className="py-12 md:py-20 bg-white">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-gray-600">
            Everything you need to know about matching, adopting and re-homing pets
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search help articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 bg-gray-50 transition"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-10 flex-wrap justify-center">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition
              
              ${
                activeFilter === filter
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-500">
              No FAQs found.
            </p>
          )}

          {filteredFaqs.map((faq, index) => (

            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
            >

              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
              >

                <h3 className="text-sm md:text-base font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>

                <motion.span
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  className="text-gray-600"
                >
                  ▼
                </motion.span>

              </button>

              <AnimatePresence>

                {openItem === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-gray-50 border-t"
                  >

                    <p className="text-gray-700">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

        {/* Contact */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border">

          <h3 className="text-2xl font-bold mb-2">
            Still have questions?
          </h3>

          <p className="text-gray-600 mb-6">
            We typically respond within 24 hours
          </p>

          <div className="flex gap-4 justify-center flex-wrap">

            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Contact Support
            </button>

            <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-6 rounded-lg border">
              Chat with us
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}