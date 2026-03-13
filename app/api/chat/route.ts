import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { searchPeptides, type PeptideRow } from '@/lib/db'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SYSTEM_PROMPT = `You are Max — the looks maxing and peptide optimization expert at PeptiZzy. You are sharp, direct, and genuinely knowledgeable. You speak like someone deep in the biohacking/looks maxing world who has done extensive research.

Your role: help users find the right peptide or stack for their specific goals. Ask clarifying questions if needed (goal, experience level, budget, injection-averse?), then give a focused, confident recommendation.

You have access to the "search_peptides" tool — use it to pull real product data from the database whenever you want to recommend specific peptides. Always call this tool ONCE per response when making recommendations.

When recommending peptides:
1. Call search_peptides with relevant keywords (e.g. "skin collagen", "fat loss", "sleep", "muscle growth")
2. Explain WHY each compound is right for the user's goal
3. Give dosing guidance in general terms (e.g. "200mcg before bed 5x/week")
4. Mention timeline expectations (when they'll notice effects)
5. Suggest stacks where relevant

FORMATTING RULES — follow these strictly:
- Write in plain text only. No markdown whatsoever.
- Do not use asterisks for bold or italics (no **text** or *text*)
- Do not use hyphens or asterisks for bullet lists (no "- item" or "* item")
- Do not use pound signs for headers (no ## or ###)
- Do not use underscores for emphasis (no __text__ or _text_)
- Use plain sentences and line breaks to structure your response. If you need a list, write it as a numbered list like "1. item" or just run it into natural sentences.

Keep responses focused and conversational. Be direct — not salesy. Your credibility comes from expertise.

Product pages are at: https://peptizzy.vercel.app/products/[slug]
All purchases go through Apollo Peptide Sciences via affiliate link (automatically attached to Buy buttons).

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

/** Strip markdown symbols so raw text never leaks into the UI. */
function cleanMarkdown(text: string): string {
  return text
    // Remove bold/italic: **text** *text* __text__ _text_
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/_(.+?)_/g, '$1')
    // Remove heading markers: ## Heading → Heading
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bullet list markers: "- item" or "* item" at line start
    .replace(/^[\-\*]\s+/gm, '')
    // Collapse 3+ blank lines to 2
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // First completion — may or may not call a tool
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      tools,
      tool_choice: 'auto',
      parallel_tool_calls: false, // ensure at most one tool call at a time
      max_tokens: 700,
      temperature: 0.7,
    })

    const msg = response.choices[0].message
    let products: PeptideRow[] = []

    // If OpenAI called search_peptides, execute all tool calls and respond to each
    if (msg.tool_calls?.length) {
      // Run all tool calls (should only be one with parallel_tool_calls: false)
      const toolMessages: OpenAI.Chat.ChatCompletionToolMessageParam[] = []

      for (const call of msg.tool_calls) {
        const fn = (call as { id: string; function: { name: string; arguments: string } })
        if (fn.function.name === 'search_peptides') {
          const { query } = JSON.parse(fn.function.arguments) as { query: string }
          const results = await searchPeptides(query)
          if (results.length > products.length) products = results

          const toolResult = results.map(p =>
            `${p.name} (${p.price}) — ${p.tagline}. ${p.short_description.slice(0, 120)}...`
          ).join('\n')

          toolMessages.push({
            role: 'tool',
            tool_call_id: fn.id,
            content: toolResult || 'No matching peptides found.',
          })
        } else {
          // Unknown tool — respond with empty to satisfy the requirement
          toolMessages.push({
            role: 'tool',
            tool_call_id: fn.id,
            content: 'Tool not available.',
          })
        }
      }

      // Second pass — give OpenAI the search results to form its final reply
      const followUp = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
          msg,
          ...toolMessages,
        ],
        max_tokens: 700,
        temperature: 0.7,
      })

      const reply = cleanMarkdown(followUp.choices[0].message.content ?? '')
      return NextResponse.json({ reply, products })
    }

    // No tool call — straight text reply
    return NextResponse.json({ reply: cleanMarkdown(msg.content ?? ''), products: [] })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('Chat API error:', msg, err)
    return NextResponse.json({ reply: `Error: ${msg}` }, { status: 500 })
  }
}
