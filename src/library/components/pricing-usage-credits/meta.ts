import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-usage-credits',
  name: 'Usage credit pricing',
  category: 'pricing',
  tags: ['dark', 'minimal'],
  description:
    'A transparent usage pricing section with a unit price, example monthly bill and included infrastructure. Use it for metered developer products.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px maximum-width centered grid with 24px side and 80px vertical padding and 48px gaps. Left side has a monospace eyebrow, h2 20px below, rate region 32px later with 24px vertical padding, three benefits 24px later with 12px row spacing, and a signup link 32px below. Example bill has a wrapping title/badge header with 12px gaps, a definition list 32px below and five rows 20px apart. Rows use flex space-between and 16px gaps; total has 24px top padding and a top rule. A spending note has 24px top margin, 20px top padding and a top rule.',
    style:
      'Default sans on zinc-950 with white headings, zinc-400 body, zinc-300 benefits and cyan-300 accents. Heading is 36px semibold, 1.25 line height and -0.025em tracking; eyebrow is 12px uppercase monospace with 0.1em tracking. Unit price is 48px regular monospace with line height 1 and tight tracking. Rate rules and bill borders are 1px zinc-700. Bill has zinc-900 fill, 16px radius and 24px padding. Bill title is 20px semibold; outlined badge is 12px zinc-400 with full radius and 12px horizontal/4px vertical padding. Rows are 14px with monospace amounts; message counts use tabular numerals. Total is 36px cyan-300 monospace with 40px line height. Spending note is 12px zinc-400 with 1.625 line height. Signup link is cyan-300/zinc-950, 16px medium, minimum 48px tall, 8px radius and 20px side padding with a 16px arrow and 12px gap.',
    states:
      'Create a free account is the only control. It fills cyan-200 on hover-capable devices and shows a 2px white outline offset 2px on keyboard focus, including forced-colors mode. Benefits retain role=list, decorative checks/arrow are aria-hidden and the static example uses a semantic definition list. No motion or transitions.',
    responsive:
      'Below 1024px the regions stack with a 48px gap. At 1024px they form two equal columns with an 80px gap. Heading steps from 36px to 48px at 640px with unchanged 1.25 line height; unit price steps from 48px to 60px. Bill padding increases from 24px to 32px at 640px. All bill amounts are shrink-free, so labels wrap without splitting amounts; no fixed-width table.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
