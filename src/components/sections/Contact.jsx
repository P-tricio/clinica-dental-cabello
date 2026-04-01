import SectionTitle from '@/components/ui/SectionTitle'
import AnimatedSection from '@/components/ui/AnimatedSection'
import useContactForm from '@/hooks/useContactForm'
import { clinicData } from '@/data/clinic'

export default function Contact() {
  const { formData, errors, isSubmitting, isSuccess, isError, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contacto" className="section-padding bg-cream">
      <div className="container-custom">
        <AnimatedSection animation="fadeUp">
          <SectionTitle
            title="Contacto"
            subtitle="Estamos aquí para atenderte. Llámanos o escríbenos."
            align="center"
          />
        </AnimatedSection>

        {/* Banda de datos clave */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 mb-12">
          {/* Dirección */}
          <div className="bg-white p-8 flex gap-5 items-start border border-stone/10 shadow-sm hover:border-gold/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group rounded-sm relative overflow-hidden">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-forest/10 text-forest group-hover:bg-gold group-hover:text-forest transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 21s-8-7-8-13a8 8 0 0116 0c0 6-8 13-8 13z"/><circle cx="12" cy="8" r="3"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">Dirección</p>
              <p className="text-charcoal text-sm leading-relaxed">
                {clinicData.address.street}<br />
                {clinicData.address.cp} {clinicData.address.city}<br />
                {clinicData.address.province}
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="bg-white p-8 flex gap-5 items-start border border-stone/10 shadow-sm hover:border-gold/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group rounded-sm relative overflow-hidden">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-forest/10 text-forest group-hover:bg-gold group-hover:text-forest transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.2 2 2 0 012.22 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">Teléfono</p>
              <a href={`tel:${clinicData.contact.phone.main}`} className="block text-charcoal text-sm hover:text-gold transition-colors mb-1 font-medium">
                {clinicData.contact.phone.main}
              </a>
              <a href={`tel:${clinicData.contact.phone.mobile}`} className="block text-charcoal text-sm hover:text-gold transition-colors mb-3">
                {clinicData.contact.phone.mobile}
              </a>
              <a
                href={`https://wa.me/${clinicData.contact.phone.whatsapp}?text=${encodeURIComponent('Hola, me gustaría información sobre sus servicios dentales.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#25D366] hover:underline font-medium"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="bg-white p-8 flex gap-5 items-start border border-stone/10 shadow-sm hover:border-gold/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group rounded-sm relative overflow-hidden">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-forest/10 text-forest group-hover:bg-gold group-hover:text-forest transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">Horario</p>
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-charcoal">{clinicData.hours.weekdays.label}</span>
                  <span className="text-forest font-medium">{clinicData.hours.weekdays.hours}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-charcoal">{clinicData.hours.saturday.label}</span>
                  <span className="text-forest font-medium">{clinicData.hours.saturday.hours}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-charcoal">{clinicData.hours.sunday.label}</span>
                  <span className="text-stone/70">{clinicData.hours.sunday.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario + Mapa */}
        <div className="grid md:grid-cols-2 shadow-xl border border-stone/10 rounded-sm overflow-hidden bg-white">

          {/* Formulario */}
          <AnimatedSection animation="slideLeft">
            <form className="bg-white p-8 space-y-5 h-full" onSubmit={handleSubmit}>
              <h3 className="font-display text-xl font-semibold text-forest mb-6">Escríbenos</h3>

              {isSuccess && (
                <div className="p-4 bg-forest/10 border-l-2 border-forest text-forest text-sm">
                  Mensaje recibido. Nos pondremos en contacto contigo pronto.
                </div>
              )}
              {isError && (
                <div className="p-4 bg-red-50 border-l-2 border-red-400 text-red-700 text-sm">
                  Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`w-full px-4 py-3 text-sm bg-cream border focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] transition-all duration-200 placeholder:text-stone/40 ${errors.name ? 'border-red-400' : 'border-stone/20'}`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                    className={`w-full px-4 py-3 text-sm bg-cream border focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] transition-all duration-200 placeholder:text-stone/40 ${errors.phone ? 'border-red-400' : 'border-stone/20'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`w-full px-4 py-3 text-sm bg-cream border focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] transition-all duration-200 placeholder:text-stone/40 ${errors.email ? 'border-red-400' : 'border-stone/20'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Servicio (opcional)</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-cream border border-stone/20 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] transition-all duration-200"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Implantes Dentales">Implantes Dentales</option>
                  <option value="Ortodoncia">Ortodoncia</option>
                  <option value="Estética Dental">Estética Dental</option>
                  <option value="Primera Visita">Primera Visita</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-charcoal mb-1.5 tracking-wide">Mensaje (opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Escribe tu consulta aquí..."
                  className="w-full px-4 py-3 text-sm bg-cream border border-stone/20 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] transition-all duration-200 resize-none placeholder:text-stone/40"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-forest flex-shrink-0"
                />
                <label htmlFor="privacy" className="text-xs text-stone leading-relaxed">
                  Acepto la{' '}
                  <a href="/privacidad" target="_blank" rel="noreferrer" className="text-forest underline hover:text-gold">
                    política de privacidad
                  </a>
                </label>
              </div>
              {errors.privacy && <p className="text-red-500 text-xs -mt-3">{errors.privacy}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-forest text-cream py-3.5 text-sm font-medium tracking-wide hover:bg-forest-light transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar mensaje'
                )}
              </button>
            </form>
          </AnimatedSection>

          {/* Mapa */}
          <AnimatedSection animation="slideRight" delay={100}>
            <div className="h-full min-h-[500px]">
              <iframe
                src={clinicData.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Dental Cabello"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
