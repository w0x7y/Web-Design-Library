import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-falcon-flight',
  name: 'Wildlife flight observation card',
  category: 'blog-card',
  tags: ['minimal', 'dark'],
  description:
    'A wildlife-care journal card with a dashed flight-path drawing and quiet monospaced observation notes. Use it in rehabilitation center journals and conservation updates.',
  preview: { kind: 'element' },
  fonts: ['DM Mono:wght@400;500'],
  brief: {
    layout:
      '288px card with 24px padding. A two-part 9px masthead precedes a ruled observation plate after 24px. Plate has 12px vertical padding, a 68px-high SVG and a caption 8px below. Headline follows after 20px, summary after 12px and a two-part byline after 20px.',
    style:
      'DM Mono on stone-950 with stone-100 heading, stone-400 metadata and copy, stone-700 rules and stone-300 flight-path illustration. Square corners, no shadow. Headline 23px medium with 28px leading and -0.04em tracking. Summary 11px with 20px leading. Observation caption 8px, masthead and byline 9px. Flight drawing is decorative and has a visible text caption.',
    states:
      'Title underlines on hover with 4px offset and gets a 2px stone-100 keyboard outline offset 2px. No animated flight or motion.',
    responsive:
      '288px below 640px, 320px from 640px. Flight plate fills the inner width at a fixed 68px height; all type sizes and spacing stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
