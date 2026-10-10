import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-membership-categories',
  name: 'Membership topic FAQ',
  category: 'faq',
  tags: ['playful', 'light'],
  description:
    'A grouped membership FAQ with joining and participation topics in separate colored columns. Use it for community and club memberships.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1152px container uses 24px side and 80px vertical padding. A centered 576px header has a label and h2 separated by 16px. Two topic panels follow after 40px with a 24px gap. Each contains a topic label, a 24px heading 12px below, and two independent details rows. First rows start after 20px; summaries have 20px vertical padding and a 16px gap beside a nonshrinking plus. Answers have 20px bottom padding. A centered contact line follows after 28px.',
    style:
      'Violet-50 canvas, violet-950 ink, violet-100 joining panel and lime-100 participation panel. Panels have 24px radii and 24px padding, increasing to 32px at 640px. Eyebrows are 12px bold uppercase violet-700 with 0.1em header and 0.05em topic tracking. Main title is 36px bold, 1.25 line height and -0.025em tracking, increasing to 48px at 640px. Topic headings are 24px bold with 32px line height; summaries are 16px semibold; answers are 14px with 1.625 line height. Rows have 1px violet-200 bottom borders.',
    states:
      'All four native disclosures begin closed and can open independently. Decorative plus signs rotate 45 degrees when open. Summaries and the host contact link turn violet-700 on hover. Summaries show 2px violet-950 focus outlines; the underlined contact link has a 4px underline offset and 2px zinc-950 focus outline. All outlines have 2px offsets and remain visible in forced colors. No transitions.',
    responsive:
      'Topics stack below 768px and use two equal columns from 768px. At 640px the main title grows from 36px to 48px and panel padding from 24px to 32px. Summary text wraps beside the plus signs; horizontal container padding stays 24px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
