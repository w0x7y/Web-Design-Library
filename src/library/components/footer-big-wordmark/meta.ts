import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-big-wordmark',
  name: 'Footer — Oversized wordmark',
  category: 'footer',
  tags: ['stacked', 'grid', 'spacious'],
  description: "A dark divided footer ends with a giant, cropped Logo wordmark, with closing copy, links and contact above it. Use it for a strong visual close with a short directory and a contact route.",
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Closing headline                     Links      Contact      │
│ One-sentence closing statement       Product    Address      │
│ [Start a conversation]               About      Email        │
├──────────────────────────────────────────────────────────────┤
│ Copyright                                   Privacy Terms    │
│                                                              │
│                          L  O  G  O                          │
│                      Cropped lower edge                      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A neutral-950 footer uses white headings, neutral-300 copy and neutral-800 dividers. The 1152px max-w-6xl container has 24px side and 64px top padding, 96px from 640px. A four-column grid at 1024px assigns two columns to closing copy, one to links and one to contact. Cells use 24px padding and border dividers. Legal row has 24px vertical padding. The aria-hidden Logo wordmark is 18vw, leading-none, tracking-tight, centred with -0.15em bottom margin and overflow hidden to crop its lower edge.',
    hierarchy:
      'A 30px closing headline leads, then 16px copy and conversation link. Navigation and contact labels are 14px semibold. Limit headline to 8 words, statement to 22, address to 3 lines and email to 28 characters. A small accessible Logo precedes the closing copy; the large repeat is decorative.',
    states:
      'Links hover from neutral-300 to white and show a 2px white keyboard-focus outline offset 2px. Only the decorative wordmark is cropped. Interactive content stays inside the footer; there are no disabled controls.',
    responsive:
      'Cells stack below 640px. At 640px two columns put closing copy across both, then links beside contact. At 1024px all cells share a four-column row. Headline grows to 36px at 640px; wordmark stays 18vw. Legal row stacks below 768px.',
    usage:
      'Use for a strong visual close with a short directory and contact route. Choose footer-link-columns for many destinations. Variations: shorten the closing copy, add a phone link, or change the wordmark crop depth.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
