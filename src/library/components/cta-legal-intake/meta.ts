import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-legal-intake',
  name: 'Legal intake demonstration',
  category: 'cta',
  description:
    'A legal operations demo CTA that pairs a concise invitation with a realistic intake dossier.',
  tags: ['corporate', 'light'],
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      '1280px maximum-width section with 24px horizontal and 56px vertical padding. Header contains brand and headline above a 1px rule. Body has a short pitch/action column and a sample request dossier with a two-column semantic definition list. Dossier has 20px padding, 12px radius and 1px border.',
    style:
      'IBM Plex Sans, white background, teal-950 text, teal-800 body, teal-700 labels, teal-200 rules and teal-50 dossier. Heading is 36px medium with 1.15 leading and -0.025em tracking. Action is teal-800 with white 14px semibold text, 8px corners and 48px minimum height. No shadows.',
    states:
      'Demo action becomes teal-900 on hover-capable devices, with a 2px teal-950 outline offset 4px on keyboard focus. The sample request is static, clearly labelled as an example. No animation.',
    responsive:
      'At 640px section padding becomes 80px vertical and 32px horizontal, heading 48px, dossier padding 28px and fields form two columns. At 768px header and body each become 1:2 columns with 48px gaps. Smaller widths stack.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
