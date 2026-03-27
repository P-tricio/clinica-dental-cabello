import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { clinicData } from '@/data/clinic'
import doctorPhoto from '@/assets/images/doctor/clinica-cabello-013.png'

export default function AboutUs() {
  return (
    <section id="nosotros" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              <img
                src={doctorPhoto}
                alt="Dr. Francisco Cabello - Odontólogo"
                className="w-full h-[480px] object-cover object-center"
              />
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -right-6 bg-forest text-cream p-6 hidden md:block">
                <p className="font-display text-4xl font-semibold text-gold">+20</p>
                <p className="text-xs text-cream/60 uppercase tracking-wider mt-1">Años de experiencia</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contenido */}
          <AnimatedSection animation="slideRight" delay={100}>
            <div>
              <SectionTitle
                title={`Dr. ${clinicData.doctor.name}`}
                subtitle={clinicData.doctor.title}
                align="left"
              />

              <p className="text-stone leading-relaxed mb-8 mt-2">
                {clinicData.doctor.bio}
              </p>

              {/* Especialidades */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Especialidades</p>
                <ul className="space-y-2">
                  {clinicData.doctor.specialties.map((specialty, i) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal text-sm">
                      <span className="w-4 h-px bg-gold flex-shrink-0" />
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cita */}
              <blockquote className="border-l-2 border-gold pl-5 italic text-charcoal/75 text-sm leading-relaxed">
                "Mi objetivo es proporcionar tratamientos de la más alta calidad,
                combinando tecnología moderna con un trato humano y personalizado."
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
