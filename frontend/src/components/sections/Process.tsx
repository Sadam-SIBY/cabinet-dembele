import { Phone, MessageSquare, FileText, PenLine } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useInView } from '../../hooks/useInView'
import Btn from '../ui/Btn'

const STEPS = [
  {
    number: '01',
    icon: Phone,
    title: 'Prise de contact',
    description:
      'Appelez-nous ou envoyez un message via WhatsApp ou le formulaire de contact. Nous accusons réception dans les 24 heures et planifions un premier échange.',
    detail: 'Appel · WhatsApp · Formulaire en ligne',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'Un rendez-vous est organisé à l\'étude ou à distance. Maître Dembélé analyse votre situation, répond à vos questions et vous conseille sur la démarche adaptée.',
    detail: 'En présentiel · Visioconférence',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Rédaction de l\'acte',
    description:
      'L\'acte notarié est rédigé avec soin sur la base des informations recueillies. Un projet vous est soumis pour validation avant toute signature définitive.',
    detail: 'Projet → Révision → Validation',
  },
  {
    number: '04',
    icon: PenLine,
    title: 'Signature & remise',
    description:
      'La signature officielle se déroule à l\'étude en présence de toutes les parties. L\'acte authentique vous est ensuite remis avec toutes les copies nécessaires.',
    detail: 'Acte authentique · Copies certifiées',
  },
]

export default function Process() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="processus" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">

      {/* Motif de fond subtil */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(5,8,15,0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          pointerEvents: 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">

        <div
          ref={ref}
          className={`reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <SectionHeader
            label="Notre processus"
            title="Comment travailler avec nous"
            subtitle="Un accompagnement clair, étape par étape — de la première prise de contact jusqu'à la remise de l'acte authentique."
            center
          />
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 relative">

          {/* Ligne de connexion horizontale (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'rgba(5,8,15,0.12)' }}
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={`reveal flex flex-col items-center text-center px-6 pb-10 lg:pb-0 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 130}ms` }}
              >
                {/* Icône avec badge numéro */}
                <div className="relative mb-8">
                  <div
                    style={{
                      width: 104,
                      height: 104,
                      borderRadius: '50%',
                      border: '1px solid rgba(5,8,15,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'white',
                      position: 'relative',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Icon size={32} color="#C9A84C" strokeWidth={1.4} />

                    {/* Badge numéro */}
                    <span
                      style={{
                        position: 'absolute',
                        top: -6,
                        right: -6,
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: '#05080F',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.65rem',
                        color: '#C9A84C',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Titre */}
                <h3
                  className="font-serif font-semibold text-navy-950 mb-3"
                  style={{ fontSize: '1.1rem', lineHeight: 1.3 }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="font-sans text-gray-600 leading-relaxed mb-4"
                  style={{ fontSize: '0.85rem' }}
                >
                  {step.description}
                </p>

                {/* Tag détail */}
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.65rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    borderTop: '1px solid rgba(5,8,15,0.1)',
                    paddingTop: 12,
                    display: 'block',
                    width: '100%',
                  }}
                >
                  {step.detail}
                </span>
              </div>
            )
          })}
        </div>

        {/* CTA bas */}
        <div
          className={`mt-16 text-center reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '560ms' }}
        >
          <Btn variant="gold" href="#contact">
            Prendre rendez-vous
          </Btn>
        </div>
      </div>
    </section>
  )
}
