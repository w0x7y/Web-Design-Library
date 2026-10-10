import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-split-image',
  name: 'Hero — Split with image',
  category: 'hero',
  tags: ['split', 'media', 'spacious'],
  description: 'Two-column hero with the pitch and actions beside one large image. Use it to open a landing page where a product shot or photo matters as much as the headline.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│ Eyebrow                                                  │
│ Headline that names          ┌─────────────────────────┐ │
│ the main outcome             │                         │ │
│                              │                         │ │
│ Lede: one or two sentences   │          Image          │ │
│ for the audience             │                         │ │
│                              │                         │ │
│ [Primary action] [Secondary] └─────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'One section with a 1152px (max-w-6xl) container, 24px side padding and 64px vertical padding (96px from 640px). From 1024px, two equal columns with a 64px gap, vertically centred: the text column holds an eyebrow, h1, lede and an action row; the media column holds one square image placeholder. Spacing: 16px eyebrow to headline, 24px headline to lede, 40px lede to actions, 12px between actions.',
    hierarchy: 'The headline reads first (60px semibold at desktop, balanced wrapping), then the image, then the lede (18px, neutral-600, at most 512px wide) and the primary action. The eyebrow is a 14px muted label for a category or announcement. One filled primary action and one outlined secondary action. Slots: eyebrow up to 6 words, headline up to 10, lede up to 30, action labels 2–3 words.',
    states: 'The primary action goes from neutral-900 to neutral-700 on hover; the secondary action fills neutral-50. Both are 44px tall with a 6px radius and show a 2px neutral-900 outline offset 2px on keyboard focus. Colour transitions use the default 150ms ease. The image placeholder is static.',
    responsive: 'Below 1024px the columns stack (text first, then the image at 4:3) with a 48px gap. The headline steps from 36px to 48px at 640px and 60px at 1024px. Actions wrap when they do not fit.',
    usage: 'Use it to open a landing page when one image (product shot, photo or illustration) carries as much weight as the pitch. Pick a centred hero when there is no strong visual, and a full-bleed media hero when the image is the message. Variations: put the image on the left, swap it for a video or a product UI frame, or add a logo row or rating under the actions.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
