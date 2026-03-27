import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout'

export default function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Cabello Clínica Dental</title>
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h1 className="font-display text-3xl font-semibold text-forest mb-8">
              Política de Cookies
            </h1>

            <div className="max-w-none text-stone space-y-6">
              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  1. ¿Qué son las Cookies?
                </h2>
                <p>
                  Las cookies son archivos pequeños que se almacenan en tu navegador
                  para recordar preferencias y mejorar tu experiencia.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  2. Tipos de Cookies que Utilizamos
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Cookies Técnicas</h3>
                    <p>Necesarias para el funcionamiento del sitio web.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Cookies de Análisis</h3>
                    <p>
                      Nos ayudan a entender cómo usas el sitio
                      (Google Analytics, si está habilitado).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  3. Tu Consentimiento
                </h2>
                <p>
                  Al continuar navegando, aceptas el uso de cookies técnicas.
                  Las cookies de análisis solo se usan con tu consentimiento.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  4. Cómo Desactivar Cookies
                </h2>
                <p>
                  Puedes configurar tu navegador para rechazar cookies.
                  Ten en cuenta que esto puede afectar la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  5. Más Información
                </h2>
                <p>
                  Para más detalles sobre cookies, visita
                  <a href="https://www.aboutcookies.org" target="_blank" rel="noreferrer" className="text-forest hover:text-gold underline">
                    {' '}
                    www.aboutcookies.org
                  </a>
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
