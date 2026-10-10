import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-room-turnover',
  name: 'Badges — Room turnover',
  category: 'badges',
  tags: ['minimal', 'light'],
  description:
    'Keyfold housekeeping badges pair a room identifier with native inspection checklist chips. Use them on room-turnover boards and hotel service records.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px card with 20px padding, 1px border and 8px radius. A 12px brand sits above a two-column room identity: a 96px-wide outlined plate with a 30px room number, and a wing label. A static Vacant status follows after 16px. Two full-width checkbox badge rows sit in a fieldset after 20px with 8px gaps.',
    style:
      'Default sans, neutral-50 background, neutral-950 ink and neutral-400 outer border. Room plate has neutral-500 borders and 12px uppercase metadata. Vacant badge is neutral-950 with white text and a 4px radius. Checklist chips have neutral-500 borders, 6px radii and 12px labels. Checked chips use neutral-200; checkboxes remain native with neutral-950 accent.',
    states:
      'Clicking or pressing Space on a labelled native checkbox toggles its inspection state and the parent chip fill through :has(:checked). Hover-capable devices give labels neutral-200 fill. Each checkbox has a 2px current-colour focus outline offset 2px; labels name Room 407. Associated hint explains when to tick each check. No animation.',
    responsive:
      'Below 640px the element is 288px wide. At 640px it becomes 352px wide. Internal badge sizes remain unchanged; wrapping rows use their available width. No other breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
