import type { ComponentMeta } from '../../types'

export default {
  slug: 'data-table-trial-enrolment',
  name: 'Clinical trial enrolment',
  category: 'data-table',
  tags: ['corporate', 'light'],
  description:
    'A clinical-trial recruitment table for Cohortlane with a study sidebar, aggregate site counts and labelled target bars. Use it to compare enrolment across research centres.',
  preview: { kind: 'section' },
  fonts: ['Manrope:wght@400;500;600;700'],
  brief: {
    layout:
      '1280px max container with a header and outlined export link. Below, a 256px study sidebar and flexible four-column site table form a grid at 1024px with 32px gap. Sidebar holds study ID, enrolled total and next review; table holds four sites and recruitment bars.',
    style:
      'Manrope with white background, blue-950 text, slate-600 secondary copy, slate-200 rules and a sky-50 sidebar with 16px corners and 24px padding. Headline 32px then 44px at 768px, enrolment total 48px. Bars are 128px by 6px with blue-700 fill; written counts provide the meaning.',
    states:
      'Export and overview links have visible 2px currentColor keyboard outlines offset 2px and underlines on hover. Progress graphics are aria-hidden because adjacent text gives enrolled and target counts. No animation.',
    responsive:
      'Study panel stacks above the table below 1024px. Below 768px each site spans a two-column record with visible column labels and wrapping text. At 768px a conventional table appears and section padding grows from 20px to 40px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
