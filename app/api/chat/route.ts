import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { searchPeptides, getFeaturedPeptides, type PeptideRow } from '@/lib/db'
import { products as allProducts } from '@/lib/products'
import { stacks } from '@/lib/stacks'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const SYSTEM_PROMPT = `You are Max — the looks maxing and peptide optimization expert at PeptidesMuscle. You are sharp, direct, and genuinely knowledgeable. You speak like someone deep in the biohacking/looks maxing world who has done extensive research.

Your role: help users find the right peptide or stack for their specific goals. Ask clarifying questions if needed (goal, experience level, budget, injection-averse?), then give a focused, confident recommendation.

TOOL USAGE — this is critical:
You have 4 tools. Use the right one for each situation:

1. search_peptides — Use for goal-based searches. Call this when the user mentions any health, performance, or body goal.
   Targeted queries: "weight loss fat loss GLP-1" / "skin collagen looks maxing anti-aging" / "muscle growth anabolic body composition" / "recovery healing tendon repair" / "growth hormone sleep muscle" / "anti-aging longevity telomere" / "energy NAD cellular"

2. get_peptide_details — Use when the user asks about a SPECIFIC peptide by name (dosing, protocol, how to use it, benefits, what it pairs with). Examples: "how do I dose BPC-157?", "what does GHK-Cu do?", "how long to run TB-500?"

3. get_protocol_stacks — Use when the user asks about stacks, protocols, or running peptides together. Examples: "what stack for fat loss?", "what's a good beginner stack?", "what should I stack with BPC-157?"

4. get_featured_peptides — Use when the user asks where to start, what's popular, or wants a general overview. Examples: "where do I start?", "what's your best seller?", "I'm new to peptides"

When recommending peptides:
1. Call the appropriate tool first
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
All purchases go through our supplier via the buy link on every product card.

Do NOT give medical advice or diagnose conditions. You're an optimization expert, not a doctor.`

const tools: OpenAI.Chat.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'search_peptides',
      description: 'Search the PeptidesMuscle product database for peptides matching a goal or keyword. Use for goal-based queries (fat loss, muscle, skin, recovery, etc.). Returns up to 4 matching products.',
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
  {
    type: 'function',
    function: {
      name: 'get_peptide_details',
      description: 'Get detailed protocol, dosing, benefits, and synergy info for a specific peptide by name or slug. Use when the user asks about a specific peptide — how to dose it, how it works, what it pairs with, cycle length, etc.',
      parameters: {
        type: 'object',
        properties: {
          slug: {
            type: 'string',
            description: 'The peptide slug or name. Examples: "bpc-157", "ghk-cu", "tb-500", "cjc-1295", "ipamorelin", "epithalon", "selank"',
          },
        },
        required: ['slug'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_protocol_stacks',
      description: 'Get pre-built peptide stacking protocols filtered by goal or difficulty. Use when the user asks about stacks, protocols, or what to run together for a specific goal.',
      parameters: {
        type: 'object',
        properties: {
          goal: {
            type: 'string',
            description: 'Optional goal or keyword to filter stacks. Examples: "fat loss", "looks max", "recovery", "anti-aging", "muscle", "beginner", "wolverine"',
          },
        },
        required: [],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'get_featured_peptides',
      description: 'Get the most popular and featured peptides. Use when the user asks where to start, what is popular, what beginners use, or wants a general product overview.',
      parameters: {
        type: 'object',
        properties: {},
        required: [],
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
          const rows = results.length > 0 ? results : await getFeaturedPeptides()
          for (const r of rows) {
            if (!products.some(p => p.slug === r.slug)) products.push(r)
          }

          const toolResult = rows.map(p =>
            `${p.name} (${p.price}) — ${p.tagline}. ${p.short_description.slice(0, 150)}`
          ).join('\n')

          toolMessages.push({
            role: 'tool',
            tool_call_id: fn.id,
            content: toolResult || 'No matching peptides found in database.',
          })
        } else if (fn.function.name === 'get_peptide_details') {
          const { slug } = JSON.parse(fn.function.arguments) as { slug: string }
          const slugNorm = slug.toLowerCase().replace(/\s+/g, '-')
          const product = allProducts.find(p =>
            p.slug === slugNorm ||
            p.name.toLowerCase() === slug.toLowerCase() ||
            p.slug.includes(slugNorm) ||
            slugNorm.includes(p.slug)
          )

          if (product) {
            // Surface as a product card
            const dbRows = await searchPeptides(product.name)
            const match = dbRows.find(r => r.slug === product.slug)
            if (match && !products.some(p => p.slug === match.slug)) products.push(match)

            toolMessages.push({
              role: 'tool',
              tool_call_id: fn.id,
              content: `${product.name} (${product.price})
Tagline: ${product.tagline}
Protocol: ${product.protocol}
Benefits: ${product.benefits.join(' | ')}
Pairs well with: ${product.synergies.join(', ')}
Page: /products/${product.slug}`,
            })
          } else {
            toolMessages.push({
              role: 'tool',
              tool_call_id: fn.id,
              content: `No detailed info found for "${slug}". Try search_peptides instead.`,
            })
          }
        } else if (fn.function.name === 'get_protocol_stacks') {
          const args = JSON.parse(fn.function.arguments) as { goal?: string }
          const goal = args.goal ?? ''
          let matched = stacks
          if (goal) {
            const kw = goal.toLowerCase()
            matched = stacks.filter(s =>
              s.goal.toLowerCase().includes(kw) ||
              s.name.toLowerCase().includes(kw) ||
              s.tagline.toLowerCase().includes(kw) ||
              s.id.includes(kw) ||
              kw.split(/\s+/).some(w => s.goal.toLowerCase().includes(w) || s.name.toLowerCase().includes(w))
            )
            if (matched.length === 0) matched = stacks.slice(0, 3)
          }

          const content = matched.slice(0, 4).map(s =>
            `${s.name} (${s.difficulty}, ${s.duration}) — ${s.tagline}
Goal: ${s.goal}
Compounds: ${s.compounds.map(c => c.slug).join(', ')}
Outcomes: ${s.outcomes.join(' | ')}
Page: /stacks/${s.id}`
          ).join('\n\n')

          toolMessages.push({ role: 'tool', tool_call_id: fn.id, content })
        } else if (fn.function.name === 'get_featured_peptides') {
          const featured = await getFeaturedPeptides()
          for (const r of featured) {
            if (!products.some(p => p.slug === r.slug)) products.push(r)
          }

          toolMessages.push({
            role: 'tool',
            tool_call_id: fn.id,
            content: featured.map(p => `${p.name} (${p.price}) — ${p.tagline}`).join('\n'),
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
