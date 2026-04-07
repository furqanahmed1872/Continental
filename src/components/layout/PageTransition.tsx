'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px) scale(0.99)'
    el.style.filter = 'blur(4px)'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1), filter 0.7s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0) scale(1)'
        el.style.filter = 'blur(0px)'
      })
    })
  }, [pathname])

  return <div ref={ref}>{children}</div>
}
