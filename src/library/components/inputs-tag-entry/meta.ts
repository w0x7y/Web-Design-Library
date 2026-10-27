import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-tag-entry',
  name: 'Inputs — Tag entry with chips inside the field',
  category: 'inputs',
  tags: ['stacked', 'row', 'form', 'compact'],
  description: 'Added tags sit as removable chips inside the field border, followed by an inline text input, a hint and a row of suggested tags. Use when people attach several short labels to one item.',
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Tags                                         3 of 10 │
│ ┌──────────────────────────────────────────────────┐ │
│ │ (Research x) (Draft x) (Internal x)  Add a tag   │ │
│ └──────────────────────────────────────────────────┘ │
│ Press Enter after each tag to add it.                │
│ Suggested  [+ Planning]  [+ Review]                  │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A 288px (w-72) root grows to 416px (sm:w-[26rem]) at 640px. A label row puts Tags and a 3 of 10 count at opposite ends, 6px above the field. The field is a wrapping flex box at least 40px high with a 1px neutral-300 border, 6px radius, 6px side and 4px vertical padding, and 6px gaps across and 4px between rows. Each 28px chip has a neutral-50 fill, a 1px neutral-300 border, full radius, 12px medium text and a 20px round remove button with a 12px X. The 28px inline input is at least 96px wide and takes the rest of its row. The hint sits 6px below the field, and a Suggested row of 28px dashed add buttons follows 16px lower.',
    hierarchy: 'Read Tags and the count, the chips in order, the input, the hint, then Suggested. The chips are a role=list named Added tags, and each remove button names its tag, such as Remove tag Research. The input is described by the count and the hint. Suggestions are a second list labelled by the Suggested caption; each button names the tag it adds. Keep tags to 1 or 2 words and the hint under 8 words.',
    states: 'Focus in the text input draws a 2px neutral-900 outline offset 2px around the whole field through has-[input:focus-visible]. The input itself uses focus-visible:outline-hidden, which keeps a transparent outline for forced-colors mode. Remove buttons fill neutral-200 and darken their X on hover; suggestion buttons fill neutral-50. Every button shows the standard focus outline. Adding a tag on Enter, removing chips, updating the count and enforcing the 10-tag limit belong to the host.',
    responsive: 'Only the width changes at 640px, from 288px to 416px. On mobile the three chips fill the first row and the input wraps to a second row inside the same border; at 416px the input fits beside the chips. Chips and suggestions wrap instead of overflowing.',
    usage: 'Use for tags, labels, keywords or recipients on one item. Pick badges-removable-chips for applied filters shown outside a field, or a checkbox list when the choices are fixed. Variations: drop the suggestions row, replace the count with Optional, or add an error message for when the limit is reached.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
