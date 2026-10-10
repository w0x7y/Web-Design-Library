import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-greenhouse-glass',
  name: 'Greenhouse journal behind glass',
  category: 'blog-card',
  tags: ['glass', 'dark'],
  description:
    'A greenhouse-controls story in a frosted reading panel over glazing bars and soft evening light. Use it for grower systems journals and horticultural technology blogs.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      '288px article with 20px padding and a two-part masthead. Full-card decorative greenhouse SVG sits behind content. A 48px by 224px blurred light strip sits 32px from the top and -16px from the right. Reading panel begins 64px below the header with 16px padding. Title follows eyebrow after 12px, summary after 12px and a ruled byline after 16px with 12px top padding.',
    style:
      'Familjen Grotesk on dark #18261f, white heading, emerald-100 supporting text and amber-200 labels. Root has 16px corners. Glass panel uses white at 10%, a 1px white border at 20%, 8px radius and 12px backdrop blur. Greenhouse structure is muted sage at 40% opacity; amber light is 30% opacity with 24px blur. Headline is 28px semibold, 28px leading and -0.03em tracking. Summary 12px at 20px leading; labels and byline 10px.',
    states:
      'Headline becomes amber-200 on hover and shows a 2px amber-200 keyboard outline offset 2px. Background light and glazing SVG are decorative. No animation or transitions.',
    responsive:
      'Width grows from 288px to 320px at 640px. SVG fills the root while reading panel keeps its padding; layout stays stacked.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
