import type { ComponentMeta } from '../../types'

export default {
  "slug": "settings-robot-safety",
  "name": "Warehouse robot guardrails",
  "category": "settings",
  "tags": [
    "brutalist",
    "dark"
  ],
  "description": "A high-contrast warehouse robotics configuration for Pallet Zero, with a zone placard, speed limits and deployment disclosure. Use it for drafting supervised test settings.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "IBM Plex Mono:wght@400;500;600;700"
  ],
  "brief": {
    "layout": "1280px wrapper, 2px ruled masthead, 36px heading, joined two-region console after 32px. Zone placard has an 80px code; configuration controls are separated by 24px and padded 24px.",
    "style": "IBM Plex Mono on #181a18 with #eff3e8 text and #b6c0aa hints. Acid #d9ef54 placard and action, #626958 borders. Square structural edges, 6px native field radii, no shadows.",
    "states": "Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation. Native disclosure summaries reveal their explanatory paragraphs and close again without JavaScript.",
    "responsive": "At 640px heading grows to 48px and outer side padding to 32px. At 1024px the joined console splits 1.2:1. Below 1024px the zone precedes controls. Masthead and footer wrap."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
