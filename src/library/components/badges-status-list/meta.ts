import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-status-list",
  name: "Badges — Status in list rows",
  category: "badges",
  tags: ["list", "compact"],
  description: "Four divided item rows pair names and timestamps with distinct status glyphs and words. Use for a compact status summary.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────┐
│ Status overview                   [View all]     │
│ ───────────────────────────────────────────      │
│ Item name                         (Dot Live)     │
│ Updated 2 min ago                                │
│ ───────────────────────────────────────────      │
│ Process name             (Half-ring In progress) │
│ Updated 12 min ago                               │
│ ───────────────────────────────────────────      │
│ Attempt name                   (X Failed)        │
│ Updated 1 hour ago                               │
│ ───────────────────────────────────────────      │
│ Queue item                    (Ring Queued)      │
│ Added 2 hours ago                                │
└──────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) card expands to 416px (sm:w-[26rem]) at 640px. It has a 1px neutral-200 border, 8px radius and no outer padding. The header uses 16px horizontal and 12px vertical padding. Four 56px list rows use 16px horizontal padding, 12px gaps and neutral-200 dividers. Left names are 14px medium above 12px timestamps; right badges use standard 12px text, 6px dot indicators, a 10px half-filled ring and a 12px X icon.",
    hierarchy: "The 14px semibold Status overview title and View all link precede four rows. Names truncate while status badges keep their width. Live uses a filled dot, In progress a half-filled ring, Failed an X, Queued a hollow circle. Keep titles under 3 words, names under 5 and timestamps under 5.",
    states: "Badges and rows are static. View all is underlined and changes to neutral-600 on hover; it has a 2px neutral-900 focus outline offset 2px. Status words and different glyphs remain meaningful in forced-colors mode.",
    responsive: "At 640px only the root width grows from 288px to 416px. Row heights remain 56px; min-w-0 and truncation keep names beside nonshrinking status badges.",
    usage: "Use for short status summaries and activity panels. Pick badges-tag-groups for several metadata groups about one item. Variations: change timestamps to short descriptions, use three rows, or add an explicit paused status with a pause glyph.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
