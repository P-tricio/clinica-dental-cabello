import { clinicData } from '@/data/clinic'

/**
 * Genera structured data JSON-LD para schema.org/Dentist
 */
export const generateDentistSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: clinicData.name,
    image: '/og-image.jpg',
    description: clinicData.tagline,
    url: 'https://clinicadentalcabello.es',
    telephone: clinicData.contact.phone.main,
    email: clinicData.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicData.address.street,
      addressLocality: clinicData.address.city,
      addressRegion: clinicData.address.province,
      postalCode: clinicData.address.cp,
      addressCountry: 'ES',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '11:00',
        closes: '13:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: clinicData.trust.rating.value,
      reviewCount: '50',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '€€',
    medicalSpecialty: [
      'Dentistry',
      'Pediatric Dentistry',
      'Orthodontics',
      'Periodontics',
      'Implant Dentistry',
    ],
    staff: [
      {
        '@type': 'Person',
        name: clinicData.doctor.name,
        jobTitle: 'Dentist',
        knowsLanguage: ['Spanish', 'English'],
      },
    ],
  }
}

/**
 * Genera structured data JSON-LD para LocalBusiness
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: clinicData.name,
    image: '/og-image.jpg',
    url: 'https://clinicadentalcabello.es',
    telephone: clinicData.contact.phone.main,
    email: clinicData.contact.email,
    areaServed: ['San Pedro Alcántara', 'Málaga', 'Andalucía'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: clinicData.address.street,
      addressLocality: clinicData.address.city,
      addressRegion: clinicData.address.province,
      postalCode: clinicData.address.cp,
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.5084,
      longitude: -5.2741,
    },
  }
}

/**
 * Genera meta tags Open Graph para compartir en redes sociales
 */
export const generateOpenGraphTags = (title, description, image = '/og-image.jpg') => {
  return {
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:type': 'website',
    'og:url': 'https://clinicadentalcabello.es',
    'og:locale': 'es_ES',
  }
}

/**
 * Genera meta tags Twitter Card
 */
export const generateTwitterCardTags = (title, description, image = '/og-image.jpg') => {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
  }
}

/**
 * Genera sitemap en formato texto
 * (para uso server-side, aquí es solo referencia)
 */
export const generateSitemapURLs = (services) => {
  const baseURL = 'https://clinicadentalcabello.es'
  const urls = [
    `${baseURL}/`,
    `${baseURL}/privacidad`,
    `${baseURL}/aviso-legal`,
    `${baseURL}/cookies`,
    ...services.map((service) => `${baseURL}/servicios/${service.slug}`),
  ]
  return urls
}
