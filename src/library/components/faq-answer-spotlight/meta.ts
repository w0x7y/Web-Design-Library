import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-answer-spotlight",
  name: "FAQ — Answer spotlight with contents",
  category: "faq",
  tags: [
    "sidebar",
    "spacious"
  ],
  description: "A compact contents panel accompanies one expanded answer with requirements and a next step. Use it for a single complex question.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Heading for the most important question                      │
│ ┌───────────────────┐  ┌──────────────────────────────────┐  │
│ │ In this answer    │  │ How does the process work?       │  │
│ │ [Overview]        │  │ Overview paragraph               │  │
│ │ [What you need]   │  │ What you need / Two requirements │  │
│ │ [Next step]       │  │ Next step paragraph              │  │
│ └───────────────────┘  │ [Get more help]                  │  │
│                        └──────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A 256px contents rail and flexible answer form an lg:grid with 32px gaps 48px below the heading. The answer is a neutral-50 p-6 panel, p-8 from 640px. Subheads have 32px top separation and anchor scroll margins.",
    "hierarchy": "The heading frames the main question; contents links lead into an overview, two requirements and a next step. Limit the question to 10 words, overview to 50, each requirement to 10 and next step to 25.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. The answer is always expanded; contents links navigate to its subsections.",
    "responsive": "Below 1024px the contents panel stacks above the answer. At 640px answer padding increases to 32px.",
    "usage": "Use for one question that needs a structured explanation. Choose an accordion when several short questions share equal priority. Variations include a short checklist or a linked explanation of exceptions."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
