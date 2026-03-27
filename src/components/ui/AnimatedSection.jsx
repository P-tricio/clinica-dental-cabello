import { useRef, useEffect, useState } from 'react'

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  threshold = 0.2,
  className = '',
}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const animationClasses = {
    fadeUp: isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-10',
    fadeIn: isVisible ? 'opacity-100' : 'opacity-0',
    slideLeft: isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-10',
    slideRight: isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 translate-x-10',
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}
