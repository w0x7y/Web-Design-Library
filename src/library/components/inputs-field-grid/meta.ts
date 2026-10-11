import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-field-grid",
  name: "Inputs — Field grid with mixed widths",
  category: "inputs",
  tags: ["grid", "form", "compact"],
  description: "Three field rows combine full width, flexible plus fixed width, and equal columns. Use for compact related information with different expected lengths.",
  preview: { kind: 'element' },
  wireframe: `┌───────────────────────────────────────────────┐
│ Full name                                     │
│ ┌─────────────────────────────────────────┐   │
│ │ Enter full name                         │   │
│ └─────────────────────────────────────────┘   │
│ City                              Postal code │
│ ┌───────────────────────────┐ ┌───────────┐   │
│ │ Enter city                │ │ 00000     │   │
│ └───────────────────────────┘ └───────────┘   │
│ Country                       Phone           │
│ ┌───────────────────┐ ┌───────────────────┐   │
│ │ Select          v │ │ Enter phone       │   │
│ └───────────────────┘ └───────────────────┘   │
└───────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) grid expands to 416px (sm:w-[26rem]) at 640px, with 16px between three rows. A full-width field leads; the second row is grid-cols-[1fr_6rem] with a 12px gap, and the third row has equal columns with a 12px gap. All controls are min-w-0, 40px high, have 12px side padding and 6px radii. Labels are 14px medium with 6px bottom spacing. A native select uses appearance-none and a 16px decorative chevron 12px from the right. A shared sr-only hint describes all five fields without adding visual height.",
    hierarchy: "Full name leads, then City and Postal code, then Country and Phone. Each field is labelled and linked to the shared hint. Keep labels to 2 words and placeholders to 3; postal values up to 10 characters. The Country select has a neutral prompt and two generic choice slots.",
    states: "All inputs and the select change neutral-300 borders to neutral-400 on hover and show the standard 2px neutral-900 focus-visible outline offset 2px. Placeholders are neutral-500. Select choices use native behaviour; the chevron is pointer-events-none and aria-hidden.",
    responsive: "Only the root changes at 640px, from 288px to 416px. The second row retains its fixed 96px postal column; the last row stays equal columns. All flexible cells and controls have min-w-0 to fit the narrow frame.",
    usage: "Use for related fields with predictable short and long values. Pick inputs-field-anatomy when each field needs its own longer hint or error. Variations: use amount and unit in the mixed row, replace country with a type select, or make the final row full width.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
