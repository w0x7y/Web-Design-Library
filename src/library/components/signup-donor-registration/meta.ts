import type { ComponentMeta } from '../../types'

export default {
  "slug": "signup-donor-registration",
  "name": "New donor registration",
  "category": "signup",
  "tags": [
    "corporate",
    "light"
  ],
  "description": "A Redthread new-donor contact registration with a separate follow-up checklist and privacy disclosure. Use it before appointment selection.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "IBM Plex Sans:wght@400..700"
  ],
  "brief": {
    "layout": "A 1152px container with 24px side and 64px vertical padding. White application has 24px padding, 24px gaps and paired name and location fields. Separate slate-50 aside has 24px padding, a 4px red top rule, three numbered next steps and a native privacy disclosure.",
    "style": "IBM Plex Sans, slate-100 section, slate-950 ink, white fields and red-800 submit and focus accents. Heading 36px/1.1 semibold, 48px from 640px. Fields are 44px with 6px radius and 60% current-colour borders; submit has 6px radius. No shadows.",
    "states": "Controls use 2px red-800 keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Native fields retain browser validation. No animation. Privacy details opens natively. Registration is explicitly distinguished from booking an appointment; no medical eligibility claims are shown.",
    "responsive": "Stacked at small widths. At 640px form padding becomes 40px, heading 48px, name and location rows become pairs. At 1024px form and summary sit in 1.7:1 columns with 24px gap and top alignment."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
