import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-flower-market',
  name: 'Florist wholesale market',
  category: 'login',
  tags: ['playful', 'light'],
  description:
    'A Petalshift trade-buyer login with a rounded market panel, oversized wordmark and illustrated tulip bunch. Use it for cut-flower wholesale ordering.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400..700'],
  brief: {
    layout:
      'A 1152px container with a wrapping wordmark/trade tagline header, then 32px-spaced grid. Login panel has 24px padding and a 30px title; introduction, 20px-gap form and order-cutoff note follow. A 240px tulip SVG sits in a large pink illustration panel with a ruled caption. Form controls are 48px tall.',
    style:
      'Fraunces throughout; rose-50 page, rose-950 text, rose-200 illustration panel and rose-800 boundaries. Wordmark is 36px semibold. Login panel has 48px top corners and 12px bottom corners; illustration panel has 48px radius. Inputs have 1px rose-800 border and 8px radii. Submit is rose-950 with rose-50 text. Tulips are rose-red with dark olive stems. No shadows.',
    states:
      'Submit becomes rose-800 on hover. Both inputs and recovery link use 2px current-color keyboard outlines offset 4px, including forced colors; submit uses rose-800 for contrast on rose-50. Required email/password use username/current-password autocomplete; availability copy is associated with email. SVG is decorative with a written grower-direct caption. No animation.',
    responsive:
      'Below 640px login precedes illustration; section padding is 40px vertical/24px horizontal. From 640px padding is 56px/40px, wordmark 48px, login padding 32px, illustration padding 40px and SVG height 320px. From 1024px form/artwork become 1:1.4 columns with 64px gap. Header/caption wrap at narrow widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
