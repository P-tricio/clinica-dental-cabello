import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { galleryImages } from '@/data/gallery'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection animation="fadeUp">
          <SectionTitle
            title="Nuestra clínica"
            subtitle="Instalaciones modernas diseñadas para tu comodidad"
            align="center"
          />
        </AnimatedSection>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-12">
          {galleryImages.map((image, index) => (
            <AnimatedSection key={image.id} animation="fadeUp" delay={index * 40}>
              <button
                className="group relative w-full overflow-hidden aspect-square block"
                onClick={() => setSelectedImage(image)}
                aria-label={`Ver imagen: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-all duration-300 flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-cream/80 hover:text-cream transition-colors duration-200 flex items-center gap-2 text-sm"
              aria-label="Cerrar"
            >
              Cerrar
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <p className="text-cream/70 text-sm text-center mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  )
}
