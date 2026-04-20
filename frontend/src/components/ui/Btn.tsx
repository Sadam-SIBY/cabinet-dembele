import { Link } from 'react-router-dom'
import type { CSSProperties, MouseEvent, ReactNode } from 'react'

// ── Variantes ─────────────────────────────────────────────────────────────────
// Repos : fond plein + texte contrasté
// Hover : wipe s'efface de droite (origin-right scale 100→0), révèle le bord + texte coloré

type Variant = 'gold' | 'navy' | 'light'
type Size    = 'sm'   | 'md'

const V = {
  gold: {
    border: 'border-gold-500', fill: '#C9A84C',
    rest: 'text-white',     hover: 'group-hover:text-gold-500',   // filled → empty
    iRest: 'text-gold-500', iHover: 'group-hover:text-white',     // empty  → filled
  },
  navy: {
    border: 'border-navy-950', fill: '#05080F',
    rest: 'text-white',      hover: 'group-hover:text-navy-950',  // filled → empty
    iRest: 'text-navy-950',  iHover: 'group-hover:text-white',    // empty  → filled
  },
  light: {
    border: 'border-white', fill: '#ffffff',
    rest: 'text-navy-950',  hover: 'group-hover:text-white',      // filled → empty
    iRest: 'text-white',    iHover: 'group-hover:text-navy-950',  // empty  → filled
  },
}
const S = {
  sm: 'px-6 py-2.5',
  md: 'px-8 py-4',
}

interface Props {
  variant?:   Variant
  size?:      Size
  href?:      string
  to?:        string
  onClick?:   (e: MouseEvent<HTMLElement>) => void
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
  icon?:      ReactNode
  children:   ReactNode
  className?: string
  style?:     CSSProperties
  /** Inverse : transparent au repos → fond plein au survol */
  inverted?:  boolean
}

export default function Btn({
  variant = 'navy', size = 'md',
  href, to, onClick, type = 'button', disabled,
  icon, children, className = '', style, inverted = false,
}: Props) {
  const { border, fill, rest, hover, iRest, iHover } = V[variant]
  const textClass = inverted ? `${iRest} ${iHover}` : `${rest} ${hover}`

  const shared = [
    'group relative inline-flex items-center justify-center overflow-hidden',
    'border font-sans font-semibold text-[11px] tracking-widest uppercase',
    S[size], border,
    disabled ? 'opacity-50 pointer-events-none' : '',
    className,
  ].filter(Boolean).join(' ')

  const inner = (
    <>
      {inverted ? (
        /* Wipe IN — s'insère de gauche au hover */
        <span
          aria-hidden
          className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
          style={{ background: fill }}
        />
      ) : (
        /* Wipe OUT — s'efface de droite au hover */
        <span
          aria-hidden
          className="absolute inset-0 origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-out"
          style={{ background: fill }}
        />
      )}
      {/* Contenu */}
      <span className={`relative z-10 inline-flex items-center gap-3 transition-colors duration-300 ${textClass}`}>
        {children}
        {icon && (
          <span className="inline-flex group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
    </>
  )

  if (to)   return <Link    to={to}   className={shared} style={style} onClick={onClick as never}>{inner}</Link>
  if (href) return <a       href={href} className={shared} style={style} onClick={onClick}>{inner}</a>
  return          <button   type={type} className={shared} style={style} onClick={onClick} disabled={disabled}>{inner}</button>
}
