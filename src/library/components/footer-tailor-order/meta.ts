import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-tailor-order',
  name: 'Bespoke tailor order-card footer',
  category: 'footer',
  tags: ['corporate', 'minimal', 'light'],
  description:
    'A bespoke tailor footer shaped like a commission card, with three fitting stages and an appointment directory behind a dashed seam. Use it for tailoring ateliers.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      'A full-width footer with a centred 1280px container, 48px vertical and 24px side padding. A 1px bordered commission card holds a tailoring statement and appointment navigation. Three commission stages sit in an ordered three-column list below a 2px stone-700 rule. A dashed seam separates the appointment panel. Bottom policy row wraps with 20px gaps.',
    style:
      'IBM Plex Sans, stone-950 on white. Stone-50 appointment panel, stone-200 dashed seam and borders, 16px card radius. Brand is 24px bold; heading 36px medium with 1.1 line height and -0.03em tracking. Navigation is 15px, stages and policy text 12px. No shadows.',
    states:
      'Links underline on hover on devices that support hover. Every link has a 2px currentColor keyboard focus outline offset 4px, which remains visible in forced-colors mode. No animation.',
    responsive:
      'Below 640px card padding is 24px and heading 36px. From 640px padding is 40px and heading 48px. From 768px card becomes a flexible commission column plus a 304px appointment panel, with the dashed seam moving to the left. From 1024px container side padding is 32px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
