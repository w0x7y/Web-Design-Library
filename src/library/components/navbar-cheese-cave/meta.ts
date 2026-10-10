import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-cheese-cave',
  name: 'Cheese cave tasting index',
  category: 'navbar',
  tags: ['minimal', 'editorial', 'light'],
  description:
    'A cheese-cave header for Rind, with an oversized serif wordmark, a numbered two-column index and a tasting notice. Use it for cheesemongers and farmhouse cheese affineurs.',
  preview: { kind: 'section' },
  fonts: ['Young Serif', 'DM Sans:wght@400'],
  brief: {
    layout:
      'A 1280px maximum grid with 24px side and 32px vertical padding, 32px gaps. A 48px wordmark sits above a 12px uppercase descriptor with 16px spacing. Opposite it is a two-column index with 24px column and 8px row gaps. Each 14px link has 12px vertical padding, a 1px bottom rule and a trailing index number, with 12px between label and number. A 12px tasting notice spans the menu after 12px top margin.',
    style:
      'Young Serif 400 wordmark and DM Sans 400 body on orange-50, with red-950 ink, red-200 rules and red-800 tasting notice. Wordmark has 1 line height and -0.025em tracking. Descriptor has 0.05em tracking. No shadows or rounded corners.',
    states:
      'Wordmark and index links underline on hover. Index underlines have 4px offset. All links show a 2px currentColor keyboard-focus outline offset 2px, including forced colours. Index numbers are decorative. No motion.',
    responsive:
      'Identity and index stack with 32px gap below 768px. At 768px use 1fr 1.2fr columns. The menu retains two columns and the wordmark stays 48px at all sizes; the tasting notice wraps at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
