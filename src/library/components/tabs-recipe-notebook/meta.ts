import type { ComponentMeta } from '../../types'

export default {
  slug: 'tabs-recipe-notebook',
  name: 'Tabs — Recipe notebook',
  category: 'tabs',
  tags: ['editorial', 'light'],
  description:
    'Two functional notebook-style radio tabs for a recipe ingredient list and cooking method.',
  preview: {
    kind: 'element',
  },
  fonts: [],
  brief: {
    layout:
      'A 288px-wide square notebook with 20px padding. A kitchen eyebrow, 24px title and serving summary precede two equal-width 36px radio tabs with a bottom rule, separated from the header by 20px. The selected panel starts 16px below. Ingredients has an 18px serif heading and four rows with names left and quantities right; Method has the same heading and two numbered paragraphs.',
    style:
      'Default sans font with system serif headings and system monospace 10px quantities. Amber-50 paper, a 1px amber-200 border and stone-800 text. The 9px uppercase eyebrow has 0.2em tracking. The 10px serving line uses stone-600. Tabs and ingredient names are 12px with 16px line height; checked tabs have a 2px emerald-800 bottom border and semibold type. Ingredient rows have 8px vertical padding and stone-200 dividers except on the last row. Method uses 12px text, 20px line height and 12px paragraph gaps. There are no radii or shadows.',
    states:
      'Ingredients is selected initially. Native radios and arrow keys switch ingredients and method via :has. Keyboard focus gives the label a 2px slate-900 outline offset 2px; the hidden input uses focus-visible:outline-hidden and a transparent 2px forced-colors fallback. The selected bottom border persists in forced colours. No hover changes or animation.',
    responsive:
      'The notebook remains 288px wide at 320px, 390px, 768px and 1440px. Keep two tabs side by side and allow method paragraphs to wrap. There are no breakpoint changes.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
