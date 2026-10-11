import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-contact-directory",
  name: "Call to action — Contact route directory",
  category: "cta",
  tags: [
    "list",
    "icons",
    "compact"
  ],
  description: "Three full-width contact rows pair an icon and explanation with a text action. Use it to route several kinds of request without a form.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                 Heading for finding the right contact        │
│ ──────────────────────────────────────────────────────────   │
│ Icon  Questions before starting             [Ask a question] │
│       Explanation                                            │
│ ──────────────────────────────────────────────────────────   │
│ Icon  Account help                         [Contact support] │
│       Explanation                                            │
│ ──────────────────────────────────────────────────────────   │
│ Icon  Conversation requests               [Book a meeting]   │
│       Explanation                                            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The directory starts 48px below a centered heading. Three border-divided rows use 24px vertical spacing and 16px gaps. At 768px each row has a 48px icon column, flexible text column and auto action column, vertically centered.",
    "hierarchy": "Readers scan three 18px route titles before their 14px explanations and linked actions. Keep titles below 6 words, descriptions below 16 and action labels below 3.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "Below 768px each row stacks icon, text and action. The directory stays full width and longer labels wrap inside the available space.",
    "usage": "Use for several contact routes with different purposes. Choose a contact form when one request type dominates. Variations include a documentation route or an urgent support route."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
