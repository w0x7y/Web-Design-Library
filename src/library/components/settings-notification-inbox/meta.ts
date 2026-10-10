import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-notification-inbox',
  name: 'Notification delivery settings',
  category: 'settings',
  tags: ['corporate', 'light'],
  description:
    'A channel-oriented notification form with grouped preferences. Use it for collaboration software with email and in-app alerts.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 768px settings form with two native fieldsets for email and in-app notifications, each containing three labeled checkboxes with short explanations. The panel has 24px padding, 32px at 640px. The header has a 12px eyebrow, 30px heading 12px below, and supporting text 8px below. Channels start after 24px with 32px gaps; checkboxes are 16px with 12px gaps to their labels, 20px between preferences. The wrapping save footer follows a horizontal rule after 32px.',
    style:
      'Slate-50 page, white square panel, slate-200 lines, slate-950 headings and blue-700 action. 30px title, 14px preference text and 12px hints at 20px line height. Supporting text is slate-600; each hint uses slate-950 at 70% opacity and is linked to its checkbox.',
    states:
      'Native controls retain their browser behavior. Each checkbox has a 2px current-color focus outline offset by 2px. The save button has an 8px radius, 16px horizontal and 12px vertical padding, a pointer cursor and stone-950 focus outline. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
