import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-support-chat',
  name: 'Testimonial cards — Support chat excerpt',
  category: 'testimonial-card',
  tags: ['stacked', 'list', 'compact'],
  description: 'A short support conversation of alternating message bubbles ends in the customer\'s praise, under the customer\'s name and above a resolution footer. Use it to prove support quality with the exchange itself rather than a polished quote.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────┐
│ (AR)  Alex Rivera                            │
│       Chat with support | Mar 14             │
│ ┌─────────────────────────────────┐          │
│ │ Customer question               │          │
│ └─────────────────────────────────┘          │
│          ┌─────────────────────────────────┐ │
│          │ Support reply with the fix      │ │
│          └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐          │
│ │ Praise for how it was solved    │          │
│ └─────────────────────────────────┘          │
│ ──────────────────────────────────────────── │
│ Icon Resolved in 6 minutes         Rated 5/5 │
└──────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px w-72 figure, 384px sm:w-96 from 640px, with a 1px neutral-200 border, an 8px rounded-lg radius and 20px p-5 padding that grows to 24px sm:p-6. The figcaption comes first: a 40px initials avatar and a two-line byline with a 12px gap. The message list starts 20px below as a flex column with 12px gaps. Customer rows keep 32px pr-8 free on the right and align left; the support row keeps 32px pl-8 free on the left and aligns right. Each bubble shrinks to its text with 12px by 8px padding and an 8px radius, squared at the corner nearest its sender. A footer 20px below has a hairline, 16px top padding and a space-between row.',
    hierarchy: 'The customer name in 14px semibold and a 12px neutral-500 channel and date line identify the author. The three bubbles carry the reading order: a 14px customer question on neutral-100, a support reply in white on neutral-900, then the customer praise on neutral-100. Each bubble starts with a visually hidden sender name. The footer pairs a 16px check icon and resolution time with a rating in 12px neutral-500. Slots: name up to 3 words, channel up to 3 words, each message up to 10 words with the praise last, resolution time up to 4 words, rating up to 3 words.',
    states: 'The card is static with no controls and no hover, focus, open, selected or disabled states. Bubbles carry a transparent 1px border so they keep a visible outline in forced-colors mode, where fills are removed. The avatar and check icon are aria-hidden, the list has an accessible name and the time element carries a machine-readable date.',
    responsive: 'Below 640px the card is 288px wide with 20px padding, so a bubble is at most 214px wide and a 10-word message wraps to two lines. From 640px the card grows to 384px with 24px padding and bubbles up to 302px. The 32px side offset, bubble sides, type sizes and footer row stay the same at every width.',
    usage: 'Use on support, help center or pricing pages where the speed and tone of a real reply is the proof. Pick testimonial-card-speech-bubble for a single quote shown as a message, or testimonial-card-social-post for a public post. Variations: name the support agent with a small avatar beside the reply, show four messages instead of three, or replace the rating with a satisfaction label.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
