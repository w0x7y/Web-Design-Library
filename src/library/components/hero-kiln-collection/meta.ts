import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-kiln-collection",
  name: "Ceramics collection plate",
  category: "hero",
  tags: [
    "minimal",
    "light"
  ],
  description: "A ceramics collection hero with a wide vessel illustration and a restrained collection caption. Use it for a maker-led product release or studio shop.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Young Serif"
  ],
  brief: {
    layout: "A 1280px container padded 24px by 48px. Brand and issue header, then a 32px-gap introduction using 2:1 columns at 768px. The main 44px headline sits left and collection description right. A clipped vessel illustration, 224px tall on phones and 320px from 640px, separates introduction from a bordered, wrapping caption and shop link row.",
    style: "Young Serif 400 on red-50 with red-950 ink, red-800 details and red-200 rules. Headline is 44px, 1.1 leading, increasing to 64px at 640px. Bowl illustration uses warm pale red, muted clay and dark red line work. CTA is a text link with a 1px underline rule, no button container, radius or shadows.",
    states: "Collection link becomes red-700 on hover and shows a 2px red-950 focus outline offset 4px. Vessel SVG is decorative; the caption describes the collection and materials. No animation.",
    responsive: "At 320px introduction stacks, title is 44px and the illustration is 175% wide with -37.5% left margin inside an overflow-hidden wrapper to enlarge the main bowl. At 640px title becomes 64px, illustration height becomes 320px, width returns to 100% and left margin to zero. At 768px introduction becomes 2:1 columns. Caption and shop action wrap independently at every width."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
