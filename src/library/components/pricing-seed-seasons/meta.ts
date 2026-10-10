import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-seed-seasons',
  name: 'Seasonal seed subscription',
  category: 'pricing',
  tags: ['editorial', 'playful', 'light'],
  description:
    'An annual seed subscription organised as four seasonal parcels, with one clear price and delivery schedule. Use it for garden subscriptions and curated annual deliveries.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400'],
  brief: {
    layout:
      '1280px maximum width, 24px side and 64px vertical padding. Left heading and intro paired with a left-ruled annual rate and signup link. Four ordered seasonal parcels begin 48px below with 16px gaps; each contains a large number, title, dispatch month and ruled contents copy. Footer specifies quantity and renewal.',
    style:
      'Lime-50 canvas, lime-950 ink, lime-800 rules and labels. Fraunces regular on heading, price, season titles and numbers, default sans elsewhere. Heading 36px/1.1, price and numbers 48px, season names 24px. Parcels have 64px top radii and square bottom corners, 24px side and bottom padding, 32px top padding. Spring yellow-100, summer lime-100, autumn orange-100, winter stone-100. Signup pill is lime-950/lime-50, at least 44px high.',
    states:
      'Signup fills lime-800 on hover-capable devices and shows 2px lime-950 focus outline offset 4px. Seasonal list is semantic with role=list; decorative sequence numbers are hidden from assistive technology. No motion.',
    responsive:
      'At 640px vertical padding becomes 80px, heading 60px and parcels form two columns. At 1024px header becomes 1.5fr/1fr and parcels become four columns. At smaller sizes parcels stack and the annual price unit wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
