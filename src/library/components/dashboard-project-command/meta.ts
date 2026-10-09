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
      'A 1152px team dashboard with project header, three summary panels, milestone list and contrasting meeting agenda panel.',
    style:
      'Slate-50 background, white 12px-radius cards, slate-200 borders and blue-700 meeting panel. 30px heading and 30px tabular metrics, 14px milestone copy.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Summary panels stack below 768px; milestones and meeting stack below 1024px, then split 1.5fr/1fr. Headings and action wrap within 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
