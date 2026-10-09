import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-developer-answers',
  name: 'Developer answers FAQ',
  category: 'faq',
  tags: ['dark', 'minimal'],
  description:
    'A technical FAQ with code-like question numbers and native disclosures. Use it for API and infrastructure product pages.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px dark section has an uppercase label, 48px headline and three disclosure panels. Each panel includes a monospace question prefix. A bordered footer gives the documentation action and support promise.',
    style:
      'Zinc-950 background, zinc-900 panels, zinc-700 borders, white summaries and lime-300 labels. Panels have 12px radii and 20px padding. Answers use 14px zinc-400 text.',
    states:
      'Native details reveals answers with a visible plus-to-cross icon. The shared name makes panels exclusive where supported. Summaries and documentation link have white 2px focus outlines with 2px offsets. No animation.',
    responsive:
      'Title is 36px on phones and 48px at 640px. Panels remain full width. Footer becomes a horizontal row at 640px and wraps text without fixed widths.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
