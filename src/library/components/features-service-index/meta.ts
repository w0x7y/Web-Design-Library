import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-service-index',
  name: 'Service index features',
  category: 'features',
  tags: ['editorial', 'light'],
  description:
    'A numbered service index with editorial typography and deliverable summaries. Use it for design studios and professional service websites.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px maximum-width grid with 24px side and 80px vertical padding, and 48px gaps. Introduction has a 12px eyebrow, h2 20px below it and a max-width 384px paragraph 20px later. An ordered list holds four services. Each row is a 32px number column plus flexible content, with 16px gaps, 24px vertical padding and a top rule; final row also has a bottom rule. Description is max-width 576px and 12px below the 30px h3; deliverables follow 16px later.',
    style:
      'Stone-100 canvas, stone-950 default sans text and stone-600 descriptions. Intro h2 uses the default serif stack at 36px and 1.25 line height. Eyebrow and numbers use the default monospace stack in orange-800 at 12px; eyebrow is uppercase with 0.1em tracking, numbers have 8px top padding. Service titles are 30px regular sans with 36px line height and -0.025em tracking. Descriptions are 14px with 1.625 line height; deliverables are 12px orange-800. Rules are 1px stone-300. No cards, shadows or icons. Ordered list retains role=list.',
    states:
      'Static service index with no controls, hover states, focus states or motion. Service numbers and headings convey the structure without relying on color.',
    responsive:
      'Intro and service list stack below 1024px with 48px gaps. At 1024px they form 1:2 columns with an 80px gap. Intro heading is 36px below 640px and 48px from 640px, retaining 1.25 line height. Service number columns stay 32px wide; long headings, descriptions and deliverables wrap naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
