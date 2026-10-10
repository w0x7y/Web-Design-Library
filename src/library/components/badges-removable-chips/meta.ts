import type { ComponentMeta } from '../../types'

export default {
  slug: "badges-removable-chips",
  name: "Badges — Removable filter chips",
  category: "badges",
  tags: ["row", "compact"],
  description: "Active filters appear as wrapping chips with individual remove actions, an add control and a result count. Use for a compact applied-filter summary.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────┐
│ Active filters                    [Clear all]    │
│ (Status: Open [X]) (Type: Any [X])               │
│ (Owner: Me [X]) (Date: Today [X]) [+ Add filter] │
│ 1,284 results                                    │
└──────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) root grows to 448px (sm:w-[28rem]) at 640px. A 14px medium title and text Clear all button share a header. A role=list chip row sits 12px below, wraps with 8px gaps and includes an Add filter button. Each 28px full-radius chip has a 1px neutral-300 border, 10px left and 4px right padding, a 12px key/value label and a 20px round remove button with a 12px X. A 14px result count follows after 16px.",
    hierarchy: "Read Active filters, four Key: Value chips, Add filter, then the 1,284 results count. Keys use neutral-500; values neutral-900. Remove controls name their complete filter. Keys and values each up to one short word; result count is a generic realistic value.",
    states: "Remove hover fills neutral-200 and uses focus-visible:outline-hidden; its chip shows a 2px neutral-900 outline offset 2px through has-[:focus-visible]. The twin adds the transparent forced-colors focus fallback. Add filter has a dashed border, neutral-50 hover fill and standard focus outline. Clear all hovers neutral-600 and shows that outline. Actions are static slots for host filtering behaviour.",
    responsive: "At 640px only the width grows from 288px to 448px. Chips wrap naturally into three mobile rows and fewer desktop rows; controls and the result count keep their dimensions.",
    usage: "Use for applied search or table filters. Pick badges-tag-groups when labels are static metadata. Variations: remove Clear all for mandatory filters, add a filter count to the heading, or replace the result count with a short summary.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
