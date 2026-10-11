import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-centered-brand-zones',
  name: 'Navbar — Centered brand with three zones',
  category: 'navbar',
  tags: ['row', 'centered', 'compact'],
  description:
    'A centered brand separates destination links on the left from account actions on the right.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│[Product] [Pricing] [Docs]      Logo      [Log in] [Start]│
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'The max-w-6xl header has 24px padding and a 24px-gap grid. At 768px, equal flexible outer columns surround an auto-width brand; the action group aligns to the right. Primary actions remain 44px tall.',
    hierarchy:
      'The centered brand anchors the bar, with three destination links and two account actions. Keep labels under 3 words and preserve one filled action.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 768px the three zones stack in source order: destinations, brand, then account actions. Both link and action groups wrap to fit 320px viewports.',
    usage:
      'Use when a centered identity is important and the navigation is short. Pick a conventional left-brand bar for many links. Variations: replace account actions with search, use two destinations, or add a brief text descriptor below the brand.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
