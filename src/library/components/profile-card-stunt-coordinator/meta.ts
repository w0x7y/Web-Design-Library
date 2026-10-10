import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-stunt-coordinator',
  name: 'Stunt coordinator dossier',
  category: 'profile-card',
  tags: ['brutalist', 'dark'],
  description:
    'A production dossier for an Underpin Action stunt coordinator, with specialisms and screen credits. Use it in film crew and stunt performer directories.',
  preview: { kind: 'element' },
  fonts: ['Archivo:wght@400..900'],
  brief: {
    layout:
      'A 288px article with a 32px red brand header and 20px body padding. A 48px surname dominates the identity; two specialisms sit in a divided two-column list, with a 12px credit line and full-width outlined contact link below.',
    style:
      'Archivo on neutral-950 with neutral-100 text, neutral-400 labels and a red-600 header. Surname is 48px black weight with 1 line height and -0.025em tracking. Eyebrows are 10px uppercase with 0.1em tracking. Borders are 1px neutral-600; all corners are square; no shadow.',
    states:
      'Links have a 2px red-400 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the contact link fills neutral-100 and switches to neutral-950 text. No animation or transitions.',
    responsive:
      'Width grows from 288px to 320px at 640px. Everything else, including the 48px surname and 20px padding, stays fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
