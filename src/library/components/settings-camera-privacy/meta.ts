import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-camera-privacy',
  name: 'Home camera privacy',
  category: 'settings',
  tags: ['minimal', 'glass', 'dark', 'has-image'],
  description:
    'A photo-led privacy configuration for Doorframe home cameras, with a masked preview area, event-clip retention and audio controls. Use it in device settings.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      '1280px container with 36px heading and 32px gap to a 4:3 camera-preview figure and privacy form. A 144×112px dashed private-zone marker overlays the image; a wrapping caption sits below. Form has 24px padding and 20px gaps.',
    style:
      'Default sans on #101d1b, #eef7ef headings and #b0c5b6 hints. Privacy form has 5% white fill, 24px backdrop blur, 12px radius and 1px #6f8777 border. #c6e8c9 action, 8px image radius, dark opaque caption and 90% dark mask keep text readable.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation. Native disclosure summaries reveal their explanatory paragraphs and close again without JavaScript.',
    responsive:
      'At 640px heading is 48px and outer padding 32px. At 1024px the feed and form become 1.4:1 columns with 40px gap. On phones the feed precedes the form; caption wraps and mask stays inside the photo.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
