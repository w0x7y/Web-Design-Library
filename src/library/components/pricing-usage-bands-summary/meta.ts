import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-usage-bands-summary',
  name: 'Pricing — Usage bands with an example bill',
  category: 'pricing',
  tags: ['asymmetric', 'table', 'numbers'],
  description:
    'Graduated unit rates sit beside a static example bill that shows how the bands combine.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│Usage rates                         Example monthly bill  │
│Monthly units      Rate per unit    $100 /month           │
│First 1,000        $0.04            First band       $40  │
│Next 4,000         $0.03            Next band        $60  │
│Above 5,000        $0.02            Total units    3,000  │
│                                    [Start with usage]    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section becomes a 2:1 grid at 1024px with a 32px gap. A two-column semantic rate table uses 16px row padding. The example bill sits in a neutral-50 bordered panel with 24px padding and a full-width 44px action.',
    hierarchy:
      'Read the headline, unit bands and per-unit rates before the worked example. Limit rate labels to 4 words and bill labels to 4. The example states its 3,000-unit quantity and $100 total explicitly.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The summary follows the rate table below 1024px. Both table columns wrap within their half-width cells; the action fills the example panel.',
    usage:
      'Use for graduated usage pricing where a worked example helps. Pick fixed tiers for predictable bundles. Variations: change units to storage, show a smaller example, or add a minimum charge in the bill summary.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
