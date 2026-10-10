import type { ComponentMeta } from '../../types'

export default {
  slug: 'blog-card-puppet-stage',
  name: 'Puppet theatre backstage card',
  category: 'blog-card',
  tags: ['playful', 'dark'],
  description:
    'A puppet-making story arranged beside a narrow marionette stage with a pink workbench footer. Use it for theatre journals and performing-arts workshops.',
  preview: { kind: 'element' },
  fonts: ['Bricolage Grotesque:opsz,wght@12..96,400..700'],
  brief: {
    layout:
      '288px card with a 20px-inset header and story grid. Grid has an 88px SVG column, flexible copy and a 16px gap, vertically centered. Stage is 160px tall. Eyebrow leads title after 8px; summary follows after 12px. Footer has 20px horizontal and 12px vertical padding.',
    style:
      'Bricolage Grotesque, teal-950 surface, teal-50 text and teal-200 supporting copy. 20px corners and rose-300 footer, no shadow. Illustration uses rose-300 curtains, pale amber puppet and teal outlines. Headline is 25px bold at 1.05 leading and -0.035em tracking; summary 12px at 1.4 leading. Header 12px bold, issue and eyebrow 9px, footer 10px semibold.',
    states:
      'Title changes to rose-200 on hover and has a 2px rose-200 keyboard outline offset 2px. Stage is decorative, with no moving parts or animation.',
    responsive:
      '288px wide below 640px, 352px from 640px. Stage stays 88px wide and 160px tall while copy gains space in the second column.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
