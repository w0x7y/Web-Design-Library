import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-links-actions',
  name: 'Navbar — Logo, links and actions',
  category: 'navbar',
  tags: ['row', 'compact'],
  description:
    'A logo and five page links share a compact bar with login and a primary action. A native mobile menu keeps the main action visible.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo    Five page links               Log in [Get started]   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white header has a neutral-200 bottom hairline. Its max-w-6xl container is 1152px with 24px side padding and a 64px (h-16) flex row. The desktop link row sits 32px after the logo with 24px gaps; login and the primary action sit at the right. A full-width absolute mobile panel begins below the row with 24px padding and five 44px links above a 44px secondary login action. The header reserves 400px total height below 1024px.',
    hierarchy:
      'Read the 24px glyph and Logo, five 14px navigation labels, then login and Get started. Product is the current page, marked with aria-current and semibold neutral-900. Keep navigation labels to 1–2 words and actions to 2 words.',
    states:
      'Text links change from neutral-900 to neutral-600 on hover. The 44px primary action has a 6px radius, neutral-900 fill and neutral-700 hover fill with a 150ms colour transition. The mobile details is open initially; its 40px summary swaps bars for a cross through group-open. Closing it hides the panel while keeping the primary action in the bar. The secondary login action fills neutral-50 on hover. Every enabled control shows a 2px keyboard-focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 1024px the desktop navigation and login hide; the mobile summary and panel appear. At 1024px the header returns to 64px and the mobile details hides. The primary action remains visible at every width.',
    usage:
      'Use for a landing page with a small primary navigation and a conversion action. Choose navbar-mega-menu for grouped product destinations. Variations: change the current link, omit login, or replace Get started with Contact.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
