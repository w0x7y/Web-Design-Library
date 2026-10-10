import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-kiln-index',
  name: 'Ceramics studio index',
  category: 'navbar',
  tags: ['minimal', 'editorial', 'light'],
  description:
    'A quiet ceramics header with oversized serif lettering and a compact two-column index. Use it for independent makers with workshops and small collections.',
  preview: { kind: 'section' },
  fonts: ['Young Serif', 'DM Sans:wght@400'],
  brief: {
    layout:
      '1280px maximum grid with 24px horizontal and 32px vertical padding. A 48px wordmark and 12px uppercase descriptor face a two-column index with 24px gaps. Index links are 14px with 12px vertical padding and bottom rules. A 12px kiln schedule spans both menu columns.',
    style:
      'Young Serif wordmark, DM Sans body, orange-50 background, red-950 ink and red-200 rules. Brand has 1 line height and -0.025em tracking. Red-800 schedule. No shadows or rounded corners.',
    states:
      'Links underline on hover, index underlines offset 4px. All links show 2px currentColor focus outlines offset 2px, including forced colours.',
    responsive:
      'Brand and index stack with 32px gap below 768px. From 768px the grid uses 1fr 1.2fr columns. Two-column menu and 48px brand remain constant.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
