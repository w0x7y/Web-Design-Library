import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-museum-exhibit',
  name: 'Museum exhibition navigation',
  category: 'navbar',
  tags: ['editorial', 'light', 'has-image'],
  description:
    'A museum header with a current exhibition photograph and visitor links. Use it for cultural venues with a changing programme.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400;500'],
  brief: {
    layout:
      '1280px maximum grid, 24px padding and 32px gaps. Institution brand is 36px with 1 line height, followed by a 12px founding note. Exhibition flex link pairs a 96px square photo with a 12px uppercase label, 24px serif title and 12px dates. Visitor navigation wraps with 20px gaps and 14px links, including a 44px bordered visit action. Visit action has a 16px SVG arrow 8px from its label.',
    style:
      'Amber-50 background, rose-950 ink and 1px rose-300 bottom border. Newsreader brand and title, default sans body. Square image and ticket corners, no shadows.',
    states:
      'Brand, exhibition and ordinary links underline on hover. Ticket fills rose-950 and turns amber-50. Every link has a 2px currentColor focus outline offset 2px, including forced colours.',
    responsive:
      'Regions stack below 768px. At 768px use two columns and span visitor links across both; at 1024px use 0.9fr 1.4fr 1fr columns and remove the span. Exhibition photograph remains 96px square.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
