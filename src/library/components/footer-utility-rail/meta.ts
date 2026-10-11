import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-utility-rail",
  name: "Footer — Utility rail beside directory",
  category: "footer",
  tags: [
    "sidebar",
    "form",
    "grid"
  ],
  description: "A narrow utility panel contains identity, service status and language selection beside three directory columns. Use it when site-wide utilities belong in the footer.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌───────────────────┐  Product     Resources     Company     │
│ │ Logo              │  [Overview] [Docs]         [About]     │
│ │ Site purpose      │  [Pricing]  [Guides]       [Careers]   │
│ │ [Service status]  │  [Updates]  [Community]    [Contact]   │
│ │ Language          │                                        │
│ │ [English       v] │                                        │
│ └───────────────────┘                                        │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                                   [Privacy] [Terms]│
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A 240px utility rail and flexible directory form a lg:grid with 40px gaps. The rail is a p-6 neutral-50 panel with status and a labelled 40px select. Directory groups use three sm:grid-cols-3 columns and 32px gaps. The legal bar follows after 40px.",
    "hierarchy": "Identity and three 16px directory headings orient the footer. Use purpose copy below 12 words, status below 4 and links below 2. The language control has a visible label.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. The native select opens its option list and shows the chosen language label. The status link includes both a border-backed dot and text. The select has a visible 2px focus outline.",
    "responsive": "Below 1024px utilities sit above the directory. Directory columns stack below 640px. Legal items wrap into a new row at narrow widths.",
    "usage": "Use when status and language choices should be available at the page end. Choose fixed columns for a purely navigational footer. Variations include a region selector or an availability label."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
