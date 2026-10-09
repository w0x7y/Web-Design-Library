import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-community',
  name: 'Community member profile',
  category: 'profile-card',
  tags: ['playful', 'light'],
  description:
    'A friendly member card for a neighborhood volunteer with interests and a visible contribution count. Use it in community platforms and volunteer directories.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px article, 320px from 640px, with a 2px frame and 24px corners. Header has 16px padding, 22px top corners and a 16px gap between a fixed 56px monogram and identity. A 16px-padded body has biography, an interest list after 12px with 8px gaps, then a 12px-spaced footer with a 1px top rule, 12px top padding and 40px circular profile link.',
    style:
      'Default sans on amber-50 with indigo-950 text and borders, indigo-100 header and amber-200 avatar. Avatar is 24px bold, eyebrow 12px medium with 16px line height, name 20px bold with 24px line height. Biography is 14px with 20px line height. Interest pills have 1px borders, 10px horizontal and 4px vertical padding, 12px medium type. Footer text is 12px, count 18px bold, divider indigo-950 at 20% opacity. Link has indigo-950 fill, amber-50 text and a 14px decorative arrow.',
    states:
      'The circular link becomes indigo-800 on hover and has a 2px indigo-950 keyboard outline with 2px offset. There are no transitions or form states.',
    responsive:
      'Width is 288px below 640px and 320px above it. Interests wrap within the body; the avatar is fixed at 56px and the name is allowed to wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
