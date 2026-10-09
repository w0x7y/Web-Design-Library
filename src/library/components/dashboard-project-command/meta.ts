import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-project-command',
  name: 'Project work dashboard',
  category: 'dashboard',
  tags: ['corporate', 'light'],
  description:
    'A project dashboard with weekly milestones, progress and an upcoming review. Use it for a design or product team’s home view.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px dashboard with 40px vertical and 24px horizontal padding. A wrapping project header uses 20px gaps, a greeting with 8px gap and a 42px brief button. Three summary cards follow after 28px with 20px gaps, 20px padding and 8px internal gaps. Milestone and meeting panels follow after 24px with 24px gaps and padding. The milestone list has 20px gaps, 32px markers and 12px marker-to-text gaps. The agenda link sits 24px below the meeting description.',
    style:
      'Default sans font, slate-50 canvas, slate-950 ink and white cards with 12px radii and 1px slate-200 borders. The 30px semibold greeting and metrics have 36px line height and -0.025em tracking; metrics use tabular figures. Slate-500 12px metadata, 14px milestone text and slate-100 marker fills. Blue-700 meeting panel with blue-100 details, a 24px semibold title and a white underlined link. The brief button has an 8px radius and a slate-300 border. No shadow.',
    states:
      'The brief button has a pointer cursor, slate-100 hover fill on hover-capable devices and a 2px stone-950 focus outline offset by 2px. The agenda link has a 4px underline offset and a 2px current-color focus outline offset by 2px. Decorative milestone markers are aria-hidden; the adjacent text communicates status. No animation.',
    responsive:
      'Summary cards stack below 768px and use three equal columns from 768px. Milestones and meeting stack below 1024px, then split 1.5fr/1fr. Horizontal padding increases from 24px to 48px at 640px. The header and its action wrap; all copy reflows within 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
