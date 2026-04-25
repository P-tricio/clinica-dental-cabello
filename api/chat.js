import OpenAI from 'openai'
import { buildSystemPrompt, tools } from '../src/data/chatbot.js'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const MAX_MSG_LENGTH = 500
const MAX_MESSAGES = 20

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body ?? {}

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid request' })
  }

  const sanitized = messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .slice(-MAX_MESSAGES)
    .map((m) => ({
      role: m.role,
      content: typeof m.content === 'string' ? m.content.slice(0, MAX_MSG_LENGTH) : '',
    }))

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: buildSystemPrompt() }, ...sanitized],
      tools,
      tool_choice: 'auto',
      max_tokens: 500,
      temperature: 0.3,
    })

    const message = response.choices[0].message

    if (message.tool_calls) {
      for (const tc of message.tool_calls) {
        try {
          JSON.parse(tc.function.arguments)
        } catch {
          return res.status(500).json({ error: 'Invalid tool call arguments' })
        }
      }
    }

    return res.status(200).json({ message })
  } catch (error) {
    console.error('OpenAI error:', error)
    return res.status(500).json({ error: 'Error processing request' })
  }
}
