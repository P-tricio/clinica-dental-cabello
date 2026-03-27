import { useState, useEffect } from 'react'
import { clinicData } from '@/data/clinic'
import heroImage from '@/assets/images/hero/clinica-cabello-031.jpeg'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden -mt-16 md:-mt-20">
      {/* Imagen de fondo */}
      <img
        src={heroImage}
        alt="Clínica Dental Cabello, San Pedro Alcántara"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Overlay gradient — oscuro izquierda/abajo, transparente derecha/arriba */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/92 via-forest/72 to-forest/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/15 via-transparent to-forest/55" />

      {/* Línea decorativa dorada izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold/40 hidden md:block" />

      {/* Contenido */}
      <div
        className={`relative z-10 container-custom transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-2xl">
          {/* Etiqueta */}
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-6">
            San Pedro Alcántara, Málaga
          </p>

          {/* Titular */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.1] mb-6">
            Especialistas<br />
            en cuidar<br />
            <em className="text-gold not-italic">tu sonrisa</em>
          </h1>

          {/* Subtítulo */}
          <p className="text-cream/88 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Más de 20 años de experiencia ofreciendo tratamientos dentales de alta calidad. Te atendemos con profesionalidad y cercanía.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${clinicData.contact.phone.main}`}
              className="inline-flex items-center justify-center gap-3 bg-gold text-forest px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.2 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              {clinicData.contact.phone.main}
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-4 text-sm font-medium tracking-wide hover:border-cream/60 hover:bg-cream/5 transition-all duration-200"
            >
              Ver servicios
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-xs tracking-widest uppercase">Desliza</span>
        <div className="w-px h-10 bg-cream/25 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-gold animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
