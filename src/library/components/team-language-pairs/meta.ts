import type { ComponentMeta } from '../../types'

export default {
  slug: "team-language-pairs",
  name: "Conference interpreting pairs",
  category: "team",
  tags: ["minimal", "editorial", "light", "has-image"],
  description: "Language-pair biographies for Verbaloom conference interpreting, introduced with a shared preparation photo. Use it for language services and specialist professional partnerships.",
  preview: {"kind": "section"},
  fonts: ["Fraunces:wght@400..600"],
  brief: {
    layout: "A 1280px container, 24px horizontal and 64px vertical padding. Introductory text beside a 3:2 conversation photograph and caption; below are two language-pair biographies with top rules, oversized language codes, names, specialties and email links.",
    style: "Amber-50 background, blue-950 titles, blue-800 accents, stone-700 descriptions and stone-600 caption. Fraunces throughout with 36px heading growing to 56px at 640px, language codes 48px growing to 64px, 28px names and 16px descriptions with 1.75 line height. Square photo and no shadows.",
    states: "Named email links are underlined, become blue-800 on hover and show a 2px currentColor keyboard outline offset 4px. The photo has descriptive alt text. No animation.",
    responsive: "At 640px side padding becomes 32px, heading 56px and language codes 64px. At 768px biographies use two columns with 64px gap. At 1024px the introduction uses 1:1.2 columns with 64px gap and vertical padding becomes 96px. All regions stack and wrap at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
