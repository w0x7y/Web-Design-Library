import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-media-accordion",
  name: "FAQ — Accordion beside image",
  category: "faq",
  tags: ["asymmetric", "media", "list"],
  description: "A tall image and caption sit beside an introduction and four expandable questions. Use it when a contextual visual supports the answers.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ ┌───────────────────────┐    Heading for questions         │
│ │                       │    Short introduction            │
│ │                       │                                  │
│ │                       │    ┌────────────────────────┐    │
│ │         Image         │    │ Main question       ^  │    │
│ │                       │    │ Answer                 │    │
│ │                       │    ├────────────────────────┤    │
│ │                       │    │ Starting question   v  │    │
│ │                       │    ├────────────────────────┤    │
│ └───────────────────────┘    │ Included details    v  │    │
│ Image caption               ├────────────────────────┤     │
│                             │ More help           v  │     │
│                             └────────────────────────┘     │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. At 1024px a grid-cols-[5fr_7fr] layout uses gap-16 64px and top alignment. A figure holds a 3:4 rounded-lg media placeholder and 14px caption 12px below. The other column holds the heading, lede 16px below and a four-item top-bordered accordion after 32px. Summaries have 20px vertical padding, 20px chevrons and 24px gaps; answers have 20px bottom padding.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. The image and caption introduce context; read the 18px lede and four 16px semibold questions next. The first 16px neutral-600 answer is visible. Slots: caption 12 words, heading 8, lede 24, question 10, answer 40.",
    states: "Native details controls hide the default marker. Every summary shows a 2px neutral-900 focus-visible outline offset 2px. Questions share one name, with the first open initially. Chevrons rotate 180 degrees with a 150ms transition. The image and caption are static. There are no selected, disabled or loading states.",
    responsive: "Below 1024px the figure appears first with a 4:3 placeholder, then the intro and accordion after 48px. At 1024px the 5:7 columns and 64px gap apply, and the image becomes 3:4. Heading size and section padding step at 640px.",
    usage: "Use when one visual provides useful context for common questions. Choose faq-sidebar-accordion when contact details are more useful than an image. Variations: use a video placeholder, move the image to the right, or remove the caption.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
