import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-main-rail',
  name: "Dashboard — Main list with summary rail",
  category: 'dashboard',
  tags: ["sidebar", "list", "numbers"],
  description: "A schedule list beside a fixed summary rail that moves above the list on mobile. Use it when current items need a concise total and supporting context.",
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│Overview title                              Date range│
│──────────────────────────────────────────────────────│
│Schedule                         │ Summary label      │
│[Filter schedule]                │ Key figure         │
│09:00  Item / metadata [Ready]    │ Fact       Fact   │
│10:30  Item / metadata [Pending]  │ Fact       Fact   │
│12:00  Item / metadata [Ready]    │ [More context v]  │
│14:00  Item / metadata [Review]   │ Context when open │
│16:30  Item / metadata [Pending]  │                   │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A white section with a centred container, 24px side padding (px-6), 64px vertical padding (py-16), and 96px from 640px (sm:py-24). A max-w-7xl (1280px) container has a wrapping header and divider. Content starts 32px below with a 32px gap; at 1024px the grid is minmax(0,1fr) 320px. The main list has five divided schedule rows with 56px time columns, flexible titles and badges. A neutral-50 rounded-lg rail uses p-6, a 48px key figure, a two-column four-fact dl with 16px gaps and a bordered details note.",
    hierarchy: "The page heading is 30px semibold, 36px from 640px; panel titles are 16px semibold, body and labels 14px, and metadata 12px or 14px. Read the heading, summary total and schedule. The 48px figure anchors the rail; schedule titles are 16px semibold, timestamps 14px, row metadata 12px and rail facts 14px. Keep page title to 5 words, row titles to 4, metadata to 6, summary label to 4 and context note to 35. Status is an outlined badge with explicit wording.",
    states: "All links and buttons show a 2px neutral-900 focus-visible outline offset 2px. Primary actions hover to neutral-700, secondary actions to neutral-50, and underlined links to neutral-600. Transitions use the default 150ms timing. More context is closed initially and toggles a 14px note with native details. Its summary shows the standard focus outline. List statuses and facts remain static; no selected or disabled state.",
    responsive: "The summary rail precedes the list in DOM order. Below 1024px the full-width rail appears before the list. From 1024px it follows the main list visually in a 320px right column. Below 640px each badge moves under its title in column 2 while the time spans both lines; from 640px it aligns in a third column.",
    usage: "Use for a schedule supported by a total and compact context. Pick dashboard-split-panels when the summary should have equal width. Variations: show a queue instead of times, swap totals for capacity, or add a breakdown in the details note.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
