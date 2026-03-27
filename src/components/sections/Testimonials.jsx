import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import TestimonialCard from '@/components/ui/TestimonialCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { testimonials } from '@/data/testimonials'
import { clinicData } from '@/data/clinic'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visible = 3
  const total = testimonials.length

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total)
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total)

  // Obtener 3 testimonios visibles (circular)
  const visibleTestimonials = Array.from({ length: visible }, (_, i) =>
    testimonials[(currentIndex + i) % total]
  )

  return (
    <section className="section-padding bg-forest">
      <div className="container-custom">
        <AnimatedSection animation="fadeUp">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionTitle
              title="Lo que dicen nuestros pacientes"
              subtitle="Reseñas reales de Google Maps"
              align="left"
              light={true}
            />

            {/* Controles */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-all duration-200 flex items-center justify-center"
                aria-label="Anterior"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-cream/20 text-cream/60 hover:border-gold hover:text-gold transition-all duration-200 flex items-center justify-center"
                aria-label="Siguiente"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Grid de testimonios */}
        <div className="grid md:grid-cols-3 gap-4">
          {visibleTestimonials.map((testimonial, i) => (
            <AnimatedSection key={`${currentIndex}-${i}`} animation="fadeUp" delay={i * 80}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>

        {/* Dots + Link Google */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-px transition-all duration-300 ${
                  i === currentIndex ? 'bg-gold w-8' : 'bg-cream/20 w-4'
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <a
            href={clinicData.social.google}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-cream/65 hover:text-gold transition-colors duration-200 flex items-center gap-2"
          >
            Ver todas las reseñas en Google
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
