import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout'
import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/data/services'
import { clinicData } from '@/data/clinic'

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

const faqs = [
  {
    q: '¿Cuál es el costo del tratamiento?',
    a: 'El coste varía según el caso específico. Te proporcionaremos un presupuesto detallado y sin compromiso después de la evaluación inicial.',
  },
  {
    q: '¿Cuánto tiempo dura el tratamiento?',
    a: 'La duración depende de la complejidad del caso. El Dr. Cabello te informará sobre los tiempos estimados durante la consulta.',
  },
  {
    q: '¿Es doloroso el procedimiento?',
    a: 'Utilizamos técnicas anestésicas modernas para garantizar tu comodidad. En la mayoría de los casos el procedimiento es prácticamente indoloro.',
  },
]

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const [openFaq, setOpenFaq] = useState(null)
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-custom text-center">
            <h1 className="font-display text-3xl font-semibold text-forest mb-4">
              Servicio no encontrado
            </h1>
            <p className="text-stone mb-6">El servicio que buscas no existe.</p>
            <Link to="/" className="text-gold hover:text-gold-light underline text-sm">
              ← Volver al inicio
            </Link>
          </div>
        </section>
      </Layout>
    )
  }

  const relatedServices = services
    .filter((s) => s.id !== service.id && s.slug !== 'primera-visita')
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <link rel="canonical" href={`https://clinicadentalcabello.es/servicios/${slug}`} />
      </Helmet>

      <Layout>
        {/* Hero de servicio: Imagen de alta visibilidad + Velo dinámico */}
        <section className="bg-forest relative overflow-hidden pt-36 pb-24 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 -mt-16 md:-mt-20">
          {/* Fondo: Imagen de alta calidad */}
          {service.image && (
            <div className="absolute inset-0 z-0">
              <img
                src={service.image}
                alt=""
                className="w-full h-full object-cover opacity-80 scale-105"
              />
              {/* Capa de amalgama visual: Forest sutil */}
              <div className="absolute inset-0 bg-forest/30" />
            </div>
          )}
          
          {/* Gradiente asimétrico Premium: Protege el texto a la izquierda, libera la imagen a la derecha */}
          <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-transparent z-10" />
          
          {/* Divisor inferior de luz */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none z-20" />
          
          <div className="container-custom relative z-20">
            {/* Link de retorno con estilo depurado */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-all duration-300 text-xs tracking-[0.2em] uppercase mb-16 group"
            >
              <span className="w-8 h-px bg-gold/50 group-hover:w-12 transition-all duration-300 mr-2" />
              Inicio
            </Link>
            
            {/* Tag: Minimalist Premium Badge like in Home Hero */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase drop-shadow-sm">
                Nuestros servicios
              </p>
            </div>
            
            {/* Título: Máximo Impacto */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-semibold text-cream leading-[0.95] mb-12 max-w-4xl tracking-tighter italic drop-shadow-2xl">
              {service.name}
            </h1>
            
            {/* Descripción: Legibilidad mejorada */}
            <p className="text-cream/95 text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-4xl font-light drop-shadow-md">
              {service.shortDesc}
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">

              {/* Descripción + Beneficios */}
              <div className="md:col-span-2">
                <AnimatedSection animation="fadeUp">

                  <p className="text-stone text-base leading-relaxed mb-10">
                    {service.fullDesc}
                  </p>

                  {/* Beneficios */}
                  <div className="mb-12">
                    <h2 className="font-display text-2xl font-semibold text-forest mb-4">
                      Beneficios del tratamiento
                    </h2>
                    <div className="w-12 h-px bg-gold mb-6" />
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-gold" aria-hidden="true">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-charcoal text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-forest mb-4">
                      Preguntas frecuentes
                    </h2>
                    <div className="w-12 h-px bg-gold mb-6" />
                    <div className="divide-y divide-stone/15">
                      {faqs.map((faq, i) => (
                        <div key={i} className="py-4">
                          <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full flex items-start justify-between gap-4 text-left group"
                            aria-expanded={openFaq === i}
                          >
                            <span className="font-medium text-charcoal text-sm group-hover:text-forest transition-colors duration-200">
                              {faq.q}
                            </span>
                            <span className={`text-gold flex-shrink-0 transition-transform duration-200 mt-0.5 ${openFaq === i ? 'rotate-180' : ''}`}>
                              <ChevronDownIcon />
                            </span>
                          </button>
                          {openFaq === i && (
                            <p className="text-stone text-sm leading-relaxed mt-3 pr-8">
                              {faq.a}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Sidebar CTA */}
              <AnimatedSection animation="slideRight" delay={100} className="md:col-span-1">
                <div className="bg-cream p-8 sticky top-28">
                  <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
                    Primera visita
                  </p>
                  <h3 className="font-display text-xl font-semibold text-forest mb-3 leading-snug">
                    ¿Te interesa este tratamiento?
                  </h3>
                  <p className="text-stone text-sm leading-relaxed mb-6">
                    Agenda tu primera visita sin compromiso. Te realizamos un diagnóstico completo y un presupuesto personalizado.
                  </p>

                  <a
                    href={`tel:${clinicData.contact.phone.main}`}
                    className="flex items-center justify-center gap-2 w-full bg-gold text-forest py-3.5 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200 mb-3"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.2 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    {clinicData.contact.phone.main}
                  </a>

                  <a
                    href="#contacto"
                    className="flex items-center justify-center gap-2 w-full border border-forest/30 text-forest py-3.5 text-sm font-medium tracking-wide hover:border-forest hover:bg-forest/5 transition-all duration-200"
                  >
                    Escríbenos
                  </a>

                  <div className="mt-6 pt-6 border-t border-stone/15">
                    <p className="text-xs text-stone leading-relaxed">
                      <span className="font-medium text-charcoal">Horario:</span>{' '}
                      {clinicData.hours.weekdays.label} {clinicData.hours.weekdays.hours}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Servicios relacionados */}
        {relatedServices.length > 0 && (
          <section className="section-padding bg-cream">
            <div className="container-custom">
              <AnimatedSection animation="fadeUp">
                <SectionTitle
                  title="Otros tratamientos"
                  subtitle="Explora el resto de nuestros servicios"
                  align="center"
                />
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-px bg-stone/10 mt-12">
                {relatedServices.map((relService, index) => (
                  <AnimatedSection
                    key={relService.id}
                    animation="fadeUp"
                    delay={index * 60}
                  >
                    <ServiceCard service={relService} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}
      </Layout>
    </>
  )
}
