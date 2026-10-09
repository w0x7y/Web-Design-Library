import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-notification-inbox',
  name: 'Notification delivery settings',
  category: 'settings',
  tags: ['corporate', 'light'],
  description:
    'A channel-oriented notification form with grouped preferences. Use it for collaboration software with email and in-app alerts.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 768px settings form with two native fieldsets for email and in-app notifications, each containing three labeled checkboxes with short explanations. Save footer follows a horizontal rule.',
    style:
      'Slate-50 page, white square panel, slate-200 lines, slate-950 headings and blue-700 action. 30px title, 14px preference text and 12px hints.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
