import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-service-operations',
  name: 'Service operations dashboard',
  category: 'dashboard',
  tags: ['dark', 'corporate'],
  description:
    'An operations overview with service health, request volume and incident history. Use it for a developer service or internal reliability tool.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1152px service dashboard with 40px vertical and 24px horizontal padding. A wrapping health header has 16px gaps and a bottom rule with 24px bottom padding. Two panels follow after 28px with 24px gaps and padding. The request figure shows seven flexible bars in a 128px-high row with 12px gaps and 10px day labels, under a 30px total. The service list has 20px gaps and 16px bottom padding per ruled row. An incident footer follows after 24px with 24px top padding and 16px wrapping gaps.',
    style:
      'System monospace throughout on neutral-950, with neutral-100 ink, neutral-400 metadata, neutral-700 1px rules and lime-300 healthy-state text and bars. Square panels, 30px title at medium weight and 30px regular tabular request total, both with 36px line height. Status badge has a 4px radius, 1px lime-300 border at 40% opacity and 8px vertical, 12px horizontal padding. Bar heights are 48, 66, 82, 54, 92, 78 and 70px, with 4px top radii. No shadow.',
    states:
      'The incident-history link has a 4px underline offset and a 2px current-color keyboard focus outline offset by 2px. The chart figure name lists all daily request counts totaling 2.45 million; decorative bars and initials are aria-hidden. Service health is explicit in text. No hover change or animation.',
    responsive:
      'Graph and services stack below 1024px, then split 1.4fr/1fr. Horizontal padding increases from 24px to 48px at 640px. Status badge, footer and service rows wrap on narrow screens with 16px, 16px and 12px gaps respectively. Graph bars use equal flexible widths with zero minimum width. The layout reflows at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
