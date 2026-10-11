import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-base-plan-addons',
  name: 'Pricing — Base plan with optional additions',
  category: 'pricing',
  tags: ['stacked', 'grid', 'numbers'],
  description:
    'One horizontal base plan sits above a separate three-card row of priced additions.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                            │
│                                                            │
│Base plan $19 /month     Core access / Description          │
│[Choose base plan]       Check Capability / Check Support   │
│                                                            │
│Optional additions                                          │
│Extra capacity          Priority help        Advanced access│
│$9 /month               $15 /month           $29 /month     │
│[View addition]         [View addition]      [View addition]│
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section holds a bordered base-plan panel 40px below its introduction. At 768px the panel splits 1:2 with 32px gaps. An add-on heading and three equal 24px-padded cards follow after 40px with 16px gaps.',
    hierarchy:
      'The base $19 recurring price leads before its features. Add-on names, prices and short descriptions remain a secondary group. Keep feature rows under 8 words and add-on descriptions under 15.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The base panel and add-on row each stack below 768px. Links fit their cards, and prices preserve their unit labels as inline content.',
    usage:
      'Use for an offer with one common starting point and independent paid extras. Pick tiers when extras must be bundled. Variations: price additions per seat, show two additions, or put a one-time service under the optional heading.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
