import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-interpreter',
  name: 'Interpreter appointment profile',
  category: 'profile-card',
  tags: ['corporate', 'minimal', 'light', 'has-image'],
  description:
    'A sign-language interpreter profile for Luma Access, with language credentials, an appointment window and a direct booking link. Use it in accessibility service directories.',
  preview: { kind: 'element' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      'A 288px article with 20px padding. A 12px brand label precedes a horizontal identity row by 20px: a 56px square portrait, 12px gap, name and role. Two definition-list rows sit 20px below, followed by a 40px booking link with 20px top margin.',
    style:
      'Manrope on white with slate-950 text, slate-600 secondary copy, a 1px slate-300 border and 12px radius. Name is 18px bold, identity metadata 12px, definition rows 12px with 16px line height. Teal-700 primary link has white text and 6px radius. No shadow.',
    states:
      'Links have a 2px teal-700 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the booking link darkens to teal-800. No animation or transitions.',
    responsive:
      'The card is 288px wide below 640px and 320px wide from 640px. Its 20px padding and 56px portrait do not change.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
