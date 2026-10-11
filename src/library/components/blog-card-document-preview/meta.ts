import type { ComponentMeta } from '../../types'

export default {
  slug: "blog-card-document-preview",
  name: "Blog cards — Document preview and report",
  category: "blog-card",
  tags: [
    "sidebar",
    "media",
    "compact"
  ],
  description: "A narrow document-page preview accompanies report metadata, title and excerpt above a shared footer. Use it for long-form downloadable editorial content.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────┐ Document / 12 pages                              │
│ │         │ [Report title naming its central topic]          │
│ │  Image  │ Short explanation of document value              │
│ │         │                                                  │
│ └─────────┘                                                  │
│ ──────────────────────────────────────────────────────────   │
│ Alex Rivera / Oct 10                         [Read report]   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. A 72px preview column and flexible text column use 16px gaps and 20px p-5 padding. The root grows to 384px at 640px. The bordered preview has 8px inset and a 128px h-32 media region. A shared metadata/action footer spans both columns below a top rule.",
    "hierarchy": "The document format and title lead before the short excerpt and author. Keep title below 7 words, excerpt below 9, metadata below 4 and author below 3.",
    "states": "Links underline on hover and show a 2px neutral-900 keyboard outline offset by 2px. The document placeholder is static and has a descriptive accessible name.",
    "responsive": "The preview and title remain side by side on mobile; the shared footer wraps as needed. The root expands at 640px.",
    "usage": "Use for reports or document-based articles. Choose a media-left card for a photo-led story. Variations include a worksheet preview or a page-count label for a long guide."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
