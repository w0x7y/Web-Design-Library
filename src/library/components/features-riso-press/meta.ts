import type { ComponentMeta } from '../../types'

export default {
  slug: "features-riso-press",
  name: "Risograph print workshop",
  category: "features",
  tags: [
    "brutalist",
    "dark"
  ],
  description: "A risograph workshop section with oversized typography, a two-colour registration illustration and paper notes. Use it for independent print studios and analogue production services.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Syne:wght@400..700"
  ],
  brief: {
    layout: "1280px container with 24px horizontal and 64px vertical padding. A 48px headline sits over a framed print panel. A pink ink panel and a dark paper panel split 1.3:1 from 1024px. The registration SVG is 176px tall; the paper panel has two stacked benefit notes.",
    style: "Syne, neutral-950 background, red-50 headings, red-100 copy and red-300 ink panel. Square corners, 1px red-400 rules. Main title has 0.95 line height and -0.04em tracking, 30px ink title and 24px feature titles. Ink diagram uses hard-edged overlapping outlined ellipses.",
    states: "Print-guide link underlines on hover and has a 2px red-50 keyboard outline offset 4px. Ink diagram is decorative; its companion copy explains the two-pass process. No animated elements.",
    responsive: "Headline grows from 48px to 80px at 640px and 112px at 1024px. Panel stacks below 1024px. Its padding grows from 24px to 32px at 640px. Outer padding grows to 96px vertical and 32px horizontal at 1024px. Footer wraps."
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
