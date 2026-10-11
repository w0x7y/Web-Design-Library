import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-switch-dependent-options",
  name: "Toggles — Switch with dependent delivery options",
  category: "toggles",
  tags: ["stacked", "form", "compact"],
  description: "An enabling switch sits above a separate bordered group of delivery choices that appears when enabled. Use for a parent preference with optional details.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Enable summaries                         [On]        │
│ Control summary delivery.                            │
│ ┌──────────────────────────────────────────────┐     │
│ │ Delivery choices                             │     │
│ │ [x] Daily summary                            │     │
│ │ [ ] Weekly summary                           │     │
│ │ Choose one or both delivery intervals.       │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px root grows to 384px at sm. A justified header pairs a short label and hint with a 44px by 24px switch. The dependent fieldset sits 16px below with 16px padding and two checkbox rows separated by 12px. A note follows by 12px.",
    hierarchy: "Read Enable summaries and its hint, then Delivery choices when enabled. The switch has role=switch and a described-by hint. Delivery labels use at most 2 words and the note at most 8 words; native checkboxes remain independently named.",
    states: "The switch starts on and reveals the fieldset through CSS. Switching off hides the dependent controls. The thumb shifts 20px; a system-color thumb and border preserve its position in forced colors. Focus outlines the track or native checkbox. Daily summary starts checked.",
    responsive: "The root changes from 288px to 384px at 640px. The header and dependent checkbox stack keep their arrangement. Hiding the dependent group reduces the component height.",
    usage: "Use for one enabling preference with a few optional subordinate choices. Choose an always-visible switch list when settings are independent. Variations: add another interval, start the parent off, or replace delivery choices with content categories.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
