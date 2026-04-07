'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  direction?: 'up' | 'left' | 'right' | 'scale' | 'fade'
  delay?: number
  className?: string
  style?: React.CSSProperties
  stagger?: boolean
}

export default function GSAPReveal({
  children, direction = 'up', delay = 0, className = '', style, stagger,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const from: Record<string, number> = {
      opacity: 0,
      ...(direction === 'up'    && { y: 36 }),
      ...(direction === 'left'  && { x: -44 }),
      ...(direction === 'right' && { x:  44 }),
      ...(direction === 'scale' && { scale: 0.90 }),
      ...(direction === 'fade'  && {}),
    }

    const applyFrom = () => {
      el.style.opacity = '0'
      if (from.y)     el.style.transform = `translateY(${from.y}px)`
      if (from.x)     el.style.transform = `translateX(${from.x}px)`
      if (from.scale) el.style.transform = `scale(${from.scale})`
    }
    applyFrom()

    const applyTo = () => {
      el.style.transition = `opacity .85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform .85s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`
      el.style.opacity = '1'
      el.style.transform = ''
    }

    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { applyTo(); io.disconnect() } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [direction, delay])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
