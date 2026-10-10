import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-balloon-manifest",
  "name": "Inputs — Balloon manifest",
  "category": "inputs",
  "tags": ["glass", "gradient", "dark"],
  "description": "A frosted passenger manifest for Aerohush balloon flights, with passenger name and clothed weight. Use it when preparing a flight loading sheet.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["DM Sans:wght@400..700"],
  "brief": {
    "layout": "288px-wide panel, 384px at 640px, with 24px corners and 20px padding. A small brand line and 24px heading precede a 16px-padded frosted region containing a 40px passenger-name input and a 44px weight/unit row. A 11px clothing hint sits inside; a horizontal 11px flight strip closes the card.",
    "style": "DM Sans, emerald-50 text on a diagonal bottom-right oklab gradient from emerald-800 through emerald-950 to slate-950. Frosted region has white 10% fill, white 50% border, 16px corners and 24px backdrop blur. Fields have white 10% fills, white 50% borders, 8px corners; weight uses 24px tabular digits and lime-200 unit text. No shadows.",
    "states": "Both editable controls have 2px current-color keyboard focus outlines offset 2px, including forced colors. Weight accepts 0.5kg steps from 1 to 300, with unit and clothing hint attached through aria-describedby. Name uses autocomplete. No animation or authored hover states.",
    "responsive": "Width changes from 288px to 384px at 640px. Stacked name and weight rows, 20px outer padding, and 16px inner padding remain fixed; the flight strip stays a spaced horizontal row."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
