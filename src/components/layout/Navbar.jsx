import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
    setIsMobileMenuOpen(false)
    if (location.pathname === '/') {
      const element = document.getElementById(anchorId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
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
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight * 0.5)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navLinkClass = isServicePage || isScrolled
    ? 'text-cream/90 hover:text-gold-400'
    : 'text-cream/90 hover:text-gold'

  const menuLinks = [
    { label: 'Inicio', to: '/' },
    { label: 'Servicios', action: 'services' },
    { label: 'Nosotros', anchor: 'nosotros' },
    { label: 'Contacto', anchor: 'contacto' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 h-20 items-center z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-grey-800/95 backdrop-blur-md shadow-lg border-b border-gold-600/30 opacity-100'
            : 'bg-transparent opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom w-full flex items-center justify-between">
          <Link to="/" className="flex items-center h-6 drop-shadow-md">
            <img src={logo} alt="Clínica Dental Cabello" className="h-full w-auto object-contain filter contrast-125" />
          </Link>

          <div className="flex items-center gap-8 text-sm font-medium">
            <Link to="/" className={`transition-colors duration-200 ${navLinkClass}`}>
              Inicio
            </Link>

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

          <a
            href={`tel:${clinicData.contact.phone.main}`}
            className="text-sm font-medium bg-gold-500 text-grey-900 px-5 py-2.5 hover:bg-gold-400 transition-colors duration-200 shadow-md"
          >
            {clinicData.contact.phone.main}
          </a>
        </div>
      </nav>

      {/* Mobile: Botón hamburguesa SIEMPRE visible */}
      <button
        className="md:hidden fixed top-5 right-5 z-50 p-2 text-cream hover:text-gold transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menú"
      >
        <AnimatePresence mode="wait">
          {isMobileMenuOpen ? (
            <motion.svg
              key="close"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="menu"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile: Menú fullscreen que desliza desde la izquierda */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-black flex flex-col justify-start pt-24 px-10 overflow-y-auto"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gradiente decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1200] via-black to-[#1a1200] pointer-events-none" />

            {/* Logo */}
            <motion.div
              className="absolute top-6 left-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <img src={logo} alt="Cabello" className="h-6 w-auto filter contrast-125" />
            </motion.div>

            {/* Links */}
            <nav className="relative z-10 flex flex-col gap-1">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-4 font-display text-4xl font-semibold text-cream hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : link.action === 'services' ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full text-left py-4 font-display text-4xl font-semibold text-cream hover:text-gold transition-colors flex items-center gap-3"
                      >
                        {link.label}
                        <motion.svg
                          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            className="pl-4 flex flex-col gap-1 overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/servicios/${service.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="py-2 text-sm text-cream/60 hover:text-gold transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      onClick={handleAnchorClick(link.anchor)}
                      className="w-full text-left py-4 font-display text-4xl font-semibold text-cream hover:text-gold transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* CTA teléfono */}
            <motion.a
              href={`tel:${clinicData.contact.phone.main}`}
              className="relative z-10 mt-10 inline-flex items-center justify-center gap-3 bg-gold-600 text-white px-8 py-4 text-sm font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.2 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {clinicData.contact.phone.main}
            </motion.a>

            {/* Línea decorativa dorada */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ transformOrigin: 'top' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20 md:block hidden" />
      <div className="h-16 md:hidden block" />
    </>
  )
}
