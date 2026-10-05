'use client'
import { useEffect } from 'react'

export default function DynamicFavicon() {
  useEffect(() => {
    const setFavicon = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      // ❌ Remove all existing favicons
      document.querySelectorAll("link[rel*='icon']").forEach((el) => el.remove())

      // ✅ Add new favicon
      const link = document.createElement('link')
      link.rel = 'icon'
      link.type = 'image/png'
      link.href = isDark ? '/favicon-dark.png' : '/favicon-light.png'

      document.head.appendChild(link)
    }

    setFavicon()

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', setFavicon)

    return () => media.removeEventListener('change', setFavicon)
  }, [])

  return null
}