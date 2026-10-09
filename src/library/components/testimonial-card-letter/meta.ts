import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-letter',
  name: 'Partner endorsement letter',
  category: 'testimonial-card',
  tags: ['corporate', 'light'],
  description:
    'A partner endorsement framed like a short letter, with organization branding and a detailed author credit. Use it in service proposals and company websites.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px endorsement figure, 320px from 640px, with 20px padding. A 24px geometric organization mark and 18px wordmark top an 18px quote. A ruled footer contains a 44px initials tile with author name, job and partner-since detail.',
    style:
      'Blue-50 background, blue-200 border and 12px corners. Blue-950 quote, blue-800 organization mark and role, blue-700 relationship note. The type uses default sans with a 28px quote line height.',
    states:
      'The letter is static without interactive controls or animation. The organization mark and initials tile are decorative because their identities are written beside them.',
    responsive:
      'The fixed width is 288px below 640px and 320px above. Quote and credit lines wrap naturally; the initials tile stays 44px wide.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
