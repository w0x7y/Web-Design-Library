import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-centered-links',
  name: 'Footer — Centred links',
  category: 'footer',
  tags: ['centered', 'row', 'compact'],
  description:
    'A centred identity, wrapping links and social icons form a compact footer. Use it when six destinations are enough.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                             Logo                             │
│                                                              │
│           Product  Pricing  Docs  About  Blog  Contact       │
│                                                              │
│                    [Social icon links]                       │
│                        Copyright line                        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white footer has a neutral-200 top border and a 1152px max-w-6xl container with 24px side and 48px vertical padding. A centred flex column uses 24px gaps between Logo, six-link nav, four-link social row and copyright. The 24px logo glyph sits beside semibold text. Navigation has 24px column and 12px row gaps; social glyphs are 20px with 20px gaps.',
    hierarchy:
      'Logo anchors the centre, followed by six 14px links, four social links and 14px muted copyright. Limit links to 1 word and copyright to a short year-and-owner line. Social controls have accessible names.',
    states:
      'Text links hover from neutral-900 to neutral-600. Social links hover to neutral-600. All content is static. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'The centred stack stays the same at all widths. Navigation wraps into centred lines with 12px row gaps. No breakpoint changes spacing, type or alignment.',
    usage:
      'Use for a small site with a short destination list. Choose footer-link-columns for grouped navigation. Variations: omit social links, reduce links to four, or add a short descriptor under Logo.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
