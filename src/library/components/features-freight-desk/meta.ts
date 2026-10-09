import type { ComponentMeta } from '../../types'

export default {
  slug: "features-freight-desk",
  name: "Freight desk operations",
  category: "features",
  tags: [
    "corporate",
    "light"
  ],
  description: "A freight platform section with two capability bands and readable consignment examples. Use it to explain operational software through concrete shipments and handovers.",
  preview: {
    kind: "section"
  },
  fonts: [],
  brief: {
    layout: "1280px container, 24px horizontal and 64px vertical padding. A 36px heading precedes two horizontal capability bands bounded by zinc-300 rules. Each band has a feature title, supporting capability and white example panel, in three equal columns from 768px.",
    style: "Default sans on zinc-50, zinc-950 headings, zinc-600 copy, red-700 operational labels. Headline 36px semibold at 1.1 line height, feature titles 20px and body 14px at 1.625 line height. Example panels have 1px zinc-200 borders and 8px corners; reference numbers use the default mono stack.",
    states: "Workflow link underlines on hover and shows a 2px zinc-950 keyboard outline offset 4px. Delivery status includes a check and text; colour does not carry meaning alone. All examples are static and no animation is used.",
    responsive: "Each capability band stacks below 768px and becomes three columns above. Main title grows to 48px at 640px. Footer wraps. At 1024px outer padding becomes 96px vertical and 32px horizontal."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
