// Bande défilante — deux copies bout-à-bout pour un loop parfait
// Couleurs : code couleur du site (navy-950 / gold-500)

const ITEMS = [
  'Ordre National des Notaires du Burkina Faso',
  'Union Internationale du Notariat Latin',
  'Organisation pour l\'Harmonisation en Afrique du Droit des Affaires',
  'Groupe d\'Action Financière',
  'Chevalier de l\'Ordre de l\'Étalon',
  'Notaire — Ouagadougou',
  'Vice-Président CAAF / UINL',
  'Commission Nationale OHADA',
]

// navy-950 = #060b40  |  gold-500 = #c9a227
const BG   = '#060b40'
const GOLD = '#c9a227'

const SEPARATOR = (
  <span
    aria-hidden
    style={{
      display: 'inline-block',
      width: 4, height: 4,
      borderRadius: '50%',
      background: GOLD,
      opacity: 0.5,
      margin: '0 28px',
      verticalAlign: 'middle',
      flexShrink: 0,
    }}
  />
)

function Track() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        willChange: 'transform',
        animation: 'marquee-scroll 35s linear infinite',
      }}
    >
      {ITEMS.map((item, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '0.7rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            {item}
          </span>
          {SEPARATOR}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>

      <div
        style={{
          background:   BG,
          borderTop:    `1px solid ${GOLD}26`,
          borderBottom: `1px solid ${GOLD}26`,
          padding: '14px 0',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Fondu gauche */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
          background: `linear-gradient(to right, ${BG}, transparent)`,
          pointerEvents: 'none',
        }} />
        {/* Fondu droit */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
          background: `linear-gradient(to left, ${BG}, transparent)`,
          pointerEvents: 'none',
        }} />

        {/* Deux copies pour loop sans couture */}
        <div style={{ display: 'flex' }}>
          <div className="marquee-track" style={{
            display: 'flex',
            animation: 'marquee-scroll 35s linear infinite',
            willChange: 'transform',
          }}>
            <Track />
            <Track />
          </div>
        </div>
      </div>
    </>
  )
}
