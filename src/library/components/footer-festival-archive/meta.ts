import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-festival-archive',
  name: 'Festival archive footer',
  category: 'footer',
  tags: ['playful', 'light'],
  description:
    'An event footer with festival dates and venue, attendee and archive links, and a newsletter invitation. Use it for annual festivals and conferences.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px footer has 24px side, 56px top and 24px bottom padding. Main grid has 40px gaps and 48px bottom padding. It contains festival identity with dates and venue, a six-link attendee navigation grid, and newsletter invitation. Dates start after 16px, venue after 8px. Navigation starts after 20px with two columns and 16px gaps. Invitation copy follows its h2 after 12px and signup link after 20px. Bottom row has a top rule, 20px top padding and 16px wrapping gap; social and legal links have 20px gaps.',
    style:
      'Orange-100 canvas, orange-950 ink, orange-800 navigation label and 1px orange-300 bottom rule. Wordmark is 36px weight 900, 40px line height and -0.025em tracking. Date is 20px bold with 28px line height; venue and navigation are 14px. Navigation label is 12px bold uppercase with 0.05em tracking. Invitation h2 is 24px bold with 32px line height and -0.025em tracking; copy is 14px with 1.625 line height. Signup link has an emerald-950 fill, white 14px semibold label, 20px side padding, pill radius, 48px minimum height and 16px arrow with 12px gap. Legal text is 12px.',
    states:
      'Wordmark turns orange-700 on hover; attendee, social and legal links gain underlines; signup fill changes to emerald-900. Every link shows a 2px zinc-950 focus outline offset 2px, including in forced colors. No transitions.',
    responsive:
      'Main information stacks with 40px gaps below 1024px and becomes three equal columns from 1024px. Attendee navigation stays two columns. The copyright and legal row wraps at every width. The signup link sizes to its content and stays at least 48px tall.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
