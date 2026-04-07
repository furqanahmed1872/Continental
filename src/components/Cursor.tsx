'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos  = useRef({ x: 0, y: 0 })
  const raf  = useRef<number>(0)

  useEffect(() => {
    const d = dot.current!
    const r = ring.current!
    let rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      d.style.left = e.clientX + 'px'
      d.style.top  = e.clientY + 'px'
    }

    // Ring follows with lerp
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n
    const loop = () => {
      rx = lerp(rx, pos.current.x, 0.12)
      ry = lerp(ry, pos.current.y, 0.12)
      r.style.left = rx + 'px'
      r.style.top  = ry + 'px'
      raf.current = requestAnimationFrame(loop)
    }
    loop()

    const onDown = () => { d.classList.add('clicking'); r.classList.add('clicking') }
    const onUp   = () => { d.classList.remove('clicking'); r.classList.remove('clicking') }

    const addHover = (el: Element) => {
      el.addEventListener('mouseenter', () => { d.classList.add('hovering'); r.classList.add('hovering') })
      el.addEventListener('mouseleave', () => { d.classList.remove('hovering'); r.classList.remove('hovering') })
    }

    const observe = () => {
      document.querySelectorAll('a,button,[data-cursor]').forEach(addHover)
    }
    observe()
    const mo = new MutationObserver(observe)
    mo.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)

    return () => {
      cancelAnimationFrame(raf.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div id="cursor"      ref={dot}  />
      <div id="cursor-ring" ref={ring} />
    </>
  )
}
