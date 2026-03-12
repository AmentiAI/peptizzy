import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { getAllPeptides, searchPeptides, type PeptideRow } from '@/lib/db'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SYSTEM_PROMPT = `You are Max — the looks maxing and peptide optimization expert at PeptiZzy. You are sharp, direct, and genuinely knowledgeable. You speak like someone deep in the biohacking/looks maxing world who has done extensive research.

Your role: help users find the right peptide or stack for their specific goals. Ask clarifying questions if needed (goal, experience level, budget, injection-averse?), then give a focused, confident recommendation.

You have access to the "search_peptides" tool — use it to pull real product data from the database whenever you want to recommend specific peptides. Always call this tool when making recommendations so you can attach product cards.

When recommending peptides:
1. Call search_peptides with relevant keywords (e.g. "skin collagen", "fat loss", "sleep", "muscle growth")
2. Explain WHY each compound is right for the user's goal
3. Give dosing guidance in general terms (e.g. "200mcg before bed 5x/week")
4. Mention timeline expectations (when they'll notice effects)
5. Suggest stacks where relevant

Keep responses focused and scannable. Be direct — not salesy. Your credibility comes from expertise.

Product pages are at: https://peptizzy.vercel.app/products/[slug]
All purchases go through: https://pantheonpeptides.com/partner/AmentiAI/

Do NOT give medical advice or diagnose conditions. You're an optimization expert, not a doctor.`

const tools: OpenAI.Chat.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'search_peptides',
      description: 'Search the PeptiZzy product database for peptides matching a goal or keyword. Returns up to 4 matching products with images and links.',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Search term, e.g. "skin collagen anti-aging", "fat loss visceral", "sleep deep recovery", "muscle growth GH"',
          },
        },
        required: ['query'],
      },
    },
  },
]

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // First completion — may or may not call a tool
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      tools,
      tool_choice: 'auto',
      max_tokens: 700,
      temperature: 0.7,
    })

    const msg = response.choices[0].message
    let products: PeptideRow[] = []

    // If OpenAI called search_peptides, execute it
    if (msg.tool_calls?.length) {
      const call = msg.tool_calls[0]
      const fn = (call as { function: { name: string; arguments: string } }).function
      if (fn.name === 'search_peptides') {
        const { query } = JSON.parse(fn.arguments) as { query: string }
        products = await searchPeptides(query)

        // Second pass — give OpenAI the search results to form its final reply
        const toolResult = products.map(p =>
          `${p.name} (${p.price}) — ${p.tagline}. ${p.short_description.slice(0, 120)}...`
        ).join('\n')

        const followUp = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
            msg,
            {
              role: 'tool',
              tool_call_id: (call as { id: string }).id,
              content: toolResult || 'No matching peptides found.',
            },
          ],
          max_tokens: 700,
          temperature: 0.7,
        })

        const reply = followUp.choices[0].message.content ?? ''
        return NextResponse.json({ reply, products })
      }
    }

    // No tool call — straight text reply
    return NextResponse.json({ reply: msg.content ?? '', products: [] })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json({ reply: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
