import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-careers-search',
  name: 'Career search hero',
  category: 'hero',
  tags: ['corporate', 'light'],
  description:
    'A recruitment landing section with a native role-search form and curated job categories. Use it for specialist job boards.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container with 24px horizontal and 80px vertical padding. A 768px-wide heading and 576px-wide description sit above a search form with 40px top margin, 20px padding and 16px gaps. The form has labelled keyword and location fields plus a submit button. Four wrapping popular-search pills follow at 20px, with a role count 40px below.',
    style:
      'Slate-50 surface and slate-950 text in default sans. Heading is 40px semibold with 1.25 line-height, balanced wrapping and -0.025em tracking. Body is 18px slate-600. White form has a 16px radius, slate-200 border and small shadow. Fields are 48px tall with 8px corners and slate-500 borders; keyword placeholder is slate-600. Blue-700 submit has white 14px semibold text.',
    states:
      'Fields and submit show a 2px blue-700 keyboard outline offset 2px. Category links show a zinc-950 outline. Submit turns blue-800 on hover; category pills fill white. No transitions. Native location select and GET form work without JavaScript.',
    responsive:
      'Below 640px the form stacks and the 40px heading has no explicit line break. At 640px the heading is 60px with a line break, fields use two columns and submit spans both. At 1024px the form uses 1fr 1fr auto columns and submit occupies one column. Categories wrap at all widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
