export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  return (
    <div className={`flex flex-col ${alignClass[align]} ${className}`}>
      <h2
        className={`font-display text-3xl md:text-4xl font-semibold leading-tight mb-4 ${
          light ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-px mb-5" style={{ background: 'linear-gradient(to right, #C9A84C, rgba(201,168,76,0.35))' }} />
      {subtitle && (
        <p className={`text-base md:text-lg max-w-xl leading-relaxed ${light ? 'text-cream/70' : 'text-stone'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
