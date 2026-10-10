import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-enterprise-contract',
  name: 'Enterprise contract pricing',
  category: 'pricing',
  tags: ['corporate', 'light'],
  description:
    'A business pricing section with team and enterprise offers plus a shared capability list. Use it for products sold through both self-service and assisted contracts.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1152px maximum-width section with 24px side and 80px vertical padding. A grid with 40px gaps pairs an intro and two offer cards. Intro has an eyebrow, h2 16px below and paragraph 20px later. Offer grid has 20px gaps. Cards have 24px padding, 20px h3, description 8px below, 36px price 28px later, billing terms 8px below and a four-item benefits list with 28px margins and 12px item spacing. Cards are flex columns; lists grow so the 44px minimum-height actions stay at the bottom. A capability strip starts 40px later with a top rule, 24px top padding and 20px gaps.',
    style:
      'Default sans on slate-50 with slate-950 headings and slate-600 14px body. Intro h2 is 36px semibold, 1.25 line height, -0.025em tracking. Eyebrow is 12px semibold uppercase blue-700 with 0.1em tracking. White cards have 12px radii and 1px slate-200 borders, 2px blue-700 for Enterprise. Prices are 36px semibold, 40px line height and tight tracking; Team period is 14px normal with 4px left margin. Terms are 12px slate-500. Annual contract badge is blue-50/blue-700, 12px medium, fully rounded, 8px horizontal/4px vertical padding. Actions have 8px radii, 16px horizontal padding and 14px semibold text: blue-700/white primary and blue-700 outlined secondary. Capability text is 14px with 20px blue-700 checks and 12px gaps.',
    states:
      'Team action fills blue-800 on hover; Enterprise action fills blue-50. Hover applies only on hover-capable devices. Both links show a 2px zinc-950 outline offset 2px on keyboard focus, including forced-colors mode. Benefit lists retain role=list; decorative checks are aria-hidden. No motion or transitions.',
    responsive:
      'Intro sits above the offers below 1024px; at 1024px the outer grid becomes 1:2 columns. Offer cards stack below 640px and become equal columns from 640px; intro heading steps from 36px to 48px at 640px with unchanged line height. Enterprise title and badge wrap with 8px gaps. Shared capabilities stack below 768px and form three equal columns at 768px. Prices and terms wrap naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
