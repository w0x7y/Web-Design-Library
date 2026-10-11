import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-range-endpoints",
  name: "Inputs — Range with endpoints and an exact field",
  category: "inputs",
  tags: ["row", "form", "numbers", "compact"],
  description: "A range slider shows its minimum and maximum beneath the track, beside a compact numeric field. Use when users may choose approximately or enter an exact value.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Item limit                                           │
│ Adjust limit                      Exact limit        │
│ [──────────o──────────]           [50]               │
│ 0                   100                              │
│ Choose a value from 0 to 100.                        │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered fieldset grows to 384px at sm with 16px padding. Its flex row separates a flexible slider from an 80px (w-20) number field by 16px. Slider labels have 8px bottom gaps; its 32px control sits above justified 12px endpoints. The exact field is 40px high.",
    hierarchy: "Read Item limit, Adjust limit and Exact limit, then the endpoint labels and shared hint. Both native inputs are named by visible labels and reference the same hint. Values range from 0 to 100 and use tabular figures.",
    states: "The range and number field begin at 50 and show 2px offset outlines on keyboard focus. The slider uses the native thumb and arrow-key behavior. Each control changes independently until the host connects their values; there are no disabled states.",
    responsive: "The root is 288px below 640px and 384px above. The exact field remains 80px wide; the slider takes the remaining width without overflowing its flexible region.",
    usage: "Use where approximate adjustment and precise entry are both useful. Choose a plain number field for values with no meaningful bounds. Variations: use another maximum, change the step size, or display a unit in the shared note.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
