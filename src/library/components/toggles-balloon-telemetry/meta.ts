import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-balloon-telemetry",
  name: "Toggles — Balloon telemetry",
  category: "toggles",
  tags: [
    "gradient",
    "dark"
  ],
  description: "A weather-balloon telemetry widget with an altitude readout, packet archiving switch and compact sensor facts.",
  preview: {
    kind: "element"
  },
  fonts: [
    "DM Mono:wght@400;500"
  ],
  brief: {
    layout: "288px wide, 320px from 640px, 20px padding. A 20px title precedes a 36px altitude readout marked by a 2px left rule and 16px inset. A bordered capture-control row has 12px padding, then a two-column sensor definition list with 16px gap.",
    style: "DM Mono with cyan-50 text and cyan-200 supporting labels. Slate-950 to teal-900 diagonal gradient in oklab, 16px outer radius, cyan-700 1px borders. Capture row is slate-950 with 8px corners; checked switch is cyan-300 with slate-950 thumb. No shadow.",
    states: "Packet capture starts on. The 44×24px native switch has a 16px thumb traveling 20px. Hover uses 80% opacity; focus draws a 2px cyan-200 outline offset 2px. Forced colors retain the border and CanvasText thumb. No animation.",
    responsive: "Fixed 288px width below 640px; 320px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
