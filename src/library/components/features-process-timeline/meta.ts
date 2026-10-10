import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-process-timeline',
  name: 'Process timeline features',
  category: 'features',
  tags: ['minimal', 'light'],
  description:
    'A three-step service process with numbered steps and a delivery promise. Use it to explain a product onboarding or professional service.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A white section with a 1152px maximum-width container, 24px side padding and 80px vertical padding. A 12px eyebrow precedes a max-width 672px h2 by 16px. An ordered list begins 48px below, with 40px gaps. Each step has a top rule and 24px top padding, a 48px number circle, 20px h3 24px below, body copy 12px below, and a timing label 20px below. A full-width delivery note starts 48px after the list with 24px padding and 16px gap.',
    style:
      'Default sans font, slate-950 headings and slate-600 body. Heading is 36px semibold with 1.25 line height and -0.025em tracking. Eyebrow is 12px blue-700 semibold uppercase, 0.1em tracking. Step rules are 1px slate-200; number circles are blue-700 with white 14px semibold text. Body is 16px with 1.625 line height; timings are 12px medium blue-700. Delivery note has slate-50 fill, a 1px slate-200 border, 12px radius and 14px text with a bold slate-950 lead. Ordered list retains semantics with role=list.',
    states:
      'Meet the team is the only control. It underlines on hover-capable devices and shows a 2px zinc-950 outline offset 2px on keyboard focus, including forced-colors mode. Its decorative 16px arrow is aria-hidden. No motion or transitions.',
    responsive:
      'Heading is 36px below 640px and 48px from 640px, retaining 1.25 line height. Below 768px steps stack; at 768px they become three equal columns with 40px gaps. The delivery note stacks below 640px, then becomes a row with centered items and space-between alignment. The link does not shrink. Section padding stays 24px horizontally and 80px vertically.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
