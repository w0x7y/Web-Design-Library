import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-project-pod',
  name: 'Project delivery pod',
  category: 'team',
  tags: ['brutalist', 'light'],
  description:
    'A sharply ruled team map that connects four project stages to their owners. Use it in project briefs and agency delivery pages where responsibilities matter.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'Full-width section with a centered 1152px container, 24px horizontal and 64px vertical padding. Header has a 4px top rule and 20px top padding, a wrapping project metadata row with 12px gap, title after 24px and introduction after 20px limited to 576px. Ordered stage grid follows after 40px with 2px frame edges and 24px card padding. Each card has a stage label and geometric marker, name after 40px, role after 8px and biography after 16px. Method link follows after 32px with 16px horizontal and 12px vertical padding.',
    style:
      'Square corners, white background, black rules and default sans. Design stage is yellow-300. Heading is 36px weight 900 with 1.25 line height and -0.025em tracking, names 24px bold with 32px line height, roles 14px medium with 20px line height. Introduction is 14px neutral-600 with 28px line height; biographies 14px neutral-600 with 24px line height except black on yellow. Metadata is 12px uppercase monospace with 0.05em tracking; stage labels are 12px monospace. Markers are black 12px square, circle, 45-degree diamond and 4px-wide bar. Method link is black with a 2px black border, 12px bold uppercase white text at 0.05em tracking and 14px decorative arrow after a 12px gap.',
    states:
      'The method link reverses from black with white text to white with black text on hover. It has a 2px black focus outline offset by 2px. Decorative geometric stage markers are hidden from assistive technology.',
    responsive:
      'Below 640px stages stack, side padding is 24px and heading 36px. From 640px use two equal columns, 32px side padding and a 60px heading with 1.25 line height. From 1024px use four equal columns. Vertical padding stays 64px. Metadata wraps and stage text wraps within the equal columns.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
