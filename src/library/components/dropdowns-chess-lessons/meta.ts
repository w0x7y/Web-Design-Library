import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-chess-lessons",
  name: "Dropdowns — Chess lesson levels",
  category: "dropdowns",
  tags: ["minimal", "dark"],
  description: "A rating-based lesson dropdown for Knightpath chess coaching, with three native radio choices and curriculum hints.",
  preview: {"kind": "element"},
  fonts: ["DM Mono:wght@400;500;600;700"],
  brief: {
    layout: "A 288px card with 20px padding. A 10px uppercase coaching label precedes a 14px lesson-level summary. Three ruled radio rows each use 16px vertical padding, a 14px native radio, a 48px numeric rating column and a name/hint column with 12px gaps. A 10px coaching note follows after 16px.",
    style: "DM Mono, neutral-900 background, neutral-100 text, neutral-600 1px border and 8px outer radius. Selected row and masthead use amber-200; hints remain neutral-300. Native radios use amber-200 accent and dark colour scheme. Ratings are 14px with tabular numerals, lesson names 12px and hints 10px. No shadows.",
    states: "Club player starts checked. Native radio arrow-key navigation selects a level, with an amber text cue and visible checked mark. Each radio has a labelled curriculum and described hint. No hover changes. All controls show a 2px current-colour focus-visible outline offset 2px, including in forced-colors mode. Native summary supports Enter and Space; the chevron rotates 180 degrees when open. No animations or transitions.",
    responsive: "Root width is 288px below 640px and 320px from 640px. The internal arrangement, type sizes and padding remain unchanged; all content fits the 384px-high element budget.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
