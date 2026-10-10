import type { ComponentMeta } from '../../types'

export default {
  slug: "features-accordion-media",
  name: "Features — Accordion beside media",
  category: "features",
  tags: ["asymmetric", "list", "media"],
  description: "Four expandable feature descriptions sit beside one shared media placeholder. Use it to keep detailed explanations compact while retaining visual context.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Eyebrow / Heading / Introduction                           │
│                                                            │
│ ┌───────────────────────┐     ┌────────────────────────┐   │
│ │ Main capability    ^  │     │                        │   │
│ │ Body                  │     │                        │   │
│ │ [Explore capability]  │     │         Image          │   │
│ ├───────────────────────┤     │                        │   │
│ │ Workflow detail    v  │     │                        │   │
│ ├───────────────────────┤     └────────────────────────┘   │
│ │ Supporting tool    v  │                                  │
│ ├───────────────────────┤                                  │
│ │ Outcome detail     v  │                                  │
│ └───────────────────────┘                                  │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. A left max-w-2xl introduction precedes the body by 48px. At 1024px a 12-column grid with gap-8 32px places the list in columns 1-5 and the top-aligned 4:3 media in columns 7-12. Four details items have 1px dividers, 20px summary padding, a 20px chevron and 24px text/icon gap. Panels have 20px bottom padding and a link 16px under the body.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the heading and 18px introduction before four 16px semibold feature titles. The first 16px neutral-600 answer and its link are visible on entry. Slots: eyebrow 4 words, heading 8, intro 24, title 6, answer 35, link 3.",
    states: "Native details controls hide the default marker. Every summary shows a 2px neutral-900 focus-visible outline offset 2px. Items share the pattern name, so one stays open where supported, with the first open initially. The chevron rotates 180 degrees with a 150ms transform transition. Links turn from neutral-900 to neutral-600 on hover and show a 2px neutral-900 focus-visible outline offset 2px. The media is static; no disabled or loading states.",
    responsive: "Below 1024px the accordion precedes the image with a 48px gap. At 1024px it changes to the 5/12 and 6/12 columns with one empty grid column between them. The media remains 4:3. Type and padding step at 640px.",
    usage: "Use for detailed capabilities with one stable shared image. Choose features-media-list when all descriptions should remain visible. Variations: start a different item open, remove panel links, or use a video placeholder. The media does not change when a detail opens.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
