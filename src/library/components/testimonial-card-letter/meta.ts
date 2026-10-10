import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-letter',
  name: 'Partner endorsement letter',
  category: 'testimonial-card',
  tags: ['corporate', 'light'],
  description:
    'A partner endorsement framed like a short letter, with organization branding and a detailed author credit. Use it in service proposals and company websites.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px figure, 320px from 640px, with 20px padding. A 24px organization mark and 18px wordmark share a centered row with an 8px gap. An 18px quote starts 20px below. The author footer starts 20px below the quote with a top rule and 16px top padding; a 44px initials tile sits 12px before the name, role and partner-since detail. Each supporting credit line has a 4px top margin.',
    style:
      'Blue-50 surface, 1px blue-200 border and 12px corners; no shadow. Blue-950 default sans text. The 18px semibold wordmark has 28px line height and -0.025em tracking; the regular quote has 28px line height. Blue-800 organization mark and 11px role, blue-700 10px relationship note, 12px semibold name with 16px line height. The 44px blue-200 initials tile has 8px corners and 14px semibold text with 20px line height; the footer divider is 1px blue-200.',
    states:
      'The letter is static without interactive controls or animation. The organization mark and initials tile are decorative because their identities are written beside them.',
    responsive:
      'The fixed width is 288px below 640px and 320px above. Quote and credit lines wrap naturally; the initials tile stays 44px wide.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
