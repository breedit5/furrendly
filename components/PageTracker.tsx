'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function PageTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined') return

    // Ensure gtag exists
    if (typeof window.gtag !== 'function') return

    // Track page view
    window.gtag('config', GA_ID, {
      page_path: pathname,
    })

  }, [pathname])

  return null
}