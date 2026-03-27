import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Cabello Clínica Dental</title>
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h1 className="font-display text-3xl font-semibold text-forest mb-8">
              Política de Privacidad
            </h1>

            <div className="max-w-none text-stone space-y-6">
              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  1. Responsable del Tratamiento
                </h2>
                <p>
                  Cabello | Clínica Dental, con CIF [COMPLETAR] es responsable del
                  tratamiento de tus datos personales.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  2. Finalidad del Tratamiento
                </h2>
                <p>
                  Tus datos serán utilizados para:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Gestionar tu cita y tratamientos dentales</li>
                  <li>Comunicaciones sobre servicios</li>
                  <li>Cumplimiento de obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  3. Base Legal
                </h2>
                <p>
                  El tratamiento se basa en tu consentimiento y en el cumplimiento
                  de obligaciones legales del sector sanitario.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  4. Derechos del Interesado
                </h2>
                <p>
                  Tienes derecho a:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Acceder a tus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la supresión</li>
                  <li>Limitar el tratamiento</li>
                  <li>Portabilidad de datos</li>
                  <li>Oponerme al tratamiento</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  5. Contacto
                </h2>
                <p>
                  Para ejercer tus derechos, contacta con:
                  <br />
                  Email: info@clinicadentalcabello.es
                </p>
              </div>

              <p className="text-sm text-stone/70 mt-12">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
