import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-vaccine-stock",
  name: "Vaccine stock register",
  category: "data-table",
  tags: ["corporate", "light"],
  description: "A clinic vaccine stock register for Dosekeeper with a fridge-reading sidebar, lot expiry dates and an explicit use-first notice. Use it for supply counts and cold-store record previews.",
  preview: { kind: 'section' },
  fonts: ["IBM Plex Sans:wght@400;500;600;700"],
  brief: {
    layout: "1280px container with header and export link, then a 256px fridge sidebar beside a flexible white inventory panel at 1024px. Sidebar shows a 56px logger reading, 48px dose total and native temperature-log disclosure. Inventory starts with a use-first notice and four-column lot table.",
    style: "IBM Plex Sans, cyan-50 ground, cyan-950 text, cyan-800 notes and cyan-200 rules. White panels with 8px corners. Fridge panel has cyan-300 border and 24px padding. Amber-50 notice has 4px amber-700 left border and amber-950 text; the use-first badge uses the same colors.",
    states: "Export link and temperature-log summary underline on hover and show 2px currentColor keyboard outlines offset 2px. Expiry is expressed through dates, text and a bordered notice. Native details opens logger context; no animation.",
    responsive: "Below 1024px fridge information stacks before inventory. Below 768px each lot becomes a two-column record with vaccine and lot spanning both columns and visible labels. Inventory padding is 12px on phones and 24px from 768px; section padding is 20px then 40px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
