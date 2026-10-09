import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-project-enquiry',
  name: 'Project enquiry call to action',
  category: 'cta',
  tags: ['editorial', 'light'],
  description:
    'A studio enquiry section with a short project form and a realistic reply-time promise. Use it for agencies and independent service businesses.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px two-column section pairs a serif headline and availability note with a two-field enquiry form. Form has email, project summary textarea and submit button. Footer hint sets expected reply time.',
    style:
      'Stone-100 fill, stone-950 text, orange-800 availability label and white inputs with stone-300 outlines. Serif heading is 48px; inputs use 12px rounded corners and 16px text.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Columns start at 768px. Heading is 36px on phones and 48px at 640px. Textarea fills its column with a 128px minimum height. Submit row stacks below 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
