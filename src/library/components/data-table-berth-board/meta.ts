import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-berth-board",
  name: "Container berth board",
  category: "data-table",
  tags: ["brutalist", "dark"],
  description: "A hard-ruled container-port berth timetable for Quayframe, with vessel lengths, arrival windows, crane assignments and a native shift-handover disclosure. Use it for terminal planning.",
  preview: { kind: 'section' },
  fonts: ["IBM Plex Mono:wght@400;500;600;700"],
  brief: {
    layout: "Full-width section with 48px vertical padding and a 1280px container. A 2px outlined masthead divides shift copy from a 224px clock panel at 768px. Operational strip precedes a five-column berth table and an outlined handover disclosure.",
    style: "IBM Plex Mono, slate-950 background, amber-50 text, slate-300 secondary copy, slate-600 rules and amber-300 clock fill and berth codes. Headline 32px then 44px at 768px, clock 48px, berth codes 24px. Square corners and no shadows.",
    states: "Links underline or remove underline on hover. Links and handover summary have a 2px currentColor focus-visible outline offset 2px, retained in forced colors. Native details opens the shift note; no animation.",
    responsive: "At 320px, each vessel is a two-column labelled record with berth spanning both columns. At 768px the masthead splits and records become table rows. Horizontal padding changes from 20px to 40px at 768px; the container caps at 1280px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
