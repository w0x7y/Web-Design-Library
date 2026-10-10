import type { ComponentMeta } from '../../types'

export default {
  slug: "team-lighting-crew",
  name: "Theatre lighting crew credits",
  category: "team",
  tags: ["gradient", "dark"],
  description: "A warm lighting-crew credit sheet for Cuebeam theatre production, with four disciplines and a decorative gel sequence. Use it for touring production teams and technical arts companies.",
  preview: {"kind": "section"},
  fonts: ["Familjen Grotesk:wght@400..600"],
  brief: {
    layout: "1280px container with 24px side and 64px vertical padding. Introduction and four rounded gel shapes beside a bordered company credit sheet. The sheet has four definition-list rows pairing discipline with name and short remit, and a production email link.",
    style: "A horizontal oklab gradient from orange-950 through rose-950 to stone-950. Amber-50 text, amber-200 labels and orange-100 descriptions. Familjen Grotesk, 36px medium headline growing to 64px at 640px, 24px names and 14px remits. Credit sheet uses black 10% fill, amber-100 40% border, 24px padding and square corners. Decorative 96px gel strip uses amber-200, orange-300, rose-300 and amber-50 at 70%, with 16px steps.",
    states: "Production email link has an amber-200 bottom rule, turns white on hover and displays a 2px currentColor keyboard outline offset 4px. Definition-list semantics pair every role with its name; gel art is aria-hidden. No animation.",
    responsive: "At 640px side and credit-sheet padding become 32px, headline becomes 64px and credit rows use 1:1.2 columns with 24px gap. At 1024px the main layout uses 1:1.15 columns with 80px gap and vertical padding becomes 96px. All rows stack and credit headers wrap at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
