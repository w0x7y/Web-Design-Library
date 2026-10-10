import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-projector-booth",
  name: "Toggles — Projection booth",
  category: "toggles",
  tags: [
    "brutalist",
    "dark"
  ],
  description: "A cinema projection automation panel with an oversized master switch, next-cue time and local backup opt-in.",
  preview: {
    kind: "element"
  },
  fonts: [
    "Archivo:wght@400;500;600;700"
  ],
  brief: {
    layout: "288px panel, 384px from 640px, with 20px padding and a 2px border. A 30px title precedes a ruled cue strip with 24px time. An 88×40px master switch follows at 20px; a 20px native backup checkbox finishes the panel.",
    style: "Archivo, zinc-950 background, zinc-100 text, zinc-300 hints and zinc-600 rules. Square corners, no shadows. Red-400 cue time and red-600 checked controls. The master has a 28px zinc-400 thumb that travels 48px and becomes zinc-950 when checked.",
    states: "Both controls start checked. Native checkbox behavior supports Space and pointer input. The switch fades to 80% opacity on hover. Every control shows a 2px red-400 focus outline offset 2px. Forced colors retain the switch border and CanvasText thumb. No animation.",
    responsive: "Fixed 288px width below 640px; 384px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
