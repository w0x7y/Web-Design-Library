import type { ComponentMeta } from '../../types'

export default {
  slug: 'buttons-puppet-rehearsal',
  name: 'Buttons — Puppet cues',
  category: 'buttons',
  tags: ['playful', 'dark'],
  description:
    'Interlocking cue and scene-reset buttons for Little Pulley puppet theatre, with a separate prompt-book action.',
  preview: { kind: 'element' },
  fonts: ['Familjen Grotesk:wght@400;500;600;700'],
  brief: {
    layout:
      '288px panel with 20px padding. A 12px masthead precedes a 30px title after 16px and a 12px scene hint after 4px. Cue row sits 20px below; two 80px blocks use 3:2 flex proportions, with the reset block offset down 20px. Each stacks an 18px label and 12px cue note with 4px gap. A full-width prompt-book action follows after 20px with a bottom rule and 8px bottom padding.',
    style:
      'Familjen Grotesk; emerald-950 panel with 16px radius, amber-100 text and emerald-200 scene hint. Cue block is amber-200; reset is pink-200, both with emerald-950 text. Their complementary 24px corner radii produce an interlocking silhouette. Prompt action has a 1px emerald-300 bottom rule. No shadows.',
    states:
      'Cue fills amber-100 on hover; reset fills pink-100; prompt text turns white. All controls show 2px amber-200 keyboard outlines offset 2px. Reset has the explicit accessible name Reset scene 3. No animation.',
    responsive:
      '288px below 640px; 368px from 640px. Cue blocks grow horizontally in a 3:2 ratio while their heights and 20px stagger remain fixed.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
