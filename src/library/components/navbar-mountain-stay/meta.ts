import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-mountain-stay',
  name: 'Mountain lodge glass navigation',
  category: 'navbar',
  tags: ['glass', 'gradient', 'light', 'has-image'],
  description:
    'A frosted lodge navigation panel over a mountain photograph with visible room availability. Use it for small hotels and rural stays.',
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400;500;600'],
  brief: {
    layout:
      'Full-width scenic header with 20px outer padding and 80px bottom padding. A 1280px maximum glass panel has 24px padding and 24px gaps. Brand is 24px semibold with a 12px location label. Menu wraps 14px links with 20px gaps. Native Stay disclosure contains 14px room links with 8px vertical padding. Booking column has a 12px availability label and a 44px teal button 8px below.',
    style:
      'DM Sans, teal-950 ink, cyan-50 fallback canvas. Mountain photo covers the header, behind a black-to-transparent downward oklab gradient. Rectangular panel has 90% white fill, white 1px border, 12px corners and 24px backdrop blur. Teal-950 booking button has white text and 4px corners. No shadows.',
    states:
      'Brand, ordinary and room links underline on hover. Stay summary underlines; native details opens the room links in flow. Booking fills teal-800 on hover. Every control shows a 2px currentColor focus outline offset 2px, including forced colours.',
    responsive:
      'Panel regions stack below 768px. From 768px they become a wrapping row, with booking pushed right by auto left margin. From 640px outer padding rises to 32px and bottom padding to 96px. Expanded room menus increase the panel height without overlaying content.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
