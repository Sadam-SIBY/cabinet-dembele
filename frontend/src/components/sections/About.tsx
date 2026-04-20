import { ArrowRight } from 'lucide-react'
import profilImg from '../../assets/profil.png'
import { useInView } from '../../hooks/useInView'
import Btn from '../ui/Btn'

// ─── Points forts qualitatifs ────────────────────────────────────────────────

const STRENGTHS = [
  { label: 'Plus de 20 ans d\'expérience' },
  { label: 'Des milliers de dossiers accompagnés' },
  { label: 'Interventions à l\'international' },
]

// ─── Carte flottante ─────────────────────────────────────────────────────────

function FloatingCard({ visible }: { visible: boolean }) {
  return (
    <div className="bg-white shadow-2xl border border-gray-100 rounded-xl p-4 w-[190px] sm:w-[210px]">

      <div
        className="w-10 h-10 rounded-full bg-gold-50 flex items-center justify-center mb-3"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.8)',
          transition: visible ? 'opacity 0.5s ease 950ms, transform 0.5s ease 950ms' : 'none',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gold-500" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      </div>

      <p className="font-sans text-[10px] tracking-widest uppercase text-gray-400 mb-1">
        Distinction nationale
      </p>
      <p className="font-serif text-navy-950 text-sm font-semibold leading-snug mb-3">
        Chevalier de l'Ordre de l'Étalon
      </p>

      <div className="h-px bg-gray-100 mb-3" />

      <p className="font-sans text-[10px] tracking-widest uppercase text-gray-400 mb-2">
        Mandats institutionnels
      </p>
      <div className="flex gap-2">
        <span className="bg-navy-50 text-navy-800 font-sans font-semibold text-[10px] px-2.5 py-1 rounded-full">
          ONBF
        </span>
        <span className="bg-amber-50 text-amber-700 font-sans font-semibold text-[10px] px-2.5 py-1 rounded-full">
          UINL
        </span>
      </div>
    </div>
  )
}

// ─── Section About ───────────────────────────────────────────────────────────

export default function About() {
  const { ref: imgRef,  inView: imgInView  } = useInView(0.15)
  const { ref: textRef, inView: textInView } = useInView(0.15)

  const slide = (delay = 0) => ({
    opacity:    textInView ? 1 : 0,
    transform:  textInView ? 'none' : 'translateY(24px)',
    transition: textInView
      ? `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`
      : 'none',
  })

  return (
    <section id="cabinet" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Gauche : photo + carte flottante ── */}
          <div className="relative" ref={imgRef}>
            <div
              className="relative overflow-hidden bg-navy-950 rounded-2xl"
              style={{
                aspectRatio: '4/5',
                opacity:    imgInView ? 1 : 0,
                transform:  imgInView ? 'scale(1)' : 'scale(1.04)',
                transition: 'opacity 1.2s ease, transform 1.2s ease',
              }}
            >
              <img
                src={profilImg}
                alt="Maître Yacouba Dembélé — Notaire"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 10%' }}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>

            <div
              className="absolute -bottom-6 -right-3 sm:-right-6 z-20"
              style={{
                opacity:    imgInView ? 1 : 0,
                transform:  imgInView ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease 900ms, transform 0.7s ease 900ms',
              }}
            >
              <FloatingCard visible={imgInView} />
            </div>
          </div>

          {/* ── Droite : texte ── */}
          <div ref={textRef}>

            {/* Points forts — 3 colonnes avec numéro ordinal */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {STRENGTHS.map(({ label }, i) => (
                <div
                  key={label}
                  style={{
                    opacity:   textInView ? 1 : 0,
                    transform: textInView ? 'none' : 'translateY(20px)',
                    transition: textInView
                      ? `opacity 0.65s ease ${i * 120}ms, transform 0.65s ease ${i * 120}ms`
                      : 'none',
                  }}
                >
                  {/* Ligne dorée + numéro */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="block h-px bg-gold-500"
                      style={{
                        width: textInView ? '28px' : '0px',
                        transition: textInView ? `width 0.5s ease ${i * 120 + 200}ms` : 'none',
                      }}
                    />
                    <span className="font-sans text-[10px] text-gold-500 font-semibold tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Texte */}
                  <p className="font-serif text-navy-950 text-[0.95rem] leading-snug font-medium">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Label */}
            <span
              className="inline-block font-sans text-[10px] tracking-[0.22em] uppercase text-gold-600 font-semibold mb-4"
              style={slide(0)}
            >
              Le Cabinet
            </span>

            {/* Titre */}
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-navy-950 leading-[1.12] mb-6"
              style={slide(80)}
            >
              Une institution notariale de référence au cœur de l'Afrique
            </h2>

            {/* Paragraphe */}
            <p
              className="font-sans text-gray-600 text-base leading-relaxed mb-4"
              style={slide(160)}
            >
              Fondée à Ouagadougou, l'Étude Me Yacouba DEMBELE s'est imposée comme
              l'une des références du notariat burkinabè. Expertise juridique, rigueur
              institutionnelle et dimension internationale au service des particuliers,
              entreprises et institutions.
            </p>

            <p
              className="font-sans text-gray-400 text-sm leading-relaxed mb-10"
              style={slide(240)}
            >
              Président de l'Ordre National des Notaires du Burkina Faso,
              Vice-Président CAAF/UINL pour l'Afrique de l'Ouest II — Maître Dembélé
              porte une vision moderne et internationale du notariat africain.
            </p>

            {/* CTA */}
            <Btn
              variant="gold"
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              icon={<ArrowRight size={14} />}
              style={slide(320)}
            >
              Prendre Rendez-vous
            </Btn>

          </div>
        </div>
      </div>
    </section>
  )
}
