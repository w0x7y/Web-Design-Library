import type { ComponentMeta } from '../../types'

export default {
  slug: "buttons-bulk-selection-bar",
  name: "Buttons — Bulk selection bar",
  category: "buttons",
  tags: ["row", "split", "numbers", "compact"],
  description: "A selection summary and clear control form one row above a grouped pair of batch actions. Use for a compact selection toolbar.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ 3 selected                                  [x]      │
│ [Icon Move]                   [Export selected]      │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px card grows to 448px at sm. The border encloses 16px padding. A 32px clear control aligns with the selection count; two equal 44px action columns sit 12px below with an 8px gap.",
    hierarchy: "Read the selected count, then Move and Export selected. Clear selection has an accessible label despite its icon-only appearance. Keep action labels under 3 words and the count under 5 digits.",
    states: "Clear and Move hover neutral-50; Export selected hovers neutral-700. All enabled controls have the standard 2px offset outline. The count and actions are host-managed slots without local state.",
    responsive: "The root changes from 288px to 448px at 640px. Both action columns remain equal; Export selected wraps only if replaced with a longer label, so retain the 3-word limit.",
    usage: "Use near a collection after selecting several records. Choose individual row actions when only one item is affected. Variations: replace Export with Archive, change the count, or pair Download with Share.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
