import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-large-quote',
  name: 'Testimonials — Single large quote',
  category: 'testimonials',
  tags: ['centered', 'spacious'],
  description: 'One centred quote with glyph, attribution and story link. Use when one strong statement carries the proof.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│                          Quote glyph                         │
│               One large balanced customer quote              │
│                 that names the main outcome                  │
│                  and gives a concrete reason.                │
│                     AR Name / Role                           │
│                     [Read full story]                        │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'White section with 896px max-w-4xl container, 24px px-6 side padding and 64px py-16 vertical padding, increasing to 96px sm:py-24 at 640px. 48px quote glyph, figure 24px below, balanced text-2xl medium quote rising to text-3xl at 640px. Centred attribution 40px below has 48px avatar and 12px gap; story link follows 16px below.',
    hierarchy:
      'Read quote, name, role then story link. Quote 24px/32px mobile and 30px/36px from 640px. Slots: quote up to 40 words, name 3, role 6, link 3. Glyph and initials decorative.',
    states: 'Only story link interactive: hover neutral-600 and 2px neutral-900 focus outline offset 2px. Static figure.',
    responsive: 'One centred column always. Quote grows from 24px to 30px and padding 64px to 96px at 640px. Identity wraps beside avatar.',
    usage: 'Use for one memorable endorsement. Pick testimonials-card-grid for several voices. Variations: longer quote, omit link, or use a logo.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
