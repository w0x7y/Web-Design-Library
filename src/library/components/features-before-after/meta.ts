import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-before-after',
  name: 'Before and after features',
  category: 'features',
  tags: ['corporate', 'light'],
  description:
    'A side-by-side comparison of a fragmented workflow and a shared workspace. Use it to show practical benefits of a team product.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 48px heading leads to two equal panels within a 1152px container. Left panel lists current workflow problems; right panel lists the equivalent improved workflow. Both have four rows and a 24px gap.',
    style:
      'Slate-50 background, slate-950 text, white left panel and blue-950 right panel. Panels have 16px radii, 32px desktop padding and 12px uppercase eyebrow labels. Improved states use sky-300 checks.',
    states:
      'This static comparison has no controls or interactive states. Text and check icons remain readable in forced-colors mode.',
    responsive:
      'Panels stack below 768px with 24px padding on phones. Heading is 36px below 640px and 48px above. All row text wraps naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
