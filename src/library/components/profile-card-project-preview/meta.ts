import type { ComponentMeta } from '../../types'

export default {
  slug: 'profile-card-project-preview',
  name: 'Profile cards — Identity and featured project',
  category: 'profile-card',
  tags: ['stacked', 'media', 'compact'],
  description:
    'A compact identity row sits above a wide project preview with a short caption and destination link.',
  preview: {
    kind: 'element',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Avatar  Alex Rivera / Role                                │
│                                                          │
│┌────────────────────────────────────────────────────┐    │
││Image                                               │    │
│└────────────────────────────────────────────────────┘    │
│Current project                                  [View]   │
│Short project description                                 │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A 288px card widens to 320px at 640px with 16px padding. The 40px identity row is followed after 16px by a 16:9 project figure. A caption beneath uses 12px spacing and aligns a short project title opposite its link.',
    hierarchy:
      'The person name and role lead before the featured project image and caption. Keep the role under 4 words, project title under 4 and summary under 10. The View link names the person and project in its accessible label.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'The fixed width steps preserve the 16:9 image. The caption text wraps within a flexible column while its short link stays at the end.',
    usage:
      'Use for people whose current work is the main reason to open their profile. Pick a text-only identity card for general directories. Variations: show a portfolio image, use a video thumbnail, or replace the caption summary with a project date.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
