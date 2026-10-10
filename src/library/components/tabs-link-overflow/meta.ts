import type { ComponentMeta } from '../../types'

export default {
  slug: "tabs-link-overflow",
  name: "Tabs — Link tabs with counts and More menu",
  category: "tabs",
  tags: ["row", "layered", "numbers", "compact"],
  description: "Navigation links with count pills share an underline row and an open More disclosure. Extra destinations move into the disclosure on narrow screens.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [All 24] [Open 12] [Closed 8] [Drafts 4] [More ^]    │
│ ──────────                                           │
│                                 ┌───────────────┐    │
│                                 │ [Archived]    │    │
│                                 │ [Assigned]    │    │
│                                 │ [Following]   │    │
│                                 └───────────────┘    │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative 288px (w-72) root reserves 256px (h-64) height for the open mobile menu; at 640px it becomes 512px (sm:w-[32rem]) by 192px (sm:h-48). A flex navigation row with 8px minimum gaps and space-between alignment sits on a 1px divider. Links and More are 40px high with 2px bottom indicators. Counts are 12px tabular figures in neutral-100 pills. The right-aligned 192px menu sits 8px below More, with rounded-md corners, a border, shadow-lg, 4px padding and 36px links.",
    hierarchy: "The current page is All, marked by aria-current and a dark underline. Each visible page link has a one-word label and short count. More opens additional one-word destinations. These are navigation links, so they retain link semantics and do not switch content panels.",
    states: "More is open on entry; its chevron rotates 180 degrees when open with a 150ms transition. Summary activation closes and reopens the panel. Links hover to neutral-700 with a neutral-300 underline; the current link keeps neutral-900 text and underline. Menu links hover neutral-100. All links and summary show a 2px neutral-900 focus outline offset 2px. No disabled links are shown.",
    responsive: "Below 640px All and Open remain in the row, while Closed and Drafts join the three permanent destinations in More. At 640px all four count links show in the row and More contains three destinations. Mobile height is increased to 256px so all five menu links fit within the element frame.",
    usage: "Use for page navigation with counts and secondary destinations. Choose tabs-underline-panels for local radio-controlled content or dropdowns-action-menu for commands. Variations: replace counts with short status pills, select a different current page, or reduce the permanent overflow destinations.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
