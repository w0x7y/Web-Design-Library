import type { ComponentMeta } from '../../types'

export default {
  slug: "team-rescue-duty",
  name: "Mountain rescue duty board",
  category: "team",
  tags: ["brutalist", "dark"],
  description: "An orange-and-ink duty board for Cairnwatch volunteer mountain rescue, with a unit number and three named operational leads. Use it for field crews and volunteer response teams.",
  preview: {"kind": "section"},
  fonts: ["Space Grotesk:wght@400..700"],
  brief: {
    layout: "1280px inner container, 24px side and 64px vertical padding. A solid orange masthead precedes a large unit number and headline beside a three-row crew board. Each crew row uses a 40px code column, 16px gap, 24px padding and 2px top rule. A training-night link closes the board.",
    style: "Neutral-950 background, orange-100 headings, neutral-300 descriptions and orange-600 rules and masthead. Space Grotesk throughout. Unit number is 112px, 176px from 640px; headline is bold 36px, 48px from 640px. Names 24px, uppercase disciplines 12px. Square corners, no shadows.",
    states: "The training link fills orange-300 and turns neutral-950 on hover. A 2px currentColor focus outline is offset 4px. The decorative unit number is hidden from screen readers; the masthead names the unit. No animation.",
    responsive: "At 640px side padding grows to 32px, number to 176px and heading to 48px. At 1024px vertical padding becomes 96px and the body uses 0.8:1.2 columns with 80px between them. Below that the unit introduction sits above the board; names and roles wrap at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
