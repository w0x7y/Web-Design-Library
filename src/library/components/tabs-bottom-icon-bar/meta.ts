import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-bottom-icon-bar",
  name: "Tabs — Bottom bar with icons",
  category: "tabs",
  tags: ["stacked", "icons", "media", "compact"],
  description: "A framed preview sits above four icon-and-label radio choices in a bottom bar. Use for compact views where a media region should retain visual prominence.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Panel heading                                        │
│ Supporting context                                   │
│ ┌──────────────────────────────────────────────┐     │
│ │                    Image                     │     │
│ └──────────────────────────────────────────────┘     │
│ ────────────────────────────────────────────────     │
│    Icon        Icon        Icon        Icon          │
│ [Overview]  [Activity]   [Library]  [Settings]       │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A rounded-lg white frame with 1px neutral-200 border is 288px (w-72), growing to 320px (sm:w-80) at 640px. Each panel has 16px padding, a 16px heading, 4px to 14px meta and 16px to a 16:9 neutral-100 media placeholder. A 1px top divider separates a four-column bottom bar of 56px labels, each with a 20px icon, 4px gap, 12px label and 2px top indicator.",
    hierarchy: "Read the panel heading and short context, then the large image placeholder, then the bottom choices. Headings use up to 4 words, meta up to 5 and labels one word. Radio controls connect to labelled sections through aria-controls; media placeholders name the screenshot slot.",
    states: "Overview is checked initially and only its section displays. The selected label has neutral-900 medium text and a 2px top indicator; other labels are neutral-500 and hover to neutral-900. Native arrow keys switch views. Radio focus outlines the label by 2px inset 2px so overflow-hidden cannot clip it. There are no disabled choices.",
    responsive: "The frame is 288px below 640px and 320px from 640px. The media remains 16:9 and the four-column bottom bar never wraps. The initial frame is about 299px high on mobile and 317px on desktop, within the element budget.",
    usage: "Use for compact previews with a persistent bottom control bar. Choose tabs-vertical-rail for text-heavy content or tabs-segmented-pills for lists. Variations: swap the image glyph for a video glyph, change the four view labels and icons, or add a short numeric value to the context line.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
