import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-elevator-audit',
  name: 'Lift inspection journal card',
  category: 'blog-card',
  tags: ['corporate', 'dark'],
  description:
    'A lift-inspection story beside a full-height shaft diagram and a compact service footer. Use it for building operations journals and inspection consultancies.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      '288px article with a 72px left diagram rail and flexible 20px-padded text column. Diagram is 56px wide and 240px tall, centered in its rail. Brand precedes category after 4px, headline after 24px, summary after 12px, byline after 20px. Footer has a top rule and 16px horizontal by 12px vertical padding.',
    style:
      'Default sans on slate-950 with slate-100 text, slate-900 diagram rail and slate-700 1px rules. 12px corners and no shadow. Diagram uses slate-500 structural lines and a sky-blue car. Headline is 23px semibold, 28px leading, -0.025em tracking. Brand is 14px semibold; summary 12px slate-400 at 20px leading. Category is 9px sky-300 uppercase, byline 10px at 16px leading and footer 9px.',
    states:
      'Title changes to sky-300 on hover and shows a 2px sky-300 outline offset 2px on keyboard focus. Shaft SVG is decorative. No animation.',
    responsive:
      '288px below 640px, 320px from 640px. Diagram rail remains 72px and text stays in the right column. Type and padding do not change.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
