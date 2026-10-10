import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-card-translation-proof',
  name: 'Translation first-pass approval',
  category: 'stat-card',
  tags: ['editorial', 'dark'],
  description: 'A dark editorial proofing card for Vernalword, a translation agency, with first-pass approval and a native language-pair disclosure. Use it in a localization delivery report.',
  preview: { kind: 'element' },
  fonts: ['Newsreader:wght@400..700'],
  brief: {
    layout: 'A 288px-wide article, 352px from 640px, with 24px padding. A folio header is followed by a 72px approval figure beside a 2px vertical rule and a 20px heading. Native details reveals two language-pair counts below a top rule.',
    style: 'Newsreader throughout. Rose-950 background, rose-100 text, orange-200 folio accents and rose-300 rules. Square corners, no shadow. Uppercase metadata is 11px with 0.1em tracking. The figure has 1 line height and tight tracking; 12px captions have 20px line height.',
    states: 'Language-pair summary is a native disclosure with a list marker and pointer cursor. It changes to orange-200 on hover and has a 2px orange-200 focus outline offset 2px. Counts remain readable text. No transitions.',
    responsive: 'Below 640px the width is 288px; from 640px it is 352px. Layout and padding stay unchanged, including the disclosure in its open state.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
