import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-document-register",
  name: "Footer — Document register",
  category: "footer",
  tags: [
    "table",
    "compact"
  ],
  description: "A compact policy table includes document links, formats and update dates above copyright. Use it when published documents are the primary footer destinations.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo                                                         │
│ Documents and policies                  Publication note     │
│ Document                         Format          Updated     │
│ ──────────────────────────────────────────────────────────   │
│ [Terms]                          HTML            Oct 10      │
│ [Privacy policy]                 HTML            Sep 22      │
│ [Accessibility statement]        PDF             Aug 14      │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                      [Contact about a document]    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. An identity and heading share a desktop row with a short publication note. A table starts 32px below with 50%/25%/25% fixed columns. Header padding is 12px and body rows use 16px vertical padding with hairline dividers. Copyright and contact follow 32px later.",
    "hierarchy": "Document names are the main 14px links, with quieter format and update metadata. Keep publication note below 12 words, document labels below 3 and dates in a short month/day format.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "The header stacks below 640px. The table retains its three fixed columns and wraps document names inside the 50% column; the final contact row wraps naturally.",
    "usage": "Use for information-led sites where policies are key footer content. Choose sitemap columns for a wider range of destinations. Variations include a language column or a downloadable report row."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
