import { Link } from 'react-router-dom'
import { clinicData } from '@/data/clinic'
import { services } from '@/data/services'
import logo from '@/assets/images/logo.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest text-cream">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <img src={logo} alt="Clínica Dental Cabello" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-cream/72 text-xs leading-relaxed">
              {clinicData.address.street}<br />
              {clinicData.address.cp} {clinicData.address.city}<br />
              {clinicData.address.province}
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">Servicios</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/servicios/${service.slug}`}
                    className="text-sm text-cream/72 hover:text-gold transition-colors duration-150"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">Contacto</h4>
            <ul className="space-y-3 text-sm text-cream/72">
              <li>
                <a href={`tel:${clinicData.contact.phone.main}`} className="hover:text-gold transition-colors duration-150">
                  {clinicData.contact.phone.main}
                </a>
              </li>
              <li>
                <a href={`tel:${clinicData.contact.phone.mobile}`} className="hover:text-gold transition-colors duration-150">
                  {clinicData.contact.phone.mobile}
                </a>
              </li>
              <li>
                <a href={`mailto:${clinicData.contact.email}`} className="hover:text-gold transition-colors duration-150">
                  {clinicData.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Horario + Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-5">Horario</h4>
            <ul className="space-y-2 text-sm text-cream/72 mb-8">
              <li className="flex justify-between gap-4">
                <span>{clinicData.hours.weekdays.label}</span>
                <span className="text-cream/55">{clinicData.hours.weekdays.hours}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{clinicData.hours.saturday.label}</span>
                <span className="text-cream/55">{clinicData.hours.saturday.hours}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>{clinicData.hours.sunday.label}</span>
                <span className="text-cream/55">{clinicData.hours.sunday.hours}</span>
              </li>
            </ul>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacidad" className="text-sm text-cream/72 hover:text-gold transition-colors duration-150">Política de Privacidad</Link></li>
              <li><Link to="/aviso-legal" className="text-sm text-cream/72 hover:text-gold transition-colors duration-150">Aviso Legal</Link></li>
              <li><Link to="/cookies" className="text-sm text-cream/72 hover:text-gold transition-colors duration-150">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/58">
          <p>&copy; {currentYear} Cabello Clínica Dental. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-gold transition-colors duration-150"
            >
              Inicio
            </button>
            <a href={clinicData.social.google} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors duration-150">
              Google Maps
            </a>
            <a href={clinicData.social.whatsapp} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors duration-150">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
