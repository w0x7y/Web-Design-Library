import type { ComponentMeta } from '../../types'

export default {
  slug: 'empty-state-print-store',
  name: 'A print shop without a published product',
  category: 'empty-state',
  tags: ['brutalist', 'light'],
  description:
    'Inkparcel print-on-demand empty state uses a product-count plate and an inverted production ticket. Use it before a seller uploads and publishes their first design.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Mono'],
  brief: {
    layout:
      '16px-padded production sheet. A ruled catalog header, 56px product count with side label and black 16px-padded ticket containing a 20px two-line heading, 11px instructions and 40px outlined action. A 9px production policy closes the panel.',
    style:
      'IBM Plex Mono. Orange-100 background and neutral-950 ink invert in the ticket. 2px neutral-950 outer and header borders, 1px orange-100 action border. Square corners, no shadows; count tracking -0.08em.',
    states:
      'The primary action underlines on hover-capable devices. Every action has a 2px current-color outline offset 4px on keyboard focus, including forced-colors mode. Illustrations are decorative and hidden from assistive technology. No animation.',
    responsive:
      'The root is 288px wide below 640px and 384px wide from 640px. All other sizes and spacing stay the same; text wraps to the available width. It fits within a 384px-tall element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
