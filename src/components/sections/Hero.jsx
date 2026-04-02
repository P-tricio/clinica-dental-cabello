import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { clinicData } from '@/data/clinic'
import ScrollAnimation3D from '@/components/ScrollAnimation3D'
import logo from '@/assets/images/logo.png'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const scrollWrapperRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: scrollWrapperRef,
    offset: ['start start', 'end end'],
  })

  // === SISTEMA DE ILUMINACIÓN UNIFICADA ===
  const lightingOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    [0.15, 0.5, 0.8, 1]
  )
  const lightingScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.9, 1.25]
  )
  const lightingXDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ['-15%', '12%']
  )
  const lightingYMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ['25%', '10%']
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    /* Wrapper alto: 100vh hero + 50vh extra para la rotación 3D */
    <div ref={scrollWrapperRef} className="relative h-[150vh] -mt-16 md:-mt-20 overflow-visible">
      {/* Hero sticky: se queda fijo mientras scrolleas el wrapper */}
      <section className="sticky top-0 h-screen min-h-[600px] flex items-center overflow-hidden">
        
        {/* === ILUMINACIÓN UNIFICADA DESKTOP === */}
        <motion.div
          className="absolute inset-0 z-[5] pointer-events-none hidden md:block"
          style={{
            background: `
              radial-gradient(circle at 10% 90%, rgba(201,168,76,0.4) 0%, transparent 55%),
              radial-gradient(circle at 0% 50%, rgba(201,138,56,0.5) 0%, transparent 70%)
            `,
            opacity: lightingOpacity,
            scale: lightingScale,
            x: lightingXDesktop,
          }}
        />

        {/* === ILUMINACIÓN UNIFICADA MOBILE === */}
        <motion.div
          className="absolute inset-0 z-[5] pointer-events-none md:hidden"
          style={{
            background: `
              radial-gradient(circle at 15% 85%, rgba(201,168,76,0.2) 0%, transparent 40%),
              radial-gradient(circle at 50% 100%, rgba(201,138,56,0.3) 0%, transparent 55%)
            `,
            opacity: lightingOpacity,
            scale: lightingScale,
            y: lightingYMobile,
          }}
        />

        {/* Logo en top móvil */}
        <motion.div
          className="absolute top-6 left-6 z-30 md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={logo} alt="Cabello Clínica Dental" className="h-6 w-auto object-contain filter contrast-125" />
        </motion.div>

        {/* Fondo: dorado → negro → dorado */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1200] via-black to-[#1a1200]" />

        {/* Animación 3D con scroll */}
        <div className="absolute inset-0 w-full h-full">
          <ScrollAnimation3D scrollRef={scrollWrapperRef} />
        </div>

        {/* Overlay izquierda para legibilidad — por debajo del contenido */}
        <div className="absolute inset-0 z-[6] bg-gradient-to-r from-black/70 via-transparent to-transparent" />


        {/* Línea decorativa dorada izquierda */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 z-[7] w-1 bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40 hidden md:block"
          initial={{ scaleY: 0 }}
          animate={isLoaded ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* Contenido */}
        <motion.div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 lg:px-20 pt-72 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Texto: full width en mobile, mitad en desktop */}
          <div className="max-w-full md:max-w-xl lg:max-w-2xl">
            {/* Logo - solo en desktop, en mobile va arriba en absolute */}
            <motion.div variants={itemVariants} className="mb-8 hidden md:block">
              <img src={logo} alt="Cabello Clínica Dental" className="h-12 w-auto object-contain filter contrast-125" />
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4 md:mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <p className="text-gold-400 text-[10px] md:text-xs font-medium tracking-widest uppercase drop-shadow-sm">
                San Pedro Alcántara, Málaga
              </p>
            </motion.div>

            {/* Titular - minimalista en mobile */}
            <motion.h1
              variants={titleVariants}
              className="font-display text-3xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.1] mb-4 md:mb-6"
            >
              Especialistas<br />
              en cuidar<br />
              <span className="text-gold">tu sonrisa</span>
            </motion.h1>

            {/* Subtítulo - reducido en mobile */}
            <motion.p
              variants={itemVariants}
              className="text-cream/88 text-xs md:text-lg leading-relaxed mb-6 md:mb-10 max-w-lg"
            >
              Más de 20 años de experiencia ofreciendo tratamientos dentales de alta calidad. Implantes, estética, blanqueamiento y más.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-2 md:gap-4"
            >
              <motion.a
                href={`tel:${clinicData.contact.phone.main}`}
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gold-600 text-white px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium tracking-wide relative overflow-hidden group shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.2 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="relative z-10">{clinicData.contact.phone.main}</span>
              </motion.a>

              <motion.a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-6 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium tracking-wide relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute inset-0 bg-cream/5 opacity-0 group-hover:opacity-100 border-cream/60 group-hover:border-cream/60 transition-all duration-200" />
                <span className="relative z-10">Ver servicios</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10 group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs tracking-widest uppercase text-cream/60">Desliza</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-gold to-transparent relative overflow-hidden"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>
    </div>
  )
}
