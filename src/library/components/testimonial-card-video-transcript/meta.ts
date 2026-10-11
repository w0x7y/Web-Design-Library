import type { ComponentMeta } from '../../types'

export default {
  slug: "testimonial-card-video-transcript",
  name: "Testimonial cards — Video with transcript excerpt",
  category: "testimonial-card",
  tags: [
    "stacked",
    "media",
    "compact"
  ],
  description: "A compact video region leads a quote, byline and expandable transcript excerpt. Use it when a short recorded statement benefits from a readable alternative.",
  preview: {
    "kind": "element"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────┐  │
│ │                         Video                           │  │
│ └─────────────────────────────────────────────────────────┘  │
│ Short customer quote                                         │
│ AR  Alex Rivera / Role                                       │
│ [Transcript excerpt v]                                       │
│ Brief context when opened                                    │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The bordered white root is 288px w-72 wide with an 8px rounded-lg radius. The p-4 figure becomes 320px sm:w-80 at 640px. Its video region is 96px h-24 tall. A 14px quote and 40px-avatar caption follow with 16px margins. A divided transcript summary starts 16px later with 12px top padding.",
    "hierarchy": "Read the video, short quote and author before opening the excerpt. Keep quote below 10 words, author role below 3 and transcript below 10. The video placeholder has a descriptive label.",
    "states": "The native transcript details opens in normal flow and rotates its chevron. Its summary has a 2px keyboard outline offset 2px; other regions remain static.",
    "responsive": "The same vertical structure remains at all widths. Short content keeps both closed and open states within the 384px frame allowance.",
    "usage": "Use for one brief recorded endorsement. Choose a portrait-side card for a still author image. Variations include a duration label or a source link in the byline."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
