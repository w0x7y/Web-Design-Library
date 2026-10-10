import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-call-floor',
  name: 'Call centre floor board',
  category: 'dashboard',
  tags: ['brutalist', 'dark'],
  description:
    'A call-centre dashboard with a twelve-position agent mosaic, queue readouts and an escalation disclosure. Use it for contact-floor supervision.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Mono:wght@400;500'],
  brief: {
    layout:
      '1280px inner container, 16px horizontal and 32px vertical padding. Two-pixel ruled header then a 24px-gapped body after 24px. The agent region has twelve position tiles with 12px padding, 14px IDs and 10px status words. A four-row definition ledger uses 20px padding, 12px labels and 30px tabular values. An amber escalation disclosure follows after 24px.',
    style:
      'IBM Plex Mono throughout, blue-950 canvas and cyan-50 text. Cyan-200 borders and on-call fills; on-call text is blue-950. Wrap positions have amber-200 borders/text; break position has a dashed cyan-200 border at 50%. Square corners, 1px rules between queue readouts, 2px escalation border and no shadows.',
    states:
      'Native escalation disclosure opens the case note. Its summary underlines on hover and shows a 2px current-color focus outline offset 2px. Every position has a written state, including READY and BREAK, so the mosaic does not depend on color. No animation.',
    responsive:
      'Below 640px the agent mosaic has three columns. At 640px it uses six, the header splits flexible title and timestamp, and outer horizontal padding becomes 32px. At 1024px agents and queue ledger split 1fr/0.7fr. Below they stack and all content fits at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
