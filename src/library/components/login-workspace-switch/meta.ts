import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-workspace-switch',
  name: 'Workspace sign-in',
  category: 'login',
  tags: ['corporate', 'light'],
  description:
    'A business login paired with a workspace preview and security note. Use it for project management and team software.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1024px workspace login split between a pale project preview and a vertically centered form with two fields. Three stacked project rows use numbered 36px markers.',
    style:
      'White and slate-100 surfaces with slate-200 borders, slate-950 headings and a blue-700 primary action. Sans 36px product headline, 30px form title and 8px row radii.',
    states:
      'Native controls retain their browser behavior. Every link, input and button shows a 2px current-color keyboard focus outline offset by 2px. There is no automatic motion.',
    responsive:
      'Use 24px outer padding on phones and 48px at 640px. Desktop columns become a single readable column below 768px; controls stay within the 320px viewport.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
