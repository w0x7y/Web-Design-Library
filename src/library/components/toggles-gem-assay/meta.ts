import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-gem-assay",
  name: "Toggles — Gem assay",
  category: "toggles",
  tags: [
    "corporate",
    "glass",
    "gradient",
    "light"
  ],
  description: "A gemstone laboratory report-sharing panel with a specimen identifier, facet drawing and independent recipient switches.",
  preview: {
    kind: "element"
  },
  fonts: [],
  brief: {
    layout: "288px panel, 320px from 640px, with 20px padding. A 48px outlined gemstone sits beside a 20px report title and 12px specimen ID with 12px gap. A frosted recipient card follows at 20px with 16px padding, two switch rows and 16px between them. An 11px sharing note finishes the panel.",
    style: "Default sans stack, amber-950 text and amber-900 details. Diagonal amber-50 to orange-200 gradient, 16px outer corners and 1px amber-700 border. Inner glass has white 70% fill, 8px backdrop blur, 12px corners and amber-900 border at 40%. Switches use amber-900 checked tracks, amber-800 off borders and thumbs, white off tracks and checked thumbs.",
    states: "Client portal starts on, Insurer copy off. The 44×24px native switches have 16px thumbs traveling 20px. Hover uses 80% opacity; focus draws a 2px amber-900 outline offset 2px. Forced colors preserve ButtonText borders and CanvasText thumbs. Decorative gemstone SVG is hidden from assistive technology. No animation.",
    responsive: "Fixed 288px width below 640px; 320px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
