import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-member-wall',
  name: 'Member story wall',
  category: 'testimonials',
  tags: ['playful', 'light'],
  description:
    'A community testimonial section with three personal stories and a compact member tally. Use it for clubs, creative spaces and local communities.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container with 24px side and 80px vertical padding and a 40px grid gap. The introduction has an eyebrow, two-line heading, paragraph, 2800-member tally and community link. The story wall has a lead figure with a 40px initials avatar and two smaller figures, with 20px gaps. Story captions begin 24px below quotes.',
    style:
      'Amber-50 canvas and amber-950 system sans text. The lead story is orange-100; supporting stories are lime-100 and sky-100. Cards have 24px radii and 24px padding. Heading and tally are 36px bold with -0.025em tracking; heading has 1.25 line height. Lead quote is 20px medium and supporting quotes are 18px, all with 1.625 line height. Eyebrow is 12px bold uppercase orange-800. The orange-200 initials badge uses 12px bold text, names use bold type and the lead role is 12px orange-900.',
    states:
      'The community link underlines on hover on devices that support hover. Keyboard focus shows a 2px zinc-950 outline offset 2px. No transitions or animations.',
    responsive:
      'Stories stack below 640px. At 640px the wall becomes two equal columns; the lead spans both and gets 32px padding. At 1024px the introduction and wall sit in 1fr / 2fr columns with a 40px gap. Smaller cards retain 24px padding.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
