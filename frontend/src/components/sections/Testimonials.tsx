import { Quote } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { TESTIMONIALS } from '../../utils/data'
import { useInView } from '../../hooks/useInView'

export default function Testimonials() {
  const { ref, inView } = useInView(0.1)

  return (
    <section className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">

      {/* Motif de fond subtil */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div ref={ref} className={`text-center reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Témoignages"
            title="La confiance de nos clients"
            subtitle="Des clients à travers le monde nous font confiance pour sécuriser leurs actes les plus importants."
            light
            center
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`reveal flex flex-col p-8 transition-all duration-300 ease-in-out hover:-translate-y-1.5
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{
                transitionDelay: `${i * 150}ms`,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.12)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)')}
            >
              <Quote size={28} className="text-gold-500 mb-5 opacity-70" />
              <p className="font-serif text-navy-100 text-base leading-relaxed italic mb-6 flex-1">
                "{t.quote}"
              </p>
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <span className="text-2xl">{t.flag}</span>
                <div>
                  <div className="font-sans font-semibold text-white text-sm">{t.author}</div>
                  <div className="font-sans text-navy-400 text-xs">{t.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
