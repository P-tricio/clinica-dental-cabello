import { useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'

const WELCOME_MESSAGE = {
  role: 'assistant',
  content:
    '¡Hola! Soy el asistente virtual de Cabello | Clínica Dental. Puedo ayudarte con información sobre nuestros tratamientos, horarios y solicitar cita. ¿En qué puedo ayudarte?',
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[+\d\s\-().]{6,20}$/
const SAFE_STRING_REGEX = /^[^<>{}]*$/

function validateToolArgs(toolName, args) {
  if (toolName === 'solicitar_cita') {
    if (!args.nombre || !SAFE_STRING_REGEX.test(args.nombre)) return false
    if (!args.telefono || !PHONE_REGEX.test(args.telefono)) return false
    if (args.email && !EMAIL_REGEX.test(args.email)) return false
    if (!args.servicio) return false
    if (!args.fecha_preferida) return false
  }
  if (toolName === 'enviar_contacto') {
    if (!args.nombre || !SAFE_STRING_REGEX.test(args.nombre)) return false
    if (!args.contacto) return false
    if (!args.mensaje) return false
  }
  return true
}

function buildTranscript(messages) {
  return messages
    .map((m) => `${m.role === 'user' ? 'Cliente' : 'Asistente'}: ${m.content}`)
    .join('\n')
}

export default function useChat() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleToolCall = useCallback(async (toolName, args, currentMessages) => {
    if (!validateToolArgs(toolName, args)) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Parece que hay un problema con algún dato. ¿Podrías verificar el teléfono o email e intentarlo de nuevo?',
        },
      ])
      setIsLoading(false)
      return
    }

    const transcript = buildTranscript(currentMessages)

    try {
      if (toolName === 'solicitar_cita') {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CITA,
          { ...args, transcript },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `¡Perfecto, ${args.nombre}! Tu solicitud de cita ha sido enviada correctamente. El equipo de Clínica Dental Cabello se pondrá en contacto contigo en breve. Si necesitas atención urgente, llama al +34 952 78 30 87.`,
          },
        ])
      } else if (toolName === 'enviar_contacto') {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            nombre: args.nombre,
            email: args.email ?? '',
            telefono: args.telefono ?? '',
            servicio: '',
            mensaje: args.mensaje,
            origen: 'Chatbot',
            transcript,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              '¡Consulta enviada! La clínica revisará tu mensaje y te responderá en breve. Si prefieres contacto inmediato, llama al +34 952 78 30 87.',
          },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Ha ocurrido un problema al enviar tu solicitud. Por favor, contacta directamente con la clínica en el +34 952 78 30 87 o en info@clinicadentalcabello.es.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [])

  const sendMessage = useCallback(
    async (content) => {
      if (!content.trim() || isLoading) return

      const userMessage = { role: 'user', content: content.trim() }
      const newMessages = [...messages, userMessage]
      setMessages(newMessages)
      setIsLoading(true)
      setError(null)

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: newMessages }),
        })

        if (!res.ok) throw new Error('Error en la respuesta del servidor')

        const data = await res.json()
        const { message } = data

        if (message.tool_calls?.length > 0) {
          const toolCall = message.tool_calls[0]
          const args = JSON.parse(toolCall.function.arguments)
          await handleToolCall(toolCall.function.name, args, newMessages)
          return
        }

        setMessages((prev) => [...prev, { role: 'assistant', content: message.content }])
      } catch {
        setError(
          'Ha ocurrido un error al conectar con el asistente. Por favor, inténtalo de nuevo.'
        )
        setMessages((prev) => prev.slice(0, -1))
      } finally {
        setIsLoading(false)
      }
    },
    [messages, isLoading, handleToolCall]
  )

  const clearError = useCallback(() => setError(null), [])

  return { messages, isLoading, error, sendMessage, clearError }
}
