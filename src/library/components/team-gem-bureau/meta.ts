import type { ComponentMeta } from '../../types'

export default {
  slug: "team-gem-bureau",
  name: "Independent gem bureau",
  category: "team",
  tags: ["corporate", "light", "has-image"],
  description: "Two specialist portrait biographies for Facetmark, an independent gem identification bureau. Use it to put named expertise and direct contact beside technical services.",
  preview: {"kind": "section"},
  fonts: ["IBM Plex Sans:wght@400..600"],
  brief: {
    layout: "A full-width section with a 1280px inner container, 24px side padding and 64px vertical padding. Ruled header above two portrait biographies and an independence note. Portraits are full width and 256px tall on phones; the bio holds discipline, name, expertise and an email link.",
    style: "White background, sky-950 text, sky-800 uppercase 12px labels, slate-600 supporting copy. IBM Plex Sans, a 36px medium heading with 1.1 line height and -0.035em tracking, 56px from 640px. Names are 28px and body copy 14px. Square images and hairline borders, no shadows.",
    states: "Email links change from sky-900 to sky-700 on hover and show a 2px currentColor keyboard outline offset 4px. Every portrait has descriptive alt text. No animation.",
    responsive: "At 640px inner side padding becomes 32px, each portrait becomes 144px wide and 224px tall beside its biography. At 1024px vertical padding becomes 96px, the header uses a 1.4:1 split and the two biographies form two columns with 64px between them. All content stacks and wraps at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
