import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-field-guide-download',
  name: 'Field guide download call to action',
  category: 'cta',
  tags: ['minimal', 'light'],
  description:
    'A resource invitation with a designed book cover, contents preview and download link. Use it to promote a practical guide or report.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px container has a 224px stylized report cover beside a heading, description, three topic labels and download action. Cover is a text-only graphic with title, line motif and edition information.',
    style:
      'Slate-50 background, slate-950 type, blue-700 report cover with white cover text, and blue-700 download action. Cover has a 3:4 proportion, 24px padding and a small shadow. Heading is 36px.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Cover and description stack below 768px; cover centers on phones and remains 224px wide. Topic labels wrap. Main container uses 24px horizontal and 64px vertical padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
