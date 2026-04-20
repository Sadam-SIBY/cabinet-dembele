import { useEffect, useRef } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Start invisible + slightly low
    el.style.opacity = '0'
    el.style.transform = 'translateY(8px)'
    // Next frame: animate in
    const id = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.32s ease, transform 0.32s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div ref={ref} style={{ willChange: 'opacity, transform' }}>
      {children}
    </div>
  )
}
