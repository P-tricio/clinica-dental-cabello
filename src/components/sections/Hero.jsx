import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { clinicData } from '@/data/clinic'
import heroImage from '@/assets/images/hero/clinica-cabello-031.jpeg'
import Dental3DVisual from '@/components/Dental3DVisual'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden -mt-16 md:-mt-20">
      {/* Imagen de fondo */}
      <img
        src={heroImage}
        alt="Clínica Dental Cabello, San Pedro Alcántara"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay gradients mejorados */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/72 to-forest/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/10 via-forest/30 to-forest/60" />

      {/* Efecto de luz dorada sutil en la derecha */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl hidden lg:block" />

      {/* Línea decorativa dorada izquierda con animación */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40 hidden md:block"
        initial={{ scaleY: 0 }}
        animate={isLoaded ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      {/* Grid decorativo sutil en la derecha */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_1px,rgba(201,168,76,0.1)_1px)] bg-[length:40px_40px]" />
      </div>

      {/* Contenido izquierda */}
      <motion.div
        className="relative z-10 container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Texto */}
        <div className="max-w-2xl">
          {/* Badge con animación */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <p className="text-gold-400 text-xs font-medium tracking-widest uppercase drop-shadow-sm">
              San Pedro Alcántara, Málaga
            </p>
          </motion.div>

          {/* Titular con animación mejorada */}
          <motion.h1
            variants={titleVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.1] mb-6"
          >
            Especialistas<br />
            en cuidar<br />
            <span className="text-gold">tu sonrisa</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={itemVariants}
            className="text-cream/88 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          >
            Más de 20 años de experiencia ofreciendo tratamientos dentales de alta calidad. Implantes, estética, blanqueamiento y más.
          </motion.p>

          {/* CTAs con hover mejorado */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href={`tel:${clinicData.contact.phone.main}`}
              className="inline-flex items-center justify-center gap-3 bg-gold-600 text-white px-8 py-4 text-sm font-medium tracking-wide relative overflow-hidden group shadow-lg"
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
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-4 text-sm font-medium tracking-wide relative overflow-hidden group"
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

        {/* Elemento 3D - Solo en desktop */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:flex items-center justify-center"
        >
          <Dental3DVisual />
        </motion.div>
      </motion.div>

      {/* Indicador de scroll mejorado */}
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
  )
}
