import type { ComponentMeta } from '../../types'

export default {
  "slug": "signup-campus-hackathon",
  "name": "Student hackathon entry",
  "category": "signup",
  "tags": [
    "brutalist",
    "dark"
  ],
  "description": "A Patchweek student-hackathon application with university details and native solo-versus-team choices. Use it for an open student event.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Space Grotesk:wght@400..700"
  ],
  "brief": {
    "layout": "1152px maximum width, 24px side and 64px vertical padding. Poster header with a large 48-hour figure, 2px bottom rule and application 40px below. Three contact fields, team radios and final confirmation. Fields 44px; choices have 16px padding.",
    "style": "Space Grotesk on neutral-950 with lime-200 ink. Bold uppercase 36px/1 heading grows to 60px at 640px. Duration is 112px with tight tracking. Square corners, 2px lime submit border, lime fill and neutral text. No shadows.",
    "states": "Controls use 2px lime-200 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. Native team radios strengthen their border and add a 5% current-colour background when checked.",
    "responsive": "Everything stacks on phones. Heading becomes 60px at 640px. At 768px poster uses main text and auto-width duration columns, fields share three equal columns, and team choice sits beside the submission area."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
