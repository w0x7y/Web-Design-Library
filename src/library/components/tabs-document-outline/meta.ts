import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-document-outline',
  name: 'Tabs — Document outline',
  category: 'tabs',
  tags: ['corporate', 'light'],
  description:
    'A vertical native radio navigation for a project brief, switching between overview, milestones and owner details.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide panel with 16px padding. A 28px document tile and 14px title sit in a flex header with an 8px gap and 12px bottom padding. Below, a grid has a 72px radio rail, 12px gap and flexible content column. The rail has an 8px right inset and a divider. Three 36px-high choices switch overview, timeline and team sections. A separated update line sits 20px below the content.',
    style:
      'Default sans font, white background, slate-900 text, 1px slate-200 borders and 12px outer radius. Rail labels are 10px with 6px radii and 8px horizontal padding; checked labels use blue-50, blue-800 and semibold text. Section eyebrows and the footer are 9px slate-500; 14px semibold headings have 8px top margins. Body and lists are 11px slate-600 with 20px line height. Overview has a 9px emerald-800 badge on emerald-50 with 4px radius and 4px by 8px padding. Lists have 8px row gaps.',
    states:
      'Overview is selected initially. Native radio selection and arrow keys switch the visible section using :has. Unchecked labels turn slate-100 on hover; checked labels remain blue-50. Keyboard focus outlines the label in slate-900 at 2px with 2px offset. Hidden inputs use focus-visible:outline-hidden with a transparent 2px forced-colors fallback. Selection also uses semibold text so it survives forced colours. No animation.',
    responsive:
      'The root remains 288px wide at 320px, 390px, 768px and 1440px. The rail and content stay side by side; there are no breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
