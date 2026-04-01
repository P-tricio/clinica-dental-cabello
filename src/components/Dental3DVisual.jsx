import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import implantImage from '@/assets/images/implante.png'

export default function Dental3DVisual() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()

  // Aumenta de tamaño según el scroll (empieza grande)
  const scale = useTransform(scrollY, [0, 400], [1.8, 2.8])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center"
    >
      {/* Glow dorado de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-gold/10 rounded-full blur-3xl" />

      {/* Contenedor con imagen del implante */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{
          scale: scale,
        }}
      >
        {/* Sombra proyectada */}
        <div className="absolute inset-0 -z-10 blur-2xl opacity-30">
          <img
            src={implantImage}
            alt="Implante Dental"
            className="w-full h-full object-contain grayscale"
          />
        </div>

        {/* Imagen del implante */}
        <div className="relative">
          <img
            src={implantImage}
            alt="Implante Dental Straumann"
            className="w-96 h-auto drop-shadow-2xl"
          />
        </div>

        {/* Brillo especular animado sobre la imagen */}
        <motion.div
          className="absolute top-16 left-24 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-2xl pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Rotación automática constante */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  )
}
