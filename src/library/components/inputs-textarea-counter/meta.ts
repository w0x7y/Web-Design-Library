import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-textarea-counter",
  name: "Inputs — Textarea with counter and action bar",
  category: "inputs",
  tags: ["stacked", "form", "compact"],
  description: "A labelled textarea shares a boundary with attach, mention, counter and Post controls. Use for a short optional message composer.",
  preview: { kind: 'element' },
  wireframe: `┌───────────────────────────────────────────────┐
│ Message                            Optional   │
│ ┌─────────────────────────────────────────┐   │
│ │ Write a short message                   │   │
│ │                                         │   │
│ │                                         │   │
│ ├─────────────────────────────────────────┤   │
│ │ [Attach] [Mention]       0 / 280 [Post]   │ │
│ └─────────────────────────────────────────┘   │
│ Hint about what to include.                   │
└───────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) composer expands to 416px (sm:w-[26rem]) at 640px. A 14px label row has Optional on the right and 6px bottom spacing. One neutral-300 border with 6px radius surrounds a 96px textarea and a 44px action bar, divided by a neutral-200 hairline. The bar has two 32px ghost icon buttons, a 12px tabular counter and a 32px primary Post action. A 14px hint sits 6px below.",
    hierarchy: "Read Message, the textarea, then the action bar and hint. Attach and Mention have accessible names. The static 0 / 280 counter and hint are linked through aria-describedby; maxLength is 280. Placeholder up to 6 words, hint up to 6, Post one word.",
    states: "Textarea focus outlines the wrapper by 2px neutral-900 offset 2px via has-[textarea:focus-visible]. The textarea uses focus-visible:outline-hidden with a transparent forced-colors outline in the twin. Icon buttons fill neutral-100 on hover; Post fills neutral-700. Every button has the standard focus outline. Counter updates and posting require host behaviour; textarea editing and its maximum length are native.",
    responsive: "At 640px only the width increases from 288px to 416px. The textarea height and action bar remain fixed; the textarea cannot resize beyond the element frame. The 32px actions and counter fit one row at 288px.",
    usage: "Use for a short composer with utilities and a length limit. Pick inputs-field-anatomy for a single-line message. Variations: replace Mention with formatting, remove Optional for a required note, or add a linked validation message.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
