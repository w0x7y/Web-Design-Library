import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-inbox-views',
  name: 'Tabs — Inbox views',
  category: 'tabs',
  tags: ['minimal', 'light'],
  description:
    'A segmented radio filter for a shared inbox with separate message lists for all, unread and assigned views.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide inbox card with 16px padding. A flex header holds an 18px title and a new-message pill. After 16px, a three-column grid presents 36px radio choices. Each view shows two message previews with 16px vertical padding, separated by slate-100 hairlines. The All view adds 32px avatars, a 12px gap and a 6px unread dot.',
    style:
      'Default sans font on white with slate-900 text, a 1px slate-200 border and 16px outer radius. Tabs are 12px slate-500; selection is semibold violet-800 with a 2px violet-700 underline. The badge is 10px medium violet-800 on violet-100 with 4px by 8px padding and a full radius. Avatars use violet-100/violet-800 or sky-100/sky-800 with 12px semibold initials. Message subjects are 12px semibold with 16px line height; sender lines are 10px slate-500 with a 4px top margin.',
    states:
      'All is selected initially. Native radios and arrow keys switch among All, Unread and Assigned sample lists with :has. Labels turn violet-50 on hover. Keyboard focus shows a 2px slate-900 outline offset 2px around the label. Hidden inputs use focus-visible:outline-hidden with a transparent 2px forced-colors fallback. Selected tabs retain their underline in forced colours and the unread dot uses CanvasText. No animation.',
    responsive:
      'The card stays 288px wide at 320px, 390px, 768px and 1440px. All three choices stay in one row and message text wraps within the card. No breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
