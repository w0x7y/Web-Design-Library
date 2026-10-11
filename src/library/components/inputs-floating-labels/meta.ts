import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-floating-labels",
  name: "Inputs — Labels inside tall fields",
  category: "inputs",
  tags: ["stacked", "form", "compact"],
  description: "Two tall fields keep their labels inside the border and raise them when focused or filled. Use when compact forms need persistent field names.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ ┌──────────────────────────────────────────────┐     │
│ │ [Display name]                               │     │
│ └──────────────────────────────────────────────┘     │
│ Use the name people should see.                      │
│ ┌──────────────────────────────────────────────┐     │
│ │ [Email address]                              │     │
│ └──────────────────────────────────────────────┘     │
│ Use a contact email address.                         │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) stack grows to 384px at sm with 16px gaps. Each relative field contains a 56px input with 12px horizontal padding, 24px top padding and 8px bottom padding. The absolute label sits 12px from the left; a hint follows by 6px.",
    hierarchy: "Read each field name inside its boundary, then its hint. Labels use at most 2 words and hints under 9 words. The label remains visible after typing; aria-describedby connects each hint to its input.",
    states: "An empty unfocused field shows a 14px label at top-4. Focus or entered text moves it to top-1.5 at 12px. The field draws a 2px outline offset 2px on keyboard focus. There are no error or disabled examples.",
    responsive: "The root grows from 288px to 384px at 640px. Fields remain full width in one column; label positions and 56px heights do not change.",
    usage: "Use for short forms with persistent labels inside the field. Choose external labels for long field names or complex errors. Variations: add a phone field, prefill a value, or replace the name with a short reference code.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
