import type { Article } from '../../types'

const STYLES: Record<Article['category'], string> = {
  'Actualité':   'bg-navy-950 text-white border-navy-700',
  'Publication': 'bg-gold-500 text-white border-gold-500',
  'Distinction': 'bg-white text-navy-950 border-navy-200',
  'Formation':   'bg-navy-100 text-navy-900 border-navy-200',
}

interface Props {
  category: Article['category']
  className?: string
}

export default function CategoryBadge({ category, className = '' }: Props) {
  return (
    <span
      className={`inline-block border px-3 py-1 font-sans text-[11px] font-semibold tracking-[0.18em] uppercase leading-none ${STYLES[category]} ${className}`}
    >
      {category}
    </span>
  )
}
