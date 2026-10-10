import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-search-scopes",
  name: "Inputs — Search with scope filters",
  category: "inputs",
  tags: ["stacked", "form", "icons", "compact"],
  description: "A search field sits above radio scope pills and three recent-query links. Use for a compact search entry point with native scope selection.",
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────┐    │
│ │ Search icon  Search items          [Cmd K] │ │
│ └─────────────────────────────────────────┘    │
│ (All) (Titles) (Tags) (People)                 │
│ Recent                                         │
│ Clock icon   Recent query                      │
│ Clock icon   Saved search                      │
│ Clock icon   Previous lookup                   │
└────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) search form expands to 416px (sm:w-[26rem]) at 640px. The 40px kit search field has a 16px inset search icon and a trailing bordered mono key hint. After 12px, four 32px radio pills wrap with 8px gaps. Recent sits 20px below the scopes, followed by three 36px link rows with 16px clock icons and 8px gaps.",
    hierarchy: "Search reads first, then the four scope choices, then the 12px Recent caption and query links. The search label and Scope legend are sr-only. Query slots up to 4 words; scope labels up to 6 characters. A Command-K key hint is decorative and does not claim a working shortcut.",
    states: "Search shows a 2px neutral-900 focus-visible outline offset 2px. Scope labels fill neutral-50 on hover; checked radios fill the label neutral-900 with white text. Radios remain native; checked labels use a dashed border and bold text in forced-colors mode. A focused radio outlines its label via has-focus-visible. Recent links fill neutral-100 on hover and show the standard focus outline.",
    responsive: "At 640px only the width increases from 288px to 416px. Four scope pills fit one row at 288px and can wrap for longer labels. Search, scopes and recent links stay stacked.",
    usage: "Use when a compact search needs scopes and recent entries. Pick inputs-leading-trailing-addons for a search field without suggestions. Variations: reduce scopes to two, replace recent entries with saved queries, or remove the decorative key hint.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
