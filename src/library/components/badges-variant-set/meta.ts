import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-variant-set",
  name: "Badges — Styles, sizes and indicators",
  category: "badges",
  tags: ["row", "compact"],
  description: "Three captioned rows compare badge treatments, indicators, and shape or size. Use as a neutral badge vocabulary with each variation named.",
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────────────────┐
│ Styles                              │
│ (Outline) (Solid) (Subtle) (Dashed) │
│ Indicators                          │
│ (Dot) (Ring) (Check) (Count 12)     │
│ Shape and size                      │
│ (Pill) [Square] (Small) (Large)     │
└─────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) root expands to 416px (sm:w-[26rem]) at 640px. Three groups have 20px gaps; 12px captions sit 8px above role=list grids with two content-sized columns with 8px gaps, becoming flex-wrap rows at 640px. The badge uses 10px horizontal and 2px vertical padding, a 1px neutral-300 border and 12px medium text. Indicators are 6px dots or a 12px check. Size examples are 20px and 28px tall; the shape examples compare full and 6px radii.",
    hierarchy: "Read Styles, Indicators, then Shape and size. Every treatment has a visible word naming it. Solid uses neutral-900 with white text, subtle neutral-100 with neutral-700, dashed changes border style. Indicator badges name Dot, Ring, Check and Count; the number is 12px tabular. Keep badge labels to one or two short words.",
    states: "Static text and glyphs, with no hover, focus, open, selected or disabled behaviour. Meaning is carried by labels and shapes as well as neutral fill.",
    responsive: "At 640px width increases from 288px to 416px. Below 640px every group has two columns sized to their badge contents. At 640px it becomes a wrapping flex row with 8px gaps. Type and indicator dimensions stay unchanged.",
    usage: "Use to compare badge anatomy and create a design-system reference. Pick badges-status-list to place status beside real row content. Variations: use only the four styles, pair size examples with counts, or replace the check with another named status glyph.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
