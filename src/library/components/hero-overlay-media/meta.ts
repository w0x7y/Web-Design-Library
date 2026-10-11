import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-overlay-media",
  name: "Hero — Text over full-bleed media",
  category: "hero",
  tags: ["layered", "media", "centered"],
  description: "A full-width media background with a dark scrim and centred white opening copy. Use it when the background image sets the context for the headline.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────────────────┐ │
│ │                          Image                           │ │
│ │                                                          │ │
│ │                         Eyebrow                          │ │
│ │              Headline for the main outcome               │ │
│ │                     Supporting lede                      │ │
│ │               [Primary action] [Secondary]               │ │
│ │                                                          │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative full-bleed section contains an inset-0 media placeholder and a neutral-950/70 scrim. The foreground uses a centered max-w-3xl 768px column, 24px side padding and 64px vertical padding. Its minimum height is 560px, increasing to 640px at 640px. Gaps are 16px, 24px and 40px before title, lede and actions.",
    hierarchy: "The display headline is 36px, 48px at 640px and 60px at 1024px, semibold with tracking-tight and balanced wrapping. White title and 14px eyebrow sit over the media; the 18px lede is neutral-300. Slots: eyebrow 6 words, title 10, lede 25 and each action 3. The background is labelled as an image placeholder and the scrim is decorative.",
    states: "Actions are 44px tall and rounded-md, with 150ms colour transitions. The white primary fills neutral-200 on hover; the outlined white secondary fills white/10. Both show a 2px white focus-visible outline offset 2px. Background layers are static and ignore pointer input.",
    responsive: "Below 640px the minimum height is 560px and actions stack full width. From 640px the section is at least 640px tall, uses 96px vertical padding and horizontal actions. The title follows 36px, 48px and 60px at 0px, 640px and 1024px.",
    usage: "Use when a single image carries the opening atmosphere. Choose hero-centered-media when a screenshot needs to remain unobscured. Variations: use a video placeholder, shorten to one action, or left-align the foreground column.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
