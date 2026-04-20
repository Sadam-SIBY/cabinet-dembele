interface Props {
  label: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeader({ label, title, subtitle, light, center }: Props) {
  return (
    <div className={center ? 'text-center' : ''}>
      <span className="section-label">
        <span className="w-8 h-px bg-gold-500 inline-block" />
        {label}
        <span className="w-8 h-px bg-gold-500 inline-block" />
      </span>
      <h2 className={`section-title text-4xl lg:text-5xl mb-4 ${light ? 'text-white' : 'text-navy-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-navy-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`gold-divider ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
