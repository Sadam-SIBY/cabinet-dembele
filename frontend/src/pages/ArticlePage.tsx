import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { ARTICLES } from '../utils/data'
import CategoryBadge from '../components/ui/CategoryBadge'
import Btn from '../components/ui/Btn'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const { ref, inView } = useInView(0.05)

  const article = ARTICLES.find(a => a.slug === slug)
  if (!article) return <Navigate to="/actualites" replace />

  const others = ARTICLES.filter(a => a.id !== article.id).slice(0, 3)

  return (
    <>
      {/* Hero article */}
      <div className="bg-navy-950 relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,162,39,1) 0, rgba(201,162,39,1) 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Fil d'ariane */}
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="font-sans text-navy-400 text-xs hover:text-gold-400 transition-colors uppercase tracking-widest">
              Accueil
            </Link>
            <span className="text-navy-700 text-xs">/</span>
            <Link to="/actualites" className="font-sans text-navy-400 text-xs hover:text-gold-400 transition-colors uppercase tracking-widest">
              Actualités
            </Link>
            <span className="text-navy-700 text-xs">/</span>
            <span className="font-sans text-gold-400 text-xs uppercase tracking-widest truncate max-w-[200px]">
              {article.category}
            </span>
          </div>

          {/* Méta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <CategoryBadge category={article.category} />
            <span className="flex items-center gap-1.5 font-sans text-navy-400 text-sm">
              <Calendar size={12} />
              {article.date}
            </span>
          </div>

          {/* Titre */}
          <h1 className="font-serif font-bold text-white text-3xl lg:text-5xl leading-tight mb-6">
            {article.title}
          </h1>

          {/* Extrait */}
          <p className="font-sans text-navy-300 text-lg leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>

          <div className="h-px w-16 bg-gold-500 mt-8" />
        </div>
      </div>

      {/* Corps de l'article */}
      <div className="bg-white py-16 lg:py-24">
        <div ref={ref} className="max-w-4xl mx-auto px-6">

          <div
            className={`reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Retour */}
            <Link
              to="/actualites"
              className="inline-flex items-center gap-2 font-sans text-sm text-navy-500 hover:text-gold-600 transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
              Retour aux actualités
            </Link>

            {/* Contenu formaté */}
            <div className="prose-article">
              {article.content.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className={`font-sans text-gray-700 text-base lg:text-lg leading-relaxed mb-6 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Citation si premier paragraphe contient des guillemets */}
            <blockquote
              className={`my-12 pl-6 border-l-2 border-gold-500 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="font-serif text-navy-700 text-xl italic leading-relaxed">
                "Le notaire n'est pas un simple rédacteur d'actes, c'est aussi une sentinelle contre les dérives financières."
              </p>
              <cite className="font-sans text-gold-600 text-sm not-italic mt-3 block">
                — Me Yacouba Dembélé, Président de l'ONBF
              </cite>
            </blockquote>

            {/* CTA contact */}
            <div
              className={`mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div>
                <p className="font-serif text-navy-950 text-lg font-semibold mb-1">Vous souhaitez en savoir plus ?</p>
                <p className="font-sans text-gray-500 text-sm">Notre équipe est à votre disposition pour toute question juridique.</p>
              </div>
              <Btn variant="gold" to="/#contact" icon={<ArrowRight size={14} />} className="shrink-0">
                Nous contacter
              </Btn>
            </div>
          </div>
        </div>
      </div>

      {/* Autres articles */}
      {others.length > 0 && (
        <div className="bg-cream py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-10">
              <span className="font-sans text-xs text-gold-500 font-semibold tracking-[0.25em] uppercase">À lire aussi</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((a, i) => (
                <article
                  key={a.id}
                  className={`bg-white border border-gray-100 hover:border-gold-200 hover:shadow-card group reveal transition-[border-color,box-shadow]
                    ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${600 + i * 120}ms` }}
                >
                  <div className="h-[2px] bg-gold-500/0 group-hover:bg-gold-500 transition-colors duration-500" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CategoryBadge category={a.category} />
                      <span className="font-sans text-gray-400 text-xs">{a.date}</span>
                    </div>
                    <h3 className="font-serif font-semibold text-navy-950 text-base leading-snug mb-4 group-hover:text-gold-600 transition-colors duration-300">
                      {a.title}
                    </h3>
                    <Link
                      to={`/actualites/${a.slug}`}
                      className="inline-flex items-center gap-1.5 font-sans text-gold-600 text-xs font-semibold hover:text-gold-700 transition-colors"
                    >
                      Lire la suite <ArrowRight size={11} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
