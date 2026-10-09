import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-artisan-signature',
  name: 'Artisan signature footer',
  category: 'footer',
  tags: ['editorial', 'light'],
  description:
    'A quiet maker footer with a serif signature, studio address and compact navigation. Use it for artisans and independent creative businesses.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px footer starts with a large serif studio statement and a contact action. A second row holds a signature wordmark, physical studio address and a compact four-link navigation. A hairline legal row closes the section.',
    style:
      'Stone-100 background, stone-950 ink, stone-300 borders and orange-800 contact text. Statement is 48px serif; wordmark is 30px italic serif. Navigation uses 14px sans and legal text uses 12px.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Top statement and contact stack below 768px. Lower information becomes three columns at 768px. Statement is 36px on phones and 48px at 640px. Legal row wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
