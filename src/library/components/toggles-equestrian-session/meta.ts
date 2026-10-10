import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-equestrian-session',
  name: 'Toggles — Equestrian session',
  category: 'toggles',
  tags: ['editorial', 'dark', 'has-image'],
  description:
    'A photo-led equestrian lesson panel with a session caption and helmet and grooming add-on switches.',
  preview: { kind: 'element' },
  fonts: ['Instrument Serif:wght@400'],
  brief: {
    layout:
      '288px card, 384px from 640px. A full-width 96px horse photograph sits above a 20px-padded body with a 28px title, 14px session caption, a dividing rule and two option rows spaced 12px apart. Each row has a 44×24px switch and a 12px hint.',
    style:
      'Instrument Serif throughout. Emerald-950 surface, amber-50 text, emerald-200 supporting copy and off-state thumb, amber-200 checked track and focus. 12px outer corners, 1px emerald-800 border, emerald-700 rule. Horse crop is centered at 45% vertically. No shadow.',
    states:
      'Helmet reservation starts on and grooming off. Each native switch has a 16px thumb that travels 20px and becomes emerald-950 when checked. Hover lowers opacity to 80%; focus uses a 2px amber-200 outline offset 2px. Forced colors retain ButtonText borders and CanvasText thumbs. No animation.',
    responsive:
      'Fixed 288px width below 640px; 384px at 640px and above. The content order and control sizes remain the same. The card fits the 384px-tall capture area at both widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
