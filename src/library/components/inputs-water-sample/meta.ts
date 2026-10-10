import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-water-sample",
  "name": "Inputs — Water sample",
  "category": "inputs",
  "tags": ["corporate", "dark"],
  "description": "Sample ID, source and collection-time controls for Clearbatch water-treatment records. Use it to start a traceable sampling entry.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["Archivo:wght@400..700"],
  "brief": {
    "layout": "288px panel, 352px from 640px, with 12px corners and a 1px slate-500 border. A 16px-padded sky-950 header sits above a 20px-padded body. The sample-ID field is full width; source and time follow in a two-column grid with 12px gap. All controls are 40px tall; a ruled 11px custody note closes the panel.",
    "style": "Archivo, slate-900 body, slate-100 text, sky-200 brand text and slate-300 supporting labels. Slate-950 controls have slate-500 borders and 4px corners; sample ID uses 12px default monospace. Heading is 20px semibold. Native dark color scheme; no shadows.",
    "states": "Native inputs and select show 2px current-color focus-visible outlines offset 2px. Collection time also uses focus-within so every native time segment keeps the outline. The source selector is tied to a custody hint, and the ID is limited to 20 characters. No hover changes or motion.",
    "responsive": "Width grows from 288px to 352px at 640px; source and time remain equal columns with min-width-zero controls. Header and body padding do not change."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
