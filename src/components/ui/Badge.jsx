export default function Badge({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
}) {
  const baseStyles =
    'inline-flex items-center rounded-full font-medium whitespace-nowrap'

  const variants = {
    primary: 'bg-gold/15 text-forest',
    secondary: 'bg-forest/10 text-forest',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
