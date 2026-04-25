export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1"
          style={{ backgroundColor: 'var(--color-gold-600)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
      )}
      <div
        className={`max-w-[78%] px-3 py-2 text-sm leading-relaxed ${
          isUser ? 'rounded-2xl rounded-tr-sm' : 'rounded-2xl rounded-tl-sm'
        }`}
        style={
          isUser
            ? {
                backgroundColor: 'var(--color-gold-600)',
                color: 'white',
                fontFamily: 'var(--font-sans)',
              }
            : {
                backgroundColor: 'var(--color-beige-50)',
                color: 'var(--color-grey-800)',
                border: '1px solid var(--color-beige-200)',
                fontFamily: 'var(--font-sans)',
              }
        }
      >
        {message.content}
      </div>
    </div>
  )
}
