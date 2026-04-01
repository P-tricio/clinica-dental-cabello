import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { clinicData } from '@/data/clinic'
import { services } from '@/data/services'
import logo from '@/assets/images/logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isServicePage = location.pathname.startsWith('/servicios/')

  const handleAnchorClick = (anchorId) => (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Si estamos en home, simplemente scrollear al elemento
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Si no estamos en home, navegar a home y luego scrollear
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(anchorId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  const navLinkClass = isServicePage || isScrolled
    ? 'text-cream/90 hover:text-gold-400'
    : 'text-cream/90 hover:text-gold'

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 h-20 items-center z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-grey-800/95 backdrop-blur-md shadow-lg border-b border-gold-600/30'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center h-6 drop-shadow-md">
            <img src={logo} alt="Clínica Dental Cabello" className="h-full w-auto object-contain filter contrast-125" />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className={`transition-colors duration-200 ${navLinkClass}`}>
              Inicio
            </Link>

            {/* Servicios dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 transition-colors duration-200 ${navLinkClass}`}
              >
                Servicios
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80">
                <div className="bg-white shadow-xl border border-stone/10 p-4 grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/servicios/${service.slug}`}
                      className="px-3 py-2 text-xs text-charcoal hover:text-gold hover:bg-cream transition-colors duration-150"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleAnchorClick('nosotros')}
              className={`transition-colors duration-200 ${navLinkClass} bg-none border-none cursor-pointer`}
            >
              Nosotros
            </button>

            <button
              onClick={handleAnchorClick('contacto')}
              className={`transition-colors duration-200 ${navLinkClass} bg-none border-none cursor-pointer`}
            >
              Contacto
            </button>
          </div>

          {/* CTA */}
          <a
            href={`tel:${clinicData.contact.phone.main}`}
            className="text-sm font-medium bg-gold-500 text-grey-900 px-5 py-2.5 hover:bg-gold-400 transition-colors duration-200 shadow-md"
          >
            {clinicData.contact.phone.main}
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 h-16 z-40 flex items-center px-4 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-grey-800/95 shadow-lg' : 'bg-transparent'
        }`}
      >
        <Link to="/" className="flex items-center h-5 flex-1 drop-shadow-md">
          <img src={logo} alt="Clínica Dental Cabello" className="h-full w-auto object-contain filter contrast-125" />
        </Link>

        <button
          className={`p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-cream hover:text-gold' : 'text-cream hover:text-gold'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
          {isMobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-t border-stone/10 shadow-lg">
            <div className="flex flex-col">
              <Link to="/" className="px-6 py-4 text-charcoal hover:text-gold hover:bg-cream text-sm font-medium border-b border-stone/10">
                Inicio
              </Link>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-6 py-4 text-charcoal hover:text-gold hover:bg-cream text-sm font-medium border-b border-stone/10 flex items-center justify-between"
              >
                Servicios
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d={isServicesOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="bg-cream/50">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/servicios/${service.slug}`}
                      className="block px-8 py-3 text-xs text-stone hover:text-gold border-b border-stone/5"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
              <button onClick={handleAnchorClick('nosotros')} className="w-full text-left px-6 py-4 text-charcoal hover:text-gold hover:bg-cream text-sm font-medium border-b border-stone/10 bg-none border-none cursor-pointer">
                Nosotros
              </button>
              <button onClick={handleAnchorClick('contacto')} className="w-full text-left px-6 py-4 text-charcoal hover:text-gold hover:bg-cream text-sm font-medium border-b border-stone/10 bg-none border-none cursor-pointer">
                Contacto
              </button>
              <a
                href={`tel:${clinicData.contact.phone.main}`}
                className="mx-4 my-4 py-3 text-center text-sm font-medium bg-gold text-forest hover:bg-gold-light transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer — solo en páginas sin hero a pantalla completa */}
      <div className="h-20 md:block hidden" />
      <div className="h-16 md:hidden block" />
    </>
  )
}
