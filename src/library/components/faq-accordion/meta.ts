import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-accordion',
  name: 'FAQ accordion',
  category: 'faq',
  tags: ['minimal', 'light'],
  description:
    'A minimal FAQ for a photo-backup service, built from native <details> and <summary>, so it opens and closes without JavaScript. A semi-condensed headline and a support link sit on the left; on the right, six questions on hairlines, each with a ringed plus that fills and turns into a minus when open. The first answer is open by default. Use it on pricing, product or help pages.',
  preview: { kind: 'section' },
  fonts: ['Radio Canada:wdth,wght@75..100,300..700'],
  brief: {
    layout:
      '1152px container with 24px side padding (32px from 1024px). Below 1024px the intro and the questions stack 48px apart; from 1024px a 12-column grid with 32px gaps puts the intro in columns 1–4 and the questions in columns 6–12. Intro: the h2, a paragraph 20px below (max 384px), and a "Write to support" link with a 16px arrow 24px below that. Questions: a wrapper with a 1px top border holding six <details name="faq-accordion"> (the shared name makes them an exclusive accordion where browsers support it), each with a 1px bottom border; the first has the open attribute. Each <summary> is a flex row (24px padding top and bottom, 24px gap, items aligned to the top) with the question text and, at the right, a 32px ring pulled up 2px, holding a plus drawn from two 12 × 2px bars. The answer is a paragraph of at most 60ch with 28px bottom padding.',
    style:
      'White background, zinc-950 text, Radio Canada throughout. h2: 40px semibold at semi-condensed width (87.5%), −0.03em tracking, line height 1, balanced. Paragraph: 17px zinc-600, 1.625 line height. Link: 17px semibold with a 2px zinc-300 underline offset 0.3em. Hairlines: 1px zinc-200. Questions: 18px medium, 28px line height, −0.01em tracking. Ring: an inset 1px zinc-300 ring, fully round; the bars are zinc-950 with rounded ends. Answers: 16px zinc-600, 1.625 line height. The default disclosure marker is removed (list-style none and a hidden ::-webkit-details-marker).',
    states:
      'Open item: the ring fills zinc-950, both bars turn white, and the vertical bar rotates 90deg (200ms) so the plus becomes a minus. Hovering a question darkens its ring to zinc-950. Summaries are natively keyboard operable (Enter or Space toggles them) and show a 2px zinc-950 outline offset 2px, with a 6px radius, on keyboard focus. On hover the support link\'s underline turns zinc-950 and its arrow moves 2px right; on focus the link shows a 2px zinc-950 outline offset 4px. Colour changes use 150ms transitions, and hover rules apply only on devices that support hover.',
    responsive:
      'h2: 40px, 48px from 640px. Questions: 18px, 20px from 640px, with a 28px line height throughout. From 640px the answers get 56px of right padding, so they stop under the question text rather than under the ring. Vertical padding: 80px, 96px from 640px, 128px from 1024px. Layout: stacked below 1024px; from 1024px a 4 + 7 column split with one empty column between.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
