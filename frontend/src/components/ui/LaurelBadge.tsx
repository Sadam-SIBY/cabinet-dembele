interface Props {
  line1: string
  line2: string
  line3?: string
}

/**
 * Branche de laurier — 5 feuilles régulièrement espacées le long d'une tige courbe.
 * La branche gauche part du bas-centre vers le haut-gauche.
 * La branche droite est un miroir horizontal (scaleX -1).
 */
const LaurelBranch = ({ side }: { side: 'left' | 'right' }) => (
  <svg
    width="32"
    height="60"
    viewBox="0 0 32 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={side === 'right' ? { transform: 'scaleX(-1)' } : undefined}
    aria-hidden="true"
  >
    {/* Tige — part du bas centre, monte en s'incurvant vers la gauche */}
    <path
      d="M16 57 C15 46 13 34 10 20 C8 12 7 8 8 4"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.6"
    />

    {/* 5 feuilles principales — régulièrement espacées, inclinées vers l'extérieur */}

    {/* Feuille 1 — bas (y≈50) */}
    <path d="M15 50 C11 49 5 50 4 46 C8 44 13 47 15 50Z"
      fill="currentColor" opacity="0.9" />

    {/* Feuille 2 (y≈42) */}
    <path d="M14 42 C10 40 4 41 3 37 C7 35 12 38 14 42Z"
      fill="currentColor" opacity="0.85" />

    {/* Feuille 3 — milieu (y≈33) */}
    <path d="M13 33 C9 31 3 31 2 27 C6 25 11 29 13 33Z"
      fill="currentColor" opacity="0.8" />

    {/* Feuille 4 (y≈24) */}
    <path d="M11 24 C8 21 3 21 3 17 C7 16 11 20 11 24Z"
      fill="currentColor" opacity="0.75" />

    {/* Feuille 5 — haut (y≈15) */}
    <path d="M10 15 C8 12 5 10 6 7 C9 6 11 10 10 15Z"
      fill="currentColor" opacity="0.65" />
  </svg>
)

export default function LaurelBadge({ line1, line2, line3 }: Props) {
  return (
    <div className="flex items-center gap-0 text-gold-300">

      {/* Branche gauche */}
      <LaurelBranch side="left" />

      {/* Texte — centré verticalement entre les deux branches */}
      <div className="text-center w-[78px] flex flex-col items-center justify-center gap-0.5">
        <p className="font-serif text-[11px] font-semibold leading-tight tracking-wide text-gold-200 whitespace-nowrap">
          {line1}
        </p>
        <p className="font-sans text-[9px] leading-tight tracking-[0.12em] uppercase text-gold-300/80 whitespace-nowrap">
          {line2}
        </p>
        {line3 && (
          <p className="font-sans text-[9px] leading-tight tracking-[0.12em] uppercase text-gold-400/60 whitespace-nowrap">
            {line3}
          </p>
        )}
      </div>

      {/* Branche droite */}
      <LaurelBranch side="right" />

    </div>
  )
}
