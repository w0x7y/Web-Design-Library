import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-consultant',
  name: 'Independent consultant profile',
  category: 'profile-card',
  tags: ['minimal', 'light'],
  description:
    'A consultant profile with an availability badge, a short positioning statement and a booking link. Use it in expert directories or service listings.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px article, 320px from 640px, with 16px padding. A 48px initials tile and availability badge share the first row. A 20px name, role, left-rule biography and two wrapped skill chips lead to a full-width 36px booking link.',
    style:
      'White surface, stone-200 border and 16px corners. Default sans with stone-950 headings and stone-600 secondary text. Orange-100 initials tile, orange-400 biography rule, emerald-50 availability badge and stone-950 booking link.',
    states:
      'The booking link changes from stone-950 to stone-800 on hover and shows a 2px stone-950 keyboard outline with 2px offset. The availability state includes visible text alongside its green dot. There is no animation.',
    responsive:
      'The card stays vertically stacked at every width. Its fixed width changes from 288px to 320px at 640px; skill chips wrap and all content remains below the 384px element height limit.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
