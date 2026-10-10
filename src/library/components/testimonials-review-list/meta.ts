import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-review-list',
  name: 'Testimonials — Rating summary and review list',
  category: 'testimonials',
  tags: ['list', 'numbers', 'compact'],
  description: 'A rating summary above four detailed reviews with reviewer identity columns. Use for scannable review content with dates.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Headline / Lede                          4.9 / Stars         │
│                                      from 1,284 reviews      │
├──────────────────────────────────────────────────────────────┤
│ AR Name            Stars / Review title                      │
│ Verified customer  Quote and date                            │
├──────────────────────────────────────────────────────────────┤
│ JL Name            Stars / Review title                      │
│ Verified customer  Quote and date                            │
├──────────────────────────────────────────────────────────────┤
│ SK Name            Stars / Review title                      │
│ Verified customer  Quote and date                            │
├──────────────────────────────────────────────────────────────┤
│ MT Name            Stars / Review title                      │
│ Verified customer  Quote and date                            │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Bottom-aligned sm:flex-row header with 32px gap and rating summary. Review list 40px below top border has four py-7 rows with bottom hairlines, md:grid-cols-[192px_1fr] and 32px gap. Identity is 40px avatar beside name and verification; review has stars, 18px title, 16px quote and 14px date.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Heading then 48px 4.9 summary and 1,284 count, then review titles and quotes. Summary is labelled 4.9 out of 5; each review has accessible five-star label. Slots: heading 8 words, lede 24, title 6, quote 32, name 3, date/category 6.',
    states: 'Static reviews and summary; no filters, sorting or controls.',
    responsive:
      'Header stacks below 640px, summary right aligns above. Reviewer identity stacks above content below 768px and gets 192px column above. Heading and padding increase at 640px.',
    usage:
      'Use for detailed dated reviews. Pick testimonials-card-grid for shorter voices. Variations: vary ratings, three rows, or role instead of verification.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
