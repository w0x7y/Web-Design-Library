import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-single-row',
  name: 'Footer — Single row',
  category: 'footer',
  tags: ['row', 'compact'],
  description:
    'Identity and copyright, four links and social icons share one desktop row. Mobile stacks the three groups.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo  Copyright      Product About Privacy Terms   [Social]  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white footer has a neutral-200 top border and a 1152px max-w-6xl container with 24px side and 32px vertical padding. At 768px a justified flex row aligns three groups with 24px gaps: Logo and 14px copyright, four-link nav with 16px gaps, and three 20px social glyphs with 16px gaps. Identity may wrap inside its group.',
    hierarchy:
      'Logo and year lead, then four 14px destinations and social links. Limit copyright to 4 words and links to 1 word. Social glyphs are decorative inside named links.',
    states:
      'Text links hover from neutral-900 to neutral-600. Social glyphs hover to neutral-600. There are no open or selected states. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 768px the three groups stack left aligned with 16px gaps. At 768px they share a justified row. Links and identity wrap at any width to prevent overflow.',
    usage:
      'Use on a short page or app shell. Choose footer-centered-links for a centred close with more destinations. Variations: omit social links, replace Product with Help, or show copyright alone in the first group.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
