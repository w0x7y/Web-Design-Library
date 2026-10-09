import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-telemetry-window',
  name: 'Tabs — Telemetry window',
  category: 'tabs',
  tags: ['dark', 'corporate'],
  description:
    'A functional time-window radio selector with response-time summaries for three monitoring intervals.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide card with 20px padding. A flex header holds a 14px response-time title and 9px API/P95 label. After 16px, a three-column radio grid has 4px gaps and padding inside a border; each choice is 28px tall. A selected 36px metric and comparison line follow after 20px. A decorative seven-bar chart is 56px tall with 8px gaps and heights 32, 44, 36, 56, 40, 28 and 32px. A health footer sits 16px later with a top divider and 12px top padding.',
    style:
      'Default sans font on slate-950, slate-100 main text, a 1px slate-700 border and 12px outer radius. The radio grid has an 8px radius; labels have 4px radii and 11px slate-400 text, becoming white semibold on slate-700 when selected. Metric numerals are 36px system monospace with 40px line height and cyan-300 colour; the ms unit is 14px slate-400 with an 8px left margin. Comparison and footer use 10px slate-400. Bars have 4px top corners, cyan-400 at 40% opacity except the final solid bar. Footer divider is slate-800 and its decorative dot is cyan-300.',
    states:
      'The one-hour view starts selected. Native radios and arrow keys reveal the matching summary with :has; the decorative chart remains unchanged. Keyboard focus outlines labels in lime-300, 2px with 2px offset. Hidden inputs use focus-visible:outline-hidden and a transparent 2px forced-colors fallback. Checked labels become underlined in forced colours. No hover changes or animation.',
    responsive:
      'The card stays 288px wide at 320px, 390px, 768px and 1440px. All three window choices remain in one row, with no breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
