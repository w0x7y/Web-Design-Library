import type { ComponentMeta } from '../../types'

export default {
  "slug": "signup-driving-lessons",
  "name": "First driving lesson",
  "category": "signup",
  "tags": [
    "minimal",
    "corporate",
    "light"
  ],
  "description": "A first-lesson registration for Laneahead driving school, with pickup postcode, gearbox preference and provisional-licence confirmation.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Manrope:wght@400..700"
  ],
  "brief": {
    "layout": "A 1152px container with 24px side and 64px vertical padding. Introduction, two-row lesson ledger and application form. Form has a 4px teal top rule, 24px top padding, 20px gaps and 44px fields. Submit is at least 48px tall.",
    "style": "Manrope on white with slate-950 text and teal-800 accents. Heading 36px/1.1 semibold with tight tracking, increasing to 48px. Fields have 1px current-colour borders at 60%, 8px radii. Supporting copy 14px/24px. No shadows.",
    "states": "Controls use 2px teal-800 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. ",
    "responsive": "Stacks with 48px gaps below 1024px. At 640px postcode and gearbox share two equal columns and heading becomes 48px. At 1024px introduction and form use 1:1.15 columns with 96px gap."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
