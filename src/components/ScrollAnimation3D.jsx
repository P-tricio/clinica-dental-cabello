import { useEffect, useState, forwardRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

const TOTAL_FRAMES = 240

const imageFrames = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
  const frameNum = String(i + 1).padStart(3, '0')
  return `/images/3d-frames/ezgif-frame-${frameNum}.jpg`
})

const ScrollAnimation3D = forwardRef(function ScrollAnimation3D({ scrollRef }, ref) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  })

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1])

  useEffect(() => {
    const unsubscribe = frameIndex.on('change', (latest) => {
      setCurrentFrame(Math.round(latest))
    })
    return () => unsubscribe()
  }, [frameIndex])

  // Precargar TODOS los frames al montar (34MB total en WebP es manejable)
  useEffect(() => {
    let loaded = 0
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image()
      img.onload = () => {
        loaded++
        if (loaded === 1) setIsLoaded(true)
      }
      img.src = imageFrames[i]
    }
  }, [])

  // Precargar frames cercanos con mayor rango
  useEffect(() => {
    for (let i = Math.max(0, currentFrame - 20); i <= Math.min(TOTAL_FRAMES - 1, currentFrame + 20); i++) {
      const img = new Image()
      img.src = imageFrames[i]
    }
  }, [currentFrame])

  return (
    <div ref={ref} className="relative w-full h-full flex items-center justify-end">
      
      {/* =======================
          DESKTOP VIEW
          ======================= */}
      <motion.div 
        className="relative z-10 w-full max-w-[55%] h-full hidden md:flex items-center justify-center shrink-0"
        initial={{ opacity: 0, x: 30 }}
        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.img
          src={imageFrames[currentFrame]}
          alt="Implante dental 3D"
          className="absolute max-w-none w-auto h-full object-contain"
          style={{
            imageRendering: 'smooth',
            filter: 'contrast(1.1) brightness(1.03) saturate(1.05)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}
        />
      </motion.div>

      {/* =======================
          MOBILE VIEW
          ======================= */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 top-20 z-10 w-[85%] aspect-square md:hidden flex justify-center items-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.img
          src={imageFrames[currentFrame]}
          alt="Implante dental 3D mobile"
          className="absolute w-full h-full object-contain"
          style={{
            imageRendering: 'smooth',
            filter: 'contrast(1.1) brightness(1.03) saturate(1.05)',
            opacity: 1,
            maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'destination-in',
          }}
        />
      </motion.div>
    </div>
  )
})

export default ScrollAnimation3D
