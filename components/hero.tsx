'use client'

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import QRCode from "react-qr-code"
import { useState, useEffect } from "react"

const slides = [
  {
    img: "/pets/img1.jpeg",
    mobileImg: "/pets/pet1.PNG",
    title: " Playdates for Them. Connections for You. ",
    desc: "Find the perfect playmate for your pet based on energy, size, and breed—and meet local pet parents who share your vibe. "
  },
  {
    img: "/pets/img2.jpeg",
    mobileImg: "/pets/pet2.PNG",
    title: " Find Your Furr-ever Friend",
    desc: "Match with rescue pets and local shelters to find the missing piece of your family. "
  },
  {
    img: "/pets/img3.jpeg",
    mobileImg: "/pets/pet3.PNG",
    title: "Everything Under One Paw",
    desc: "Get ready for the ultimate pet ecosystem. Expert vet care, professional grooming, and premium essentials are coming soon!"
  },
  {
    img: "/pets/img4.jpeg",
    mobileImg: "/pets/pet4.PNG",
    title: "Help Them Find Home ",
    desc: "Found a stray or need to rehome a pet? Create a listing and act as the bridge to connect an animal in need with a loving family."
  }
]

export default function Hero() {
  const [showQR, setShowQR] = useState(false)
  const [index, setIndex] = useState(0)

  const appLink = "https://play.google.com/store/apps/details?id=com.breedit.app&pli=1"

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[index]

  return (
    <section className="relative overflow-hidden">

      {/* ================== 💻 DESKTOP ================== */}
      <div className="hidden md:block h-[90vh] w-full relative">

        {/* MAIN IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.img}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={slide.img}
              alt="pet"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* BLUR LAYER (dynamic side) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.img + "-blur"}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={slide.img}
              alt="pet"
              fill
              sizes="100vw"
              className="object-cover blur-3xl scale-110 brightness-75"
              style={{
                maskImage:
                  index < 2
                    ? "linear-gradient(to right, black 0%, black 30%, transparent 70%)"
                    : "linear-gradient(to left, black 0%, black 30%, transparent 70%)",
                WebkitMaskImage:
                  index < 2
                    ? "linear-gradient(to right, black 0%, black 30%, transparent 70%)"
                    : "linear-gradient(to left, black 0%, black 30%, transparent 70%)"
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* CONTENT (dynamic position) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={`absolute top-0 h-full w-1/2 flex items-center px-12 z-10 ${
              index < 2
                ? "left-0 justify-start text-left"
                : "right-0 justify-end text-right"
            }`}
            initial={{ opacity: 0, x: index < 2 ? -60 : 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index < 2 ? -60 : 60 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-lg text-white">
              <h1 className="text-5xl font-bold mb-4">
                {slide.title}
              </h1>

              <p className="text-lg text-white/80 mb-6">
                {slide.desc}
              </p>

              <div
                className={`flex gap-4 ${
                  index < 2 ? "justify-start" : "justify-end"
                }`}
              >
                <a
                  href={appLink}
                  target="_blank"
                  className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Download App
                </a>

                <button
                  onClick={() => setShowQR(true)}
                  className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
                >
                  Scan QR
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================== 📱 MOBILE ================== */}
      <div className="md:hidden relative h-[80vh] flex items-center justify-center text-center">

        <AnimatePresence>
          <motion.div
            key={slide.mobileImg}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={slide.mobileImg || slide.img}
              alt="pet"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 px-6 text-white max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            {slide.title}
          </h1>

          <p className="text-sm mb-6">
            {slide.desc}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={appLink}
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              Download App
            </a>

            <button
              onClick={() => setShowQR(true)}
              className="bg-white/90 text-black px-6 py-3 rounded-xl"
            >
              Scan QR
            </button>
          </div>
        </div>
      </div>

      {/* QR MODAL */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowQR(false)}
            />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center gap-4 z-10"
            >
              <p className="font-semibold text-gray-800">
                Scan to Download
              </p>

              <QRCode value={appLink} size={160} />

              <button
                onClick={() => setShowQR(false)}
                className="text-sm text-gray-500 hover:text-black"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}