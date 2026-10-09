import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-cashflow-report',
  name: 'Cash flow dashboard',
  category: 'dashboard',
  tags: ['editorial', 'light'],
  description:
    'A financial overview with balance, weekly income and recent payments. Use it for a freelance or small-business dashboard.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px dashboard with ruled greeting, balance panel, seven-bar weekly income panel and three recent payment rows. Balance includes two smaller monthly totals.',
    style:
      'Warm #f7f3eb canvas, #383229 text, olive #686f4c bars and thin brown rules. System serif 36px greeting, sans metrics with tabular digits and square panels.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Summary panels stack below 1024px and become 1fr/1.4fr above. Balance submetrics remain a two-column grid with wrapping text; payment rows wrap on phones.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
