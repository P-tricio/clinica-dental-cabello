import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal text-cream p-4 md:p-6 z-50 border-t border-cream/10">
      <div className="container-custom max-w-3xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-cream/80">
            Utilizamos cookies para mejorar tu experiencia. Al continuar navegando,
            aceptas nuestra{' '}
            <Link to="/cookies" className="text-gold hover:text-gold-light underline">
              política de cookies
            </Link>
            {' '}y{' '}
            <Link to="/privacidad" className="text-gold hover:text-gold-light underline">
              política de privacidad
            </Link>
            .
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm border border-cream/30 text-cream/80 hover:border-cream/60 hover:text-cream transition-all duration-200"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-gold text-forest font-medium hover:bg-gold-light transition-colors duration-200"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
