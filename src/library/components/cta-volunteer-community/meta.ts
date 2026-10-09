import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-volunteer-community',
  name: 'Volunteer community call to action',
  category: 'cta',
  tags: ['editorial', 'light'],
  description:
    'A community invitation with participation options and a clear volunteer action. Use it for local initiatives, nonprofits and neighborhood groups.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px section has a top eyebrow, large serif headline and invitation paragraph. Below are three bordered opportunity rows and a full-width bottom area with signup action and contact note.',
    style:
      'Emerald-50 fill, emerald-950 text and emerald-200 borders. Opportunity labels use monospace 12px indices, 20px headings and 14px descriptions. Main heading is 48px serif. Signup action is a dark emerald pill.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Opportunity rows use three columns at 768px and stack on phones. Bottom action area stacks below 640px. Title shrinks to 36px below 640px, with 24px side padding throughout.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
