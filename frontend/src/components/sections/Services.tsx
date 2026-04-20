import { Scale, Users, Briefcase, Globe, FileCheck, Shield } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { SERVICES } from '../../utils/data'
import { useInView } from '../../hooks/useInView'

const ICONS: Record<string, React.ElementType> = {
  Scale, Users, Briefcase, Globe, FileCheck, Shield,
}

export default function Services() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="services" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">

      {/* Motif de fond subtil */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.05) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div ref={ref} className={`reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Nos Services"
            title="Expertise notariale complète"
            subtitle="Un accompagnement juridique sur mesure pour tous vos actes notariaux, du droit de la famille au droit international des affaires."
            light
            center
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <div
                key={service.id}
                className={`reveal group flex flex-col p-8 border transition-all duration-300 ease-in-out
                  hover:-translate-y-1.5
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{
                  transitionDelay: `${i * 120}ms`,
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(201,168,76,0.12)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)')}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.25)',
                  }}
                >
                  <Icon size={24} color="#C9A84C" strokeWidth={1.5} />
                </div>

                <h3 className="font-serif font-semibold text-white text-xl mb-3">{service.title}</h3>
                <p className="font-sans text-navy-300 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 flex-1">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 font-sans text-xs text-navy-400">
                      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0 opacity-70" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <a href="#contact" className="font-sans text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors inline-flex items-center gap-1">
                    En savoir plus →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
