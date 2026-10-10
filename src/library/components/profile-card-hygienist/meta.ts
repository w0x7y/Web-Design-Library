import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-hygienist',
  name: 'Dental hygienist profile',
  category: 'profile-card',
  tags: ['minimal', 'light', 'has-image'],
  description:
    'A calm Nacre Dental hygienist profile with a portrait, appointment length and patient-friendly specialism. Use it in dental practice staff and appointment directories.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px article with 20px padding and 16px radius. A 12px practice label sits above an identity row with an 80px square portrait, 12px gap and flexible text column. A 12px reassurance sentence follows 20px below, then two definition-list rows and an underlined booking link.',
    style:
      'Default sans on emerald-50, with emerald-950 primary text and emerald-800 secondary text. Name is 18px semibold at 22.5px line height; body is 12px at 20px line height. Portrait has 8px radius, facts have 1px emerald-200 top rules, and the article has no border or shadow.',
    states:
      'Links have a 2px emerald-950 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the appointment link turns emerald-700. No animation or transitions.',
    responsive:
      'The article is 288px wide below 640px and 320px wide from 640px. Portrait, padding and type sizes do not change.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
