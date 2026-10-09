import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-artisan-signature',
  name: 'Artisan signature footer',
  category: 'footer',
  tags: ['editorial', 'light'],
  description:
    'A quiet maker footer with a serif signature, studio address and compact navigation. Use it for artisans and independent creative businesses.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container has 24px side, 64px top and 24px bottom padding. The opening statement and studio action are separated by a 32px gap above a bottom rule with 48px bottom padding. The information grid has 32px gaps and 40px vertical padding, holding the signature wordmark, physical address and four-link navigation. Description starts after 12px. Address label has 8px bottom margin. Navigation is a two-column grid with 16px gaps. Legal row has a top rule, 20px top padding and 16px wrapping gap; legal links are 20px apart.',
    style:
      'Stone-100 canvas, stone-950 ink, stone-600 description, address and legal text, and 1px stone-300 rules. Statement uses the system serif at 36px and 1.25 line height, increasing to 48px at 640px. Wordmark is 30px italic system serif with 36px line height. Orange-800 studio action has 14px text, a matching bottom border and a 20px arrow with 20px gap. Address is 14px with 1.625 line height and no italic. Address label is 12px uppercase with 0.05em tracking. Navigation is 14px and legal text 12px. No shadows.',
    states:
      'The studio action turns stone-950 on hover; wordmark turns orange-800; navigation and legal links gain underlines. Every link shows a 2px zinc-950 keyboard-focus outline offset 2px, including in forced colors. No transitions.',
    responsive:
      'Below 768px the statement and action stack, followed by a single-column information grid. From 768px the opening row aligns items at the bottom with space between, and information uses three equal columns. The statement increases from 36px to 48px at 640px. Navigation stays two columns and the legal row wraps at every width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
