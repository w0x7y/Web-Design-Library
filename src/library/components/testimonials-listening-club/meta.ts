import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-listening-club',
  name: 'Record club listening notes',
  category: 'testimonials',
  tags: ['playful', 'dark'],
  description:
    'A record sleeve and side-by-side listening notes with a decorative vinyl disc. Use it for music subscriptions and listening clubs.',
  preview: { kind: 'section' },
  fonts: ['Syne:wght@400..700'],
  brief: {
    layout:
      '1280px container with 64px padding vertically, 96px from 1024px. A square record sleeve occupies one column beside a three-track testimonial list at 768px, with 48px gap. Sleeve has a 240px disc and 24px interior padding.',
    style:
      'Fuchsia-950 ground, orange-200 sleeve and disc label, neutral-950 vinyl, fuchsia-200 secondary text. Syne 36px bold heading, 48px at 640px; 20px quote copy at 1.625 leading. Vinyl uses concentric 1px neutral-700 rings and an 80px centre label. Square sleeve, thin fuchsia-200/30 track dividers; no shadows.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Sleeve and track list stack below 768px; from 768px use 1fr / 1.3fr columns. Gutters increase from 24px to 40px and the title grows to 48px at 640px. Disc stays 240px and fits 320px viewports.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
