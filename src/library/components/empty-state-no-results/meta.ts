import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-no-results',
  name: "Empty state — No results with suggestions",
  category: 'empty-state',
  tags: ["stacked", "list", "icons"],
  description: "A left-aligned no-results panel with a query badge, three suggestions and recovery actions. Use it after a search or filter returns no matches.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│Search icon     [Query label]                         │
│No results for this search                            │
│  - Suggestion for search terms                       │
│  - Suggestion for fewer filters                      │
│  - Suggestion for spelling                           │
│[Clear filters] [Browse all items]                    │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72), 384px from 640px (sm:w-96), bordered rounded-lg panel with 24px padding. The top row pairs a 40px search tile with a neutral-300 outlined query badge. A 16px heading follows by 16px. Three 14px suggestion rows use 8px gaps and 16px decorative bullet glyphs. The action row has 20px top spacing and wraps with 12px gaps.",
    hierarchy: "Read the query context, 16px semibold heading, three suggestions and recovery actions. The badge holds a query label up to 3 words. Keep each suggestion to 4 words and the heading to 6. Clear filters is a 44px outlined control; browsing is an underlined 14px link.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. The query badge and suggestion list are static; no selected or expanded state.",
    responsive: "The same left-aligned stack stays at all widths. The panel grows from 288px to 384px at 640px. The two actions wrap on mobile rather than narrowing their labels; suggestions stay on one line and the total height stays below 340px.",
    usage: "Use after a search that found no matches. Pick empty-state-centered-icon when nothing has been created yet. Variations: show the active filter instead of the query, replace spelling advice with a date suggestion, or link to a search guide.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
