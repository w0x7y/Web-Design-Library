import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-dropdown-menus',
  name: 'Navbar — Dropdown menus',
  category: 'navbar',
  tags: ['row', 'layered', 'list'],
  description: "A compact bar has two native dropdowns beside ordinary links, each panel listing four destinations with short descriptions. Use it for two small destination groups whose descriptions help readers choose.",
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo  Product ^  Pricing  Resources v  About  [Get started]  │
│       ┌────────────────────────────────────                  │
│       │ Overview                                             │
│       │ Short destination description                        │
│       │ Features                                             │
│       │ Supporting destination copy                          │
│       │ Integrations                                         │
│       │ Connection description                               │
│       │ Security                                             │
│       │ Access and protection description                    │
│       └────────────────────────────────────                  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A neutral-50 section reserves 496px below 768px and 400px above. The white header has a 1152px max-w-6xl container, 24px side padding and a 64px first row. Navigation uses 24px gaps. Desktop panels are 288px wide, absolute 8px below their triggers, with rounded-lg neutral-200 borders, shadow-lg and 8px padding. Four two-line links each have 12px padding.',
    hierarchy:
      'Logo leads the navigation and action. Product is open initially; Resources is closed. Panel titles are 16px semibold with 24px line height and descriptions 14px neutral-600. Limit titles to 2 words and descriptions to 7 words.',
    states:
      'Text links hover from neutral-900 to neutral-600. Primary actions are 44px tall with a 6px radius, neutral-900 fill, neutral-700 hover fill and 150ms colour transition. Details share a name for native mutually exclusive opening. Their 20px chevrons rotate 180 degrees in 150ms when open. Panel links fill neutral-50 on hover. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 768px Logo and action occupy row one; the four navigation items wrap below the first row. Panels span the container width and use the header as positioning context. From 768px panels are 288px and positioned under their triggers.',
    usage:
      'Use for two short destination groups whose descriptions help readers choose. Choose navbar-mega-menu for six product links and a feature card. Variations: open Resources first, shorten panel descriptions, or replace a disclosure with a link.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
