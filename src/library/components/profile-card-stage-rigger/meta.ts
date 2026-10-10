import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-stage-rigger',
  name: 'Stage rigger credential grid',
  category: 'profile-card',
  tags: ['brutalist', 'light'],
  description:
    'A hard-bordered credential card for a Loadstone Rigging stage rigger with rope-access level and project scope. Use it in live-production crew directories.',
  preview: { kind: 'element' },
  fonts: ['Space Mono:wght@400;700'],
  brief: {
    layout:
      'A 288px article with a 2px zinc-950 border. A 12px-padded brand header leads into a two-column identity grid with a 72px credential column and a flexible 16px-padded name region. A 12px-padded definition list has two divided rows. A bottom contact link has 16px padding and a 2px top border.',
    style:
      'Space Mono on zinc-100 with zinc-950 text. Grid boundaries are 2px zinc-950, inner fact rules 1px zinc-400. Credential L3 is 36px bold red-700 with 1 line height, name 18px bold at 24px line height. Brand and labels are 10px uppercase; body and contact link 12px. All corners square, no shadows.',
    states:
      'Links have a 2px red-700 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the contact link fills zinc-950 and switches to zinc-100 text. No animation or transitions.',
    responsive:
      'At 640px the article widens from 288px to 320px. The 72px credential column, padding and type sizes stay fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
