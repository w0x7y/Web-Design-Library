import type { ComponentMeta } from '../../types'

export default {
  slug: "cta-resource-download",
  name: "Call to action — Resource download columns",
  category: "cta",
  tags: [
    "asymmetric",
    "media",
    "list"
  ],
  description: "A document cover, topic checklist and download panel form three desktop columns. Use it when the content and file details help readers decide to download.",
  preview: {
    "kind": "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌───────────┐  Resource type             ┌─────────────────┐ │
│ │           │  Heading for resource      │ Free download   │ │
│ │   Image   │  + First topic             │ PDF / 24 pages  │ │
│ │           │  + Second topic            │ [Download]      │ │
│ │           │  + Third topic             │ Access note     │ │
│ └───────────┘                            └─────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    "layout": "The white section uses a 1152px max-w-6xl container, 24px px-6 sides and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. The lg:grid-cols-[192px_1fr_256px] grid uses 32px gap-8 and centered alignment. A 3:4 cover leads, the middle holds a heading and checklist, and a p-6 alternate-surface download panel closes the row.",
    "hierarchy": "The resource heading and cover establish the offer before topics and file metadata. Keep heading below 8 words, topics below 8 each, file details below 6 and access note below 10.",
    "states": "The 44px filled action changes from neutral-900 to neutral-700 on hover; outlined actions fill neutral-50. All controls show a 2px neutral-900 keyboard outline offset by 2px. ",
    "responsive": "Below 1024px columns stack as cover, description and download panel. The cover retains 3:4 proportions and the action fills its panel width.",
    "usage": "Use for a downloadable guide or document. Choose an email signup when access requires a subscription. Variations include a worksheet cover or a zipped resource bundle."
  },
  addedAt: "2026-10-11",
} satisfies ComponentMeta
