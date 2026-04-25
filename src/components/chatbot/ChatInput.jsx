import { useState } from 'react'

export default function ChatInput({ onSend, isLoading }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim() || isLoading) return
    onSend(value)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 border-t"
      style={{ borderColor: 'var(--color-beige-200)' }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe tu mensaje..."
        disabled={isLoading}
        maxLength={500}
        className="flex-1 text-sm px-3 py-2 rounded-full outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: 'var(--color-grey-100)',
          color: 'var(--color-grey-800)',
          fontFamily: 'var(--font-sans)',
          border: '1px solid var(--color-beige-300)',
        }}
        aria-label="Mensaje al asistente"
      />
      <button
        type="submit"
        disabled={!value.trim() || isLoading}
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ backgroundColor: 'var(--color-gold-600)' }}
        aria-label="Enviar mensaje"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </form>
  )
}
