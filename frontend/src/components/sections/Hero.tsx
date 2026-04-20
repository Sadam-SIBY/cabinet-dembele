import { ArrowRight, Award, Globe } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import bannerImg from '../../assets/banner.png'
import LaurelBadge from '../ui/LaurelBadge'
import Btn from '../ui/Btn'

export default function Hero() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* Image banner */}
      <div className="absolute inset-0">
        <img
          src={bannerImg}
          alt=""
          className="w-full h-full object-contain object-bottom md:object-right"
          style={{ transform: 'scale(0.85)', transformOrigin: 'center right' }}
        />
        {/* Overlay mobile : quasi opaque pour lisibilité ; desktop : léger à droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/98 to-navy-950/98 md:via-navy-950/88 md:to-navy-950/40 lg:via-navy-950/85 lg:to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/50" />
      </div>

      {/* Ligne dorée gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

      {/* Contenu */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-16 md:pt-24 md:pb-20 lg:py-32">
        <div className="flex items-end gap-10 xl:gap-16">

          {/* Colonne texte */}
          <div className="w-full lg:flex-1 lg:min-w-0">

            {/* Badges */}
            <div
              className={`flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '50ms' }}
            >
              {[
                { Icon: Award, text: 'Officier Ministériel' },
                { Icon: Globe, text: 'Portée Internationale' },
              ].map(({ Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-2 bg-navy-950/70 border border-gold-500/40 px-3 md:px-4 py-2 text-gold-400 font-sans text-[10px] md:text-xs tracking-widest uppercase backdrop-blur-sm">
                  <Icon size={11} />
                  {text}
                </span>
              ))}
            </div>

            {/* Titre — reveal masqué ligne par ligne */}
            <h1 className="font-serif font-bold text-white leading-[1.1] mb-5 md:mb-6">
              <span className="mask">
                <span
                  className={`block text-4xl md:text-5xl lg:text-7xl reveal ${inView ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '180ms' }}
                >Maître</span>
              </span>
              <span className="mask">
                <span
                  className={`block text-4xl md:text-5xl lg:text-7xl text-gold-400 reveal ${inView ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '320ms' }}
                >Dembélé</span>
              </span>
              <span className="mask">
                <span
                  className={`block text-2xl md:text-3xl lg:text-4xl font-normal text-navy-200 mt-2 reveal ${inView ? 'translate-y-0' : 'translate-y-full'}`}
                  style={{ transitionDelay: '460ms' }}
                >Yacouba</span>
              </span>
            </h1>

            {/* Séparateur */}
            <div
              className={`flex items-center gap-3 md:gap-4 mb-5 md:mb-6 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '580ms' }}
            >
              <div className="h-px w-10 md:w-12 bg-gold-500" />
              <p className="font-sans text-gold-300 tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm uppercase font-medium">
                Notaire — Ouagadougou, Burkina Faso
              </p>
            </div>

            {/* Accroche */}
            <p
              className={`font-sans text-navy-200 text-base md:text-lg leading-relaxed mb-5 md:mb-6 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '700ms' }}
            >
              Président de l'Ordre National des Notaires du Burkina Faso et Vice-Président CAAF/UINL — une expertise notariale de référence au service de vos projets les plus importants.
            </p>

            {/* Citation — masquée sur très petit mobile */}
            <blockquote
              className={`hidden sm:block mb-7 md:mb-8 pl-4 border-l-2 border-gold-500/50 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '780ms' }}
            >
              <p className="font-serif text-navy-300 text-sm italic leading-relaxed">
                "Le notaire n'est pas un simple rédacteur d'actes, c'est aussi une sentinelle contre les dérives financières."
              </p>
            </blockquote>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 md:gap-4 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '880ms' }}
            >
              <Btn
                variant="gold"
                href="/#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                icon={<ArrowRight size={14} />}
              >
                Prendre Rendez-vous
              </Btn>
              <Btn
                variant="light"
                inverted
                href="/#services"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Nos Services
              </Btn>
            </div>

            {/* Lauriers tablette — sous les CTAs, masqués sur mobile et desktop */}
            <div
              className={`hidden sm:flex lg:hidden items-center gap-4 md:gap-6 mt-8 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              <LaurelBadge line1="Président" line2="ONBF" line3="Burkina Faso" />
              <LaurelBadge line1="Vice-Président" line2="CAAF / UINL" line3="Afrique Ouest II" />
              <LaurelBadge line1="Chevalier" line2="Ordre de l'Étalon" line3="2024" />
            </div>

          </div>

          {/* Lauriers desktop — colonne droite alignée en bas avec les CTAs */}
          <div
            className={`hidden lg:flex items-end gap-6 xl:gap-8 flex-shrink-0 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            <LaurelBadge line1="Président" line2="ONBF" line3="Burkina Faso" />
            <LaurelBadge line1="Vice-Président" line2="CAAF / UINL" line3="Afrique Ouest II" />
            <LaurelBadge line1="Chevalier" line2="Ordre de l'Étalon" line3="2024" />
          </div>

        </div>
      </div>

      {/* Défiler — centré en bas */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-6 md:pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-navy-400">
          <span className="font-sans text-xs tracking-widest uppercase">Défiler</span>
          <div className="w-px h-8 md:h-10 bg-gradient-to-b from-navy-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
