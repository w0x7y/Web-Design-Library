import type { ComponentMeta } from '../../types'

export default {
  "slug": "footer-seed-register",
  "name": "Seed register footer",
  "category": "footer",
  "tags": [
    "editorial",
    "minimal",
    "light"
  ],
  "description": "A seed-bank footer organised as a numbered accession register, with a large collection count and three practical next steps. Fits conservation groups and small public collections.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Newsreader:wght@400..700"
  ],
  "brief": {
    "layout": "A centred 1280px container with 48px vertical padding and 24px side padding. Collection identity and an 80px variety count sit beside a three-entry ruled register with 40px between regions. Entries have 20px vertical padding, a compact index and 24px links. A wrapping legal row closes the footer.",
    "style": "Newsreader throughout, green-950 ink on green-50. Green-900 rules, 30% opacity for dividers; no radius or shadow. 32px brand, 80px count with -0.05em tracking, 18px collection note, 12px semibold uppercase indexes with 0.12em tracking.",
    "states": "Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.",
    "responsive": "Below 640px each index sits above its link. At 640px entries become a 112px index column and remaining text. At 1024px identity/register become 1:2 columns and side padding grows to 32px."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
