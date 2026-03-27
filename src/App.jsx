import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Pages
import HomePage from './pages/HomePage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import PrivacyPage from './pages/PrivacyPage'
import LegalPage from './pages/LegalPage'
import CookiesPage from './pages/CookiesPage'

// Common Components
import WhatsAppButton from './components/common/WhatsAppButton'
import CookieBanner from './components/common/CookieBanner'

function ScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return null
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopOnRouteChange />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/aviso-legal" element={<LegalPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>

        <WhatsAppButton />
        <CookieBanner />
      </Router>
    </HelmetProvider>
  )
}

export default App
