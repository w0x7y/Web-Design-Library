import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-project-pod',
  name: 'Project delivery pod',
  category: 'team',
  tags: ['brutalist', 'light'],
  description:
    'A sharply ruled team map that connects four project stages to their owners. Use it in project briefs and agency delivery pages where responsibilities matter.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px maximum-width section with 24px horizontal and 64px vertical padding. A 4px top rule and project metadata lead into a large heading. Four stage cards form a 2px framed grid, each with stage number, shape, 24px owner name and description; a project-method link sits below.',
    style:
      'Square corners, white background, black rules and heavy system sans. The design-owner tile is yellow-300. Monospace stage labels contrast with bold names. Secondary descriptions use neutral-600 except on yellow, where text is black.',
    states:
      'The method link reverses from black with white text to white with black text on hover. It has a 2px black focus outline offset by 2px. Decorative geometric stage markers are hidden from assistive technology.',
    responsive:
      'Stages stack at 320px, form two columns at 640px and four columns at 1024px. The heading is 36px, growing to 60px at 640px; stage text wraps freely within equal columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
