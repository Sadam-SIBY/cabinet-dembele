import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '../../utils/data'
import Btn from '../ui/Btn'
import logoB from '../../assets/logo_b.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => { setOpen(false) }, [location.pathname])

  /**
   * Gestion des clics sur les liens :
   * - Lien hash (/#section) : si déjà sur /, scroll direct ; sinon navigate vers / puis scroll
   * - Lien normal (/actualites) : navigation standard
   */
  const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
    if (!href.startsWith('/#')) return // laisser Link gérer

    e.preventDefault()
    setOpen(false)

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
      // Attendre que la Home soit montée
      setTimeout(scrollToSection, 300)
    }
  }, [location.pathname, navigate])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-navy-950 shadow-lg py-3"
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoB}
            alt="Cabinet Notarial Dembélé"
            className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity duration-200"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.href ||
              (item.href === '/' && location.pathname === '/')
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link pb-1 ${isActive ? 'text-gold-400 after:!w-full' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+22625372626"
            className="flex items-center justify-center text-white hover:text-gold-400 transition-colors duration-200 phone-ring"
            aria-label="Appeler le cabinet"
            title="+226 25 37 26 26"
          >
            <Phone size={17} />
          </a>
          <Btn
            variant="gold"
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            size="sm"
          >
            Prendre RDV
          </Btn>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-gold-400 transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-navy-950 border-t border-navy-800 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans text-sm text-navy-200 hover:text-gold-400 transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
          <Btn
            variant="gold"
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            size="sm"
            className="mt-2 w-full"
          >
            Prendre RDV
          </Btn>
        </div>
      </div>
    </header>
  )
}
