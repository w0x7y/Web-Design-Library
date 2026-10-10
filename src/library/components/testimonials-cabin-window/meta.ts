import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-cabin-window',
  name: 'Guest letter by the window',
  category: 'testimonials',
  tags: ['glass', 'gradient', 'dark', 'has-image'],
  description:
    'A mountain window with a translucent guest letter and a stay annotation. Use it for a quiet cabin retreat or boutique accommodation.',
  preview: { kind: 'section' },
  fonts: ['Instrument Serif'],
  brief: {
    layout:
      'Full-width image-backed section with a 1280px content container. A glass guest letter has 24px padding, 40px at 640px; 24px phone gutters, 40px at 640px. At 768px the letter and stay label form 1.4fr / 1fr columns with a 48px gap. 64px vertical padding, 96px at 1024px.',
    style:
      'Mountain photo under a dark teal-to-transparent gradient veil. A teal-950/80 glass letter has a 1px white/30 border, 24px backdrop blur and 16px radius. Instrument Serif 36px title and quote, both 48px at 640px, with 1.1 and 1.2 leading. White body text, cyan-100 captions and white/30 dividers.',
    states:
      'Links underline on hover on devices with hover. Every link has a 2px current-colour focus-visible outline offset 4px. No animation or automatic movement.',
    responsive:
      'Below 768px the stay annotation sits below the letter; from 768px it aligns at the bottom of the right column. Title, quote, panel padding and gutters grow at 640px. Background photo fills the section at every size.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
