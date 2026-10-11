import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-brand-utility-stack',
  name: 'Navbar — Brand beside stacked navigation',
  category: 'navbar',
  tags: ['asymmetric', 'row', 'compact'],
  description:
    'An identity block sits beside two right-aligned rows for utility links and main destinations.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌────────────────────────────────────────────────────────────┐
│Logo                      [Help] [Account] [Contact]        │
│Identity descriptor                                         │
│                          [Product] [Pricing] [Docs] [About]│
└────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'At 768px, a 224px brand column sits beside flexible stacked navigation with a 24px gap. The utility row has a bottom border and 16px lower padding; the primary row follows after 20px. The header uses max-w-6xl and 24px padding.',
    hierarchy:
      'The brand and descriptor identify the site; utility links stay above the main destinations. Limit the descriptor to 8 words and link labels to 2.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Below 768px the brand precedes the navigation stack. Both navigation rows align left and wrap. Utility and primary roles retain separate labelled nav elements.',
    usage:
      'Use when utility destinations need clear separation from the main route list. Pick a one-row bar for fewer links. Variations: replace account with sign-in, add a language destination, or shorten the identity block.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
