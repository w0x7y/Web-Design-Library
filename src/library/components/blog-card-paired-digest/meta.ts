import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-paired-digest",
  name: "Blog cards — Paired article digest",
  category: "blog-card",
  tags: [
    "split",
    "compact"
  ],
  description: "Two equally weighted article summaries share a digest header and form desktop columns. Use it for a small curated reading pair.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Two articles to read next                            Digest  │
│ ────────────────────────   ───────────────────────────────   │
│ Category label             Category label                    │
│ [First article title]      [Second article title]            │
│ Short question note        Short question note               │
│ 4 min read                 6 min read                        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-5 article has a shared header and a two-part grid 20px below with 20px gaps. Each part has a top rule, 16px top padding, category, title, one-line note and time. At 640px the root grows to 384px and the grid becomes two columns.",
    "hierarchy": "The shared heading frames two equal article links. Keep header below 7 words, titles below 4, notes below 7 and categories below 2.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "The articles stack on mobile and become two columns from 640px. Compact summaries keep the mobile pair below 384px.",
    "usage": "Use for a deliberate pair of related articles. Choose a featured-with-list section for a broader editorial selection. Variations include two viewpoints or beginner and advanced reading."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
