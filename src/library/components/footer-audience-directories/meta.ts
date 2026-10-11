import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-audience-directories",
  name: "Footer — Two audience directories",
  category: "footer",
  tags: [
    "split",
    "list",
    "spacious"
  ],
  description: "Two equally sized directory panels lead into a shared identity and legal bar. Use it when different audiences need separate final navigation.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────┐  ┌─────────────────────────┐     │
│ │ For individual readers  │  │ For teams               │     │
│ │ Audience introduction   │  │ Audience introduction   │     │
│ │ [Getting started]       │  │ [Team overview]         │     │
│ │ [Guides]                │  │ [Access management]     │     │
│ │ [Support]               │  │ [Contact]               │     │
│ └─────────────────────────┘  └─────────────────────────┘     │
│ ──────────────────────────────────────────────────────────   │
│ Logo / Copyright                   [Privacy] [Terms] [Access]│
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Two equal md:grid-cols-2 directory panels have 24px gaps and 24px padding, 32px from 640px. Each has an 18px audience title, paragraph and a three-link list. Identity and legal destinations share a divided row 40px below.",
    "hierarchy": "Readers choose an audience before scanning its links. Keep audience names below 4 words, introductions below 12 and destinations below 3. Identity and copyright close the footer.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "Below 768px directories stack. The legal bar becomes a horizontal flex row at 640px; below that identity and legal links stack.",
    "usage": "Use for two clear audience groups with separate destinations. Choose a conventional sitemap for one common directory. Variations include new and returning readers or members and administrators."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
