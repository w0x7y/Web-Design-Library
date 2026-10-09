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
      'A 288px-wide zinc-950 panel with 20px padding, a release header, and three rows separated by 16px. Each row pairs a monospace version and date with a small bordered status pill.',
    style:
      'Use zinc-700 dividers, white version labels and zinc-400 supporting text. Statuses combine text and colored dots: emerald-300 production, sky-300 preview and amber-300 review.',
    states:
      'The badges are informational and have no hover or focus states. State names remain readable without their colored dots; no animations are used.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
