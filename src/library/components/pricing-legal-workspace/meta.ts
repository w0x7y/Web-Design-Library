import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-legal-workspace',
  name: 'Legal workspace seat pricing',
  category: 'pricing',
  tags: ['corporate', 'dark'],
  description:
    'A single-rate legal operations pricing section with four included workflows and a seat-billing disclosure. Fits software with free reviewers and paid specialists.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      '1280px maximum width with 24px side and 64px vertical padding. Eyebrow followed by a ruled pricing banner with headline and intro next to a 60px seat price and full-width 48px CTA. Four workflow items sit 40px below with 28px gaps. A seat-count details disclosure follows under a top rule.',
    style:
      'Manrope, indigo-950 section, white headings, indigo-100 supporting text, sky-200 accent. Heading 36px semibold with 1.15 line height and tight tracking. Indigo-400 separators. CTA sky-200 with indigo-950 bold 14px text and 6px radius. 12px numbered workflow labels, 18px titles, 14px/1.625 descriptions. No shadows.',
    states:
      'CTA fills sky-100 on hover; disclosure summary turns sky-200. Both show 2px sky-200 focus outlines, offset 2px on CTA and 4px on summary. Details toggles seat definition natively. Workflow list retains role=list. No animation.',
    responsive:
      'At 640px padding becomes 80px, heading becomes 48px and workflows form two columns. At 1024px banner uses 1.5fr/1fr columns with end alignment, and workflows form four columns. Below 640px all content stacks; rate and unit can wrap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
