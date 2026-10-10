import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-parachute-inspector',
  name: 'Parachute inspector credential',
  category: 'profile-card',
  tags: ['corporate', 'dark'],
  description:
    'A credential card for an Aerofold parachute inspector with equipment scope and a repack booking link. Use it in skydiving service and equipment-care directories.',
  preview: { kind: 'element' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      'A 288px article split into a 32px cyan ID rail and a flexible body with 20px padding. Brand, 24px name and 12px role precede a two-column credential list. A bordered scope strip follows by 16px, then an inspection link after 20px.',
    style:
      'IBM Plex Sans with slate-100 text on slate-900. Cyan-200 ID rail uses slate-950 vertical text; a 4px root radius keeps the credential restrained. Brand and list labels are 10px uppercase with 0.1em tracking. Name has 30px line height; body and actions are 12px. Slate-300 secondary copy and slate-500 borders, no shadow.',
    states:
      'Links have a 2px cyan-200 keyboard focus outline offset 2px, including forced-colors mode. On devices with hover, the inspection link turns white and underlines. No animation or transitions.',
    responsive:
      'At 640px the width steps from 288px to 320px. Rail remains 32px and body padding remains 20px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
