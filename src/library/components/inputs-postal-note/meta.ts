import type { ComponentMeta } from '../../types'

export default {
  slug: 'inputs-postal-note',
  name: 'Inputs — Postal note',
  category: 'inputs',
  tags: ['editorial', 'light'],
  description:
    'A warm letter-style input set for a gift note, with a sender field and a bordered message area.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A fixed 288px stone-50 card with 20px padding, 1px stone-300 border and square corners. A 24px serif heading shares a row with a 32px decorative stamp. The sender label follows after 20px, with a 40px field 4px below it. The message label follows after 16px, with a 112px textarea 8px below. Both fields are block elements; the 11px limit hint follows after 8px.',
    style:
      'Default sans and stone-900 text, with a system serif heading, sender and message. The heading has 32px line-height. The stamp has a dashed stone-400 border and an 18px star. Labels are 10px semibold uppercase with 0.1em tracking. The 18px sender has 4px horizontal padding and a stone-500 bottom rule. The white message area has a stone-500 border, 12px padding, 16px text and 24px line-height, leaving room for the entire example note. The hint is stone-600.',
    states:
      'Both fields highlight their border in amber-800 on keyboard focus and draw a 2px slate-900 outline offset 2px. The message is limited to 180 characters and its hint is linked with aria-describedby. Textarea resizing is disabled to keep the compact frame; there are no animations.',
    responsive:
      'The root stays 288px wide at all viewport widths. Keep the same compact arrangement on mobile and desktop; no breakpoint changes are required.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
