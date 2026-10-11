import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-free-custom-contact',
  name: 'Pricing — Free access and a custom pricing form',
  category: 'pricing',
  tags: ['asymmetric', 'form', 'numbers'],
  description:
    'An unequal pair contrasts a complete free offer with an email form for a custom agreement.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│┌──────────────────────────┐   ┌────────────────────────┐ │
││Free access               │   │Custom access           │ │
││$0 no payment required    │   │Description             │ │
││Check Essentials          │   │Work email              │ │
││Check Resources           │   │[Email                ] │ │
││[Create free account]     │   │Hint                    │ │
│└──────────────────────────┘   │[Request pricing]       │ │
│                               └────────────────────────┘ │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section places a 3:2 offer grid below its introduction from 768px with 24px gaps. Both regions have 1px borders, 8px radii and 24px padding; the custom region uses neutral-50 and a 40px email field.',
    hierarchy:
      'The free price and allowance read first, followed by custom-scope context and the request form. Keep offer headings under 4 words, allowance rows under 6 and custom context under 20.',
    states:
      'The email field uses native required and email validation with an associated hint. Both actions and the input show visible 2px focus outlines. The filled free action lightens on hover and the custom submit button fills neutral-50.',
    responsive:
      'Offers stack below 768px with free access first. The custom email field and submit button fill their region and the hint wraps without overflow.',
    usage:
      'Use when there is a real free entry point and a negotiated larger offer. Pick tier cards for fixed paid prices. Variations: add a free usage cap, change the request field to organization, or show a phone contact below custom pricing.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
