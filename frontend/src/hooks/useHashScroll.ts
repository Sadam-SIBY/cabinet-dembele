import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Après chaque changement de route, scrolle vers l'ancre (#section)
 * si elle est présente dans l'URL — avec un léger délai pour laisser
 * le DOM se rendre.
 */
export function useHashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      // Pas d'ancre : retour en haut de page
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    const attemptScroll = (attemptsLeft: number) => {
      const el = document.getElementById(id)
      if (el) {
        // Offset pour la navbar fixe (~72px)
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      } else if (attemptsLeft > 0) {
        // Réessaye si le DOM n'est pas encore prêt
        setTimeout(() => attemptScroll(attemptsLeft - 1), 80)
      }
    }

    // Premier essai après un tick
    setTimeout(() => attemptScroll(5), 50)
  }, [pathname, hash])
}
