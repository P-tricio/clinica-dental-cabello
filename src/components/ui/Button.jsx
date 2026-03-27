import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      onClick,
      loading = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-gold text-forest hover:bg-gold-light active:bg-gold',
      outline:
        'border border-cream text-cream hover:bg-cream/10',
      'outline-dark':
        'border border-forest text-forest hover:bg-forest hover:text-cream',
      ghost:
        'text-forest hover:text-gold',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }

    const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (href) {
      return (
        <Link ref={ref} to={href} className={buttonClass} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={loading}
        className={buttonClass}
        {...props}
      >
        {loading && (
          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
