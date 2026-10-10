import type { ComponentMeta } from '../../types'

export default {
  slug: "team-puzzle-desk",
  name: "Puzzle publishing desk",
  category: "team",
  tags: ["playful", "light"],
  description: "Four clue-sheet biographies for Gridwink, a crossword publisher. Use it to introduce a small editorial team with letter tiles and a sample of its voice.",
  preview: {"kind": "section"},
  fonts: ["Bricolage Grotesque:wght@400..700"],
  brief: {
    layout: "1280px inner container, 24px horizontal and 64px vertical padding. Heading and puzzle invitation above a four-person list. Each sheet has a 64px letter tile, name and role, a personal clue and a dashed answer line, with 24px padding and 16px between sheets.",
    style: "Fuchsia-50 background and fuchsia-950 ink, 2px square sheet borders. Tiles use yellow-200, fuchsia-100, white and orange-100. Bricolage Grotesque, bold 36px heading growing to 56px at 640px, 22px names, 16px clues and tracked 12px answers. The invitation is a pill with 2px border.",
    states: "The puzzle link fills fuchsia-950 with white text on hover; keyboard focus shows a 2px currentColor outline offset 4px. Lists retain semantics with role=list. Letter tiles are text rather than images. No animation.",
    responsive: "At 640px horizontal padding grows to 32px and heading to 56px. At 768px sheets use two equal columns. At 1024px header splits into two columns and vertical padding becomes 96px. At 320px sheets stack and names wrap beside fixed 64px tiles.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
