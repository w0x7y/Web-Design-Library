import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-roster-contact-table',
  name: 'Team — Team roster as a contact table',
  category: 'team',
  tags: ['table', 'list', 'compact'],
  description:
    'A compact semantic table aligns names, roles, focus areas and individual email links.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│Name              Role           Focus          Contact   │
│Alex Rivera       Role title     Focus area     [Email]   │
│Jamie Quinn       Role title     Focus area     [Email]   │
│Morgan Chen       Role title     Focus area     [Email]   │
│Taylor Brooks     Role title     Focus area     [Email]   │
│Sam Patel         Role title     Focus area     [Email]   │
│Riley Morgan      Role title     Focus area     [Email]   │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section places a full-width table 40px below its introduction. Four equal fixed columns use 12px cell padding and 1px row borders. The header has neutral-50 fill and a caption appears above it.',
    hierarchy:
      'The heading introduces the directory, followed by names, responsibilities and contact routes. Keep roles and focus areas under 3 words. Each email link includes the member name in its accessible label.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The table stays within the viewport using table-fixed and wrapping text. Cell type changes from 12px to 14px at 640px; all four columns remain available at 320px.',
    usage:
      'Use for a dense team contact directory. Pick portrait cards when people need longer introductions. Variations: replace focus with time zone, show an availability column, or link names to full profiles.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
