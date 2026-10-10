import type { ComponentMeta } from '../../types'

export default {
  slug: 'product-card-typeface',
  name: 'Typeface specimen product',
  category: 'product-card',
  tags: ['editorial', 'light'],
  description:
    'A digital typeface card with a large system-serif specimen, family details and a licensing link. Use it in font stores and design resource catalogs.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px framed typeface card, 320px at 640px. A ruled specimen panel has 20px side padding, a 112px decorative serif glyph pair and a small slogan. A 16px information body includes a 24px family title, summary, two licensing details and a text link.',
    style:
      'White body, #ece9df specimen paper, stone-950 text and thin dark frame with square corners. System-serif specimen has 112px size, line height 1 and -0.08em tracking, followed immediately by a 48px italic ampersand with line height 1. The 9px panel labels are monospace with 0.1em uppercase tracking. The serif slogan is 12px with 16px line height. Family title is 24px with 32px line height; description is 12px stone-600 with 16px line height. The 11px licensing details are 16px apart above a stone-200 rule with 12px top padding; values are medium-weight with 4px top margins. The 12px link has 4px corners, 4px underline offset and a 14px arrow. The specimen is illustrative rather than a font dependency.',
    states:
      'The family link is named "Explore the family: Margin Serif" for assistive technology, is underlined, changes to stone-600 on hover and shows a 2px stone-950 focus outline offset 2px. There is no animation or remote font request.',
    responsive:
      'Fixed width moves from 288px to 320px at 640px. Specimen stays the same size and licensing details remain side by side; body description wraps as needed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
