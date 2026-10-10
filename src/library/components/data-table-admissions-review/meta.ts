import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-admissions-review',
  name: 'University admissions review',
  category: 'data-table',
  tags: ['minimal', 'light'],
  description:
    'A minimal university admissions workspace for Meridian Gate, with faculty navigation, labelled application-selection checkboxes and written document status. Use it for an admissions review queue.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'White 1280px section with headline and review-guidelines link. At 1024px a 192px faculty navigation rail sits left of a four-column application table with a 40px gutter. Applicant cells contain native 16px checkboxes and application IDs. A ruled status line precedes the table.',
    style:
      'Default sans stack, neutral-950 main text, neutral-600 notes and neutral-200 table rules. No cards, shadows or decorative icons. Headline 32px at 1.15 line height then 44px at 768px. Table is 14px with 20px line height and 20px vertical cell padding on desktop.',
    states:
      'Checkboxes change their native checked state, have unique applicant labels and visible 2px currentColor focus-visible outlines offset 2px. Every faculty and guidelines link also has this keyboard outline; the active faculty is marked aria-current. No animation or scripted selection actions.',
    responsive:
      'Faculty links wrap into a horizontal row below 1024px. Table records become a two-column grid below 768px, with the applicant spanning both columns and visible field labels. Section padding grows from 20px to 40px at 768px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
