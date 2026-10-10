import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-marine-transect',
  name: 'Marine transect article card',
  category: 'blog-card',
  tags: ['corporate', 'light'],
  description:
    'A marine-biology lab article with a station masthead, cyan accent rail and inset survey contents. Use it for coastal research journals and field reports.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..600'],
  brief: {
    layout:
      '288px bordered article with a 20px-horizontal, 16px-vertical masthead. Body has a 4px left rail and 20px padding. Research eyebrow, headline after 12px, summary after 8px, contents aside after 16px and byline after 16px. Aside has 12px padding and a block label 4px above its copy.',
    style:
      'IBM Plex Sans, white body and slate-50 masthead, cyan-950 headline, slate-600 supporting copy, slate-200 1px boundary and cyan-800 rail. 8px card corners, 4px aside radius, no shadow. Headline 24px semibold at 28px leading and -0.02em tracking; summary 12px at 20px leading; note 11px at 16px leading. Uppercase labels are 9px or 10px with 0.06em tracking.',
    states:
      'Article title turns cyan-800 on hover-capable devices and shows a 2px cyan-800 keyboard outline offset 2px. Contents aside has an accessible label. No animation.',
    responsive:
      'Width is 288px below 640px and 352px from 640px. The article stays in one column with unchanged padding and typography.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
