import type { ComponentMeta } from '../../types'

export default {
  slug: 'signup-workspace-starter',
  name: 'Create a business workspace',
  category: 'signup',
  tags: ['corporate', 'light'],
  description:
    'A workspace creation screen with a benefit checklist. Use it for team software with a simple self-serve trial.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px split sign-up: dark trial-benefits panel on the left, workspace name, email, password, terms and submit form on the right.',
    style:
      'White page with a zinc-950 16px-radius benefits panel, zinc-300 supporting text, thin zinc-700 list rules and 36px sans headline. The form uses zinc borders and a solid dark button.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
