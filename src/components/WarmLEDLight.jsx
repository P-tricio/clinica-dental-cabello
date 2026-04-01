import { motion } from 'framer-motion'

export default function WarmLEDLight({ position = 'bottom', intensity = 0.9 }) {
  return (
    <motion.div
      className={`absolute left-0 right-0 pointer-events-none overflow-hidden ${
        position === 'top' ? 'top-0' : 'bottom-0'
      }`}
      style={{
        height: '280px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: intensity }}
      transition={{ duration: 1 }}
    >
      {/* Luz cálida principal - dorada muy intensa */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gold-500/70 via-gold-600/50 to-transparent blur-2xl"
        animate={{
          opacity: [intensity - 0.2, intensity + 0.1, intensity - 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Luz complementaria - ámbar brillante */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-yellow-500/60 via-yellow-600/40 to-transparent blur-2xl"
        animate={{
          opacity: [intensity * 0.7, intensity * 1, intensity * 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.3,
        }}
      />

      {/* Efecto de rayos de luz muy visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-400/40 via-transparent to-transparent" />

      {/* Luz adicional de refuerzo */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-orange-500/30 to-transparent blur-3xl"
        animate={{
          opacity: [intensity * 0.4, intensity * 0.7, intensity * 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      />
    </motion.div>
  )
}
