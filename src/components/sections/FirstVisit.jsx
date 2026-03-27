import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { clinicData } from '@/data/clinic'

const steps = [
  {
    number: '01',
    title: 'Evaluación completa',
    description: 'Realizamos un diagnóstico detallado de tu salud bucodental con técnicas modernas y sin prisas.',
  },
  {
    number: '02',
    title: 'Plan personalizado',
    description: 'Diseñamos un plan de tratamiento adaptado a tus necesidades y presupuesto, con total transparencia.',
  },
  {
    number: '03',
    title: 'Tratamiento experto',
    description: 'Ejecutamos el tratamiento con profesionalidad, precisión y los materiales de mayor calidad.',
  },
]

export default function FirstVisit() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <AnimatedSection animation="fadeUp">
          <SectionTitle
            title="Tu primera visita"
            subtitle="Un proceso sencillo, claro y sin compromiso."
            align="center"
            light={false}
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4 mt-16 mb-16">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} animation="fadeUp" delay={i * 120}>
              <div className="bg-forest p-10 flex flex-col gap-5 border-l-2 border-gold">
                <span className="font-display text-5xl font-semibold text-gold/70">{step.number}</span>
                <h3 className="font-display text-xl font-semibold text-cream">{step.title}</h3>
                <p className="text-cream/85 text-sm leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`tel:${clinicData.contact.phone.main}`}
            className="inline-flex items-center gap-3 bg-gold text-forest px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.2 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Solicitar cita ahora
          </a>
        </div>
      </div>
    </section>
  )
}
