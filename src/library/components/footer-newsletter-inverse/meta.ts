import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-newsletter-inverse',
  name: 'Inverse newsletter footer',
  category: 'footer',
  tags: ['dark', 'editorial'],
  description:
    'A publication footer centered on a newsletter invitation with a native email form. Use it for independent journals and content businesses.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px dark footer has a 60px serif newsletter heading and email signup form, followed by a two-column publication identity and navigation section. A legal line follows at the bottom.',
    style:
      'Emerald-950 background, white title, emerald-200 body and lime-200 subscribe action. Input is transparent with emerald-700 border and 8px radius. Serif wordmark is 30px.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Newsletter heading and form become two columns at 1024px. Form stacks below 640px and becomes a horizontal row above. Lower navigation wraps and the 60px title reduces to 36px on phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
