import type { ComponentMeta } from '../../types'

export default {
  slug: "toggles-checkbox-tile-grid",
  name: "Toggles — Checkbox tile grid",
  category: 'toggles',
  tags: ["grid","form","compact"],
  description: "Seven day tiles combine independent checkboxes with visible check marks. Use them to select a recurring schedule while preserving clear names and disabled states.",
  preview: { kind: 'element' },
  wireframe: `┌────────────────────────────────────────────────────┐
│ Choose days                                        │
│ Select every day that applies                      │
│ [Mon x][Tue][Wed x][Thu][Fri x][Sat][Sun disabled] │
│ Short schedule guidance                            │
└────────────────────────────────────────────────────┘`,
  brief: {
  "layout": "A 288px (w-72) fieldset widens to 448px (sm:w-[28rem]). A 14px semibold legend is followed by a 14px neutral-500 hint after 4px, then tiles after 12px (mt-3). Below 640px a four-column grid with 8px gaps creates rows of four and three; from 640px a seven-column row keeps gap-2. Tiles are 56px high (h-14), rounded-md, with a 1px neutral-300 border. Each centres a 14px medium abbreviation above a 14px check glyph with a 4px gap. A 12px guidance note follows by 12px.",
  "hierarchy": "Read Choose days and its one-line instruction, then Monday through Sunday in chronological order. Visible labels are three-letter abbreviations; native checkbox aria-labels use full day names, and decoration is aria-hidden. The fieldset links both hint and final note with aria-describedby. Guidance stays under five words.",
  "states": "Monday, Wednesday and Friday start checked. Checked labels have neutral-900 borders and fills with white text; their check glyphs use opacity-0/group-has-checked:opacity-100 so selected state is never fill alone. Enabled unchecked hover fills neutral-50 and checked hover neutral-700. Sunday is native disabled with 50% opacity and a not-allowed cursor. Labels show 2px neutral-900 focus outlines offset 2px through has-[:focus-visible], while hidden inputs use focus-visible:outline-hidden. Forced colors use ButtonText borders and Highlight/HighlightText checked fills and ink; check marks stay visible.",
  "responsive": "Below 640px the 288px fieldset has four tiles on the first row and three on the second, each 66px wide. From 640px the 448px fieldset has seven equal tiles in one row, about 57px wide. Tile height, icon size and gaps remain unchanged. The overall height is about 200px on mobile and 140px on desktop.",
  "usage": "Use for independent recurring-day selection. Pick toggles-radio-cards for one choice or toggles-checkbox-nested for dependent visibility. Variations: start only weekdays checked, enable all seven days, or replace days with short named availability slots while keeping full accessible names. No structural deviation from the inventory."
},
  addedAt: '2026-10-10',
} satisfies ComponentMeta

