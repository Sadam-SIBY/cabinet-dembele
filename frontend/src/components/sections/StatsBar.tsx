import { STATS } from '../../utils/data'
import { useInView } from '../../hooks/useInView'

export default function StatsBar() {
  const { ref, inView } = useInView(0.2)

  return (
    <section ref={ref} className="bg-gold-500 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gold-400">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`text-center lg:px-8 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-serif font-bold text-white text-4xl lg:text-5xl mb-1">{value}</div>
              <div className="font-sans text-gold-100 text-sm uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
