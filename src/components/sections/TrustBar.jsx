function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

import { clinicData } from '@/data/clinic'

export default function TrustBar() {
  const items = [
    { icon: <ClockIcon />, value: clinicData.trust.experience.value, label: clinicData.trust.experience.label },
    { icon: <UsersIcon />, value: clinicData.trust.patients.value, label: clinicData.trust.patients.label },
    { icon: <StarIcon />, value: clinicData.trust.rating.value, label: clinicData.trust.rating.label },
    { icon: <ShieldIcon />, value: clinicData.trust.certified.value, label: clinicData.trust.certified.label },
  ]

  return (
    <section className="bg-cream-dark border-b border-stone/10 relative overflow-hidden">
      {/* Línea dorada superior */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold/70 to-transparent pointer-events-none" />
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone/10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center py-10 px-4 gap-3">
              <span className="text-gold/80">{item.icon}</span>
              <p className="font-display text-4xl font-semibold text-forest leading-none">{item.value}</p>
              <p className="text-xs text-stone/80 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
