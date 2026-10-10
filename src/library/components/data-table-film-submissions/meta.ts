import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-film-submissions",
  name: "Film festival submissions",
  category: "data-table",
  tags: ["playful", "light"],
  description: "A playful film-festival selection table for Spliceweek with film-strip markers, screening status and a native programme-note disclosure. Use it for festival submissions and short-film review queues.",
  preview: { kind: 'section' },
  fonts: ["Syne:wght@400;500;600;700"],
  brief: {
    layout: "1280px section with headline left and a 112px circular date stamp right. Below is a white rounded queue panel with ticket-style toolbar and four-column submissions table. Film cells have 40px by 56px strip markers and director credits. A native programme note sits under the table.",
    style: "Syne, rose-50 background, red-950 ink, red-900 secondary copy and rose-300 table rules. Queue has 24px corners and 2px red-950 border. Film markers are rose-200 with 4px dashed side borders. Shortlisted badges are red-900 with rose-50 text; other states are outlined. Programme note uses rose-100 with 12px corners.",
    states: "Selection criteria link and programme-note summary show 2px currentColor keyboard outlines offset 2px and underline changes on hover. Native details reveals the film note. Decorative strip numbers are aria-hidden; all statuses are words. No motion.",
    responsive: "The header wraps on mobile, placing the stamp after the title. Below 768px film rows become two-column labelled records with film and director spanning both columns. Panel padding grows from 16px to 32px at 768px; section padding grows from 20px to 40px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
