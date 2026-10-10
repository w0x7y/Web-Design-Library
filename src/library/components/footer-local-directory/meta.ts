import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-local-directory',
  name: 'Local directory footer',
  category: 'footer',
  tags: ['corporate', 'light'],
  description:
    'A neighborhood service footer with hours, contact details and a compact directory. Use it for local businesses and civic services.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A full-width white contact strip has top and bottom borders. Its centered 1152px inner row uses 24px side and 32px vertical padding and a 24px gap between telephone and booking action. Phone starts 8px below its label. A second 1152px container has 24px side padding and a main grid with 40px gaps and vertical padding. Columns contain practice identity and address, opening hours in a dl, and a six-link directory. Address starts after 16px and access note after 12px. Hours and navigation start after 20px; hour rows have 12px vertical spacing, 20px internal gaps and 320px maximum width. Navigation is two columns with 16px gaps. Legal row has a top rule, 20px vertical padding and 16px wrapping gap.',
    style:
      'Slate-50 canvas, white contact strip, slate-950 ink, slate-600 secondary text and 1px slate-200 borders. Phone is 30px semibold with 36px line height and -0.025em tracking; wordmark is 24px semibold with 32px line height and the same tracking. Contact label is 12px medium. Group headings are 12px semibold uppercase slate-500 with 0.05em tracking. Address is 14px with 1.625 line height and normal style; hours and links are 14px, legal text 12px. Blue-700 booking action has white 14px semibold text, 8px radius, 20px side padding, 48px minimum height and a 16px arrow with 12px gap.',
    states:
      'Phone uses a tel link. Phone and wordmark turn blue-700 on hover; directory links turn blue-700 and gain underlines; legal links gain underlines; booking fill becomes blue-800. Every link shows a 2px zinc-950 focus outline offset 2px, including in forced colors. Lists keep explicit list roles. No transitions.',
    responsive:
      'Contact strip stacks below 768px and becomes a vertically centered space-between row from 768px. Main grid has one column below 640px, two equal columns from 640px and three from 1024px. Directory remains two columns. Legal row wraps; all container side padding stays 24px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
