import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-star-rating',
  name: "Toggles — Star rating input",
  category: 'toggles',
  tags: ["row", "icons", "form", "compact"],
  description: "Five star radios fill up to the chosen score, with a caption word for the rating beside them. Use to collect a single 1 to 5 score in a review or feedback form.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────┐
│ Rate your experience                 │
│ Choose from 1 to 5 stars             │
│ [*][*][*][*][ ]   Very good          │
└──────────────────────────────────────┘`,
  brief: {
    layout: "A 288px (w-72) fieldset widens to 320px (sm:w-80). A 14px semibold legend and a 14px neutral-500 hint (mt-1) precede a row (mt-3, items-center, gap-3) of five adjoining 36px star tiles (size-9, rounded-md) and a 14px medium caption. Each tile centers a 28px stroke star.",
    hierarchy: "Read the question, the hint, the stars from 1 to 5, then the caption. Each native radio has a visually hidden name, 1 star to 5 stars, and the fieldset shares the hint through aria-describedby. Caption words are Poor, Fair, Good, Very good and Excellent, with Not rated before any choice; the caption is aria-hidden because the radio names already carry the value. Keep the question under five words.",
    states: "4 stars starts checked. The checked star and every star before it turn neutral-900 and fill with currentColor through has-checked and has-[~label_:checked], so the score reads as filled shapes, not only a color. Unfilled stars keep a neutral-500 outline. The caption shows the word for the checked radio through group-has-[#id:checked]. Hover shades a tile neutral-100. Keyboard focus draws a 2px neutral-900 outline offset 2px around the focused tile, and arrow keys move the score one step. In forced-colors mode the stars take the system text color and the filled shapes stay visible.",
    responsive: "The root grows from 288px to 320px at 640px. The 180px row of stars, the caption beside it and all sizes stay the same, so the row stays on one line at both widths.",
    usage: "Use for one 1 to 5 score in a review, feedback or survey form. Pick toggles-segmented-control for a short labeled scale, or a numbered radio row for 0 to 10 scores. Variations: drop the caption, add a review field below the stars, or start with no score so Not rated shows.",
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
