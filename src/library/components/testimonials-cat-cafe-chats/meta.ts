import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-cat-cafe-chats',
  name: 'Cat café conversations',
  category: 'testimonials',
  tags: ['playful', 'light'],
  description:
    'Two visitor conversations in offset speech panels for Purr & Pour, a cat café. Use it to introduce a calm lounge and its approach to animal welfare.',
  preview: { kind: 'section' },
  fonts: ['Bricolage Grotesque:wght@400..700'],
  brief: {
    layout:
      '1280px section with a heading, two offset speech panels and a full-width lounge note. Panels have 24px padding on phones and 40px from 640px. 32px panel gap and 64px section padding, 96px at 1024px.',
    style:
      'Pink-50 background and pink-950 ink. Bricolage Grotesque 36px bold heading, 48px from 640px. Pink-200 first speech panel with 32px 32px 32px 0 corners; yellow-200 second panel with 32px 32px 0 32px corners and a 48px top offset on desktop. Quotes 24px with 1.5 leading, 14px captions, pink-300 footer rule. No shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Below 768px the speech panels stack; from 768px use equal columns and shift the second down 48px. Footer becomes a horizontal row at 640px. Gutters grow from 24px to 40px at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
