import type { ComponentMeta } from '../../types'

export default {
  slug: "faq-category-sidebar",
  name: "FAQ — Category sidebar",
  category: "faq",
  tags: ["sidebar", "list"],
  description: "A sticky topic navigation sits beside four grouped accordion lists. Use it for a longer FAQ where readers need direct access to a topic.",
  preview: { kind: 'section' },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│ Topics             Getting started                         │
│ [Getting started]  ┌──────────────────────────────────┐    │
│ [Included details] │ Starting question             v  │    │
│ [Your choices]     │ Requirement question          v  │    │
│ [More help]        │ Timing question               v  │    │
│                    └──────────────────────────────────┘    │
│                    Included details                        │
│                    ┌──────────────────────────────────┐    │
│                    │ Scope question                v  │    │
│                    │ Limit question                v  │    │
│                    │ Access question               v  │    │
│                    └──────────────────────────────────┘    │
│                    Your choices                            │
│                    ┌──────────────────────────────────┐    │
│                    │ Change / Save / Cancel        v  │    │
│                    └──────────────────────────────────┘    │
│                    More help                               │
│                    ┌──────────────────────────────────┐    │
│                    │ Guide / Contact / Follow-up   v  │    │
│                    └──────────────────────────────────┘    │
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section uses a 1152px max-w-6xl container, 24px px-6 side padding, and 64px py-16 vertical padding, rising to 96px sm:py-24 at 640px. At 1024px a grid-cols-[1fr_3fr] sidebar/main layout uses gap-16 64px. The sidebar is lg:sticky top-8 self-start, with a 14px Topics label and four wrapping rounded-full bordered anchor links 16px below. The main column has four groups separated by 48px; each has scroll-mt-8 32px, an 18px h3, and three details rows in a top-bordered list 16px below. Summaries use 20px vertical padding and 20px chevrons with 24px gaps.",
    hierarchy: "The section heading is 30px text-3xl semibold with tracking-tight and balanced wrapping, rising to 36px text-4xl at 640px. Read the Topics navigation then the four 18px semibold group titles and twelve 16px semibold questions. Answers are 16px neutral-600 and hidden initially. Slots: topic label 3 words, nav label 4, group title 6, question 9, answer 35.",
    states: "Native details controls hide the default marker. Every summary shows a 2px neutral-900 focus-visible outline offset 2px. Questions are independent and start closed. Chevrons rotate 180 degrees with a 150ms transition. Topic anchors jump to uniquely prefixed group IDs, fill neutral-50 on hover and show the standard focus outline. There is no selected topic, disabled or loading state.",
    responsive: "Below 1024px Topics and its wrapping badge-style links sit above the groups with a 48px gap, without sticky positioning. At 1024px the sidebar is one quarter and the main is three quarters, with 64px gap and 32px sticky offset. Padding rises at 640px; groups retain 32px scroll margin.",
    usage: "Use for a long FAQ with four navigable topics. Choose faq-grouped-topics for just two groups or faq-sidebar-accordion for a short answer list. Variations: add a fifth topic, use audience-based groups, or open the first answer in each group.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
