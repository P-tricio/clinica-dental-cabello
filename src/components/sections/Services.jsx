import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { services } from '@/data/services'

// "Primera visita" tiene su propia sección dedicada, se muestra aparte
const gridServices = services.filter((s) => s.slug !== 'primera-visita')

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection animation="fadeUp">
          <SectionTitle
            title="Nuestros servicios"
            subtitle="Tratamientos completos para toda la familia con la más alta calidad"
            align="center"
          />
        </AnimatedSection>

        {/* Grid 4 columnas en desktop, 2 en tablet, 1 en móvil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {gridServices.map((service, index) => (
            <AnimatedSection
              key={service.id}
              animation="fadeUp"
              delay={index * 40}
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
