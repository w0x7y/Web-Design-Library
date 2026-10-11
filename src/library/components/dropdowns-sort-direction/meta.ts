import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-sort-direction",
  name: "Dropdowns — Sort field and direction panel",
  category: "dropdowns",
  tags: ["layered", "form", "compact"],
  description: "A sorting disclosure combines a vertical field choice with two side-by-side direction controls. Use when the sort key and direction should be changed independently.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Icon Sort items ^]                                  │
│ ┌──────────────────────────────────────────────┐     │
│ │ Sort by                                      │     │
│ │ (x) Updated date                             │     │
│ │ ( ) Created date                             │     │
│ │ ( ) Item name                                │     │
│ │ ──────────────────────────────────────────── │     │
│ │ Direction                                    │     │
│ │ ( ) Ascending            (x) Descending      │     │
│ │ Apply one field and one direction.           │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px disclosure grows to 384px at sm. A 44px trigger leads a full-width panel by 8px. The panel has 12px padding, three 32px field rows and a direction fieldset separated by a top border and 12px spacing. Two equal 36px direction labels use an 8px gap.",
    hierarchy: "Read Sort items, the Sort by legend and its three options, then Direction and the shared hint. Both radio groups have separate names and described-by guidance. Field labels use at most 2 words and direction labels one word.",
    states: "The disclosure starts open with Updated date and Descending checked. Each native radio group supports independent selection and arrow keys. Native checks preserve state in forced colors; every input and summary shows a 2px offset focus outline. Rows hover neutral-50.",
    responsive: "The root grows from 288px to 384px at 640px. Sort fields stay stacked and direction stays in two equal columns. Short labels fit within the mobile panel.",
    usage: "Use when users need to control both a sort key and direction. Choose a single native select for a few precombined sort orders. Variations: replace dates with size values, start Ascending, or omit one sort field.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
