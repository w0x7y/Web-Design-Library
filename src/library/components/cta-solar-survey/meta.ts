import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-solar-survey',
  name: 'Home solar survey',
  category: 'cta',
  description:
    'A green-gradient solar survey CTA with a roof diagram and a labelled postcode form for checking service coverage.',
  tags: ['corporate', 'gradient', 'light'],
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width section with 24px horizontal and 56px vertical padding. Eyebrow and 768px-wide headline above a roof illustration/caption and a survey form, with 40px top margin. Diagram has 448px maximum width and 290:220 viewBox. Form has a 1px top rule, 24px top padding and a 48px full-width postcode field.',
    style:
      'Manrope, diagonal oklab gradient from lime-50 through emerald-100 to teal-200, teal-950 ink, teal-800 supporting text. Heading 40px semibold, 1.1 leading, -.025em tracking. Teal-800 outlined house and solid panels; white postcode field with teal-700 border, 8px radius. Teal-950 action with white 14px semibold text, 8px radius and 48px minimum height. No shadows.',
    states:
      'Action becomes teal-900 on hover-capable devices. Input and action each have a 2px teal-950 focus outline offset 4px. Postcode has a visible label, postal-code autocomplete and aria-describedby for service-area text; native required validation. No animation.',
    responsive:
      'At 640px padding becomes 80px vertical and 32px horizontal and heading becomes 56px. At 768px illustration/form form 1.3:1 columns with 64px gap. Smaller widths stack; field remains full-width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
