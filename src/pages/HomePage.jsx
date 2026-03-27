import { Helmet } from 'react-helmet-async'
import Layout from '@/components/layout/Layout'
import ScrollToTop from '@/components/common/ScrollToTop'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import AboutUs from '@/components/sections/AboutUs'
import Services from '@/components/sections/Services'
import FirstVisit from '@/components/sections/FirstVisit'
import Testimonials from '@/components/sections/Testimonials'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import { generateDentistSchema, generateLocalBusinessSchema } from '@/utils/seo'

export default function HomePage() {
  const dentistSchema = generateDentistSchema()
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <Helmet>
        <title>Cabello | Clínica Dental - San Pedro Alcántara, Málaga</title>
        <meta
          name="description"
          content="Especialistas en cuidar tu sonrisa. Clínica dental de Francisco Cabello en San Pedro Alcántara, Málaga. Implantes, ortodoncia, estética dental y más de 20 años de experiencia."
        />
        <meta name="keywords" content="dentista, clínica dental, implantes, ortodoncia, San Pedro Alcántara, Málaga" />
        <meta name="og:title" content="Cabello | Clínica Dental - San Pedro Alcántara" />
        <meta
          name="og:description"
          content="Especialistas en cuidar tu sonrisa. Clínica dental de Francisco Cabello con +20 años de experiencia."
        />
        <meta name="og:image" content="https://clinicadentalcabello.es/og-image.jpg" />
        <meta name="og:url" content="https://clinicadentalcabello.es/" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cabello | Clínica Dental" />
        <meta name="twitter:description" content="Implantes, ortodoncia, estética dental en San Pedro Alcántara, Málaga" />

        <link rel="canonical" href="https://clinicadentalcabello.es/" />
        <link rel="alternate" hrefLang="es" href="https://clinicadentalcabello.es/" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(dentistSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Layout>
        <Hero />
        <TrustBar />
        <AboutUs />
        <Services />
        <FirstVisit />
        <Testimonials />
        <Gallery />
        <Contact />
      </Layout>

      <ScrollToTop />
    </>
  )
}
