/**
 * Single source of truth para datos de la clínica
 */

export const clinicData = {
  name: 'Cabello | Clínica Dental',
  tagline: 'Especialistas en cuidar tu sonrisa',

  address: {
    street: 'Av. de la Constitución 19, 7A',
    city: 'San Pedro Alcántara',
    province: 'Málaga',
    cp: '29670',
    country: 'España',
  },

  contact: {
    phone: {
      main: '+34 952 78 30 87',
      mobile: '+34 665 482 102',
      whatsapp: '34665482102',
    },
    email: 'info@clinicadentalcabello.es',
  },

  hours: {
    weekdays: {
      label: 'Lunes a Viernes',
      hours: '9:00 – 21:00',
    },
    saturday: {
      label: 'Sábados',
      hours: '11:00 – 13:00',
    },
    sunday: {
      label: 'Domingos',
      hours: 'Cerrado',
    },
  },

  doctor: {
    name: 'Francisco Cabello',
    title: 'Licenciado en Odontología',
    specialties: [
      'Odontología General',
      'Periodoncia',
      'Implantología',
      'Estética Dental',
      'Ortodoncia',
    ],
    bio: 'Con más de 20 años de experiencia en odontología, el Dr. Francisco Cabello ha tratado a miles de pacientes con dedicación y profesionalismo. Su objetivo es proporcionar tratamientos de calidad en un ambiente cálido y acogedor.',
  },

  social: {
    google: 'https://maps.app.goo.gl/o82Gkjpx5Vjpqmq38',
    whatsapp: 'https://wa.me/34665482102',
  },

  maps: {
    embedUrl: 'https://maps.google.com/maps?q=Clinica+Dental+Cabello,+Av+Constitucion+19,+San+Pedro+de+Alcantara,+Malaga&output=embed&hl=es',
    shareUrl: 'https://maps.app.goo.gl/o82Gkjpx5Vjpqmq38',
  },

  trust: {
    experience: { label: 'Años de Experiencia', value: '+20' },
    patients: { label: 'Pacientes Atendidos', value: '+1000' },
    rating: { label: 'Valoración Google', value: '4.7' },
    certified: { label: 'Clínica Certificada', value: 'Sí' },
  },
}

export default clinicData
