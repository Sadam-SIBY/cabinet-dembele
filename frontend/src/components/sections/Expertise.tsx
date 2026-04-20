import SectionHeader from '../ui/SectionHeader'
import { useInView } from '../../hooks/useInView'

// Pour activer les images : déposez ohada.jpg / uinl.jpg / gafi.jpg dans src/assets/
// puis décommentez les imports ci-dessous et remplacez `img: undefined`
// import imgOhada from '../../assets/ohada.jpg'
// import imgUinl  from '../../assets/uinl.jpg'
// import imgGafi  from '../../assets/gafi.jpg'

const blocs = [
  {
    index: '01',
    acronym: 'OHADA',
    title: 'Zone OHADA',
    subtitle: '17 États membres',
    desc: 'Droit des affaires harmonisé sur le continent africain — cadre unifié pour la sécurité juridique des investissements et des transactions transfrontalières.',
    img: undefined as string | undefined,
    gradient: 'linear-gradient(160deg, #0d3d26 0%, #061a10 50%, #060b40 100%)',
  },
  {
    index: '02',
    acronym: 'UINL',
    title: 'Union Internationale du Notariat Latin',
    subtitle: 'Réseau mondial — 90+ pays',
    desc: "Notariat de droit civil latin — garantie d'authenticité, de sécurité juridique et d'impartialité reconnue dans plus de 90 pays à travers le monde.",
    img: undefined as string | undefined,
    gradient: 'linear-gradient(160deg, #3b2800 0%, #1a1100 50%, #060b40 100%)',
  },
  {
    index: '03',
    acronym: 'GAFI',
    title: 'LBC / FT',
    subtitle: 'Conformité internationale',
    desc: 'Lutte contre le blanchiment de capitaux et le financement du terrorisme — transparence financière au cœur de chaque acte notarié.',
    img: undefined as string | undefined,
    gradient: 'linear-gradient(160deg, #0c1e3d 0%, #060e20 50%, #060b40 100%)',
  },
]

export default function Expertise() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="expertise" className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">

      {/* Fond ponctué — même pattern que l'ancien Hero */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,162,39,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* En-tête — même structure que toutes les sections */}
        <div ref={ref} className={`reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Cadres Institutionnels"
            title="Une pratique ancrée dans les standards internationaux"
            subtitle="L'Étude Me Yacouba DEMBELE s'inscrit dans les trois grands référentiels qui structurent le droit des affaires, le notariat et la conformité à l'échelle mondiale."
            light
            center
          />
        </div>

        {/* Grille — même patron que Services (gap-6 mt-12) */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {blocs.map((bloc, i) => (
            <article
              key={bloc.acronym}
              className={`relative overflow-hidden min-h-[420px] flex flex-col justify-end group
                reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Fond : image ou dégradé */}
              <div
                className={`absolute inset-0 reveal-img ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'}`}
                style={{ transitionDelay: `${80 + i * 120}ms` }}
              >
                {bloc.img ? (
                  <img src={bloc.img} alt={bloc.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full" style={{ background: bloc.gradient }} />
                )}
              </div>

              {/* Overlay bas → haut */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />

              {/* Ligne dorée haute — s'étend au scroll */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                <div
                  className={`h-full bg-gold-500 transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? 'w-full' : 'w-0'}`}
                  style={{ transitionDelay: `${240 + i * 120}ms` }}
                />
              </div>

              {/* Index watermark */}
              <div className="absolute top-6 right-6 font-serif font-bold text-white/[0.05] text-[72px] leading-none select-none">
                {bloc.index}
              </div>

              {/* Contenu épinglé en bas */}
              <div className="relative z-10 p-8">

                {/* Acronyme — reveal masqué */}
                <div className="mb-4">
                  <span className="mask">
                    <span
                      className={`block font-serif font-bold text-gold-400 text-5xl leading-none reveal ${inView ? 'translate-y-0' : 'translate-y-full'}`}
                      style={{ transitionDelay: `${160 + i * 120}ms` }}
                    >
                      {bloc.acronym}
                    </span>
                  </span>
                </div>

                {/* Titre + sous-titre */}
                <div
                  className={`mb-4 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${220 + i * 120}ms` }}
                >
                  <h3 className="font-sans font-semibold text-white text-sm leading-snug mb-1">
                    {bloc.title}
                  </h3>
                  <p className="font-sans text-gold-400 text-xs tracking-[0.18em] uppercase">
                    {bloc.subtitle}
                  </p>
                </div>

                {/* Séparateur */}
                <div className="h-px bg-gold-500/25 mb-4" />

                {/* Description */}
                <p
                  className={`font-sans text-navy-300 text-sm leading-relaxed reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${280 + i * 120}ms` }}
                >
                  {bloc.desc}
                </p>
              </div>

              {/* Liseré gauche au hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-500/0 group-hover:bg-gold-500/50 transition-colors duration-500" />
            </article>
          ))}
        </div>

        {/* Citation — même style que blockquote de l'ancien Expertise */}
        <blockquote
          className={`mt-16 pl-6 border-l-2 border-gold-500 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '480ms' }}
        >
          <p className="font-serif text-navy-300 text-lg italic leading-relaxed">
            "Le notaire n'est pas un simple rédacteur d'actes, c'est aussi une sentinelle contre les dérives financières."
          </p>
          <cite className="font-sans text-gold-400 text-sm not-italic mt-3 block">
            — Me Yacouba Dembélé, Président de l'ONBF, juillet 2025
          </cite>
        </blockquote>

      </div>
    </section>
  )
}
