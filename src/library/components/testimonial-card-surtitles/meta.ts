import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonial-card-surtitles',
  name: 'Theatre surtitles endorsement',
  category: 'testimonial-card',
  tags: ['editorial', 'dark'],
  description:
    'A theatre programme endorsement for Cueglass live surtitles, with a typographic quote and production credits. Use it for stage-access and performance services.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif:ital@0;1'],
  brief: {
    layout:
      'A 288px figure, 352px from 640px, with 24px padding. A split small masthead precedes a 30px quote after 28px. A small two-column production-credit grid sits beneath a rule after 24px.',
    style:
      'Neutral-900 background, amber-100 quote, amber-300 masthead and neutral-300 credits. Instrument Serif quote at 30px/34px and an italic closing sentence; surrounding labels use the default sans stack. Square corners, no shadow.',
    states:
      'Informational figure with no controls or hover state.',
    responsive:
      'The width changes from 288px to 352px at 640px. All font sizes and padding stay constant.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
