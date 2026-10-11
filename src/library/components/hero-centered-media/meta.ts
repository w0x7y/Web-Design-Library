import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-centered-media",
  name: "Hero — Centred with media below",
  category: "hero",
  tags: ["centered", "stacked", "media"],
  description: "A centred introduction and action pair above a wide screenshot and a logo row. Use it when a product overview and social proof should support the opening message.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                        [Eyebrow link]                        │
│                Headline for the main outcome                 │
│                       Supporting lede                        │
│                 [Primary action] [Secondary]                 │
│                                                              │
│ ┌──────────────────────────────────────────────────────────┐ │
│ │                          Image                           │ │
│ └──────────────────────────────────────────────────────────┘ │
│                                                              │
│                    Supporting meta label                     │
│             Logo    Logo    Logo    Logo    Logo             │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 1152px max-w-6xl container has 24px horizontal padding and 64px vertical padding, increasing to 96px at 640px. The centered text is max-w-3xl 768px with a 16px eyebrow-to-title gap, 24px to the lede, and 40px to actions. A bordered rounded-lg media placeholder follows after 64px. A proof label and five logo placeholders follow 48px lower, with 24px row gaps.",
    hierarchy: "The display headline is 36px, 48px at 640px and 60px at 1024px, semibold with tracking-tight and balanced wrapping. Read the linked 12px badge eyebrow, h1, 18px lede, actions, screenshot and 14px proof label. Slots: eyebrow 5 words, headline 10, lede 30, actions 3 each, proof label 8. Logo placeholders combine a 24px glyph and the word Logo.",
    states: "Actions are 44px tall with 20px horizontal padding and rounded-md 6px radii. Primary hover changes neutral-900 to neutral-700; secondary hover changes white to neutral-50. Colour transitions take 150ms. Every enabled control shows a 2px neutral-900 focus-visible outline offset 2px. The eyebrow badge fills neutral-50 on hover. Media and logos are static.",
    responsive: "Below 640px actions stack at full width and the media is 4:3. At 640px actions form a centered row and media becomes 16:9. Logos use a three-column grid below 640px and five columns above, with the final two centered in the mobile row. Container padding and headline sizes follow the section and display steps.",
    usage: "Use for an opening product overview with visual proof. Choose hero-centered-form when collecting an email is the main task. Variations: replace the screenshot with a video placeholder, use three logos, or replace the proof label with a short caption.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
