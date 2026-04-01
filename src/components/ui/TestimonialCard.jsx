function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white/5 backdrop-blur-md p-8 flex flex-col gap-5 border border-cream/10 hover:border-gold/50 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden rounded-sm">

      {/* Comilla decorativa */}
      <span className="absolute top-5 right-6 font-display text-7xl text-gold/40 leading-none select-none pointer-events-none">"</span>

      {/* Estrellas */}
      <div className="flex gap-1 text-gold-400">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Texto */}
      <p className="text-cream text-sm leading-relaxed flex-1 relative z-10">
        "{testimonial.text}"
      </p>

      {/* Autor */}
      <div className="flex items-center gap-3 pt-4 border-t border-gold-600/20">
        <div className="w-10 h-10 bg-gold-600/30 border border-gold-400/40 flex items-center justify-center text-gold-300 text-xs font-semibold flex-shrink-0">
          {testimonial.avatarInitials}
        </div>
        <div>
          <p className="text-cream text-sm font-semibold">{testimonial.name}</p>
          <p className="text-gold-400/80 text-xs tracking-wide">Paciente verificado · Google</p>
        </div>
      </div>
    </div>
  )
}
