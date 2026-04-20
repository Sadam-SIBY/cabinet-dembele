import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [hovered,  setHovered]  = useState(false)
  const [visible,  setVisible]  = useState(false)

  useEffect(() => {
    // Ne pas afficher sur écrans tactiles
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0, my = 0   // position souris (exacte)
    let rx = 0, ry = 0   // position anneau (lissée)
    let rafId: number

    /* ── Suivi souris ── */
    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    /* ── Détection hover sur éléments interactifs ── */
    const onOver = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
        setHovered(true)
      }
    }
    const onOut = (e: MouseEvent) => {
      const t = e.target as Element
      if (t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')) {
        setHovered(false)
      }
    }
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    /* ── RAF : point exact, anneau avec lag ── */
    const tick = () => {
      // Lerp pour l'anneau (inertie)
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11

      dot.style.transform  = `translate(${mx}px, ${my}px)`
      ring.style.transform = `translate(${rx}px, ${ry}px)`

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [])

  // Ne rien rendre sur tactile
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  const RING_SIZE = hovered ? 44 : 28

  return (
    <>
      {/* ── Anneau avec inertie ── */}
      <div
        ref={ringRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         RING_SIZE,
          height:        RING_SIZE,
          marginLeft:    -RING_SIZE / 2,
          marginTop:     -RING_SIZE / 2,
          borderRadius:  '50%',
          border:        `1.5px solid ${hovered ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.5)'}`,
          pointerEvents: 'none',
          zIndex:        99998,
          opacity:       visible ? 1 : 0,
          willChange:    'transform',
          transition:    'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), margin 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, border-color 0.25s ease',
        }}
      />

      {/* ── Point central (suit la souris exactement) ── */}
      <div
        ref={dotRef}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         hovered ? 5 : 4,
          height:        hovered ? 5 : 4,
          marginLeft:    hovered ? -2.5 : -2,
          marginTop:     hovered ? -2.5 : -2,
          borderRadius:  '50%',
          background:    '#C9A84C',
          pointerEvents: 'none',
          zIndex:        99999,
          opacity:       visible ? 1 : 0,
          willChange:    'transform',
          transition:    'opacity 0.3s ease',
        }}
      />
    </>
  )
}
