import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    privacy: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone) => {
    const re = /^(\+34|0034|34)?[6789]\d{8}$/
    return re.test(phone.replace(/\s/g, ''))
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Teléfono inválido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Debes aceptar la política de privacidad'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Limpiar error del campo si existe
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setIsError(false)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nombre: formData.name,
          email: formData.email,
          telefono: formData.phone,
          servicio: formData.service || 'Sin especificar',
          mensaje: formData.message || '',
          origen: 'Formulario web',
          transcript: '',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setIsSuccess(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
        privacy: false,
      })

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Error enviando formulario:', error)
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    isError,
    handleChange,
    handleSubmit,
  }
}
