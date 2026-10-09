import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-letter-post",
  name: "Letter writing envelope",
  category: "hero",
  tags: [
    "playful",
    "light"
  ],
  description: "An envelope-shaped newsletter hero for a letter-writing club, with a postage illustration and labelled email signup. Use it for thoughtful subscriptions and small creative communities.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Syne:wght@400..700"
  ],
  brief: {
    layout: "A 1280px container with 24px side padding and 64px vertical padding. A wrapping brand row precedes an envelope with 2px emerald-950 outline. The cream paper uses 24px padding, 40px at 640px, and a 48px-gap grid that becomes 2:1 columns at 1024px. Left is headline, copy and email form; right is a dashed red postage note. A 112px-tall envelope fold SVG completes the bottom.",
    style: "Syne on emerald-100 with emerald-950 ink. Paper is emerald-50, headline 40px at 1.1 leading and 700 weight, increasing to 60px at 640px. Stamp note has a 1px dashed red-800 border, red-800 heading and a simple sunrise stamp illustration. Square white field with 1px emerald-700 border and 48px height; red-800 CTA with white text and 4px radius.",
    states: "Email field and button show 2px emerald-950 focus outlines offset 4px. Button fills red-900 on hover. Email is labelled, has email autocomplete, is required and references the frequency hint with aria-describedby. Stamp and envelope fold SVGs are decorative. No animation.",
    responsive: "At 320px the envelope content and form stack. At 640px paper padding increases to 40px, title becomes 60px and form uses a row with a flexible input. At 1024px postage panel sits beside the copy in 2:1 columns. All text and controls remain within the paper edges."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
