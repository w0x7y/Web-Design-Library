import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-snowboard-service',
  name: 'Snowboard service receipts',
  category: 'testimonials',
  tags: ['brutalist', 'light'],
  description:
    'An itemised snowboard service receipt beside rider feedback for Basecamp Bench. Use it for tuning workshops that explain their work and prices.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Mono:wght@400;500;600'],
  brief: {
    layout:
      '1280px section with heading column beside a white 416px receipt at 1024px. Receipt uses 24px padding on phones and 32px from 640px; dashed item rules, serial header and total footer. Section padding 64px, 96px from 1024px; gutters 24px, 40px at 640px.',
    style:
      'Yellow-300 section, neutral-950 text, white receipt and neutral-300 dashed rules. IBM Plex Mono 36px medium uppercase heading increasing to 48px at 640px; 16px quotes with 1.625 leading, 12px receipt labels. Square corners, 2px neutral-950 receipt border, no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'The workshop intro and receipt stack below 1024px; at 1024px use 1fr / 416px columns with 64px gap. The receipt stays full width on phones. Heading and gutters grow at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
