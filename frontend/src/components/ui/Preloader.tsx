import { useEffect, useState } from 'react'
import logoB from '../../assets/logo_b.png'

export default function Preloader({ onDone }: { onDone: () => void }) {
  // phases : 'enter' → 'visible' → 'exit'
  const [phase, setPhase] = useState<'enter' | 'visible' | 'exit'>('enter')

  useEffect(() => {
    // Légère pause avant d'animer l'entrée
    const t1 = setTimeout(() => setPhase('visible'), 80)
    // Début de sortie après 1.6s
    const t2 = setTimeout(() => setPhase('exit'), 1700)
    // Démonter après la transition de sortie (500ms)
    const t3 = setTimeout(() => onDone(), 2200)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#05080F', // navy-950
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: phase === 'exit' ? 0 : 1,
        transition: phase === 'exit' ? 'opacity 0.5s cubic-bezier(0.16,1,0.3,1)' : 'none',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Icône + nom */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>

        {/* Logo */}
        <img
          src={logoB}
          alt="Cabinet Notarial Dembélé"
          style={{
            height: 72,
            width: 'auto',
            objectFit: 'contain',
            opacity: phase === 'enter' ? 0 : 1,
            transform: phase === 'enter' ? 'scale(0.8)' : 'scale(1)',
            transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        />

        {/* Nom — mask reveal */}
        <div style={{ overflow: 'hidden', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              color: 'white',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              letterSpacing: '0.06em',
              lineHeight: 1,
              transform: phase === 'enter' ? 'translateY(100%)' : 'translateY(0)',
              transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s',
            }}
          >
            Maître Dembélé
          </div>
        </div>

        {/* Sous-titre */}
        <div style={{ overflow: 'hidden' }}>
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              color: '#C9A84C',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              transform: phase === 'enter' ? 'translateY(100%)' : 'translateY(0)',
              transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.28s',
            }}
          >
            Notaire — Ouagadougou
          </div>
        </div>

        {/* Ligne dorée qui se déploie */}
        <div
          style={{
            height: 1,
            width: 120,
            background: 'rgba(201,168,76,0.25)',
            marginTop: 8,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#C9A84C',
              transformOrigin: 'left',
              transform: phase === 'enter' ? 'scaleX(0)' : 'scaleX(1)',
              transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s',
            }}
          />
        </div>

        {/* Points de chargement */}
        <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: '#C9A84C',
                opacity: phase === 'enter' ? 0 : 1,
                transition: `opacity 0.4s ease ${0.6 + i * 0.12}s`,
                animation: phase === 'visible' ? `preloader-dot 1s ease-in-out ${i * 0.2}s infinite alternate` : 'none',
              }}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes preloader-dot {
          from { opacity: 0.2; transform: translateY(0); }
          to   { opacity: 1;   transform: translateY(-4px); }
        }
      `}</style>
    </div>
  )
}
