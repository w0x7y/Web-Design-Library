import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-aquarium-log",
  "name": "Inputs — Aquarium log",
  "category": "inputs",
  "tags": ["minimal", "dark"],
  "description": "A tank identifier and prominent temperature reading for Brinewell aquarium maintenance. Use it for quick daily water checks.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["Manrope:wght@400..700"],
  "brief": {
    "layout": "288px-wide dark panel, 320px from 640px, with 24px padding and 16px corners. Header has the brand and a small DAILY CHECK label. A 36px tank-ID input sits above a temperature label and a 64px number field with a visible Celsius suffix. A 12px hint closes the panel.",
    "style": "Manrope, slate-950 surface, cyan-100 main text and slate-300 hints. Slate-500 underline boundaries; the temperature is 36px medium with 40px line height and tabular figures. Dark native control scheme. No shadows.",
    "states": "Both inputs show 2px current-color keyboard outlines offset 2px. Temperature accepts decimal steps of 0.1 between 0 and 40; its unit and guidance are described by accessible text. No motion or authored hover states.",
    "responsive": "Width changes from 288px to 320px at 640px; all fields remain stacked with fixed 24px padding."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
