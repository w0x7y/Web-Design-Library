import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-dog-training',
  name: 'Dog training class signup',
  category: 'signup',
  tags: ['playful', 'light'],
  description:
    'A Goodpaw dog-training enrollment with an original dog illustration, owner and dog names, and native puppy-versus-adult class choices.',
  preview: { kind: 'section' },
  fonts: ['Familjen Grotesk:wght@400..700'],
  brief: {
    layout:
      'A 1152px container padded 24px horizontally and 64px vertically. Welcoming introduction with a 240px decorative dog drawing beside a rounded enrollment panel. Form padding 24px, 20px gaps, 44px fields and two stacked class radios.',
    style:
      'Familjen Grotesk on orange-100 with warm #422d22 ink. Orange-50 form, 32px outer radius, 12px field radii, pill submit. Dog illustration uses terracotta #b56b3e, cream and sky collar. Heading 36px/1.1 semibold, growing to 48px. No shadows.',
    states:
      'Controls use 2px current keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Submit focus uses #422d22 for contrast against the surrounding light background. Native fields retain browser validation. No animation. Class radios show a solid border and 5% ink fill when checked. Dog illustration is decorative; class age ranges are written next to the radio names.',
    responsive:
      'Stacks with 40px gaps below 768px. At 640px heading becomes 48px, form padding 32px and owner/dog names share a row. At 768px introduction and form use two equal columns with 64px gap.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
