import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-expandable-rows',
  name: 'Data table — Expandable rows',
  category: 'data-table',
  tags: ['stacked', 'table', 'list'],
  description:
    'A table-like list of native expandable records with supporting fields and actions. Use when scanning summary rows and opening one record in place is easier than adding more columns.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌─────────────────────────────────────────────────────────┐
│ Item details                                            │
│ Description                                             │
│   Name              Owner        Updated        Amount  │
│ ──────────────────────────────────────────────────────  │
│ > Item 001          Alex Rivera  Mar 14         $240    │
│ v Item 002          Jordan Lee   Mar 13         $160    │
│   ┌──────────────────────────────────────────────────┐  │
│   │ Reference: 002           Status: Pending         │  │
│   │ Created: Mar 01          Units: 8                │  │
│   │ [View record] [Download]                         │  │
│   └──────────────────────────────────────────────────┘  │
│ > Item 003          Sam Taylor   Mar 12         $200    │
│ > Item 004          Casey Morgan Mar 11         $120    │
│ > Item 005          Riley Chen   Mar 10         $300    │
└─────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 1024px max-w-5xl section with 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. A bordered rounded-lg list starts 32px below the header. An aria-hidden column strip and five details summaries share a grid: 16px chevron, flexible name, 80px amount below 768px; from 768px add 1.2fr Owner and 1fr Updated beside a 2fr Name. Column gaps are 12px; summaries have 16px horizontal/vertical padding. Open panels have a top hairline, neutral-50 fill and 24px p-6, with a 24px-gap definition list and action row.',
    hierarchy:
      'The 30px heading, 36px at 640px, and 16px description explain expansion. Summaries contain 14px names, owners and dates and right-aligned tabular amounts. Visually hidden labels identify each visible summary cell. An open body shows Reference, Status badge, Created and Units; mobile also includes Owner and Updated. Slots: description 18 words, references 8 characters, names 24, dates 12, action labels 2.',
    states:
      'Primary actions fill neutral-700 on hover; secondary actions fill neutral-50. Controls have 2px neutral-900 focus-visible outlines offset 2px. Buttons are 44px tall with 6px rounded-md corners; inputs and selects are 40px tall. Colour transitions take 150ms. The second details row starts open. Native summaries independently toggle their panels and show visible keyboard focus. A 16px chevron rotates 90 degrees using group-open with a 150ms transition. View record and Download links name each item. No disabled actions or scripted state. The list replaces table markup so native details can span the summary and expanded panel accessibly.',
    responsive:
      'Below 768px only chevron, Name and Amount appear in summaries; Owner and Updated move into the expanded definition list. At 640px the definition list becomes two columns; below it all fields stack. Actions wrap. Summary grids fit 320px without sideways scrolling. Section padding and headline size increase at 640px.',
    usage:
      'Use when a compact summary needs optional fields and row-specific actions. Pick data-table-stacked-cards when every field must remain visible on mobile, or data-table-row-selection for bulk work. Variations: show invoice line metadata, replace Units with a timestamp, or add a note below the expanded fields.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
