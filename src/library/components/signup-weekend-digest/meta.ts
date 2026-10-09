import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-weekend-digest',
  name: 'Weekend digest subscription',
  category: 'signup',
  tags: ['editorial', 'light'],
  description:
    'An editorial email subscription with a sample issue. Use it for a publication or a thoughtful weekly digest.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'An 896px editorial two-column layout: subscription copy and email form on the left, a lightly rotated sample issue on the right. 40px column gap.',
    style:
      'Cream #faf5ea background, brown #30281f ink, system serif 48px headline and a white sample sheet with a fine border. Square dark submit button and no shadows.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
