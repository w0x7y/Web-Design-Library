import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-link-columns',
  name: 'Footer — Brand and link columns',
  category: 'footer',
  tags: ['asymmetric', 'grid', 'compact'],
  description:
    'An identity block and four link groups lead into a copyright and legal row. Use it for a broad site directory.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Logo                Product    Resources Company   Support   │
│ One-sentence        Overview   Guides    About     Help      │
│ identity statement  Features   Docs      Careers   Contact   │
│ [Social icon links] Pricing    Updates   Press     Status    │
│                     More links in each group                 │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                            Privacy Terms Cookies   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white footer has a neutral-200 top border and a 1152px max-w-6xl container with 24px side padding, 64px top padding and 96px from 640px. At 1024px a 12-column grid with 48px gaps assigns 4 columns to identity and 8 to four navigation groups. Blurb max-width is 320px. Groups use 14px headings, 16px heading-to-list spacing and 12px link gaps. Four social glyphs are 20px. A legal row follows a 48px margin and hairline with 24px vertical padding.',
    hierarchy:
      'Logo and a 14px statement lead, then four labelled groups with five links each and 14px copyright. Limit statement to 22 words and group labels and links to 1–2 words. Social links have accessible names.',
    states:
      'Text links hover from neutral-900 to neutral-600. Social glyphs hover to neutral-600. Navigation is static. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 1024px identity stacks above the link grid with a 48px gap. Groups use two columns below 768px and four above. Copyright and legal links stack below 768px and are justified above. Legal and social rows wrap as needed.',
    usage:
      'Use for four clear destination groups. Choose footer-centered-links for a shorter directory. Variations: use account links in one group, reduce social links, or replace the statement with a short mission.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
