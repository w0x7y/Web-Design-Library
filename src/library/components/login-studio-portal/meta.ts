import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-studio-portal',
  name: 'Studio client portal',
  category: 'login',
  tags: ['minimal', 'light'],
  description:
    'A focused email and password login with project context. Use it for a small studio’s client portal.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'One 448px-wide login panel with email, password, remember-device checkbox and a full-width submit button. Use 24px panel padding, rising to 40px at 640px.',
    style:
      'Stone-100 page, white panel, stone-200 border, stone-950 headings. Default sans, 30px headline, 14px fields, 16px panel radius.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
