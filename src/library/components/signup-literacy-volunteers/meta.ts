import type { ComponentMeta } from '../../types'

export default {
  "slug": "signup-literacy-volunteers",
  "name": "Literacy volunteer registration",
  "category": "signup",
  "tags": [
    "minimal",
    "light"
  ],
  "description": "An Openline adult-literacy volunteer application with weekly availability and an expandable explanation of the next steps.",
  "preview": {
    "kind": "section"
  },
  "fonts": [],
  "brief": {
    "layout": "A 1152px sheet with 24px side and 64px vertical padding. Large introduction sits above a stone-300 rule. Form begins 40px below with a name, email and availability row, contact checkbox, submit action and native next-steps disclosure.",
    "style": "Default sans, stone-50 paper and stone-900 ink. Blue-800 submit and focus accents. Heading 36px/1.1 semibold, 48px at 640px. Labels 14px medium; fields 44px tall with 8px radius and 60% current-colour borders. No shadows.",
    "states": "Controls use 2px blue-800 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. Native details opens the process explanation without JavaScript.",
    "responsive": "All fields and actions stack below 768px. At 640px heading grows to 48px. At 768px the three fields share a row and the consent line sits next to the submit button."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
