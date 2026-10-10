import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-film-darkroom',
  name: 'Film lab contact sheet',
  category: 'faq',
  tags: ['editorial', 'dark'],
  description:
    'A film lab FAQ with contact-sheet frame numbers and a processing-time note. Use it for a photographic service or analogue film shop.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px wrapper, 24px/64px padding, 40px/96px at 1024px. Masthead beside a 240px turnaround note, then four full-width ruled disclosures. At 640px, summary grid has a 64px frame label, flexible question and plus, with 24px gaps; answers inset 88px.',
    style:
      'Newsreader on red-950 with rose-100 text and rose-200 answers. Rose-300 borders at 40%, square frame-number boxes. No radius or shadow. Heading 40px/56px, questions 24px medium, answers 18px at 1.7 leading.',
    states:
      'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive:
      'Turnaround note stacks below 768px. Frame numbers hide below 640px and answer inset disappears. Heading grows to 56px at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
