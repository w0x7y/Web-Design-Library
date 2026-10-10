import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-model-handoff',
  name: 'Toggles — Model-making handoff',
  category: 'toggles',
  tags: ['corporate', 'glass', 'gradient', 'light'],
  description:
    'A Scalework model-making studio handoff panel with a maquette drawing, project scale and independent gallery and archive switches. Use it to prepare a finished model for client review.',
  preview: { kind: 'element' },
  fonts: [],
  brief: {
    layout:
      'A 288px panel with 20px padding. A 10px eyebrow precedes a 48px architectural maquette SVG beside a 20px title and 12px project-and-scale line, with a 12px gap and 16px top margin. A frosted sharing card follows after 20px with 16px padding and two switch rows 16px apart. An 11px note finishes the panel after 16px.',
    style:
      'Default sans, amber-950 main text and amber-900 details. Diagonal amber-50 to orange-200 gradient in oklab, 16px outer radius and 1px amber-700 border. Inner glass has white 70% fill, 8px backdrop blur, 12px corners and 1px amber-900 border at 40%. Maquette uses amber-900 1.5px strokes and round joins. Title is 20px semibold at 24px leading; labels are 12px semibold and hints 12px at 16px leading. Switches have amber-900 checked tracks and white thumbs; unchecked tracks are white with amber-800 borders and thumbs. No shadow.',
    states:
      'Client gallery starts on; Build archive starts off. Native checkboxes have role=switch and linked descriptions. Tracks are 44×24px with 2px borders and 16px thumbs that move 20px when checked. Hover opacity is 80%; focus-visible draws a 2px amber-900 outline offset 2px. Forced colours preserve ButtonText borders and CanvasText thumbs. The maquette SVG is aria-hidden. No animation.',
    responsive:
      'Fixed 288px width below 640px and 320px from 640px. Content order, padding, SVG and switch sizes and type remain unchanged and fit within the 384px-high element frame.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
