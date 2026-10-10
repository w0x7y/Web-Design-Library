import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-travel-itinerary',
  name: 'Tabs — Travel itinerary',
  category: 'tabs',
  tags: ['minimal', 'light'],
  description:
    'A native radio-backed day selector that switches a compact city itinerary, with times and activity descriptions.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide itinerary card with 20px padding. A 10px destination eyebrow and 20px city heading precede a three-column day selector by 16px. The selector has 4px padding and gaps, with 32px-high labels. Each day reveals a heading and two timed stops 20px below the selector. Stops start 16px below the heading, have 16px row gaps and a 12px gap between the time and activity. A footer has a top rule, 20px top margin and 12px top padding.',
    style:
      'Default sans font on white with slate-900 text, a 1px slate-200 border and 16px outer radius. City is emerald-950 semibold; the eyebrow is slate-500 uppercase with 0.1em tracking. The selector uses slate-100 and an 8px radius; labels are 12px medium with 6px radii, white fill, emerald-900 text and a small 0 1px 2px shadow when checked. Panel headings are 14px semibold. Times are 10px slate-500 system monospace with 2px top padding. Activities are 12px medium with 16px line height; details are 11px slate-500 with 4px top margin. Footer is 10px slate-500.',
    states:
      'Friday starts selected. Native radio selection and arrow keys switch the visible day with :has. Unselected labels turn emerald-50 on hover; selected labels stay white. Focus draws a 2px slate-900 outline with 2px offset around the label. Hidden inputs use focus-visible:outline-hidden and a transparent 2px forced-colors fallback. Checked labels become underlined in forced colours. No animation.',
    responsive:
      'The card remains 288px wide at 320px, 390px, 768px and 1440px. Keep three day choices in a row and allow activity descriptions to wrap. There are no breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
