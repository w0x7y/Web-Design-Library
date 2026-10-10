import type { ComponentMeta } from '../../types'

export default {
  slug: 'testimonials-legal-dossier',
  name: 'Customer legal dossier',
  category: 'testimonials',
  tags: ['corporate', 'light'],
  description:
    'A customer dossier with native expandable accounts from legal and procurement teams. Use it for enterprise products with longer endorsements.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400..700'],
  brief: {
    layout:
      '1280px section. Heading and intro above a dossier with a cyan tab label, a white 1px-bordered body and three customer disclosures. Each summary has 24px padding; open quote bodies have 24px padding and a 32px bottom gap. 64px section padding, 96px at 1024px.',
    style:
      'Cyan-50 section, cyan-950 ink, cyan-700 labels and cyan-200 dossier border. Manrope 36px semibold heading, 48px from 640px. Quotes 24px with 1.5 leading. 16px summary names and 14px metadata. Cyan-100 hover summary fill, square dossier body, 8px rounded top tab corners, no shadows.',
    states:
      'Native details disclosures toggle independently with mouse, Enter or Space; the first is initially open. Summaries fill cyan-100 on hover; their 16px chevrons rotate 180 degrees when open. Summaries and the footer link show a 2px current-colour focus-visible outline, offset 4px. The footer link underlines on hover. No animation.',
    responsive:
      'The dossier stays one column at every width. Header stacks below 768px and forms 1.2fr / 1fr columns at 768px. Summary identity and outcome stack below 640px and align side by side above it. Gutters grow from 24px to 40px at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
