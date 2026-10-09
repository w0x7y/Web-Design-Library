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
      'A 1152px container centers a label, 60px headline and description above a white bordered search form. Form has a keyword input, location select and search button; four category links and a hiring statistic sit below.',
    style:
      'Slate-50 background, slate-950 heading, slate-600 body and blue-700 action. White form has a 16px radius, slate-200 border and subtle shadow. Inputs are 48px tall with 8px radii.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Form is stacked on phones, two columns at 640px and three columns at 1024px. Heading is 40px on phones and 60px at 640px. Category links wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
