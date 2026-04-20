import { useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { ARTICLES } from '../utils/data'
import CategoryBadge from '../components/ui/CategoryBadge'
import type { Article } from '../types'

const CATEGORIES = ['Tous', 'Actualité', 'Publication', 'Distinction', 'Formation'] as const

function ArticleCard({ article, i, inView }: { article: Article; i: number; inView: boolean }) {
  return (
    <article
      className={`border border-gray-100 hover:border-gold-200 hover:shadow-card group reveal flex flex-col transition-[border-color,box-shadow]
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      {/* Barre de catégorie en haut */}
      <div className="h-[3px] bg-gray-100 overflow-hidden">
        <div className="h-full bg-gold-500 w-0 group-hover:w-full transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      </div>

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <CategoryBadge category={article.category} />
          <span className="flex items-center gap-1.5 font-sans text-gray-400 text-xs">
            <Calendar size={11} />
            {article.date}
          </span>
        </div>

        <h2 className="font-serif font-bold text-navy-950 text-xl leading-snug mb-3 flex-1 group-hover:text-gold-600 transition-colors duration-300">
          {article.title}
        </h2>

        <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {article.excerpt}
        </p>

        <Link
          to={`/actualites/${article.slug}`}
          className="inline-flex items-center gap-2 font-sans text-gold-600 text-sm font-semibold hover:text-gold-700 transition-colors group/link mt-auto"
        >
          Lire l'article
          <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  )
}

export default function ActualitesPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Tous')
  const { ref, inView } = useInView(0.05)

  const filtered = activeCategory === 'Tous'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  return (
    <>
      {/* Hero de la page */}
      <div className="bg-navy-950 relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,162,39,1) 0, rgba(201,162,39,1) 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-5">
            <Link to="/" className="font-sans text-navy-400 text-xs hover:text-gold-400 transition-colors uppercase tracking-widest">
              Accueil
            </Link>
            <span className="text-navy-700 text-xs">/</span>
            <span className="font-sans text-gold-400 text-xs uppercase tracking-widest">Actualités</span>
          </div>
          <span className="section-label">
            <span className="w-8 h-px bg-gold-500 inline-block" />
            Actualités & Publications
            <span className="w-8 h-px bg-gold-500 inline-block" />
          </span>
          <h1 className="font-serif font-bold text-white text-4xl lg:text-6xl leading-tight mt-2 max-w-3xl">
            Vie institutionnelle & publications
          </h1>
          <div className="h-px w-16 bg-gold-500 mt-6" />
        </div>
      </div>

      {/* Filtres + grille */}
      <div className="bg-white py-16 lg:py-24">
        <div ref={ref} className="max-w-7xl mx-auto px-6">

          {/* Filtres par catégorie */}
          <div
            className={`flex flex-wrap gap-3 mb-12 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs font-semibold tracking-widest uppercase px-5 py-2.5 border transition-all duration-300
                  ${activeCategory === cat
                    ? 'bg-navy-950 text-white border-navy-950'
                    : 'bg-transparent text-navy-700 border-gray-200 hover:border-gold-400 hover:text-gold-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille d'articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} i={i} inView={inView} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-sans text-gray-400 py-20">
              Aucun article dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </div>
    </>
  )
}
