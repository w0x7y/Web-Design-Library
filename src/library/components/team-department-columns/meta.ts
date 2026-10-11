import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-department-columns',
  name: 'Team — Department columns with compact rosters',
  category: 'team',
  tags: ['grid', 'list', 'compact'],
  description:
    'Three equal department columns contain a short focus statement and small avatar rosters.',
  preview: {
    kind: 'section',
  },
  wireframe: `┌──────────────────────────────────────────────────────────┐
│Eyebrow / Heading / Introduction                          │
│                                                          │
│Leadership          Design              Engineering       │
│Group focus         Group focus         Group focus       │
│Avatar Name         Avatar Name         Avatar Name       │
│Role [Profile]      Role [Profile]      Role [Profile]    │
│Avatar Name         Avatar Name         Avatar Name       │
│Role [Profile]      Role [Profile]      Role [Profile]    │
└──────────────────────────────────────────────────────────┘`,
  brief: {
    layout:
      'A max-w-6xl section forms three equal department columns at 768px with 32px gaps. Each column starts with a top border and 24px padding, then a title, 14px focus statement and two member rows separated by 20px. Avatars are 40px.',
    hierarchy:
      'Read the section heading, department names and focus statements before names and roles. Keep department focus under 10 words, roles under 4 and names under 3. Every profile link includes its person in its accessible label.',
    states:
      'Links and buttons use neutral hover states and a 2px keyboard focus outline offset by 2px. Filled actions lighten from neutral-900 to neutral-700; outlined actions fill neutral-50. Informational regions remain static.',
    responsive:
      'Departments stack below 768px. Identity rows remain horizontal inside each column; profile links align beneath the identity copy.',
    usage:
      'Use when departmental grouping is the main way to scan a small team. Pick a flat portrait grid for one undivided group. Variations: add a third person to each department, show disciplines instead of departments, or put a shared contact link below each group.',
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
