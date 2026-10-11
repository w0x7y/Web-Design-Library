import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-form-sidebar',
  name: 'Hero — Invitation with a request form',
  category: 'hero',
  tags: ['asymmetric', 'form', 'list'],
  description:
    'A wide invitation pitch and expectation list sit beside a compact two-field request form.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow                       Request an introduction     │
│Headline for the invitation   Name                        │
│Supporting lede               [Name                    ]  │
│Check Audience                Work email                  │
│Check Next step               [Work email              ]  │
│Check Response                Form hint                   │
│                              [Request access]            │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section becomes a 3:2 grid at 1024px with a 48px gap. The pitch contains the headline, lede and checklist; the form has a 1px border, 8px radius, 24px padding and vertically stacked 40px inputs.',
    hierarchy:
      'Read the 36px to 60px invitation headline, lede and expectations before the form title. Keep the headline under 10 words, lede under 25, expectations under 10 each and form hint under 20.',
    states:
      'Inputs show native required and email validation on submission, with hints linked through aria-describedby. Every field and the submit button shows a 2px focus outline. The submit action lightens on hover; the expectation list remains static.',
    responsive:
      'The form follows the pitch below 1024px. All fields and the submit button fill their column; the checklist stays one column. Vertical section padding increases at 640px.',
    usage:
      'Use for early access or an introductory conversation requiring a name and email. Pick a centered email form for one quick field. Variations: change name to organization, add a short optional message, or replace the checklist with response expectations.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
