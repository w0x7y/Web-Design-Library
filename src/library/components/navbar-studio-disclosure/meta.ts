import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-studio-disclosure',
  name: 'Studio disclosure navigation',
  category: 'navbar',
  tags: ['minimal', 'light'],
  description:
    'A restrained studio header with a native services disclosure and prominent project enquiry link. Use it for small agencies and independent studios.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px main row places a 24px wordmark on the left and four controls on the right. Native details reveals a bordered services list in normal document flow below its summary. Main padding is 24px.',
    style:
      'White canvas, zinc-950 text, zinc-200 borders and an indigo-700 pill enquiry action. The services disclosure uses a plus symbol, 14px links and 12px uppercase supporting text.',
    states:
      'Links have a visible 2px outline with 2px offset on keyboard focus. Hover changes the background or underlines text without moving the layout. No animated transitions.',
    responsive:
      'Header stacks on phones and becomes a single row at 768px. Navigation controls wrap. Expanded services remain in normal flow to keep the section within its capture bounds.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
