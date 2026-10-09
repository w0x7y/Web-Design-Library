import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-process-timeline',
  name: 'Process timeline features',
  category: 'features',
  tags: ['minimal', 'light'],
  description:
    'A three-step service process with connected numbering and a delivery promise. Use it to explain a product onboarding or professional service.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px container contains a label and 48px heading followed by three numbered process columns. Each column has a 48px round number, a connecting top border, heading and paragraph. A bordered delivery note sits below.',
    style:
      'White background, slate-950 text, blue-700 numbered badges and slate-200 connecting rules. Heading is 48px at 640px, body is 16px. The delivery note uses a slate-50 fill with 12px radius.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Process columns stack below 768px and become three columns above. Heading is 36px on phones. Note wraps into a vertical layout below 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
