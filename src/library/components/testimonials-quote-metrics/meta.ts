import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-quote-metrics',
  name: 'Testimonials — Quote with metrics',
  category: 'testimonials',
  tags: ['split', 'numbers'],
  description: 'A muted quote panel beside a story introduction and three results. Use to connect endorsements with measurable outcomes.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ ┌───────────────────────────┐    Eyebrow                     │
│ │ Logo                      │    Headline                    │
│ │                           │    Story introduction          │
│ │ Quote                     │    42%    Metric label         │
│ │                           │    ───────────────────         │
│ │ AR Name / Role            │    2.4x   Metric label         │
│ └───────────────────────────┘    ───────────────────         │
│                                  18 hrs Metric label         │
│                                  [Read case study]           │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. lg:grid-cols-2 with 64px gap. Quote uses neutral-50 rounded-lg p-6 sm:p-10, 24px quote and attribution 32px below with 44px avatar. Story has intro then dl 32px below with three py-5 rows, hairlines, 36px values before 14px labels.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Read quote then story heading, paragraph, metrics and case-study link. Slots: eyebrow 4 words, heading 8, two-sentence paragraph 32, quote 35, metric label 6, name 3, role 6. Values 42%, 2.4x, 18 hrs are text-4xl semibold.',
    states: 'Only case-study link interactive, hover neutral-600 and 2px neutral-900 focus outline offset 2px. Static panel and metrics.',
    responsive:
      'Quote stacks above story below 1024px. Panel padding grows 24px to 40px at 640px; heading and section padding increase then. Metrics remain separate horizontal rows.',
    usage:
      'Use for measured proof. Pick testimonials-large-quote without numerical results. Variations: two metrics, count instead of time, or dark quote panel.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
