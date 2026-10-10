import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-learning-journal',
  name: 'Learning progress dashboard',
  category: 'dashboard',
  tags: ['playful', 'light'],
  description:
    'A learning dashboard with course progress, weekly practice and the next lesson. Use it for a creative learning platform.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A 1024px-wide journal with 40px vertical and 24px horizontal padding. The wrapping header has 16px gaps, a greeting with 12px gap and a week pill with 8px vertical and 16px horizontal padding. Main cards follow after 32px with 24px gaps. The lesson card has 24px padding, a course chip, 24px title, 14px body at 24px line height, a 12px-high native progress showing 6 of 8 lessons and a 44px action. Practice and habit cards stack with 20px gaps and 24px padding.',
    style:
      'Default sans font, orange-50 canvas, orange-950 ink, orange-800 12px bold tracked eyebrow and progress fill. White lesson card, orange-200 practice card and 2px orange-200 lesson/habit borders; all cards have 16px radii. The 36px bold greeting has 40px line height and -0.025em tracking. Orange-900 body and pill button with 14px bold white text. The 30px semibold practice metric uses tabular figures; labels and hints have 70% opacity. No shadow.',
    states:
      'The continue-learning button has a pointer cursor, orange-800 hover fill on hover-capable devices and a 2px stone-950 keyboard focus outline offset by 2px. The native progress has the accessible name Course lesson progress, a 12px-high rounded orange-100 track and orange-800 fill. The fill uses the system Highlight color in forced-colors mode. No animation.',
    responsive:
      'Main panels stack below 768px and split 1.3fr/1fr above. Outer padding is 24px then 48px at 640px. All copy wraps and the progress track fills only its panel width.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
