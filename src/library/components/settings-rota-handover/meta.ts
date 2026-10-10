import type { ComponentMeta } from '../../types'

export default {
  "slug": "settings-rota-handover",
  "name": "Hospital handover rules",
  "category": "settings",
  "tags": [
    "corporate",
    "light"
  ],
  "description": "A hospital rota settings page for Wardline, with a coverage summary, handover overlap and shift-swap checks. Use it for staff scheduling administration.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Manrope:wght@400..700"
  ],
  "brief": {
    "layout": "1280px wrapper with heading then 32px gap to a dark coverage rail and white handover form. Form uses 20px padding and 24px-spaced regions; footer contains save action.",
    "style": "Manrope, pale teal #f0f7f6 background, #123b39 ink and coverage panel, #0c6960 actions. 12px card radii, 1px #c6dad7 dividers, 36px main heading, 48px coverage figure.",
    "states": "Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation.",
    "responsive": "At 640px form padding becomes 32px and selectors share two columns, heading 48px. At 1024px coverage is 320px wide beside flexible form. Regions stack below 1024px."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
