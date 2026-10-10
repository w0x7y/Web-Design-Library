import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-braille-embosser',
  name: 'Toggles — Braille embosser',
  category: 'toggles',
  tags: ['minimal', 'dark'],
  description:
    'A braille printing proof panel with an embossed-dot motif, job details and interpoint and proof-pause switches.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Mono:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel, 384px from 640px, with 20px padding. A 40×56px decorative braille-cell SVG sits beside an 18px title and job ID with 16px gap. Two settings rows with 16px vertical padding sit between 1px horizontal rules. A language and braille-mode footnote follows.',
    style:
      'IBM Plex Mono, stone-950 background, stone-100 text, stone-300 hints and dot motif. 1px stone-600 outer border and divider rules; square corners and no shadow. Labels and hints are 12px, job and footer 11px. Stone-200 checked tracks, stone-400 off borders and thumbs.',
    states:
      'Interpoint starts on and One-page proof off. The 44×24px native switches have 16px thumbs traveling 20px and dark checked thumbs. Hover lowers opacity to 80%; focus shows a 2px stone-200 outline offset 2px. Forced colors retain ButtonText borders and CanvasText thumbs. No animation.',
    responsive:
      'Fixed 288px width below 640px; 384px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
