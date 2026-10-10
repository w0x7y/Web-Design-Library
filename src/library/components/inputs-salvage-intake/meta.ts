import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-salvage-intake",
  "name": "Inputs — Salvage intake",
  "category": "inputs",
  "tags": ["brutalist", "dark"],
  "description": "An asset intake ticket for Reclaimant demolition salvage, with an item description, material selector and recoverable quantity. Use it during a site inventory.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["IBM Plex Mono:wght@400;500;600;700"],
  "brief": {
    "layout": "288px-wide square panel, 352px at 640px, with 20px padding. An orange-left-rule header precedes a description field; a two-column grid 16px below holds material and quantity controls. A dashed footer closes the ticket.",
    "style": "IBM Plex Mono, neutral-950 background, orange-300 headings and neutral-100 field text. Neutral-500 1px boundaries, neutral-900 input fills, 20px bold heading and 10px uppercase labels. Native dark select scheme, square corners and no shadows.",
    "states": "Inputs and select retain native behavior and show 2px current-color keyboard outlines offset 2px. Quantity accepts whole units from 1 to 9999, described by the recovery note. No authored hover state or animation.",
    "responsive": "Width changes from 288px to 352px at 640px. Material and quantity stay in two equal columns, both with min-width zero."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
