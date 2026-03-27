import { Link } from 'react-router-dom'

// Iconos únicos por tipo de servicio
const icons = {
  'implantes-dentales': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2c-2 0-4 1.5-4 4 0 1 .3 2 .7 3L10 14h4l1.3-5C15.7 8 16 7 16 6c0-2.5-2-4-4-4z" />
      <path d="M10 14v6M14 14v6M8 20h8" />
    </svg>
  ),
  'ortodoncia': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 10c0-3 1.5-5 4-5s4 2 4 2 1.5-2 4-2 4 2 4 5c0 4-2 8-4 9-1 .5-2 0-4-2-2 2-3 2.5-4 2-2-1-4-5-4-9z" />
      <path d="M5 12h14" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
  ),
  'ortodoncia-invisible': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" aria-hidden="true">
      <path d="M5 10c0-3 1.5-5 4-5s4 2 4 2 1.5-2 4-2 4 2 4 5c0 4-2 8-4 9-1 .5-2 0-4-2-2 2-3 2.5-4 2-2-1-4-5-4-9z" strokeDasharray="none" />
      <path d="M7 11h10" strokeDasharray="2 2" />
    </svg>
  ),
  'estetica-dental': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c-2.5 0-4.5 2-4.5 4.5 0 1 .3 2 .8 3L9.5 14h5l1.2-3.5c.5-1 .8-2 .8-3C16.5 5 14.5 3 12 3z" />
      <path d="M19 3l1 2-1 1M5 3L4 5l1 1M19 19l1-2-1-1M5 19l-1-2 1-1" />
    </svg>
  ),
  'periodoncia': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22V12" />
      <path d="M12 12c0-4 3-7 6-7" />
      <path d="M12 12c0-3-3-5-6-5" />
      <path d="M9 7c0-2 1-4 3-4s3 2 3 4" />
    </svg>
  ),
  'protesis-dentales': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14c0 1 .5 2 1.5 2s2-.8 2.5-2c.5 1.2 1.5 2 2.5 2s2-.8 2.5-2c.5 1.2 1.5 2 2.5 2s2-1 2.5-2" />
      <path d="M4 14V9c0-1 .5-2 1.5-2s2 .8 2.5 2c.5-1.2 1.5-2 2.5-2s2 .8 2.5 2c.5-1.2 1.5-2 2.5-2s2 1 2.5 2v5" />
      <path d="M4 14h16" />
    </svg>
  ),
  'endodoncia': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c-2 0-3.5 1.5-3.5 3.5 0 .8.3 1.6.6 2.5L10 13h4l.9-4C15.2 8.1 15.5 7.3 15.5 6.5 15.5 4.5 14 3 12 3z" />
      <path d="M10 13l-1 8M14 13l1 8" />
      <path d="M9 17h6" />
    </svg>
  ),
  'cirugia-bucal': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3l12 12-3 3-12-12 3-3z" />
      <path d="M14 5l3 3" />
      <path d="M5 20l2-2" />
    </svg>
  ),
  'odontopediatria': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 6c-2 0-3.5 1.5-3.5 3.5 0 .8.3 1.5.6 2.5L10 16h4l.9-4c.3-1 .6-1.7.6-2.5C15.5 7.5 14 6 12 6z" />
      <path d="M8.5 4C9.5 3 11 2.5 12 2.5s2.5.5 3.5 1.5" />
      <path d="M12 2.5V4" />
    </svg>
  ),
  'odontologia-conservadora': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c-2 0-4 1.8-4 4 0 1 .3 2 .7 3L10 14h4l1.3-4c.4-1 .7-2 .7-3 0-2.2-2-4-4-4z" />
      <path d="M10 9h4" />
      <path d="M12 7v4" />
    </svg>
  ),
  'prevencion-salud-dental': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  'atm-bruxismo': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9c0-1 1-2 2-2h14c1 0 2 1 2 2v1c0 1-1 2-2 2H5c-1 0-2-1-2-2V9z" />
      <path d="M3 14c0-1 1-2 2-2h14c1 0 2 1 2 2v1c0 1-1 2-2 2H5c-1 0-2-1-2-2v-1z" />
      <path d="M7 7V5M10 7V4M13 7V5M17 7V5" />
    </svg>
  ),
  'primera-visita': (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  ),
}

const defaultIcon = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3c-2 0-4 1.8-4 4 0 1 .3 2 .7 3L10 14h4l1.3-4c.4-1 .7-2 .7-3 0-2.2-2-4-4-4z" />
    <path d="M10 14v6M14 14v6" />
  </svg>
)

export default function ServiceCard({ service }) {
  const icon = icons[service.slug] ?? defaultIcon

  return (
    <Link to={`/servicios/${service.slug}`} className="group block h-full">
      <div className="h-full p-8 bg-white flex flex-col gap-5 border-t-2 border-transparent hover:border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

        {/* Icono */}
        <div className="w-12 h-12 flex items-center justify-center text-gold border border-gold/25 group-hover:bg-gold group-hover:text-forest group-hover:border-gold group-hover:rotate-6 transition-all duration-300">
          {icon}
        </div>

        {/* Nombre */}
        <div>
          <h3 className="font-display text-lg font-semibold text-forest mb-2 group-hover:text-gold transition-colors duration-200 leading-snug">
            {service.name}
          </h3>
          <p className="text-stone text-sm leading-relaxed line-clamp-3">
            {service.shortDesc}
          </p>
        </div>

        {/* CTA */}
        <span className="mt-auto text-xs font-medium tracking-widest uppercase text-gold/80 flex items-center gap-2 group-hover:gap-4 group-hover:text-gold transition-all duration-300">
          Saber más
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
