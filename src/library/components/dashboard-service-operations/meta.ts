import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-service-operations',
  name: 'Service operations dashboard',
  category: 'dashboard',
  tags: ['dark', 'corporate'],
  description:
    'An operations overview with service health, request volume and incident history. Use it for a developer service or internal reliability tool.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px service dashboard with health header, seven-bar request graph, service-by-service availability list and incident-history footer.',
    style:
      'Neutral-950 background, neutral-100 monospace type, neutral-700 borders and lime-300 healthy states/bars. Square panels, 30px metrics and 12px metadata.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Graph and services stack below 1024px, then split 1.4fr/1fr. Status badge, footer and service rows wrap on narrow screens; graph bars use flexible widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
