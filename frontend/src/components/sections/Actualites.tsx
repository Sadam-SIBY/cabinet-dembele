import React from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../ui/SectionHeader'
import CategoryBadge from '../ui/CategoryBadge'
import Btn from '../ui/Btn'
import { useInView } from '../../hooks/useInView'
import { ARTICLES } from '../../utils/data'

// ─── Panneau visuel catégorie (article vedette) ───────────────────────────────

type Category = 'Actualité' | 'Publication' | 'Distinction' | 'Formation'

const CATEGORY_STYLES: Record<Category, {
  bg: string
  accent: string
  label: string
  icon: React.ReactNode
}> = {
  Distinction: {
    bg: 'from-amber-950 via-yellow-950 to-navy-950',
    accent: 'text-gold-500/15',
    label: 'text-gold-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gold-500/40">
        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  Formation: {
    bg: 'from-blue-950 via-indigo-950 to-navy-950',
    accent: 'text-blue-400/15',
    label: 'text-blue-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-blue-400/40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  Actualité: {
    bg: 'from-navy-900 via-navy-900 to-navy-950',
    accent: 'text-navy-600/20',
    label: 'text-navy-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-navy-500/40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
    ),
  },
  Publication: {
    bg: 'from-emerald-950 via-teal-950 to-navy-950',
    accent: 'text-emerald-400/15',
    label: 'text-emerald-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-emerald-500/40">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
}

function FeaturedVisual({ category, title, image }: { category: Category; title: string; image?: string }) {
  const style = CATEGORY_STYLES[category]
  const initial = title.trim()[0].toUpperCase()

  // — Avec image —
  if (image) {
    return (
      <div className="hidden lg:block w-[38%] shrink-0 relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-950/60 to-transparent" />
      </div>
    )
  }

  // — Fallback catégorie —
  return (
    <div className={`hidden lg:flex w-[38%] shrink-0 relative overflow-hidden bg-gradient-to-br ${style.bg} items-center justify-center`}>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <span
        className={`absolute font-serif font-bold select-none leading-none ${style.accent}`}
        style={{ fontSize: 'clamp(8rem, 18vw, 14rem)' }}
        aria-hidden
      >
        {initial}
      </span>
      <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
        {style.icon}
        <span className={`font-sans text-xs tracking-[0.3em] uppercase font-semibold ${style.label}`}>
          {category}
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-transparent" />
    </div>
  )
}

export default function Actualites() {
  const { ref, inView } = useInView(0.1)
  const featured = ARTICLES[0]
  const rest = ARTICLES.slice(1, 4)

  return (
    <section id="actualites" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={ref} className={`reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Actualités & Publications"
            title="Vie institutionnelle & publications"
            subtitle="Distinctions, formations, engagements — suivez l'activité de l'Étude et de Maître Dembélé sur la scène nationale et internationale."
            center
          />
        </div>

        {/* Grille — article vedette + 3 articles */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">

          {/* Article vedette */}
          <article
            className={`lg:col-span-2 bg-navy-950 flex flex-col lg:flex-row overflow-hidden group reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '80ms' }}
          >
            {/* Texte */}
            <div className="p-8 lg:p-10 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <CategoryBadge category={featured.category} />
                  <span className="flex items-center gap-1.5 font-sans text-navy-400 text-xs">
                    <Calendar size={11} />
                    {featured.date}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-white text-2xl lg:text-3xl leading-snug mb-5">
                  {featured.title}
                </h3>
                <p className="font-sans text-navy-300 text-sm leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                {/* Auteur */}
                <div className="flex items-center gap-3 pt-6 border-t border-navy-800">
                  {/* Avatar initiales */}
                  <div className="w-8 h-8 rounded-full shrink-0 border border-gold-500/40 bg-navy-800 flex items-center justify-center">
                    <span className="font-serif text-gold-400 text-xs font-bold">YD</span>
                  </div>
                  <div>
                    <p className="font-sans text-white text-xs font-semibold leading-none mb-0.5">
                      Maître Yacouba Dembélé
                    </p>
                    <p className="font-sans text-navy-400 text-[11px] tracking-wide">
                      Notaire — Ouagadougou
                    </p>
                  </div>
                </div>

                <Link
                  to={`/actualites/${featured.slug}`}
                  className="inline-flex items-center gap-2 font-sans text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors group/link"
                >
                  Lire l'article
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Panneau visuel — image si disponible, sinon catégorie */}
            <FeaturedVisual category={featured.category} title={featured.title} image={featured.image} />
          </article>

          {/* 3 articles secondaires */}
          <div className="flex flex-col gap-6">
            {rest.map((article, i) => (
              <article
                key={article.id}
                className={`border border-gray-100 hover:border-gold-200 hover:shadow-card group reveal transition-[border-color,box-shadow]
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${160 + i * 120}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CategoryBadge category={article.category} />
                    <span className="font-sans text-gray-400 text-xs">{article.date}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-navy-950 text-base leading-snug mb-3 group-hover:text-gold-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="font-sans text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/actualites/${article.slug}`}
                    className="inline-flex items-center gap-1.5 font-sans text-gold-600 text-xs font-semibold hover:text-gold-700 transition-colors"
                  >
                    Lire la suite <ArrowRight size={11} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA vers page complète */}
        <div
          className={`mt-10 text-center reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '520ms' }}
        >
          <Btn variant="gold" to="/actualites" icon={<ArrowRight size={15} />}>
            Toutes les actualités
          </Btn>
        </div>

      </div>
    </section>
  )
}
