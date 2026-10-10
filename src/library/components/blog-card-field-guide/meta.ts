import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-field-guide',
  name: 'Weekend field guide card',
  category: 'blog-card',
  tags: ['editorial', 'light'],
  description:
    'A calm outdoor reading card with a trail illustration, guide number and author note. Use it in local travel journals and nature publications.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px article, 320px from 640px, with a 112px landscape SVG and 1px cover divider. A guide number sits absolutely 12px from the cover top and 16px from its left. The body has 16px padding; a category label leads into the headline after 8px and summary after another 8px. A space-between author/reading-time row starts 16px below with a top rule, 12px top padding and 12px gap.',
    style:
      'Pale #eef0e6 paper, 1px green-900 frame and square corners, without shadow. Green-100 cover with muted #adc4a1 and #6e8a60 hills, a 6px paper-colored winding path and a dark #31513a tree. Green-950 system-serif 24px title with 28px line height. Default sans: green-800 10px uppercase category with 0.16em tracking, green-900 12px summary with 20px line height and green-800 11px byline. Guide number is 9px monospace with 0.05em tracking. The footer rule is green-900 at 25% opacity; the headline link has 4px corners and a 4px underline offset.',
    states:
      'The linked headline gains an underline on hover and has a 2px green-950 focus outline offset by 2px. The cover illustration is decorative and static.',
    responsive:
      'The card grows from 288px to 320px at 640px. The landscape stays 112px tall and the title wraps within the single-column information body.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
