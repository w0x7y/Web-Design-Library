import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-map-defaults',
  name: 'GIS project defaults',
  category: 'settings',
  tags: ['minimal', 'light'],
  description:
    'A GIS defaults page for Gridparcel, with a drawn parcel map, coordinate system and units selectors, and native export-format radios. Use it in mapping-project preferences.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      '1280px section, 36px heading and two regions after 32px. A 600×450 SVG example map sits above a white caption strip; coordinate selectors and an export fieldset align to the top with 24px gaps. Footer follows after 32px.',
    style:
      'IBM Plex Sans on #f7faf6, #223d2b ink, #526655 hints and #356c42 action. 8px map radius, 1px #bbcabd outlines, pale #e4eddd grid with green plots, blue water and ochre selected parcel. No shadows.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. No animation. Export formats are a native radio group with one selected value.',
    responsive:
      'At 640px heading becomes 48px and outer side padding 32px. At 1024px map and fields become 1.1:1 columns with 48px gap. Below that the map precedes settings; format radios and footer wrap at 320px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
