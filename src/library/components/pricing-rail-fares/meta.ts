import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-rail-fares',
  name: 'Rail ticket fares',
  category: 'pricing',
  tags: ['minimal', 'corporate', 'light'],
  description:
    'A pair of rail fares presented as perforated tickets beneath a route summary. Use it for transport booking or simple fixed versus flexible prices.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..600'],
  brief: {
    layout:
      'Full-width white section, 1280px maximum width, 24px side padding and 64px vertical padding. Ruled brand masthead, route headline and paragraph, station strip with a 48px arrow, then two ticket articles with 20px gap. Ticket offer has 24px padding; stub has 20px padding and dashed separation. Fare prices are 48px; buttons are at least 44px tall.',
    style:
      'IBM Plex Sans, slate-950 ink, slate-600 secondary text and slate-300 rules. Red-700 rectangular buttons with white 14px semibold labels. Slate-50 ticket stubs, no shadows or radii. Heading 36px medium, 1.1 line height and tight tracking. 12px uppercase labels with 0.1em tracking.',
    states:
      'Buttons fill red-800 on hover-capable devices. All links have a 2px slate-950 keyboard-focus outline with 2px offset, including forced colours. No animation.',
    responsive:
      'At 640px vertical padding becomes 80px, heading becomes 60px and each ticket splits into a flexible offer and 128px stub with a dashed left rule. At 768px tickets sit side by side. At 1024px heading and intro form 1.4fr/1fr columns. Route text wraps on small screens.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
