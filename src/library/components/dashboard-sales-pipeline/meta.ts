import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-sales-pipeline',
  name: 'Sales pipeline overview',
  category: 'dashboard',
  tags: ['minimal', 'light'],
  description:
    'A sales dashboard with stage values, priority opportunities and target progress. Use it for a compact CRM overview.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px CRM overview with four stage-total panels, three priority opportunities and a monthly-target meter.',
    style:
      'White page, zinc-50 stage cards, emerald-50 won stage and emerald-700 target rule. Sans 30px title and metrics, zinc-500 metadata and fine zinc-200 list borders.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Stages stack on phones, use two columns from 640px and four from 1024px. Opportunity list and target panel split at 1024px; amounts wrap beside names.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
