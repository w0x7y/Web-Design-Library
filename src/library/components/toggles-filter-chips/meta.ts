import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-filter-chips',
  name: "Toggles — Filter chip toggles",
  category: 'toggles',
  tags: ["row", "form", "compact"],
  description: "A wrapping row of checkbox chips shows a check glyph on each selected filter, under a group label with a Clear action. Use for multi-select facets that refine a list or search as soon as they change.",
  preview: { kind: 'element' },
  wireframe: `┌─────────────────────────────────────────────────────┐
│ Content type                                [Clear] │
│ (Articles) ([x] Guides) (Videos) ([x] Templates)    │
│ (Case studies) (Webinars) (Podcasts)                │
│ Results update as you select types                  │
└─────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) group widens to 448px (sm:w-[28rem]). A header row places the 14px semibold group label and a Clear text button at opposite ends (justify-between, gap-4). Chips wrap in a flex row 12px below with 8px gaps. Each chip is a 32px-tall (h-8) rounded-full label with a 1px neutral-300 border, 12px side padding and 14px medium text, with a 6px gap after a 16px check glyph. A 12px neutral-500 hint sits 12px below the chips.",
    hierarchy: "Read the group label, the chips in reading order, then the hint. Chip labels are one or two words. The wrapper is role=group with aria-labelledby on the label and aria-describedby on the hint; each chip is a native checkbox named by its visible text.",
    states: "Guides and Templates start selected. A selected chip gets a neutral-900 border, neutral-100 fill, neutral-900 text and a leading check glyph, so selection shows as a shape as well as a color, and the chip widens by the glyph. Hover fills an unselected chip neutral-50 and a selected chip neutral-200. Clear stays invisible, and out of the tab order, until a chip is selected through group-has-checked; it is a plain button for the app to wire to its filter state. Chips show a 2px neutral-900 outline offset 2px on keyboard focus, and Clear has its own. In forced-colors mode chip borders use ButtonText, selected borders Highlight, and the check glyph remains.",
    responsive: "Below 640px the 288px group wraps the seven chips onto three rows; from 640px the 448px group needs two. Chip size, gaps and the header row stay the same, and the group grows taller as chips wrap.",
    usage: "Use for multi-select facets that refine results immediately. Pick badges-removable-chips to summarize filters already applied, or dropdowns-filter-checkboxes when choices need counts, search or an Apply step. Variations: add a count inside each chip, make a single-select row from radio chips, or end the row with a More chip that reveals the rest.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
