'use client'

import { useEffect, useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null

  return <>{children}</>
}