import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-release-track',
  name: 'Badges — Release track',
  category: 'badges',
  tags: ['dark', 'corporate'],
  description:
    'A release-status badge collection for a developer dashboard, pairing version rows with production, preview and review states.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide zinc-950 panel with 20px padding, a release header, and three rows separated by 16px. Each row pairs a monospace 14px version and 10px relative timestamp with a small bordered status pill.',
    style:
      'Use a 1px zinc-700 outer border, 16px radius, 1px zinc-800 row dividers and 16px row top padding. Primary text is zinc-100 and supporting text is zinc-400. Default sans headings mix with system monospace identifiers. Status pills have 10px medium text, 4px vertical and 10px horizontal padding, 6px dots and 6px gaps. Statuses combine text and colored dots: emerald-300 production, sky-300 preview and amber-300 review. Each pill has a matching 900-level border and 950-level fill. A monospace last-sync time sits 20px below the list. No shadows.',
    states:
      'The badges are informational and have no hover or focus states. State names remain readable without their colored dots; no animations are used.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
