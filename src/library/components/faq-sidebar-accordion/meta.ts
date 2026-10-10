import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-sidebar-accordion",
  name: "FAQ — Accordion beside intro",
  category: "faq",
  tags: ["asymmetric", "list"],
  description: "An introduction and contact card sit beside six expandable questions. Use it to keep help information visible beside a compact answer list.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Heading for questions       ┌─────────────────────────┐    │
│ Short introduction          │ Main question        x  │    │
│                             │ Answer                  │    │
│ ┌───────────────────────┐   ├─────────────────────────┤    │
│ │ Contact heading       │   │ Getting started      +  │    │
│ │ Hours                 │   ├─────────────────────────┤    │
│ │ [Contact support]     │   │ Included details     +  │    │
│ └───────────────────────┘   ├─────────────────────────┤    │
│                             │ Changing a choice    +  │    │
│                             ├─────────────────────────┤    │
│                             │ Access question      +  │    │
│                             ├─────────────────────────┤    │
│                             │ More help            +  │    │
│                             └─────────────────────────┘    │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. At 1024px a 12-column grid with 32px gap-8 places the intro in columns 1-4 and the question list in columns 6-12. A neutral-50 rounded-lg contact card has a 1px border and 24px padding, 32px below the 18px lede. Six details rows have top/list and bottom/item hairlines, 24px summary padding, a 20px plus icon and 24px text/icon gap; answers have 24px bottom padding.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the heading and lede, contact-card title and 14px hours, then six 16px semibold questions. The first 16px neutral-600 answer is visible. Slots: heading 8 words, lede 24, card title 6, hours 6, link 3, question 10, answer 40.",
    states: "Native details controls hide the default marker. Every summary shows a 2px neutral-900 focus-visible outline offset 2px. All questions share one name and the first is open. The plus rotates 45 degrees when open with a 150ms transition. Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. The contact card is static; no disabled or loading states.",
    responsive: "Below 1024px intro and contact card precede the question list by 48px. At 1024px the 4/12 and 7/12 columns leave one spacer column. Heading size and section padding step at 640px; question text wraps without shrinking icons.",
    usage: "Use when a contact option belongs next to common answers. Choose faq-accordion for a compact centred section or faq-category-sidebar for many topics. Variations: replace hours with response time, start a different question open, or use a secondary contact action.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
