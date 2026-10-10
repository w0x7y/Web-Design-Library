import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-glass-studio',
  name: 'Glassblowing studio collection',
  category: 'hero',
  tags: ['editorial', 'light'],
  description:
    'A glassblowing studio hero for Lumen Glassworks, with a drawn carafe, small-run collection details and an open-studio invitation. Use it for handmade glass collections.',
  preview: { kind: 'section' },
  fonts: ['Fraunces:wght@400..600'],
  brief: {
    layout:
      'A 1280px container with 24px side and 64px vertical padding. At 1024px, a 1:2:1 grid with 40px gaps places the 24px brand and 14px piece label left, a carafe illustration centrally and collection copy right. The figure has 32px padding, a 24px-spaced caption and a 4:5 SVG. The 12px eyebrow precedes a 40px headline by 20px, 16px copy by 24px and a 44px-minimum link by 32px. A wrapping facts row sits 48px below with a top rule, 24px top padding and 32px gaps.',
    style:
      'Fraunces 400 body and 600 headings on lime-50, with lime-950 ink, lime-800 1px rules and lime-900 details. The headline has 1.15 line height. The figure has 160px top corners and square lower corners. A pale #d9e8c3 glass carafe with #f7fee7 highlights and lime-900 outlines sits within a 400x500 viewBox. Footer values are 20px. No shadows.',
    states:
      'Explore the vessels underlines on hover and shows a 2px lime-950 keyboard-focus outline offset 4px. The carafe SVG is decorative; its caption identifies the design. Collection facts use a dl. No animation.',
    responsive:
      'Below 1024px brand, figure and copy stack with 40px gaps. At 640px the figure switches to 3:2; at 1024px it returns to 4:5 and the three columns appear. Collection facts wrap at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
