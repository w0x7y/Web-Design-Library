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
      'A 288px member card with 24px corners and a 2px border, expanding to 320px at 640px. Its lavender header contains a 56px circular monogram and name. A 16px-padded body has a biography, outlined interest chips and a contribution count beside a 40px profile link.',
    style:
      'Amber-50 body, indigo-100 header, amber-200 avatar and indigo-950 text and borders. Bold default-sans name, rounded chips and a solid indigo circular arrow link create a friendly illustrated identity without a photo.',
    states:
      'The circular link becomes indigo-800 on hover and has a 2px indigo-950 keyboard outline with 2px offset. There are no transitions or form states.',
    responsive:
      'Width is 288px below 640px and 320px above it. Interests wrap within the body; the avatar is fixed at 56px and the name is allowed to wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
