import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-icon-grid',
  name: 'Icon feature grid',
  category: 'features',
  tags: ['corporate', 'light'],
  description:
    'A corporate six-feature grid for a spend-management product: a headline and intro, then six features that each hang from a hairline rule, with a blue duotone icon tile at the start of the rule and the plan that includes the feature at its end. Use it to list product capabilities on a SaaS or B2B landing page.',
  preview: { kind: 'section' },
  fonts: ['Libre Franklin:wght@100..900'],
  brief: {
    layout:
      'Section with a 1280px container (24px side padding, 32px from 1024px). Header: from 1024px a 12-column grid with the h2 in columns 1–7 and, bottom-aligned in columns 9–12, the intro paragraph and a text link 20px below it; below 1024px they stack 24px apart. The features are a <ul> of six items in a grid with 48px column gaps and 56px row gaps, 64px under the header. Each <li> has a 1px top rule. A flex row is pulled up 22px so it sits centred on that rule: a 44px icon tile at the left and the plan label (All plans, Growth and Scale, Scale only) at the right. Below it come the h3 (24px down) and a short description (8px down).',
    style:
      'White background, slate-950 text, Libre Franklin throughout. h2: semibold, -0.03em tracking, 1.05 line height, balanced lines. Intro: 18px slate-600. Link: 15px semibold blue-700 with a 2px blue-700/30 underline offset 0.3em and a 16px arrow. Rules: 1px slate-200. Icon tiles: 44px square, 12px radius, blue-50 fill and an inset 1px blue-700/15 ring, holding a 24px icon drawn in 1.5px round-capped blue-700 strokes plus one blue-700 shape at 20% opacity (a duotone set: flow, cards, receipt, pie chart, clipboard, sync arrows). Plan labels: 13px medium slate-500 on white with 12px left padding, so the rule appears to stop at the label. h3: 18px semibold, -0.01em. Descriptions: 15px slate-600, 1.625 line height.',
    states:
      'Only the link is interactive. On hover its underline turns solid blue-700 and the arrow moves 2px right (150ms). On keyboard focus it shows a 2px blue-700 outline offset 4px, with a 4px radius.',
    responsive:
      'Feature grid: one column below 640px, two from 640px, three from 1024px; the row gap grows from 56px to 64px and the gap under the header from 64px to 96px at 1024px. h2: 36px, 48px from 640px, 56px from 1024px. Vertical padding: 80px, 96px from 640px, 112px from 1024px. The header changes from stacked to the 7 + 4 column split at 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
