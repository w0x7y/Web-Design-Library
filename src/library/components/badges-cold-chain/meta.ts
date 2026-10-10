import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-cold-chain',
  name: 'Badges — Cold-chain checks',
  category: 'badges',
  tags: ['corporate', 'dark'],
  description:
    'Cryospan cold-chain badges show a refrigerated sample range and a handling-check record. Use them in clinical logistics shipment summaries.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..600'],
  brief: {
    layout:
      'A 288px panel with 20px padding and 12px radius. A 12px operator label precedes a temperature badge with a 36px range and 12px unit. A full-width chain-status badge follows after 12px. Three compact numbered handling-check rows sit below after 20px with 8px gaps, followed by a 12px shipment reference.',
    style:
      'IBM Plex Sans on slate-900 with slate-100 text and slate-600 1px border. Temperature plate uses cyan-200 with slate-950 ink and 6px radius. Chain-status badge uses a cyan-300 border with cyan-200 12px semibold text. Handling rows have slate-500 left rules, cyan-200 sequence numbers and 12px labels. No shadow.',
    states:
      'Static logged shipment data without controls, hover changes or animation. Temperatures include a unit and every handling state has a written label.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
