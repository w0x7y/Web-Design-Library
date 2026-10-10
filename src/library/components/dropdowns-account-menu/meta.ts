import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-account-menu',
  name: 'Dropdowns — Account menu',
  category: 'dropdowns',
  tags: ['corporate', 'dark'],
  description:
    'A dark native account disclosure with a profile summary, navigation links and a separate sign-out action.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide native details disclosure with 16px padding, initially open. Its flex summary has a 44px avatar, account name and plan, 12px gaps and an auto-aligned 16px chevron. A navigation region begins after 16px with a top divider and 12px top padding. Three 36px links have 8px horizontal padding, 16px icons and 12px icon gaps; list rows are 4px apart. A separate sign-out region has a top divider, 12px top margin and padding, and a full-width 36px action.',
    style:
      'Default sans font on slate-950 with slate-100 text, a 1px slate-700 border and 16px outer radius. The circular initials avatar uses cyan-200 fill and 14px semibold slate-950 text. Account name is 14px semibold with 20px line height; plan is 10px slate-400 with a 2px top margin. Summary, links and sign-out have 8px radii. Link labels are 12px with 16px line height; icons and chevron use slate-400, while the 14px external-link icon uses slate-500. Dividers use slate-800. The sign-out label uses rose-300. No shadows.',
    states:
      'The summary opens and closes through native pointer, Enter and Space behaviour, rotating the chevron 180 degrees while open. Links and sign-out fill slate-800 on hover. Every control has a 2px lime-300 keyboard-focus outline with 2px offset, retained by forced-colors mode. Styled navigation retains list semantics through role=list. No transitions or animation.',
    responsive:
      'The disclosure stays 288px wide at 320px, 390px, 768px and 1440px with the same stacked arrangement. No breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
