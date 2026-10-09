import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-developer-console',
  name: 'Developer console access',
  category: 'login',
  tags: ['dark', 'brutalist'],
  description:
    'A terminal-inspired sign-in with a service status rail. Use it for developer tools and infrastructure consoles.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A section with 48px vertical padding and a centered 1024px grid. Product identity, 36px heading, 384px-wide description and a status rail sit opposite a 24px-padded bordered form. Columns have a 40px gap; the form has 20px gaps and labels have 8px gaps.',
    style:
      'Neutral-950 background, neutral-100 system monospace text, neutral-400 supporting text and neutral-700 form border. Lime-300 status rail and square submit button. Square inputs have 1px current-color borders at 60%, 12px horizontal and 10px vertical padding. Heading is medium, 40px line height and -0.025em tracking; labels are 14px and status copy 12px. Submit includes a decorative 14px inline SVG arrow 8px after the label. No shadows.',
    states:
      'Email and current-password fields are required and use native validation. Inputs and recovery link have 2px current-color keyboard outlines offset 2px; submit uses lime-300. No authored hover states, transitions or automatic motion.',
    responsive:
      'Below 768px the grid is one column. At 768px it becomes two equal columns. Outer horizontal padding is 24px below 640px and 48px from 640px; vertical padding remains 48px. Inputs shrink within their column at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
