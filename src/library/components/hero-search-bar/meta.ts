import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-search-bar",
  name: "Hero — Centred search bar",
  category: "hero",
  tags: ["centered", "form", "row"],
  description: "A centred heading above a two-field search card and popular-query links. Use it when searching is the primary entry point.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                           Eyebrow                            │
│               Headline for the search outcome                │
│                       Supporting lede                        │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │Keyword                Location                           │ │
│ │[Search term        ]  [Location           ]  [Search]    │ │
│ └──────────────────────────────────────────────────────────┘ │
│     Popular: [Category] [Topic] [Format] [Type] [Scope]      │
│                      Result count line                       │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. A centered max-w-3xl 768px header precedes a max-w-4xl 896px bordered search card by 40px. The rounded-lg card has 12px padding and shadow-sm. At 1024px its form uses 1fr 1fr auto columns, aligned to the bottom, with 12px gaps. A 24px-lower popular-query row wraps centrally; a count follows by 16px.",
    hierarchy: "The display headline is 36px, 48px at 640px and 60px at 1024px, semibold with tracking-tight and balanced wrapping. Read the h1, 18px lede, labelled Keyword and Location inputs, Search button, 12px popular badges and 14px count. Slots: eyebrow 5 words, headline 10, lede 25, popular labels 1 word each. Both inputs describe their hints using one shared search-help line.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. Inputs are 40px high with neutral-300 borders. Popular badge links fill neutral-50 on hover. The GET form is native; no results or selected states are implemented.",
    responsive: "Below 640px fields and button form one column. From 640px the fields share two columns with the full-width button below. From 1024px the button occupies an auto-sized third column. The popular row wraps at every width; headline and section padding follow the standard display breakpoints.",
    usage: "Use for a directory or searchable catalog opening. Choose hero-centered-form for a single email task. Variations: change location to a format field, show fewer popular queries, or replace the result count with search guidance.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
