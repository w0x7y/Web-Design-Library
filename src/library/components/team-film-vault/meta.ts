import type { ComponentMeta } from '../../types'

export default {
  slug: "team-film-vault",
  name: "Film preservation team",
  category: "team",
  tags: ["editorial", "dark", "has-image"],
  description: "An editorial department spread for Framekeep Film Trust, with a documentary portrait and native disclosures for preservation specialists. Use it for heritage institutions and film archives.",
  preview: {"kind": "section"},
  fonts: ["Instrument Serif"],
  brief: {
    layout: "A 1280px container with 24px horizontal and 64px vertical padding. A ruled masthead sits above a heading and 128 by 192px grayscale portrait with caption. Three native expert disclosures form the other half of the spread; the first starts open.",
    style: "Zinc-950 ground, zinc-100 titles, rose-200 masthead and hover accent, zinc-700 rules. Instrument Serif for 36px heading and 28px names, default sans for 12px disciplines and 14px answer paragraphs. Heading grows to 72px at 640px. No radius or shadow.",
    states: "Each summary is a keyboard-operable native disclosure with a decorative plus and a 2px currentColor focus outline offset 4px. Summary text becomes rose-200 on hover. Opening reveals a specialist biography. No animation.",
    responsive: "The spread stacks below 1024px. At 640px horizontal padding grows to 32px and the heading to 72px. At 1024px padding is 96px vertically and the spread uses 1:1.1 columns separated by 80px. The caption and portrait fit side by side at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
