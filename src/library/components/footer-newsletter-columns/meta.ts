import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-newsletter-columns',
  name: 'Footer — Newsletter above links',
  category: 'footer',
  tags: ['stacked', 'form', 'grid'],
  description:
    'A labelled signup form sits above four navigation groups and a legal bar. Use it when subscription is the final page action.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Newsletter headline         Email                            │
│ Short signup description    [name@example.com] [Subscribe]   │
│                             Consent and frequency hint       │
│ ──────────────────────────────────────────────────────────   │
│ Product        Resources       Company       Support         │
│ Link list      Link list       Link list     Link list       │
│ ──────────────────────────────────────────────────────────   │
│ Copyright                            Privacy Terms Cookies   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white ruled footer uses a 1152px max-w-6xl container and 24px side padding. Newsletter band has 64px vertical padding, 96px from 640px and 48px gaps; at 1024px two equal columns align bottom. A 24px heading sits 12px above 16px copy. A visible 14px label precedes the 40px email input and 44px submit with 12px gaps; 14px hint sits 12px below. Ruled links band has 48px vertical padding; legal row has 24px.',
    hierarchy:
      'Signup headline and Email field dominate the four link groups. Limit headline to 6 words, copy to 22 and hint to 16. Email is required with type=email, autocomplete=email and aria-describedby pointing to the hint. Each group has four links.',
    states:
      'Text links hover from neutral-900 to neutral-600. Primary actions are 44px tall with a 6px radius, neutral-900 fill, neutral-700 hover fill and 150ms colour transition. The native GET form validates required email before submitting. Only browser validation is shown. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 1024px newsletter copy and form stack. Below 640px input and button stack full width; from 640px they share a row. Link groups use two columns below 768px and four above. Legal row stacks below 768px and is justified above.',
    usage:
      'Use when a newsletter is the final useful page action. Choose footer-link-columns when signup belongs elsewhere. Variations: change frequency copy, shorten the directory, or add a preferences link beside the hint.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
