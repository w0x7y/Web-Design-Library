import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-activity-feed',
  name: "Dashboard — Activity feed",
  category: 'dashboard',
  tags: ["stacked", "list", "compact"],
  description: "A dated timeline of seven activity items with a quoted comment and file chip. Use it to show a readable history of changes in one column.",
  preview: { kind: 'section' },
  wireframe: `┌─────────────────────────────────────────────────────────┐
│Activity title                 [All] [Comments] [Changes]│
│Today                                                    │
│Avatar ┬ Name + action + [Item]                   Time   │
│       │ ┌─────────────────────────────────────────┐     │
│       │ │ Quoted comment                          │     │
│       │ └─────────────────────────────────────────┘     │
│Avatar ┼ Name + action + [Item]                   Time   │
│       │ [File chip]                                     │
│Avatar ┼ Name + action + [Item]                   Time   │
│Avatar ┴ Name + action + [Item]                   Time   │
│Yesterday                                                │
│Avatar ┬ Name + action + [Item]                   Time   │
│Avatar ┼ Name + action + [Item]                   Time   │
│Avatar ┴ Name + action + [Item]                   Time   │
│[Load older activity]                                    │
└─────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a centred container, 24px side padding (px-6), 64px vertical padding (py-16), and 96px from 640px (sm:py-24). A max-w-3xl (768px) container has a wrapping title/filter header and day groups 32px below. Each ordered list uses 32px avatar columns, 16px gaps and a 1px neutral-200 vertical connector at the avatar centre. Rows have 24px bottom spacing. Content has 14px sentences and 12px times; one blockquote uses rounded-lg, neutral-50 and p-4, and one outlined rounded-md file chip has 8px padding. A 44px secondary older-activity link follows by 24px.",
    hierarchy: "The page heading is 30px semibold, 36px from 640px; panel titles are 16px semibold, body and labels 14px, and metadata 12px or 14px. Read the 30px heading, 14px filter links, 16px day titles and seven chronological sentences. Visible names accompany decorative initials. Item and file names are underlined links. Action sentence up to 12 words, item name up to 4, comment up to 20 and file name up to 20 characters. Times use semantic time elements with machine-readable dates.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. All has aria-current=true and a solid bottom border, so selection does not depend on fill. Filters, item links, file link and older-activity link are CSS-only action slots. No disabled or expanded states.",
    responsive: "The timeline remains one column at every width. Below 640px timestamps sit below the sentence; from 640px each sentence/time row is horizontal with the time aligned right. The avatar column remains 32px, text wraps, and connectors join items only within each day group.",
    usage: "Use for a compact chronological history. Pick dashboard-main-rail when rows are scheduled future items rather than events. Variations: group by week, replace the quote with a status-change note, or add a second attachment chip.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
