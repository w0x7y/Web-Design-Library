import type { ComponentMeta } from '../../types'

export default {
  slug: 'navbar-app-tabs',
  name: 'Navbar — App header with tabs',
  category: 'navbar',
  tags: ['stacked', 'row', 'compact'],
  description:
    'Breadcrumbs, a project toolbar and page links form an app header. The native account menu opens above an independently scrolling mobile tab strip.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│ Workspace / Projects / Current project                       │
│ ──────────────────────────────────────────────────────────── │
│ Logo  Project name [Active]              [Find] [Bell] [AR]  │
│                                          ┌────────────────┐  │
│ Overview Activity Files Members Settings │ Profile        │  │
│ ──────────────────────────────────────── │ Preferences    │  │
│                                          │ Sign out       │  │
│                                          └────────────────┘  │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A white header reserves 288px (min-h-72) for the open account panel. Its 1280px max-w-7xl container has 24px side padding. A 12px breadcrumb row has 12px vertical padding; the 56px toolbar puts identity left and three 40px utilities right. The account card is 192px wide, absolute 8px below the avatar, right aligned, with rounded-lg border, shadow-lg and 8px padding. Five tabs have 12px horizontal and 16px vertical padding above a neutral-200 bottom hairline.',
    hierarchy:
      'Read breadcrumbs, 14px project name and badge, then five links. Overview has aria-current and a 2px neutral-900 bottom border. Account summary names Alex Rivera; AR is decorative. Limit project names to 5 words, tabs to 1 word and account links to 2.',
    states:
      'Text links hover from neutral-900 to neutral-600. Account details starts open with Profile, Preferences and Sign out. Icon controls and account links fill neutral-50 on hover. Current tab uses a border visible in forced colours. The scrolling region is focusable and labelled. Every enabled control has a 2px neutral-900 focus outline offset 2px. There are no disabled controls.',
    responsive:
      'Below 640px project name truncates at 96px and the badge hides; tabs keep intrinsic widths in an overflow-x-auto strip with vertical space for outlines. At 640px the project name expands to 256px and the badge returns.',
    usage:
      'Use for app pages with global utilities and local navigation. Choose navbar-links-actions for a public website. Variations: change the current tab, replace project status, or shorten the account menu.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
