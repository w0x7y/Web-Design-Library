import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-alpine-residency',
  name: 'Alpine artist residency',
  category: 'cta',
  description:
    'A photo-backed artist residency CTA with a dark gradient scrim and a translucent application panel.',
  tags: ['glass', 'gradient', 'dark', 'has-image'],
  preview: { kind: 'section' },
  fonts: ['Newsreader:wght@400..700'],
  brief: {
    layout:
      'Full-width isolated section with a cover photograph behind a 1280px maximum-width container, 24px side and 56px vertical padding. Ruled brand masthead precedes headline and application pane with 48px top margin. Pane has 24px padding, three ruled definition-list rows and a booking-sized application link.',
    style:
      'Newsreader, white text over an Alpine photograph and left-to-right slate-950 gradient at 90% to 60% opacity. Heading is 52px regular, 1.05 leading, -.025em tracking; body 20px/28px. Glass pane has slate-950 at 70%, 12px backdrop blur, 1px white border at 30% and 16px corners. Amber-200 action with slate-950 14px semibold label and 8px radius; no shadows. Dark scrim/pane preserve text contrast.',
    states:
      'Application action becomes amber-100 on hover-capable devices, with a 2px white focus outline offset 4px. Image has descriptive alt text and scrim is decorative. No animation.',
    responsive:
      'At 640px padding becomes 80px vertical and 32px horizontal, headline 80px and pane padding 32px. At 1024px headline/pane form 1.2:.8 columns with 80px gap, aligned to the bottom. Smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
