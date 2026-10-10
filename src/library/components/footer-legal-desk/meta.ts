import type { ComponentMeta } from '../../types'

export default {
  "slug": "footer-legal-desk",
  "name": "Legal desk footer",
  "category": "footer",
  "tags": [
    "corporate",
    "dark"
  ],
  "description": "A legal-operations footer with security assurances and native expandable support and agreement drawers. Use it where footer resources need clear grouping without a long directory.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Manrope:wght@400..700"
  ],
  "brief": {
    "layout": "A centred 1280px container with 48px vertical and 24px side padding. Brand and product statement sit beside two native details drawers, first open by default. Drawer summaries have 20px vertical padding; contents use a two-column 16px-gap link grid. A 12px support note and wrapping legal row complete the footer.",
    "style": "Manrope, slate-100 on slate-950 with slate-300 supporting copy. Cyan-200 text security assurances and disclosure arrows, slate-600 drawer borders and slate-700 bottom rule. 22px bold brand, 32px medium heading at 1.2 line height and -0.03em tracking, 18px semibold summaries. No shadows or radii.",
    "states": "Native summary controls toggle each drawer with pointer, Enter or Space. Summary text changes to cyan-200 on hover. Links underline on hover. Every summary and link has a 2px currentColor focus outline offset 4px, including forced-colors mode. No animation.",
    "responsive": "Below 1024px brand and drawers stack with 40px gaps. From 1024px equal columns use an 80px gap and outer horizontal padding becomes 32px. Drawer links stay in two columns; bottom policies wrap at every width."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
