import { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import useChat from '@/hooks/useChat'

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1"
        style={{ backgroundColor: 'var(--color-gold-600)' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      </div>
      <div
        className="flex items-center gap-1 px-4 py-3 rounded-2xl rounded-tl-sm"
        style={{
          backgroundColor: 'var(--color-beige-50)',
          border: '1px solid var(--color-beige-200)',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full inline-block"
            style={{
              backgroundColor: 'var(--color-gold-500)',
              animation: `chatbotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function ChatWindow({ onClose }) {
  const { messages, isLoading, error, sendMessage, clearError } = useChat()
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div
      className="flex flex-col rounded-2xl shadow-2xl overflow-hidden"
      style={{
        width: '360px',
        height: '520px',
        backgroundColor: 'var(--color-grey-50)',
        border: '1px solid var(--color-beige-200)',
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{ backgroundColor: 'var(--color-grey-900)' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: 'var(--color-gold-600)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          </div>
          <div>
            <p
              className="text-sm font-semibold leading-tight"
              style={{ color: 'white', fontFamily: 'var(--font-sans)' }}
            >
              Cabello | Clínica Dental
            </p>
            <p className="text-xs" style={{ color: 'var(--color-gold-400)', fontFamily: 'var(--font-sans)' }}>
              Asistente virtual
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          aria-label="Cerrar chat"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        {isLoading && <TypingIndicator />}
        {error && (
          <div
            className="text-xs px-3 py-2 rounded-lg text-center mx-2 cursor-pointer"
            style={{
              backgroundColor: '#fef2f2',
              color: '#991b1b',
              fontFamily: 'var(--font-sans)',
            }}
            onClick={clearError}
            role="alert"
          >
            {error} (toca para cerrar)
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0">
        <ChatInput onSend={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  )
}
