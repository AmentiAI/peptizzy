import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { searchPeptides, getFeaturedPeptides, type PeptideRow } from '@/lib/db'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SYSTEM_PROMPT = `You are Max — the looks maxing and peptide optimization expert at PeptidesMuscle. You are sharp, direct, and genuinely knowledgeable. You speak like someone deep in the biohacking/looks maxing world who has done extensive research.

Your role: help users find the right peptide or stack for their specific goals. Ask clarifying questions if needed (goal, experience level, budget, injection-averse?), then give a focused, confident recommendation.

TOOL USAGE — this is critical:
You MUST call search_peptides in every single response where the user is asking about goals, products, peptides, stacks, fat loss, muscle, skin, recovery, aging, energy, or anything health/performance related. Do not skip the tool call. Even for general questions like "what should I use?" or "where do I start?" — call the tool.

Use specific, targeted search queries:
- For fat loss / weight loss → search "weight loss fat loss GLP-1"
- For skin / looks / appearance → search "skin collagen looks maxing anti-aging"
- For muscle / body composition → search "muscle growth anabolic body composition"
- For recovery / injury → search "recovery healing tendon repair"
- For sleep / GH → search "growth hormone sleep muscle"
- For anti-aging / longevity → search "anti-aging longevity telomere"
- For energy / cognition → search "energy NAD cellular"
- For beginners → search "featured recovery healing"

When recommending peptides:
1. Call search_peptides first with relevant keywords
2. Tell the user what you found and why each one fits their goal
3. Give dosing guidance in plain terms
4. Mention when they'll start noticing effects
5. Suggest stacks where relevant

FORMATTING RULES — follow these strictly:
- Write in plain text only. No markdown whatsoever.
- Do not use asterisks for bold or italics (no **text** or *text*)
- Do not use hyphens or asterisks for bullet lists (no "- item" or "* item")
- Do not use pound signs for headers (no ## or ###)
- Do not use underscores for emphasis
- Use plain sentences and line breaks. For lists use "1. 2. 3." or natural prose.

Keep responses focused and conversational. Be direct, not salesy. Credibility comes from expertise.

Product pages are at: /products/[slug]
All purchases go through Apollo Peptide Sciences via affiliate link on every product card.

Do NOT give medical advice or diagnose conditions. You're an optimization expert, not a doctor.`

const tools: OpenAI.Chat.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'search_peptides',
      description: 'Search the PeptidesMuscle product database for peptides matching a goal or keyword. Always call this when the user mentions any health, performance, appearance, or body goal. Returns up to 4 matching products.',
      parameters: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Search keywords matching the user goal. Examples: "fat loss weight loss", "skin collagen anti-aging", "muscle growth anabolic", "recovery healing tendon", "sleep growth hormone", "longevity anti-aging telomere"',
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
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/_(.+?)_/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^[\-\*]\s+/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // First completion — should almost always call the tool
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      tools,
      tool_choice: 'auto',
      parallel_tool_calls: false,
      max_tokens: 700,
      temperature: 0.7,
    })

    const msg = response.choices[0].message
    let products: PeptideRow[] = []

    if (msg.tool_calls?.length) {
      const toolMessages: OpenAI.Chat.ChatCompletionToolMessageParam[] = []

      for (const call of msg.tool_calls) {
        const fn = call as { id: string; function: { name: string; arguments: string } }
        if (fn.function.name === 'search_peptides') {
          const { query } = JSON.parse(fn.function.arguments) as { query: string }
          const results = await searchPeptides(query)

          // If search returned nothing, fall back to featured products
          products = results.length > 0 ? results : await getFeaturedPeptides()

          const toolResult = products.map(p =>
            `${p.name} (${p.price}) — ${p.tagline}. ${p.short_description.slice(0, 150)}`
          ).join('\n')

          toolMessages.push({
            role: 'tool',
            tool_call_id: fn.id,
            content: toolResult || 'No matching peptides found in database.',
          })
        } else {
          toolMessages.push({
            role: 'tool',
            tool_call_id: fn.id,
            content: 'Tool not available.',
          })
        }
      }

      // Second pass with search results
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

    // No tool call — still try to show featured products for any goal-related message
    const lastUserMsg = [...messages].reverse().find((m: { role: string }) => m.role === 'user')
    const isGoalRelated = lastUserMsg && /goal|peptide|fat|muscle|skin|recover|age|energy|sleep|look|weight|heal|collagen|start|help|best|what|which|recommend/i.test(lastUserMsg.content)
    if (isGoalRelated) {
      products = await getFeaturedPeptides()
    }

    return NextResponse.json({ reply: cleanMarkdown(msg.content ?? ''), products })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('Chat API error:', msg, err)
    return NextResponse.json({ reply: 'Something went wrong — please try again.' }, { status: 500 })
  }
}
