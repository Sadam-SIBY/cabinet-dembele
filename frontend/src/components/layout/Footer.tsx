import { Mail, Phone, MapPin } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../../utils/data'
import logoB from '../../assets/logo_b.png'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith('/#')) return
    e.preventDefault()
    const id = href.replace('/#', '')
    const scrollToSection = () => {
      const el = document.getElementById(id)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    if (location.pathname === '/') {
      scrollToSection()
    } else {
      navigate('/')
      setTimeout(scrollToSection, 300)
    }
  }

  return (
    <footer className="bg-navy-950 text-navy-300">
      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center mb-5 group w-fit">
            <img
              src={logoB}
              alt="Cabinet Notarial Dembélé"
              className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
          <p className="font-sans text-sm leading-relaxed max-w-sm text-navy-400">
            Étude notariale de référence au Burkina Faso. Président de l'Ordre National des Notaires du Burkina Faso et Vice-Président CAAF/UINL — Afrique de l'Ouest II.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-5">Navigation</h4>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-sm hover:text-gold-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-5">Contact</h4>
          <ul className="space-y-4">
            {[
              { Icon: MapPin, text: '14 BP 324 Ouagadougou ZAD, Burkina Faso' },
              { Icon: Phone,  text: '+226 25 37 26 26' },
              { Icon: Mail,   text: 'infonotairedembele@gmail.com' },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={15} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="font-sans text-sm leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-navy-500">
            © {new Date().getFullYear()} Étude Me Yacouba DEMBELE. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            {['Mentions légales', 'Confidentialité'].map((l) => (
              <a key={l} href="#" className="font-sans text-xs text-navy-500 hover:text-gold-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
