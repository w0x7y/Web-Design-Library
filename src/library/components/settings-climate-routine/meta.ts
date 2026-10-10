import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-climate-routine',
  name: 'Thermostat comfort routine',
  category: 'settings',
  tags: ['gradient', 'light', 'has-image'],
  description:
    'A warm thermostat routine for Morrowheat, pairing a living-room photograph with current temperature and weekday comfort controls. Use it in connected-home settings.',
  preview: { kind: 'section' },
  fonts: ['DM Sans:wght@400..700'],
  brief: {
    layout:
      '1280px container with 36px title; a 4:3 living-room photo accompanies a frosted routine panel after 32px. Current temperature uses a 112px outlined dial beside the mode name. Fields have 20px gaps.',
    style:
      'DM Sans with #4b2f25 ink on a 120deg oklab peach gradient from #f7e3d5 through #f4cbb5 to #ead7bd. 24px panel and photo radii, 60% white panel with 24px blur, #8a3f2e 4px dial and button.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation.',
    responsive:
      'At 640px heading becomes 48px, panel padding 32px and outer padding 32px. At 1024px photograph and controls become 1:1.15 columns with 48px gap. On phones they stack, with photo above routine.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
