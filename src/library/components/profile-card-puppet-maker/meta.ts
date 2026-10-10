import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-puppet-maker',
  name: 'Puppet maker profile',
  category: 'profile-card',
  tags: ['playful', 'light'],
  description:
    'A friendly maker card for Pipkin Puppets, with a custom marionette illustration and a commission enquiry. Use it for theatre fabrication and puppet workshop directories.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:wght@400..800'],
  brief: {
    layout:
      'A 288px article with 24px radius and 20px padding. A 12px brand line sits above a two-column identity row, with a 72px by 112px marionette drawing at the right. A 12px bio follows 16px below. The red-700 commission link has a 24px top margin, 40px height and asymmetrically curved 16px corners.',
    style:
      'Bricolage Grotesque on orange-100 with red-950 text. The name is 28px bold at 1.1 line height; the role and brand are 12px semibold; body is 12px at 20px line height. Marionette lines are red-950, its shirt red-700 and face orange-200. White action text, no borders or shadows.',
    states:
      'Links have a 2px red-950 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the commission link darkens to red-800. No animation or transitions.',
    responsive:
      'Width is 288px below 640px and 320px from 640px. Illustration, text sizes and 20px padding stay the same.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
