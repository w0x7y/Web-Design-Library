import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-local-directory',
  name: 'Local directory footer',
  category: 'footer',
  tags: ['corporate', 'light'],
  description:
    'A neighborhood service footer with hours, contact details and a compact directory. Use it for local businesses and civic services.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px footer begins with a contact strip containing a phone number and appointment action. Main area shows business identity, opening hours and a six-link service directory. A bottom row gives legal links.',
    style:
      'Slate-50 canvas, slate-950 ink, blue-700 contact action, white contact strip and slate-200 borders. Phone is 30px semibold; wordmark is 24px, hours and links are 14px.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Contact strip stacks below 768px. Main grid becomes three columns at 1024px, two at 640px and one on phones. Directory is two columns with wrap-friendly links. All widths use 24px side padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
