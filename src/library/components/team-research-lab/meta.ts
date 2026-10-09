import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-research-lab',
  name: 'Research lab team',
  category: 'team',
  tags: ['corporate', 'light'],
  description:
    'A research team section with a featured principal investigator and compact colleague directory. Use it for labs, policy groups and specialist organizations.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'Full-width slate-50 section with a centered 1024px container, 24px horizontal and 64px vertical padding. Header is limited to 672px. Title follows eyebrow after 12px, introduction after 16px. Team grid follows after 40px with 20px gap, a featured investigator and a three-person roster. Feature has 24px padding, a wrapping top row with fixed 64px avatar and role badge separated by 16px, name after 24px, specialty after 4px, biography after 20px and research link after 24px. White roster has 24px side padding and 24px vertical row padding with 16px gaps between fixed 44px avatars and text.',
    style:
      'Default sans, slate-900 primary text and slate-600 introduction and roster roles. Eyebrow is 12px semibold uppercase teal-800 at 0.16em tracking. Heading is 30px semibold with 36px line height and -0.025em tracking; intro 16px with 28px line height. Both cards have 16px corners; roster has 1px slate-200 frame and dividers. Feature is teal-950, its avatar teal-900 with teal-700 border, 12px corners and 30px system-serif initials. Role badge has a teal-700 border, pill corners, 12px teal-100 text and 12px horizontal, 4px vertical padding. Feature name is 24px semibold white; specialty 14px teal-200; biography 14px teal-100 with 28px line height. Roster avatars pair teal-50/teal-900, indigo-50/indigo-900 and amber-50/amber-900. Names are 16px semibold, roles 14px with 20px line height, project links 12px medium after 8px.',
    states:
      'Research links have 4px corners and underlines with 4px underline offset. Feature link is 14px medium white with an 8px gap to a 14px decorative arrow, changing to teal-200 on hover. Roster links change teal-800 to teal-950 on hover. Feature link has a 2px white focus outline, roster links a 2px teal-800 outline, all offset by 2px including in forced colours. No animation.',
    responsive:
      'Below 640px use 24px side and feature padding, 30px heading. At 640px side and feature padding becomes 32px and heading 36px with 40px line height. Cards stack below 768px; from 768px they use equal columns. The investigator badge wraps onto its own row when required while its avatar stays 64px wide. Roster text wraps beside fixed 44px avatars. Vertical section padding remains 64px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
