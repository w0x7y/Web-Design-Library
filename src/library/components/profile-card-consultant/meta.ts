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
      'A 288px article, 320px from 640px, with 16px padding. A 48px initials tile and availability pill share a top-aligned row with a 12px gap. Name follows after 12px, role after 4px, biography after 12px with a 2px left rule and 12px inset. Skill chips wrap after 12px with 6px gaps. Full-width 36px booking link follows after 16px and contains a 16px arrow.',
    style:
      'White surface, 1px stone-200 border, 16px corners, default sans and stone-950 text. Orange-100 avatar with 12px corners, 20px semibold orange-900 initials. Emerald-50 availability pill uses emerald-800 12px medium type, 10px horizontal and 4px vertical padding, a 6px emerald-600 dot and 6px gap. Name is 20px semibold with 28px line height and -0.025em tracking, role 12px stone-600. Biography is 14px stone-700 with 20px line height and orange-400 rule. Stone-100 skill chips have 6px corners, 8px horizontal and 4px vertical padding. Booking link uses 8px corners, 12px horizontal padding, stone-950 fill and white 14px medium type.',
    states:
      'Booking link is named Book a conversation with Amara Nwosu. It changes from stone-950 to stone-800 on hover and shows a 2px stone-950 keyboard outline with 2px offset, including in forced colours. Availability includes visible text alongside its decorative dot. No animation.',
    responsive:
      'The card stays vertically stacked at every width. Its fixed width changes from 288px to 320px at 640px; skill chips wrap and all content remains below the 384px element height limit.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
