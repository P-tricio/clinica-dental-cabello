import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout'

export default function LegalPage() {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | Cabello Clínica Dental</title>
      </Helmet>

      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-3xl">
            <h1 className="font-display text-3xl font-semibold text-forest mb-8">
              Aviso Legal
            </h1>

            <div className="max-w-none text-stone space-y-6">
              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  1. Datos Identificativos
                </h2>
                <p>
                  Cabello | Clínica Dental
                  <br />
                  CIF: [COMPLETAR]
                  <br />
                  Av. de la Constitución 19, 7A
                  <br />
                  29670 San Pedro Alcántara, Málaga
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  2. Contenido
                </h2>
                <p>
                  El contenido de este sitio web es de carácter informativo.
                  No constituye consejo médico profesional. Consulta siempre
                  con el Dr. Francisco Cabello para asuntos relacionados con tu salud.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  3. Uso del Sitio Web
                </h2>
                <p>
                  Te comprometes a:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>No usar contenido con fines ilícitos</li>
                  <li>No dañar la funcionalidad del sitio</li>
                  <li>Respetar los derechos de propiedad intelectual</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  4. Responsabilidad
                </h2>
                <p>
                  No somos responsables de daños causados por:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Contenido externo enlazado</li>
                  <li>Virus o problemas técnicos</li>
                  <li>Uso indebido del sitio</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-charcoal text-xl mb-2">
                  5. Propiedad Intelectual
                </h2>
                <p>
                  Todo el contenido (textos, imágenes, diseño) es propiedad
                  de Cabello | Clínica Dental. Prohibida su reproducción
                  sin autorización expresa.
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
