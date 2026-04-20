import { useState } from 'react'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { useInView } from '../../hooks/useInView'
import type { ContactFormData } from '../../types'
import Btn from '../ui/Btn'

const SUBJECTS = [
  'Droit immobilier',
  'Droit de la famille',
  'Droit des affaires',
  'Droit international',
  'Conseil patrimonial',
  'Autre',
]

const CONTACT_INFO = [
  { Icon: MapPin, label: 'Adresse',   value: '14 BP 324 Ouagadougou ZAD, Burkina Faso' },
  { Icon: Phone,  label: 'Téléphone', value: '+226 25 37 26 26' },
  { Icon: Mail,   label: 'Email',     value: 'infonotairedembele@gmail.com' },
  { Icon: Clock,  label: 'Horaires',  value: 'Lun–Ven : 8h–17h' },
]

export default function Contact() {
  const { ref, inView } = useInView(0.1)
  const [form, setForm] = useState<ContactFormData>({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SectionHeader
            label="Contact"
            title="Prenez rendez-vous"
            subtitle="Nous sommes à votre disposition pour étudier votre dossier et vous accompagner dans tous vos projets notariaux."
            center
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-12">
          {/* ── Info ── */}
          <div className={`reveal ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '150ms' }}>
            <div className="bg-navy-950 p-8 h-full">
              <h3 className="font-serif text-white text-xl font-semibold mb-6">Informations du Cabinet</h3>
              <div className="space-y-6">
                {CONTACT_INFO.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold-400" />
                    </div>
                    <div>
                      <div className="font-sans text-navy-400 text-xs uppercase tracking-wide mb-0.5">{label}</div>
                      <div className="font-sans text-white text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-navy-900/60 border border-gold-500/20">
                <p className="font-sans text-navy-400 text-xs leading-relaxed">
                  Pour les urgences juridiques ou les dossiers internationaux, veuillez préciser la nature de votre demande dans le formulaire.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-2 reveal ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '300ms' }}>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-green-100 bg-green-50">
                <div className="w-16 h-16 bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-green-600 text-3xl">✓</span>
                </div>
                <h3 className="font-serif text-navy-950 text-2xl font-semibold mb-3">Message envoyé</h3>
                <p className="font-sans text-gray-600">Nous vous contacterons dans les 24 heures ouvrées.</p>
                <Btn variant="gold" onClick={() => setStatus('idle')} className="mt-6">
                  Nouveau message
                </Btn>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: 'firstName', label: 'Prénom', type: 'text' },
                  { name: 'lastName',  label: 'Nom',    type: 'text' },
                  { name: 'email',     label: 'Email',  type: 'email' },
                  { name: 'phone',     label: 'Téléphone', type: 'tel' },
                ].map(({ name, label, type }) => (
                  <div key={name}>
                    <label className="font-sans text-xs font-semibold text-navy-700 uppercase tracking-wide block mb-2">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={(form as never)[name]}
                      onChange={handleChange}
                      required={name === 'firstName' || name === 'email'}
                      className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-navy-950
                        focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-colors"
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label className="font-sans text-xs font-semibold text-navy-700 uppercase tracking-wide block mb-2">Objet</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-navy-950
                      focus:outline-none focus:border-gold-500 transition-colors bg-white"
                  >
                    <option value="">Sélectionner un domaine</option>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="font-sans text-xs font-semibold text-navy-700 uppercase tracking-wide block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-gray-200 px-4 py-3 font-sans text-sm text-navy-950
                      focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="sm:col-span-2 font-sans text-red-600 text-sm">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                )}

                <div className="sm:col-span-2">
                  <Btn variant="gold" type="submit" disabled={status === 'sending'} icon={<Send size={16} />} className="w-full sm:w-auto">
                    {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Btn>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ── Google Maps ── */}
        <div
          className={`mt-10 reveal ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '450ms' }}
        >
          <div
            style={{
              position: 'relative',
              border: '1px solid rgba(201,168,76,0.25)',
              overflow: 'hidden',
            }}
          >
            {/* Label flottant */}
            <div
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
                zIndex: 10,
                background: '#05080F',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '6px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                pointerEvents: 'none',
              }}
            >
              <MapPin size={13} color="#C9A84C" />
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                Cabinet Notarial — Ouagadougou
              </span>
            </div>

            <iframe
              title="Localisation du Cabinet Notarial Dembélé — Ouagadougou"
              src="https://maps.google.com/maps?q=Ouagadougou+Zone+du+Bois+Burkina+Faso&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ display: 'block', border: 0, filter: 'grayscale(0.3) contrast(1.05)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Adresse sous la carte */}
          <div className="flex items-center gap-3 mt-3 px-1">
            <MapPin size={13} className="text-gold-500 shrink-0" />
            <span className="font-sans text-gray-500 text-xs tracking-wide">
              14 BP 324 — Zone du Bois, Ouagadougou, Burkina Faso
            </span>
            <a
              href="https://maps.google.com/?q=Ouagadougou+Zone+du+Bois+Burkina+Faso"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-gold-600 text-xs font-semibold hover:text-gold-700 transition-colors ml-auto shrink-0"
            >
              Ouvrir dans Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
