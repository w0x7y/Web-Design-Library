import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-featured-mosaic',
  name: 'Testimonials — Featured quote mosaic',
  category: 'testimonials',
  tags: ['bento', 'asymmetric'],
  description: 'A full-height lead quote beside two stacked supporting figures. Use to emphasize one customer story.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Eyebrow / Headline                                           │
│ ┌───────────────────────────────┐ ┌────────────────────┐     │
│ │ Logo                          │ │ Supporting quote   │     │
│ │                               │ │ JL Name / Role     │     │
│ │ Large featured quote          │ └────────────────────┘     │
│ │                               │ ┌────────────────────┐     │
│ │───────────────────────────────│ │ Supporting quote   │     │
│ │ AR Name / Role [Read story]   │ │ SK Name / Role     │     │
│ └───────────────────────────────┘ └────────────────────┘     │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 1152px max-w-6xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. Left-aligned intro above 40px-separated md:grid-cols-[7fr_5fr] mosaic, 20px gaps. Lead flex-column p-6 figure has 24px logo, 24px quote, mt-auto footer with top border and 24px padding. Right stacks two p-6 figures with 16px quotes and 40px avatars.',
    hierarchy:
      'Section headings are 30px text-3xl semibold, 36px sm:text-4xl at 640px, with tight tracking and balanced wrapping. Read headline, logo, lead quote and story, then supporting voices. Slots: eyebrow 4 words, headline 8, lead quote 45, supporting quote 28, name 3, role 6, link 3. Lead attribution stays bottom aligned.',
    states: 'Only lead story link interactive with hover neutral-600 and 2px neutral-900 focus outline offset 2px. Static figures.',
    responsive: 'Figures stack lead first below 768px. Above, 7:5 columns stretch lead beside two figures. Heading and padding increase at 640px.',
    usage:
      'Use for one lead story with supporting voices. Pick testimonials-masonry for larger collections. Variations: category label instead of logo, metric instead of support quote, or omit link.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
